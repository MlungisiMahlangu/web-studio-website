import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { BLACK_FRIDAY, promoDeals } from '@/lib/promo'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { PromoCountdown } from './countdown'

export function HomeDealStrip() {
  return (
    <Section tight className="pb-2 sm:pb-4">
      <Container>
        <div
          data-promo
          className="rounded-3xl border border-promo-line bg-promo-tint p-5 sm:p-7"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-promo px-2.5 py-1 text-[10px] font-bold uppercase text-white">
                  {BLACK_FRIDAY.label}
                </span>
                <span className="text-xs font-semibold uppercase text-promo-strong" style={{ letterSpacing: '0.08em' }}>
                  Limited to {BLACK_FRIDAY.slotsTotal} projects
                </span>
              </div>
              <h2 className="mt-2 text-xl font-bold text-navy sm:text-2xl">
                Once-off prices on four packages.
              </h2>
              <p className="mt-1 text-sm text-body">
                Pay once. No monthly fee is required to own your website.
              </p>
            </div>
            <div className="shrink-0">
              <p className="mb-2 text-[11px] font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>
                Ends {BLACK_FRIDAY.endDateLabel}
              </p>
              <PromoCountdown />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {promoDeals.map((deal) => (
              <Link
                key={deal.slug}
                href={`/pricing#${BLACK_FRIDAY.anchorId}`}
                className="group rounded-xl border border-promo-line bg-white px-3.5 py-3 transition-colors hover:border-promo/50"
              >
                <span className="block truncate text-[11px] font-bold uppercase text-navy" style={{ letterSpacing: '0.06em' }}>
                  {deal.name.replace('Custom Web Application', 'Custom Web App')}
                </span>
                <span className="mt-1 block text-[11px] text-muted">
                  <s>{deal.normalLabel}</s>
                </span>
                <span className="mt-0.5 flex items-baseline gap-1">
                  {deal.isFrom && (
                    <span className="text-[10px] font-semibold text-promo-strong">From</span>
                  )}
                  <span className="text-lg font-extrabold leading-tight text-promo">
                    {deal.priceLabel}
                  </span>
                </span>
                <span className="mt-0.5 block text-[10px] font-semibold text-promo-strong">
                  {deal.savingLabel}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-muted">
              Starter, Business, Online Store and Custom Web Application only.
            </p>
            <Link
              href={`/pricing#${BLACK_FRIDAY.anchorId}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy/90"
            >
              See the Black Friday deals
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
