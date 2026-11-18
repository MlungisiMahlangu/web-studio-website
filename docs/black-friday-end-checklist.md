# Black Friday end checklist

Campaign ends: 5 December 2026 at 23:59 SAST (`2026-12-05T23:59:59+02:00`).
Limit: 5 projects. There is no start date; the campaign is live while it is enabled and before the end time.

## What happens automatically

The site reads the campaign state from `lib/promo-config.ts` and the pages that render promo content revalidate every 900 seconds (15 minutes). After the end time:

- The announcement bar disappears from every page.
- The homepage deal strip disappears.
- The `/pricing#black-friday` deal section and promo FAQ entry disappear.
- The cost page callout disappears.
- Sale offers are removed from the site-wide structured data.
- The `llms.txt` and `llms-full.txt` promo sections disappear.
- The contact form stops adding the promo price, hidden fields and `[BLACK FRIDAY]` subject.
- A small client guard hides any promo surface still served from a cached page.

No redeploy is needed. If a page was cached just before the end time, allow up to 15 minutes plus a request for it to refresh.

## If you need to stop the campaign early

In `lib/promo-config.ts`, set:

```ts
enabled: false,
```

Deploy as usual. Within 15 minutes the promo surfaces and sale offers are gone. You can also change `endsAt` to an earlier timestamp.

## Manual checks after 5 December 2026

1. Open `https://www.web-in.co.za/` and confirm the bar and the deal strip are gone.
2. Open `https://www.web-in.co.za/pricing#black-friday` and confirm there is no promo block, and that the normal price list is unchanged.
3. Open `https://www.web-in.co.za/contact?build=starter-website&deal=black-friday` and confirm the Black Friday chip no longer appears.
4. Open `https://www.web-in.co.za/llms.txt` and confirm the limited-time section is gone.
5. View the homepage source and confirm there are no sale offers in the JSON-LD (normal `Offer` entries should remain).
6. Run `pnpm check:seo` and expect no failures. While the campaign is inactive, the checker fails if any Black Friday wording or sale price remains outside the promo module and docs.
7. Search the repo for `R1,999`, `R3,499`, `R6,399`, `R9,299` and "Black Friday". Only `lib/promo*.ts`, `components/promo/`, `docs/` and the checker should contain them.

## Off-site cleanup (same week)

- Google Business Profile: remove or end any Black Friday Offer post. Do not leave an expired offer live.
- Facebook, Instagram and LinkedIn: update or delete the promo posts, or add a comment that the offer has ended.
- WhatsApp status and any broadcast message: remove or replace.
- Any replies to past enquiries: stop quoting the promo prices; quote from the normal price list.

## If a client claims a slot after the end time

The campaign is time-bound. If you choose to honour a late enquiry, it is a manual decision; the website will not show the promo price automatically. Record the agreed price in the quote and keep the normal scope, deposit and payment terms.

## Reminder

The normal prices in `lib/constants.ts` are the source of truth and were never changed. The campaign only adds temporary prices and surfaces.
