# Offsite SEO checklist

Everything on this list happens outside the codebase. Work through it once, then revisit the recurring items every quarter. Nothing here guarantees rankings; the goal is to remove ambiguity about who WEB-IN is, where it works and what it sells.

## 1. Domain and hosting

- [ ] Set `www.web-in.co.za` as the primary domain in the host dashboard. The bare domain redirects to `www` in `next.config.mjs`, but the host setting should agree.
- [ ] Confirm HTTPS is active for both `www.web-in.co.za` and `web-in.co.za`.
- [ ] Keep the domain registration in the studio's own name and renew it automatically.
- [ ] Confirm the IndexNow key file is live at `https://www.web-in.co.za/7f2c9a4e6b1d8c3f5a0e9b7d4c2a6f81.txt`.
- [ ] Add the site to Google Search Console and verify the `www` property.
- [ ] Add the site to Bing Webmaster Tools. Import from Search Console if offered.
- [ ] Submit `https://www.web-in.co.za/sitemap.xml` in both tools.

## 2. Google Business Profile

- [ ] Create or claim the profile. Use the exact trading name `WEB-IN`.
- [ ] Choose the closest primary category (for example, Website designer). Add secondary categories only where accurate.
- [ ] Set the service area to Johannesburg and the surrounding areas listed in `SERVICE_AREAS`.
- [ ] Add the real phone number, email address and website.
- [ ] Add opening hours only when they are real. Leave them blank rather than inventing them.
- [ ] Upload real photos of work, the workspace or the team. Do not use stock people.
- [ ] Publish one short update per month: a project, a guide or a service note.
- [ ] Ask every satisfied client for an honest review and send them the direct review link.
- [ ] Never buy reviews or write them on a client's behalf.

## 3. Social and business profiles

Only create profiles that the studio will actually maintain. Each live profile becomes a `sameAs` entry in `SOCIAL_LINKS` in `lib/constants.ts`, which strengthens the entity signal in the Organization schema.

Recommended, in priority order:

- [ ] LinkedIn company page
- [ ] Facebook business page
- [ ] Instagram account
- [ ] X / Twitter account
- [ ] GitHub organisation (only if it will be used)
- [ ] Clutch profile
- [ ] Sortlist profile
- [ ] GoodFirms profile

For each profile:

- Use the same business name, logo and description everywhere.
- Link back to `https://www.web-in.co.za`.
- Complete the profile rather than leaving placeholder sections.
- Add the URL to `SOCIAL_LINKS`. The footer renders only the profiles that exist.

## 4. Citations and directories

Keep the name, address and phone number identical across listings. Inconsistent NAP data confuses both customers and search engines.

- [ ] Google Business Profile
- [ ] Bing Places
- [ ] Apple Business Connect
- [ ] Yellow Pages South Africa
- [ ] Brabys
- [ ] Snupit
- [ ] Local business associations or chambers that the studio actually belongs to

Do not pay for dozens of low-quality directory listings. A small number of accurate, maintained profiles is better.

## 5. Client and partner links

- [ ] Ask clients for permission to add a small "Website by WEB-IN" credit in their footer. This is optional and should never be a condition of the project.
- [ ] Ask clients to link to the studio from their own site or partner page where appropriate.
- [ ] Add the studio to relevant supplier or partner directories.
- [ ] Avoid link exchanges and paid link schemes.

## 6. Content distribution

- [ ] Share each new guide on the profiles the studio maintains.
- [ ] Send a short monthly note to past clients with any new guide or price change.
- [ ] Answer real questions in relevant South African business communities without spamming links.
- [ ] Keep the blog current: update prices, dates and examples when they change.

## 7. Measurement

- [ ] Confirm Vercel Analytics is collecting page views.
- [ ] Add Google Search Console performance review to the monthly routine.
- [ ] Track enquiries from the contact form, WhatsApp and phone separately if possible.
- [ ] Record a baseline after launch: impressions, clicks, enquiries and top pages.
- [ ] Review the baseline quarterly. Judge trends over months, not days.

## 8. Recurring quarterly tasks

- [ ] Re-check Google Business Profile details and photos.
- [ ] Run `pnpm check:seo -- --live` against production.
- [ ] Run `pnpm indexnow` after a content release.
- [ ] Review Search Console for indexing errors and manual actions.
- [ ] Check that the contact form, WhatsApp link and phone number still work.
- [ ] Update `LAST_UPDATED` if prices changed, or `CONTENT_UPDATED` if only copy changed.
- [ ] Review `SOCIAL_LINKS` and remove any profile that is no longer maintained.

## 9. Do not do

- Do not buy backlinks, reviews or traffic.
- Do not publish thin location pages with duplicated text.
- Do not add fake team members, awards or client logos.
- Do not guarantee rankings or lead volumes.
- Do not add tracking pixels the business has not agreed to.
- Do not disable security scanning or bypass deploy checks to publish faster.
