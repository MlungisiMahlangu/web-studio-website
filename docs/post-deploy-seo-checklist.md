# WEB-IN post-deploy SEO checklist

Canonical site address: **https://www.web-in.co.za/**

Work through this after every production deploy. Nothing here needs developer tools except the first step.

## 1. Redirects land on www

In a browser, open each address and confirm it lands on the same page on `https://www.web-in.co.za/` (the path must be kept, e.g. `/about` stays `/about`):

- `http://web-in.co.za`
- `https://web-in.co.za/about`
- `http://www.web-in.co.za`
- `https://web-in-jet.vercel.app/about` → must land on `https://www.web-in.co.za/about`

The `web-in-jet.vercel.app` address is the old deployment host. It now permanently redirects to www, so do not use it for testing the live build. Previews of new branches still work on their own preview URLs (the `*.vercel.app` link Vercel shows for each preview deployment).

## 2. Vercel domains

Vercel → Project → Settings → Domains:

- `www.web-in.co.za` is the primary domain.
- `web-in.co.za` is set to redirect permanently to it.
- `web-in-jet.vercel.app` stays attached to the project and is redirected in `next.config.mjs`.

Only change DNS if Vercel shows a warning. Do not add a second apex redirect.

## 3. Live files open directly

Each must return `200` and the correct content type:

- `https://www.web-in.co.za/favicon.ico`
- `https://www.web-in.co.za/icon-48.png`
- `https://www.web-in.co.za/icon-192.png`
- `https://www.web-in.co.za/icon.png`
- `https://www.web-in.co.za/apple-icon.png`
- `https://www.web-in.co.za/sitemap.xml`
- `https://www.web-in.co.za/robots.txt`
- `https://www.web-in.co.za/llms.txt`

The sitemap must list only `https://www.web-in.co.za/...` URLs, with no duplicates and no `/contact/thank-you`.

## 4. Google Search Console

1. Keep the existing **Domain property** for `web-in.co.za`. Do not delete it.
2. **URL Inspection** → `https://www.web-in.co.za/` → **Test live URL**.
3. Confirm the fetched page shows the new content, the user-declared canonical and Google-selected canonical are `https://www.web-in.co.za/`, and the favicon links point to the icon files above.
4. **Request indexing** for the homepage.
5. Repeat URL Inspection + Request indexing for `/pricing`, `/contact`, `/website-care-management` and the six service landing pages.

## 5. Sitemaps

1. Submit or confirm `https://www.web-in.co.za/sitemap.xml` in Search Console → Sitemaps. It should show **Success**.
2. Only after the new sitemap is processed and the redirects in step 1 are verified, remove the old `https://web-in.co.za/sitemap.xml` submission.

## 6. Indexing report

Search Console → Pages → **Why pages aren't indexed**. Check:

- “Page with redirect” — expected for non-www URLs after consolidation. Fine.
- “Duplicate, Google chose different canonical” — inspect and confirm the www page is the chosen canonical.
- “Crawled – currently not indexed” — review the page, then request indexing if it should be indexed.

## 7. Do not use the Removals tool

Do not remove the old homepage or old URLs with the Removals tool. The goal is to consolidate signals through permanent redirects, canonicals and the sitemap, not to hide the old result.

## 8. Old Vercel host in Google

Search Google for `site:web-in-jet.vercel.app`.

- If no URLs are listed, nothing to do.
- If any URLs are listed, they will drop out as Google recrawls the redirect. No Removals tool needed.

## 9. Google Business Profile

- Google Business Profile → Edit profile → Contact → Website: `https://www.web-in.co.za/`.
- Complete the profile (category, services, photos, description). Only add real address, hours or reviews — never placeholder details.
- The Business Profile link and the organic search result are separate; changing the profile does not, by itself, change the normal website result.

## 10. Bing and IndexNow

- Bing Webmaster Tools: import the site and submit `https://www.web-in.co.za/sitemap.xml`.
- After each deploy, run `pnpm indexnow` so the changed URLs are pinged.

## 11. What to expect

Google has to recrawl and reprocess the site. Favicon, site name, titles and snippets update over days to a few weeks; Google may show different titles for different queries. The old non-www result should fade as the redirect and canonical are processed. No timing or ranking is guaranteed.
