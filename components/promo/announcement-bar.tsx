import Link from 'next/link'
import { BLACK_FRIDAY, formatZAR, promoDeals } from '@/lib/promo'

const fromPrice = formatZAR(Math.min(...promoDeals.map((deal) => deal.price)))

export function AnnouncementBar() {
  return (
    <div data-promo-bar className="h-11 bg-dark-panel text-white">
      <div className="mx-auto flex h-11 max-w-[1280px] items-center justify-center gap-2.5 px-4">
        <p className="min-w-0 truncate text-[12px] leading-none text-white/90 sm:text-[13px]">
          <span className="font-bold text-promo-on-dark">{BLACK_FRIDAY.label}</span>
          <span className="hidden sm:inline">
            {' '}
            — once-off websites from {fromPrice}. Limited to {BLACK_FRIDAY.slotsTotal} projects.
          </span>
          <span className="sm:hidden"> — from {fromPrice}</span>
        </p>
        <Link
          href={`/pricing#${BLACK_FRIDAY.anchorId}`}
          className="shrink-0 whitespace-nowrap text-[12px] font-semibold text-white underline decoration-promo-on-dark decoration-2 underline-offset-[3px] transition-colors hover:text-promo-on-dark sm:text-[13px]"
        >
          View deals
        </Link>
      </div>
    </div>
  )
}
