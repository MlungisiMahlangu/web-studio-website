import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { BLACK_FRIDAY, promoDeals } from '@/lib/promo'
import { PromoCountdown } from './countdown'

const steps = [
  {
    title: 'Pick a package',
    text: 'Choose one of the four deals and send the enquiry form.',
  },
  {
    title: 'We confirm your slot',
    text: 'We reply within 1–2 business days and confirm the project slot.',
  },
  {
    title: 'Approve the quote',
    text: 'Work starts once the quote and the usual 50% deposit are in place.',
  },
]

const terms = [
  'Once-off development prices in South African rand (ZAR).',
  'Limited to 5 projects, first come, first served.',
  `Ends ${BLACK_FRIDAY.endDateLabel} at 23:59 SAST.`,
  'Website Redesign and monthly care plans are not part of this offer.',
  'Scope, timeline, revisions and support stay as listed for each package.',
  'One offer per project. It cannot be combined with other discounts.',
]

export function PricingDealSection() {
  return (
    <div
      id={BLACK_FRIDAY.anchorId}
      data-promo
      className="mt-12 rounded-3xl border-2 border-promo-line bg-promo-tint p-5 sm:p-8"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full bg-promo px-3 py-1 text-[11px] font-bold uppercase text-white">
              {BLACK_FRIDAY.label}
            </span>
            <span className="text-xs font-semibold uppercase text-promo-strong" style={{ letterSpacing: '0.08em' }}>
              Limited to {BLACK_FRIDAY.slotsTotal} projects
            </span>
          </div>
          <h3 className="mt-3 text-2xl font-bold leading-tight text-navy sm:text-3xl">
            Once-off prices on four packages.
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-body">
            Reduced until {BLACK_FRIDAY.endDateLabel}. Pay once. No monthly fee is required
            to own your website.
          </p>
        </div>
        <div className="shrink-0">
          <p className="mb-2 text-[11px] font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>
            Ends {BLACK_FRIDAY.endDateLabel}
          </p>
          <PromoCountdown />
        </div>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {promoDeals.map((deal) => (
          <article
            key={deal.slug}
            className="flex flex-col rounded-2xl border border-promo-line bg-white p-5 shadow-card"
          >
            <div className="flex items-start justify-between gap-2">
              <h4
                className="text-xs font-bold uppercase text-navy"
                style={{ letterSpacing: '0.08em' }}
              >
                {deal.name}
              </h4>
              <span className="shrink-0 rounded-full bg-promo px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                {deal.savingLabel}
              </span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-body">{deal.tagline}</p>

            <div className="mt-4">
              <span className="sr-only">{deal.priceAriaLabel}</span>
              <span aria-hidden="true">
                <s className="block text-sm text-muted">{deal.normalLabel}</s>
                <span className="mt-0.5 flex items-baseline gap-1">
                  {deal.isFrom && (
                    <span className="text-xs font-semibold text-promo-strong">From</span>
                  )}
                  <span className="text-3xl font-extrabold leading-none text-promo">
                    {deal.priceLabel}
                  </span>
                </span>
              </span>
              <span className="mt-3 inline-block rounded-full border border-promo-line bg-promo-tint px-2.5 py-1 text-[10px] font-semibold uppercase text-promo-strong">
                Once-off
              </span>
            </div>

            <ul className="mt-4 flex-1 space-y-2">
              {deal.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-body">
                  <Check aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-promo" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href={deal.contactHref}
              className="mt-5 inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-promo px-4 text-sm font-semibold text-white transition-colors hover:bg-promo-strong"
            >
              Claim this deal
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1.25fr_1fr]">
        <div className="rounded-2xl border border-promo-line bg-white p-5">
          <h4 className="text-sm font-bold text-navy">How to claim</h4>
          <ol className="mt-3 grid gap-4 sm:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-promo text-[11px] font-bold text-white">
                  {index + 1}
                </span>
                <span>
                  <span className="block text-xs font-semibold text-navy">{step.title}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-body">{step.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-2xl border border-line bg-white/80 p-5">
          <h4 className="text-sm font-bold text-navy">Offer terms</h4>
          <ul className="mt-2.5 space-y-1.5 text-xs leading-relaxed text-body">
            {terms.map((term) => (
              <li key={term} className="flex gap-2">
                <span aria-hidden="true" className="text-promo">
                  •
                </span>
                {term}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        Care plans stay at their normal monthly prices. They are optional: you can own
        and keep your website without one. Website Redesign is not included in this offer.
      </p>
    </div>
  )
}
