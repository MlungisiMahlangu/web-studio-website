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

// 6. IndexNow key file
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

// 8. Hosting references must be Vercel, never the old host
const textExtensions = /\.(ts|tsx|js|mjs|cjs|jsx|json|md|mdx|txt|ya?ml|css)$/
const repoFiles = (await walk(root)).filter(
  (file) => textExtensions.test(file) && !file.endsWith('pnpm-lock.yaml') && !file.endsWith('package-lock.json'),
)
for (const file of repoFiles) {
  const contents = await read(file)
  if (new RegExp('net' + 'lify', 'i').test(contents)) {
    fail(`${rel(file)} mentions the old host; the site is hosted on Vercel`)
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
      if (!response.ok) fail(`Live URL ${url} returned ${response.status}`)
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
