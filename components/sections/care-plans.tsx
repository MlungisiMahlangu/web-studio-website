import Link from 'next/link'
import { ArrowUpRight, Check, Clock, Mail, Minus } from 'lucide-react'
import {
  careComparisonRows,
  carePlans,
  carePlanBillingNote,
  carePlanNote,
} from '@/lib/care-plans'

const cardBase =
  'relative flex flex-col rounded-2xl p-7 sm:p-8 transition-shadow duration-300'

export function CarePlanCards({ className = '' }: { className?: string }) {
  return (
    <div className={`grid gap-6 lg:grid-cols-3 items-stretch ${className}`}>
      {carePlans.map((plan) => {
        const featured = plan.popular
        return (
          <article
            key={plan.id}
            id={plan.id}
            className={`${cardBase} ${
              featured
                ? 'bg-dark-panel text-white shadow-2xl ring-2 ring-brand lg:-mt-3 lg:mb-3'
                : 'bg-white border border-line shadow-card'
            }`}
          >
            {featured && (
              <span
                className="absolute -top-3 left-7 inline-block rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase text-white"
                style={{ letterSpacing: '0.08em' }}
              >
                Most popular
              </span>
            )}

            <h3 className={`text-lg font-bold ${featured ? 'text-white' : 'text-navy'}`}>
              {plan.name}
            </h3>
            <p className={`mt-2 text-sm leading-relaxed ${featured ? 'text-white/60' : 'text-body'}`}>
              {plan.idealFor}
            </p>

            <div className="mt-5 flex items-baseline gap-1.5">
              <span className={`text-display-sm font-bold ${featured ? 'text-white' : 'text-navy'}`}>
                {plan.priceLabel}
              </span>
              <span className={`text-sm font-medium ${featured ? 'text-white/50' : 'text-muted'}`}>
                /month
              </span>
            </div>
            <p className={`mt-1 text-xs ${featured ? 'text-white/60' : 'text-muted'}`}>
              Billed monthly in advance. Cancel per the terms.
            </p>

            <div
              className={`mt-5 flex items-start gap-3 rounded-xl p-4 ${
                featured ? 'bg-white/5' : 'bg-blue-tint'
              }`}
            >
              <Mail
                aria-hidden="true"
                className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? 'text-brand' : 'text-brand'}`}
              />
              <div>
                <p className={`text-sm font-semibold ${featured ? 'text-white' : 'text-navy'}`}>
                  {plan.emailLabel}
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-2.5">
              {plan.features.map((feature) => {
                const isLabel = feature.endsWith(':')
                return (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      aria-hidden="true"
                      className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? 'text-brand' : 'text-brand'}`}
                    />
                    <span
                      className={
                        isLabel
                          ? `text-xs italic ${featured ? 'text-white/50' : 'text-muted'}`
                          : featured
                            ? 'text-white/70'
                            : 'text-body'
                      }
                    >
                      {feature}
                    </span>
                  </li>
                )
              })}
            </ul>

            <div
              className={`mt-6 border-t pt-5 ${featured ? 'border-white/10' : 'border-line'}`}
            >
              <p
                className={`text-[11px] font-semibold uppercase ${featured ? 'text-white/60' : 'text-muted'}`}
                style={{ letterSpacing: '0.12em' }}
              >
                Important limits
              </p>
              <ul className="mt-2.5 space-y-2">
                {plan.limitations.map((limitation) => (
                  <li key={limitation} className="flex items-start gap-2.5 text-xs leading-relaxed">
                    <Minus
                      aria-hidden="true"
                      className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${featured ? 'text-white/60' : 'text-muted'}`}
                    />
                    <span className={featured ? 'text-white/50' : 'text-muted'}>{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`mt-5 flex items-center gap-2.5 text-sm ${
                featured ? 'text-white/70' : 'text-body'
              }`}
            >
              <Clock aria-hidden="true" className="h-4 w-4 shrink-0 text-brand" />
              <span>
                <span className="font-medium">Response target:</span> {plan.supportResponseTarget}
              </span>
            </div>

            <div className="mt-6 pt-1">
              <Link
                href={plan.cta.href}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-full h-12 px-6 text-sm font-medium transition-colors duration-300 ${
                  featured
                    ? 'bg-brand text-white hover:bg-brand-hover'
                    : 'border border-line text-navy hover:bg-surface'
                }`}
              >
                {plan.cta.label}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export function CarePlanNotes() {
  return (
    <div className="mt-8 space-y-2 text-center text-sm text-muted">
      <p>{carePlanNote}</p>
      <p>{carePlanBillingNote}</p>
    </div>
  )
}

export function CareComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-white shadow-card">
      <table className="w-full min-w-[880px] text-left text-sm">
        <caption className="sr-only">
          Comparison of WEB-IN monthly website care plans, including business email mailbox allowances
        </caption>
        <thead>
          <tr className="border-b border-line bg-surface">
            <th
              scope="col"
              className="sticky left-0 z-10 bg-surface px-5 py-4 text-xs font-semibold uppercase text-muted"
              style={{ letterSpacing: '0.12em' }}
            >
              Feature
            </th>
            {carePlans.map((plan) => (
              <th
                key={plan.id}
                scope="col"
                className={`px-5 py-4 text-xs font-semibold uppercase ${
                  plan.popular ? 'text-brand' : 'text-muted'
                }`}
                style={{ letterSpacing: '0.12em' }}
              >
                {plan.name}
                {plan.popular && (
                  <span className="mt-1 block text-[10px] font-semibold normal-case text-brand">
                    Recommended
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {careComparisonRows.map((row) => (
            <tr key={row.label} className={row.emphasise ? 'bg-surface' : 'hover:bg-surface/50'}>
              <th
                scope="row"
                className="sticky left-0 z-10 bg-white px-5 py-4 font-medium text-navy"
              >
                {row.label}
              </th>
              {row.values.map((value, index) => (
                <td key={carePlans[index].id} className="px-5 py-4 align-top">
                  {value === true ? (
                    <Check aria-label="Included" className="h-4 w-4 text-brand" />
                  ) : value === false ? (
                    <span className="text-muted/40" aria-label="Not included">
                      —
                    </span>
                  ) : (
                    <span
                      className={
                        carePlans[index].popular ? 'font-medium text-navy' : 'text-body'
                      }
                    >
                      {value}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
