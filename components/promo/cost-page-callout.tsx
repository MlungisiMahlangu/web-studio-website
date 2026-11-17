import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { BLACK_FRIDAY } from '@/lib/promo'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'

export function CostPageCallout() {
  return (
    <Section tight>
      <Container>
        <div
          data-promo
          className="flex flex-col gap-3 rounded-2xl border border-promo-line bg-promo-tint px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm leading-relaxed text-body">
            <span className="font-semibold text-promo-strong">Black Friday:</span> four
            once-off packages are reduced until {BLACK_FRIDAY.endDateLabel}. Limited to{' '}
            {BLACK_FRIDAY.slotsTotal} projects.
          </p>
          <Link
            href={`/pricing#${BLACK_FRIDAY.anchorId}`}
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-promo-strong hover:text-promo"
          >
            See the deals
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
