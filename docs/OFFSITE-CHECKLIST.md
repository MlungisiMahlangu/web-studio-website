# Offsite SEO checklist

Everything on this list happens outside the codebase. Work through it once, then revisit the recurring items every quarter. Nothing here guarantees rankings; the goal is to remove ambiguity about who WEB-IN is, where it works and what it sells.

## 1. Domain and hosting

The site is hosted on Vercel. There is no shared host dashboard to configure.

- [ ] In Vercel, add both `web-in.co.za` and `www.web-in.co.za` to the project. Set `www.web-in.co.za` as the primary domain and redirect the bare domain to it. `next.config.mjs` also redirects to the `www` host, so the two settings should agree.
- [ ] Confirm HTTPS is active for both domains. Vercel issues the certificates automatically once DNS is correct.
- [ ] Keep the domain registration in the business's own name and renew it automatically. The domain is separate from the Vercel account.
- [ ] Confirm the project region is `cpt1` in `vercel.json`.
- [ ] Confirm the IndexNow key file is live at `https://www.web-in.co.za/7f2c9a4e6b1d8c3f5a0e9b7d4c2a6f81.txt`.
- [ ] Add the site to Google Search Console and verify the `www` property.
- [ ] Add the site to Bing Webmaster Tools. Import from Search Console if offered.
- [ ] Submit `https://www.web-in.co.za/sitemap.xml` in both tools.

## 2. Google Business Profile

WEB-IN is a home-based, service-area business. There is no shop, no public street address and no opening hours. A Google Business Profile is still useful: it can place the business in local results for Johannesburg without exposing the home address.

### Setup

- [ ] Create or claim the profile. Use the exact trading name `WEB-IN`.
- [ ] Choose `Website designer` as the primary category. Add `Web developer` as a secondary category. Add others only where accurate.
- [ ] In the address step, enter the real business name and then tick the box that says you deliver goods or services to customers at their location. This hides the street address from the public profile.
- [ ] Enter the home address only where Google requires it for verification. It is used for verification and is not shown on the profile once the service-area setting is on.
- [ ] Set the service area to Johannesburg, Gauteng and South Africa. Keep it broad rather than listing dozens of suburbs.
- [ ] Add the real phone number, email address and `https://www.web-in.co.za`.
- [ ] Leave opening hours blank. Do not invent hours for a business that works by appointment.
- [ ] Upload real photos of finished work, screenshots and the setup. Do not use stock people or stock offices.

### Verification

- [ ] Choose video verification if it is offered. You will usually be asked to record a short unedited video showing the business name on a document or screen, the workspace, and proof that you can access the tools you use.
- [ ] Record it in one take, in daylight, and narrate what you are showing. Follow the prompts in the Google flow on the day; the exact steps change.
- [ ] If video verification is not offered, complete whatever Google asks for. Do not buy a "verification service".

### Running the profile

- [ ] Publish one short update per month: a project, a guide or a service note.
- [ ] Ask every satisfied client for an honest review and send them the direct review link.
- [ ] Never buy reviews or write them on a client's behalf.
- [ ] Never publish the home address, a map pin on the house or a photo that shows the street. Keep the profile as a service-area business.
- [ ] Check the profile every quarter: categories, service areas, phone number and website still correct.

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

Keep the name and phone number identical across listings. Inconsistent NAP data confuses both customers and search engines. Because this is a service-area business, use `Johannesburg, South Africa` as the location and never a street address. If a directory insists on a street address, skip that directory.

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
