// Submits the live sitemap to IndexNow (Bing, Yandex, Seznam and partners).
// Reads SITE_URL and INDEXNOW_KEY from lib/constants.ts so there is one source of truth.
// Usage: pnpm indexnow            submit every URL in the sitemap
//        pnpm indexnow --dry-run  print the payload without sending
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const constants = await readFile(join(root, 'lib/constants.ts'), 'utf8')

function readConstant(name) {
  const match = constants.match(new RegExp(`export const ${name}\\s*=\\s*['"]([^'"]+)['"]`))
  if (!match) throw new Error(`Could not read ${name} from lib/constants.ts`)
  return match[1]
}

const siteUrl = readConstant('SITE_URL')
const key = readConstant('INDEXNOW_KEY')
const host = new URL(siteUrl).host
const dryRun = process.argv.includes('--dry-run')

const sitemapUrl = `${siteUrl}/sitemap.xml`
const response = await fetch(sitemapUrl)
if (!response.ok) {
  throw new Error(`Could not fetch ${sitemapUrl}: ${response.status} ${response.statusText}`)
}

const sitemap = await response.text()
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
if (urlList.length === 0) throw new Error('Sitemap contained no URLs')

const payload = {
  host,
  key,
  keyLocation: `${siteUrl}/${key}.txt`,
  urlList,
}

console.log(`IndexNow: ${urlList.length} URLs for ${host}`)
if (dryRun) {
  console.log(JSON.stringify(payload, null, 2))
  process.exit(0)
}

const submit = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
})

console.log(`IndexNow responded ${submit.status} ${submit.statusText}`)
if (!submit.ok) {
  console.error(await submit.text())
  process.exit(1)
}
