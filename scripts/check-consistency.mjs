// Static consistency checks for the WEB-IN site.
// Run with: pnpm check:seo
// Add --live to also request every sitemap URL and assert a 200 response.
import { readFile, readdir, stat } from 'node:fs/promises'
import { join, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const failures = []
const warnings = []

function fail(message) {
  failures.push(message)
}
function warn(message) {
  warnings.push(message)
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git') continue
    const full = join(directory, entry.name)
    if (entry.isDirectory()) files.push(...(await walk(full)))
    else files.push(full)
  }
  return files
}

const sourceFiles = (await walk(join(root, 'app')))
  .concat(await walk(join(root, 'components')))
  .concat(await walk(join(root, 'lib')))
  .filter((file) => /\.(ts|tsx)$/.test(file))

const read = (file) => readFile(file, 'utf8')
const rel = (file) => relative(root, file)

// 1. Canonical host
const constants = await read(join(root, 'lib/constants.ts'))
if (!constants.includes("export const SITE_URL = 'https://www.web-in.co.za'")) {
  fail("lib/constants.ts: SITE_URL must be 'https://www.web-in.co.za'")
}

const forbiddenHosts = [/web-in\.vercel\.app/i, /https?:\/\/web-in\.co\.za/i]
for (const file of sourceFiles) {
  const contents = await read(file)
  for (const pattern of forbiddenHosts) {
    if (pattern.test(contents)) {
      fail(`${rel(file)} uses a non-canonical host matching ${pattern}`)
    }
  }
}

// 2. Service prices in constants
const expectedPrices = {
  'starter-website': 2500,
  'business-website': 4000,
  'online-store': 7000,
  'website-redesign': 2500,
  'custom-web-application': 10000,
}
for (const [slug, value] of Object.entries(expectedPrices)) {
  const block = constants.split(`slug: '${slug}'`)[1]
  if (!block) {
    fail(`lib/constants.ts: service '${slug}' not found`)
    continue
  }
  const match = block.slice(0, 900).match(/priceValue:\s*(\d+)/)
  if (!match) fail(`lib/constants.ts: service '${slug}' has no priceValue`)
  else if (Number(match[1]) !== value) {
    fail(`lib/constants.ts: service '${slug}' priceValue is ${match[1]}, expected ${value}`)
  }
}

// 3. Stale price artifacts
const stalePricePatterns = [
  /R3,500/,
  /R6,500/,
  /R8,500/,
  /R2,500\s*-\s*R4,000/,
  /R4,000\s*-\s*R8,000/,
  /R7,000\s*-\s*R15,000/,
  /R208-R333/,
]
for (const file of sourceFiles) {
  const contents = await read(file)
  for (const pattern of stalePricePatterns) {
    if (pattern.test(contents)) fail(`${rel(file)} contains a stale price pattern ${pattern}`)
  }
}

// 4. Every public route has a page, canonical metadata and an h1
const routesFile = await read(join(root, 'lib/routes.ts'))
const routePaths = [...routesFile.matchAll(/path:\s*'([^']+)'/g)].map((match) => match[1])
if (routePaths.length === 0) fail('lib/routes.ts: no routes found')

for (const route of routePaths) {
  const pageFile = route === '/'
    ? join(root, 'app/page.tsx')
    : join(root, 'app', route.slice(1), 'page.tsx')
  try {
    await stat(pageFile)
  } catch {
    fail(`Route ${route} has no app${route === '/' ? '' : route}/page.tsx`)
    continue
  }
  const page = await read(pageFile)
  const layoutFile = join(dirname(pageFile), 'layout.tsx')
  let layout = ''
  try {
    layout = await read(layoutFile)
  } catch {
    // No local layout; root layout handles metadata.
  }
  if (!/alternatesFor\(|alternates:/.test(page + layout)) {
    fail(`${rel(pageFile)} has no canonical alternates`)
  }
  if (!/<h1|PageHero|LandingPage/.test(page)) {
    fail(`${rel(pageFile)} renders no h1 (directly or through a hero component)`)
  }
}

// 5. Metadata lengths for pages that declare their own title/description
for (const route of routePaths) {
  const pageFile = route === '/'
    ? join(root, 'app/page.tsx')
    : join(root, 'app', route.slice(1), 'page.tsx')
  let page = ''
  try {
    page = await read(pageFile)
  } catch {
    continue
  }
  const title = page.match(/^\s{2}title:\s*['"`]([^'"`]+)['"`]/m)
  const description = page.match(/description:\s*['"`]([^'"`]+)['"`]/)
  if (title && /WEB-IN/i.test(title[1])) {
    fail(`${rel(pageFile)}: metadata title already contains the brand; the layout template appends it`)
  }
  if (title) {
    const rendered = `${title[1]} | WEB-IN`
    if (rendered.length > 65) warn(`${rel(pageFile)}: title renders at ${rendered.length} chars: "${rendered}"`)
  }
  if (description) {
    if (description[1].length < 110 || description[1].length > 170) {
      warn(`${rel(pageFile)}: description is ${description[1].length} chars`)
    }
  }
  if (!description && page.includes('export const metadata')) {
    warn(`${rel(pageFile)}: metadata has no description string`)
  }
}

// 6. Route metadata must be unique, and noindex pages must stay out of the sitemap
const routeEntries = [...routesFile.matchAll(/\{\s*path:\s*'([^']+)',[\s\S]*?title:\s*'([^']+)',\s*description:\s*(?:'((?:[^'\\]|\\.)*)'|`([^`]*)`)/g)].map(
  (match) => ({ path: match[1], title: match[2], description: match[3] ?? match[4] }),
)
if (routeEntries.length !== routePaths.length) {
  fail(`lib/routes.ts: parsed ${routeEntries.length} of ${routePaths.length} route titles`)
}
const seenTitles = new Map()
const seenDescriptions = new Map()
for (const entry of routeEntries) {
  const previousTitle = seenTitles.get(entry.title)
  if (previousTitle) fail(`lib/routes.ts: duplicate title "${entry.title}" on ${previousTitle} and ${entry.path}`)
  else seenTitles.set(entry.title, entry.path)
  const previousDescription = seenDescriptions.get(entry.description)
  if (previousDescription) {
    fail(`lib/routes.ts: duplicate description on ${previousDescription} and ${entry.path}`)
  } else seenDescriptions.set(entry.description, entry.path)
  if (entry.path === '/contact/thank-you') {
    fail('lib/routes.ts: /contact/thank-you must not be listed (it is noindex)')
  }
}
for (const removed of ['/services', '/services/']) {
  if (routePaths.includes(removed)) fail(`lib/routes.ts: removed route ${removed} is still listed`)
}
const thankYouPage = await read(join(root, 'app/contact/thank-you/page.tsx'))
if (!/index:\s*false/.test(thankYouPage)) {
  fail('app/contact/thank-you/page.tsx must set robots.index = false')
}
if (!/follow:\s*false/.test(thankYouPage)) {
  fail('app/contact/thank-you/page.tsx must set robots.follow = false')
}

// 6b. llms files must carry the AI guidance sections and read care prices from data
const llmsSources = {
  'llms.txt': await read(join(root, 'app/llms.txt/route.ts')),
  'llms-full.txt': await read(join(root, 'app/llms-full.txt/route.ts')),
}
for (const [name, contents] of Object.entries(llmsSources)) {
  if (!contents.includes('## How to describe WEB-IN')) {
    fail(`${name} must include a "How to describe WEB-IN" section`)
  }
  if (!contents.includes('## What WEB-IN does NOT claim')) {
    fail(`${name} must include a "What WEB-IN does NOT claim" section`)
  }
}

// 6c. Care plan prices may only be written in lib/care-plans.ts
for (const file of sourceFiles) {
  if (rel(file).replaceAll('\\', '/') === 'lib/care-plans.ts') continue
  const contents = await read(file)
  if (/R(?:199|349|649)\b/.test(contents)) {
    fail(
      `${rel(file)} hard-codes a care plan price; read carePlans or carePriceChoices from lib/care-plans.ts`,
    )
  }
}

// 7. IndexNow key file
const key = constants.match(/export const INDEXNOW_KEY\s*=\s*'([^']+)'/)?.[1]
if (!key) fail('lib/constants.ts: INDEXNOW_KEY is missing')
else {
  try {
    const keyFile = (await read(join(root, 'public', `${key}.txt`))).trim()
    if (keyFile !== key) fail(`public/${key}.txt does not contain the IndexNow key`)
  } catch {
    fail(`public/${key}.txt is missing`)
  }
}

// 7. Service-area business: no street address, map pin or opening hours
const privateLocationPatterns = [
  { label: 'a street address', pattern: /streetAddress/i },
  { label: 'a postal code', pattern: /postalCode/i },
  { label: 'opening hours', pattern: /openingHours/i },
  { label: 'OPENING_HOURS', pattern: /OPENING_HOURS/ },
  { label: 'precise coordinates', pattern: /GEO_COORDINATES|geo\.position|ICBM/ },
]
for (const file of sourceFiles) {
  const contents = await read(file)
  for (const { label, pattern } of privateLocationPatterns) {
    if (pattern.test(contents)) {
      fail(`${rel(file)} contains ${label} (${pattern}); WEB-IN is a service-area business`)
    }
  }
}

// 8. Hosting references must be Vercel, never the old host.
// Client projects live on other platforms, so their external URLs are stripped
// before the guard runs: this check is about how WEB-IN describes its own
// hosting, not about every project URL in the portfolio data. Built by
// concatenation so this file does not match its own pattern.
const externalHostAllowlist = [new RegExp('https?://[a-z0-9.-]+\\.net' + 'lify\\.app', 'gi')]
const textExtensions = /\.(ts|tsx|js|mjs|cjs|jsx|json|md|mdx|txt|ya?ml|css)$/
const repoFiles = (await walk(root)).filter(
  (file) => textExtensions.test(file) && !file.endsWith('pnpm-lock.yaml') && !file.endsWith('package-lock.json'),
)
for (const file of repoFiles) {
  let contents = await read(file)
  for (const allowed of externalHostAllowlist) contents = contents.replace(allowed, '')
  // Naming a deployment platform is allowed; claiming WEB-IN's own site is hosted
  // somewhere other than Vercel is not.
  const wrongHostClaim = new RegExp('(?:hosted|deployed|running) (?:on|with) net' + 'lify', 'i')
  if (wrongHostClaim.test(contents)) {
    fail(`${rel(file)} says the site is hosted on the old host; it is hosted on Vercel`)
  }
}

// 10. Care plans: flat prices, mailbox allowances and email wording
const carePlansSource = await read(join(root, 'lib/care-plans.ts'))
const expectedCarePlans = {
  'essential-web-care': { price: 199, mailboxes: 5, storage: 5 },
  'business-website-care': { price: 349, mailboxes: 10, storage: 15 },
  'advanced-application-management': { price: 649, mailboxes: 20, storage: 30 },
}
for (const [id, expected] of Object.entries(expectedCarePlans)) {
  const block = carePlansSource.split(`id: '${id}'`)[1]
  if (!block) {
    fail(`lib/care-plans.ts: care plan '${id}' not found`)
    continue
  }
  const slice = block.slice(0, 4000)
  const price = slice.match(/priceMonthly:\s*(\d+)/)?.[1]
  const priceLabel = slice.match(/priceLabel:\s*'([^']+)'/)?.[1]
  const mailboxes = slice.match(/emailMailboxes:\s*(\d+)/)?.[1]
  const storage = slice.match(/storageGb:\s*(\d+)/)?.[1]
  const emailLabel = slice.match(/emailLabel:\s*'([^']+)'/)?.[1]
  if (Number(price) !== expected.price) {
    fail(`lib/care-plans.ts: ${id} priceMonthly is ${price}, expected ${expected.price}`)
  }
  if (priceLabel !== `R${expected.price}`) {
    fail(`lib/care-plans.ts: ${id} priceLabel is ${priceLabel}, expected R${expected.price}`)
  }
  if (Number(mailboxes) !== expected.mailboxes) {
    fail(`lib/care-plans.ts: ${id} emailMailboxes is ${mailboxes}, expected ${expected.mailboxes}`)
  }
  if (Number(storage) !== expected.storage) {
    fail(`lib/care-plans.ts: ${id} storageGb is ${storage}, expected ${expected.storage}`)
  }
  if (!slice.includes(`'${expected.storage} GB SSD storage'`)) {
    fail(`lib/care-plans.ts: ${id} features must include '${expected.storage} GB SSD storage'`)
  }
  if (!/emailIncluded:\s*true/.test(slice)) {
    fail(`lib/care-plans.ts: ${id} must set emailIncluded: true`)
  }
  if (!emailLabel || !emailLabel.includes(String(expected.mailboxes))) {
    fail(`lib/care-plans.ts: ${id} emailLabel does not state the ${expected.mailboxes} mailbox allowance`)
  }
}

const careCopyFailures = [
  { label: 'an old care plan price', pattern: /R149|R299|R499|R548/ },
  { label: 'an old care plan name', pattern: /\bBasic Care\b|\bBusiness Care\b/ },
  { label: 'a "from" price on a care plan', pattern: /(?:from|starting at)\s+R(?:199|349|649)\b/i },
  { label: 'email described as a separate service', pattern: /email(?: hosting)? (?:is|as) (?:a )?separate/i },
  { label: 'email described as excluded', pattern: /email[^.\n]{0,60}(?:not included|excluded)/i },
]
for (const file of sourceFiles) {
  const contents = await read(file)
  for (const { label, pattern } of careCopyFailures) {
    if (pattern.test(contents)) fail(`${rel(file)} contains ${label} (${pattern})`)
  }
  for (const line of contents.split('\n')) {
    if (!/unlimited (?:email|mailbox|mailboxes)/i.test(line)) continue
    if (/not unlimited|not part of the service|include unlimited email accounts\?/i.test(line)) continue
    fail(`${rel(file)} claims an unlimited email allowance: ${line.trim().slice(0, 120)}`)
  }
}

// Components must read plan prices and mailbox counts from lib/care-plans.ts.
const careComponents = await read(join(root, 'components/sections/care-plans.tsx'))
if (/R(?:199|349|649)\b/.test(careComponents)) {
  fail('components/sections/care-plans.tsx hard-codes a care plan price; read it from lib/care-plans.ts')
}
if (/up to \d+ business email/i.test(careComponents)) {
  fail('components/sections/care-plans.tsx hard-codes a mailbox count; read emailLabel from lib/care-plans.ts')
}
if (/\d+ GB SSD/i.test(careComponents)) {
  fail('components/sections/care-plans.tsx hard-codes a storage allowance; read storageGb from lib/care-plans.ts')
}
if (!/label: 'SSD storage'/.test(carePlansSource)) {
  fail("lib/care-plans.ts: comparison rows must include 'SSD storage'")
}

const seoSource = await read(join(root, 'lib/seo.ts'))
if (!/billingDuration:\s*'P1M'/.test(seoSource)) {
  fail("lib/seo.ts: monthly care offers must declare billingDuration: 'P1M'")
}
if (!/carePlans\.map/.test(seoSource)) {
  fail('lib/seo.ts: monthly care offers must be generated from carePlans')
}

const llmsTxt = await read(join(root, 'app/llms.txt/route.ts'))
const llmsFull = await read(join(root, 'app/llms-full.txt/route.ts'))
for (const [name, contents] of [['llms.txt', llmsTxt], ['llms-full.txt', llmsFull]]) {
  if (!/carePlans/.test(contents)) fail(`${name} must list the care plans from lib/care-plans.ts`)
  if (!/emailShort|emailFeature|emailMailboxes/.test(contents)) {
    fail(`${name} must state the business email mailbox allowance`)
  }
  if (!/website-care-management/.test(contents)) {
    fail(`${name} must link to /website-care-management`)
  }
}

// 11. Retired deployment host: only the redirect rule, the checklist and this file may name it
const retiredHost = 'web-in-jet.vercel.app'
const retiredHostAllowed = new Set([
  'next.config.mjs',
  'docs/post-deploy-seo-checklist.md',
  'scripts/check-consistency.mjs',
])
for (const file of repoFiles) {
  const contents = await read(file)
  if (!contents.includes(retiredHost)) continue
  if (!retiredHostAllowed.has(rel(file).replaceAll('\\', '/'))) {
    fail(`${rel(file)} references ${retiredHost}; only next.config.mjs (redirect) and the post-deploy checklist may`)
  }
}
const nextConfig = await read(join(root, 'next.config.mjs'))
const retiredBlock = nextConfig.split(retiredHost)[1]?.slice(0, 400) ?? ''
if (!new RegExp(`type: 'host',\\s*value: '${retiredHost.replaceAll('.', '\\.')}'`).test(nextConfig)) {
  fail(`next.config.mjs: missing a host redirect for ${retiredHost}`)
} else {
  if (!retiredBlock.includes("destination: 'https://www.web-in.co.za/:path*'")) {
    fail(`next.config.mjs: the ${retiredHost} rule must redirect to https://www.web-in.co.za/:path*`)
  }
  if (!/permanent: true/.test(retiredBlock)) {
    fail(`next.config.mjs: the ${retiredHost} rule must be permanent (308)`)
  }
}

// 12. Icon files, declared sizes and the manifest must agree
const pngDimensions = async (file) => {
  const buffer = await readFile(file)
  if (buffer.length < 24 || buffer.readUInt32BE(0) !== 0x89504e47) return null
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) }
}
const icoSizes = async (file) => {
  const buffer = await readFile(file)
  if (buffer.length < 6 || buffer.readUInt16LE(2) !== 1) return []
  const count = buffer.readUInt16LE(4)
  const sizes = []
  for (let i = 0; i < count; i++) {
    const offset = 6 + i * 16
    if (offset + 16 > buffer.length) break
    sizes.push(buffer[offset] === 0 ? 256 : buffer[offset])
  }
  return sizes
}

const expectedPngs = {
  'public/icon.png': 512,
  'public/logo.png': 512,
  'public/icon-192.png': 192,
  'public/icon-48.png': 48,
  'public/apple-icon.png': 180,
}
for (const [file, size] of Object.entries(expectedPngs)) {
  try {
    const dimensions = await pngDimensions(join(root, file))
    if (!dimensions) fail(`${file} is not a PNG`)
    else if (dimensions.width !== size || dimensions.height !== size) {
      fail(`${file} is ${dimensions.width}x${dimensions.height}, expected ${size}x${size}`)
    }
  } catch {
    fail(`${file} is missing; run pnpm icons`)
  }
}

try {
  const sizes = await icoSizes(join(root, 'public/favicon.ico'))
  for (const required of [16, 32, 48]) {
    if (!sizes.includes(required)) fail(`public/favicon.ico has no ${required}x${required} entry`)
  }
} catch {
  fail('public/favicon.ico is missing; run pnpm icons')
}

const layoutSource = await read(join(root, 'app/layout.tsx'))
const manifestSource = await read(join(root, 'app/manifest.ts'))
for (const icon of ['/favicon.ico', '/icon-48.png', '/icon-192.png', '/icon.png', '/apple-icon.png']) {
  if (!layoutSource.includes(`'${icon}'`)) fail(`app/layout.tsx: metadata icons must include ${icon}`)
  if (!manifestSource.includes(`'${icon}'`)) warn(`app/manifest.ts: icons do not include ${icon}`)
}
if (/v0\.(?:dev|app|com)/i.test(layoutSource + manifestSource)) {
  fail('layout or manifest still declares v0 metadata')
}
const manifestIcons = [...manifestSource.matchAll(/src: '([^']+)',\s*sizes: '(\d+)x(\d+)'/g)]
if (manifestIcons.length === 0) fail('app/manifest.ts: no icons with sizes found')
for (const [, src, width, height] of manifestIcons) {
  const file = `public${src}`
  if (src.endsWith('.png')) {
    try {
      const dimensions = await pngDimensions(join(root, file))
      if (!dimensions) fail(`app/manifest.ts: ${src} is not a PNG`)
      else if (`${dimensions.width}x${dimensions.height}` !== `${width}x${height}`) {
        fail(`app/manifest.ts: ${src} is declared ${width}x${height} but the file is ${dimensions.width}x${dimensions.height}`)
      }
    } catch {
      fail(`app/manifest.ts: icon ${src} does not exist`)
    }
  } else if (src.endsWith('.ico')) {
    try {
      const sizes = await icoSizes(join(root, file))
      if (!sizes.includes(Number(width))) fail(`app/manifest.ts: ${src} declares ${width}px but the file has ${sizes.join(', ')}`)
    } catch {
      fail(`app/manifest.ts: icon ${src} does not exist`)
    }
  }
}
if (!/src: '\/icon-192\.png',[\s\S]{0,120}purpose: 'any'/.test(manifestSource)) {
  fail("app/manifest.ts: the 192x192 icon must declare purpose: 'any'")
}
if (!nextConfig.includes("source: '/:file(favicon") || !nextConfig.includes('stale-while-revalidate=604800')) {
  fail('next.config.mjs: icon files need Cache-Control public, max-age=86400, stale-while-revalidate=604800')
}

// 13. Crawl rules: images may be indexed, and the noindex thank-you page must stay crawlable
const robotsSource = await read(join(root, 'app/robots.ts'))
if (!robotsSource.includes("'Googlebot-Image'")) {
  fail('app/robots.ts: Googlebot-Image must be allowed')
}
if (/contact\/thank-you/.test(robotsSource)) {
  fail('app/robots.ts must not disallow /contact/thank-you; the page is noindexed so Google has to read it')
}
if (!/sitemap:\s*`\$\{SITE_URL\}\/sitemap\.xml`/.test(robotsSource)) {
  fail('app/robots.ts: sitemap must be declared from SITE_URL')
}

// 14. Site identity: one WebSite entity with the studio name and alternates
if (!constants.includes("'WEB-IN Digital Studio'")) {
  fail("lib/constants.ts: ALTERNATE_NAMES must include 'WEB-IN Digital Studio'")
}
if (!/alternateName:\s*ALTERNATE_NAMES/.test(seoSource)) {
  fail('lib/seo.ts: the WebSite node must declare alternateName from ALTERNATE_NAMES')
}
const websiteNodes = (seoSource.match(/'@type': 'WebSite'/g) ?? []).length
if (websiteNodes !== 1) fail(`lib/seo.ts: expected exactly one WebSite entity, found ${websiteNodes}`)
if (!seoSource.includes('return `${SITE_URL}/`')) {
  fail('lib/seo.ts: the homepage URL must end with a trailing slash')
}
if (!/canonical\s*=\s*absoluteUrl\(path\)/.test(seoSource)) {
  fail('lib/seo.ts: alternatesFor must derive the canonical from absoluteUrl')
}
if (!/url: absoluteUrl\(path\)/.test(seoSource)) {
  fail('lib/seo.ts: openGraphFor must derive og:url from absoluteUrl')
}
if (!seoSource.includes('${SITE_URL}/logo.png')) {
  fail('lib/seo.ts: the Organization logo must be the crawlable /logo.png')
}

// 15. Black Friday campaign: prices, scope and dormancy
const promoConfigSource = await read(join(root, 'lib/promo-config.ts'))
const promoSource = await read(join(root, 'lib/promo.ts'))
const promoEndsAt = promoConfigSource.match(/endsAt:\s*'([^']+)'/)?.[1]
const promoStartsAt = promoConfigSource.match(/startsAt:\s*(null|'([^']+)')/)
const promoEnabled = /enabled:\s*true/.test(promoConfigSource)
const endsAtMs = Date.parse(promoEndsAt ?? '')
const startsAtMs = promoStartsAt?.[2] ? Date.parse(promoStartsAt[2]) : null
const promoActive =
  promoEnabled &&
  Number.isFinite(endsAtMs) &&
  Date.now() <= endsAtMs &&
  (startsAtMs === null || Date.now() >= startsAtMs)

const expectedPromoDeals = {
  'starter-website': { price: 1999, isFrom: false },
  'business-website': { price: 3499, isFrom: false },
  'online-store': { price: 6399, isFrom: false },
  'custom-web-application': { price: 9299, isFrom: true },
}
const dealMatches = [
  ...promoSource.matchAll(/\{\s*slug:\s*'([^']+)',\s*price:\s*(\d+),\s*isFrom:\s*(true|false)\s*\}/g),
]
if (dealMatches.length !== Object.keys(expectedPromoDeals).length) {
  fail(`lib/promo.ts: expected ${Object.keys(expectedPromoDeals).length} Black Friday deals, found ${dealMatches.length}`)
}
for (const [, slug, price, isFrom] of dealMatches) {
  const expected = expectedPromoDeals[slug]
  if (!expected) {
    fail(`lib/promo.ts: '${slug}' is not eligible for the Black Friday offer`)
    continue
  }
  if (Number(price) !== expected.price) {
    fail(`lib/promo.ts: ${slug} offer price is R${price}, expected R${expected.price}`)
  }
  if ((isFrom === 'true') !== expected.isFrom) {
    fail(`lib/promo.ts: ${slug} isFrom should be ${expected.isFrom}`)
  }
}
if (promoSource.includes('website-redesign')) {
  fail('lib/promo.ts: Website Redesign must be excluded from the Black Friday offer')
}
if (!/slotsTotal:\s*5\b/.test(promoConfigSource)) {
  fail('lib/promo-config.ts: Black Friday must be limited to 5 projects')
}
if (!/startsAt:\s*null\b/.test(promoConfigSource)) {
  fail('lib/promo-config.ts: the campaign must start immediately and carry no start date')
}
if (promoEndsAt !== '2026-12-05T23:59:59+02:00') {
  fail(`lib/promo-config.ts: endsAt is ${promoEndsAt}, expected 2026-12-05T23:59:59+02:00`)
}

const salePricePattern = /\bR(?:1,999|3,499|6,399|9,299)\b/
const promoContextFiles = (file) => {
  const path = rel(file).replaceAll('\\', '/')
  return (
    path === 'lib/promo.ts' ||
    path === 'lib/promo-config.ts' ||
    path === 'app/globals.css' ||
    path.startsWith('components/promo/') ||
    path.startsWith('docs/') ||
    path.startsWith('scripts/')
  )
}
const stripComments = (contents) =>
  contents.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '')

// Sale prices are only allowed inside the promo module, its components or documentation.
for (const file of repoFiles) {
  if (promoContextFiles(file)) continue
  const contents = stripComments(await read(file))
  if (salePricePattern.test(contents)) {
    fail(`${rel(file)} hard-codes a Black Friday price; read it from lib/promo.ts`)
  }
}

// When the campaign is off, no Black Friday wording may remain in the output.
if (!promoActive) {
  for (const file of repoFiles) {
    if (promoContextFiles(file)) continue
    const contents = stripComments(await read(file))
    if (/black[ -]friday/i.test(contents)) {
      fail(`${rel(file)} mentions Black Friday while the campaign is inactive; remove it or disable it in lib/promo-config.ts`)
    }
  }
}

// Metadata must never carry promo wording, active or not.
for (const file of sourceFiles) {
  if (!rel(file).replaceAll('\\', '/').startsWith('app/')) continue
  for (const line of (await read(file)).split('\n')) {
    if (!/^\s*(?:title|description):/.test(line)) continue
    if (/black[ -]friday/i.test(line) || salePricePattern.test(line)) {
      fail(`${rel(file)} puts promo wording in metadata: ${line.trim().slice(0, 120)}`)
    }
  }
}

// 9. Optional live check
if (process.argv.includes('--live')) {
  const siteUrl = constants.match(/export const SITE_URL\s*=\s*'([^']+)'/)?.[1]
  const sitemapUrl = `${siteUrl}/sitemap.xml`
  const sitemapResponse = await fetch(sitemapUrl)
  if (!sitemapResponse.ok) {
    fail(`Live sitemap ${sitemapUrl} returned ${sitemapResponse.status}`)
  } else {
    const sitemap = await sitemapResponse.text()
    const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
    for (const url of urls) {
      const response = await fetch(url, { method: 'GET' })
      if (!response.ok) {
        fail(`Live URL ${url} returned ${response.status}`)
        continue
      }
      const html = await response.text()
      const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
      const expected = url.replace(/\/$/, '')
      if (!canonical) fail(`Live URL ${url} has no canonical link`)
      else if (canonical.replace(/\/$/, '') !== expected) {
        fail(`Live URL ${url} canonical is ${canonical}`)
      }
      const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      if (jsonLdBlocks.length === 0) {
        warn(`Live URL ${url} has no JSON-LD`)
      }
      for (const [, payload] of jsonLdBlocks) {
        try {
          JSON.parse(payload)
        } catch {
          fail(`Live URL ${url} has JSON-LD that does not parse`)
        }
      }
    }
    const llmsResponse = await fetch(`${siteUrl}/llms.txt`)
    const contentType = llmsResponse.headers.get('content-type') ?? ''
    if (!llmsResponse.ok) fail(`Live ${siteUrl}/llms.txt returned ${llmsResponse.status}`)
    else if (!contentType.startsWith('text/plain')) {
      fail(`Live /llms.txt content-type is ${contentType}`)
    }
    console.log(`Live check: ${urls.length} sitemap URLs requested`)
  }
}

for (const message of warnings) console.warn(`WARN  ${message}`)
for (const message of failures) console.error(`FAIL  ${message}`)
if (failures.length > 0) {
  console.error(`\n${failures.length} failure(s), ${warnings.length} warning(s)`)
  process.exit(1)
}
console.log(`SEO consistency: ${routePaths.length} routes checked, ${warnings.length} warning(s), no failures`)
