import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { packages, addons, maintenancePlans, comparisonFeatures } from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal, RevealStagger } from '@/components/ui/reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Design Prices in South Africa | WEB-IN',
  description: 'Compare website design packages in South Africa. Landing pages, business websites, portfolios and online stores with clear pricing and no hidden costs from WEB-IN.',
  alternates: {
    canonical: 'https://web-in.co.za/pricing',
  },
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <Section dark className="pb-20 sm:pb-28 md:pb-32">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase text-brand mb-4" style={{ letterSpacing: '0.14em' }}>
              What we offer
            </p>
            <h1 className="text-display-lg leading-tight font-extrabold text-white">
              Services built around
              <br />
              your project.
            </h1>
            <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-white/60">
              From a simple landing page to a full business website or custom
              application — pick a starting point or let us scope something
              tailored to exactly what you need.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Packages */}
      <Section className="-mt-1">
        <Container>
          <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={100}>
            {packages.map((pack) => (
              <article
                key={pack.name}
                id={pack.href.replace('/pricing#', '')}
                className={`flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                  pack.popular
                    ? 'bg-dark-panel text-white ring-1 ring-inset ring-white/10'
                    : 'bg-white border border-line shadow-card hover:border-brand/20 hover:shadow-lg'
                }`}
              >
                {pack.popular && (
                  <span className="mb-4 inline-block self-start rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase text-white" style={{ letterSpacing: '0.05em' }}>
                    Most popular
                  </span>
                )}
                <div>
                  <p className={`text-xs font-semibold uppercase ${pack.popular ? 'text-white/50' : 'text-muted'}`} style={{ letterSpacing: '0.14em' }}>
                    {pack.name}
                  </p>
                  <h3 className="mt-2 text-display-sm font-bold">
                    {pack.price}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed ${pack.popular ? 'text-white/60' : 'text-body'}`}>
                    {pack.description}
                  </p>
                  <p className={`mt-2 text-xs ${pack.popular ? 'text-white/40' : 'text-muted'}`}>
                    {pack.timeframe}
                  </p>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        aria-hidden="true"
                        className={`mt-0.5 h-4 w-4 shrink-0 ${pack.popular ? 'text-brand' : 'text-brand'}`}
                      />
                      <span className={pack.popular ? 'text-white/80' : 'text-body'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={pack.href}
                  className={`mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                    pack.popular
                      ? 'bg-brand text-white hover:bg-brand-hover'
                      : 'border border-line text-navy hover:bg-surface'
                  }`}
                >
                  Choose {pack.name} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* Domain banner */}
      <Section alt className="py-16 sm:py-20">
        <Container narrow>
          <Reveal>
            <div className="rounded-2xl border border-line bg-white shadow-card p-10 sm:p-12">
              <h2 className="text-display-sm leading-tight font-bold text-navy">
                Selected services include a free .co.za domain for the first year.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                Domain availability is checked before registration. Renewal fees apply
                from year two; hosting and third-party services are always disclosed.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Add-ons */}
      <Section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Add-ons"
              title="Extend your project"
              description="Add extra features to any service. All add-ons are quoted before work begins."
              className="mb-12"
            />
          </Reveal>
          <RevealStagger className="grid gap-0 divide-y divide-line sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 lg:[&>*:nth-child(3n+2)]:border-x lg:[&>*:nth-child(3n+2)]:border-line" stagger={60}>
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between gap-4 border border-line -mb-px rounded-xl px-6 py-5"
              >
                <span className="text-sm font-medium text-navy">{addon.name}</span>
                <span className="shrink-0 text-sm text-muted">{addon.price}</span>
              </div>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* Maintenance */}
      <Section dark>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Maintenance"
              title="Ongoing care"
              description="Optional monthly plans to keep your website running smoothly after launch."
              light
              className="mb-12"
            />
          </Reveal>
          <RevealStagger className="grid gap-6 sm:grid-cols-3" stagger={100}>
            {maintenancePlans.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col rounded-2xl bg-white/5 p-8 ring-1 ring-inset ring-white/10"
              >
                <h3 className="text-xl font-bold text-white">
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-display-sm font-bold text-brand">{plan.price}</span>
                  <span className="text-xs text-white/40">/month</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {plan.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* Comparison table */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Compare services"
              title="Side by side"
              className="mb-12"
            />
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-line shadow-card">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead>
                  <tr className="border-b border-line bg-surface">
                    <th className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>
                      Feature
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>
                      Landing
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>
                      Business
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>
                      Starter
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>
                      Portfolio
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>
                      Professional
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {comparisonFeatures.map((row) => (
                    <tr key={row.feature} className="hover:bg-surface/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-navy">
                        {row.feature}
                      </td>
                      {(['landing', 'business', 'starter', 'portfolio', 'professional'] as const).map((col) => {
                        const val = row[col]
                        if (val === true)
                          return (
                            <td key={col} className="px-6 py-4">
                              <Check aria-hidden="true" className="h-4 w-4 text-brand" />
                            </td>
                          )
                        if (val === false)
                          return (
                            <td key={col} className="px-6 py-4 text-muted/40">
                              —
                            </td>
                          )
                        return (
                          <td key={col} className="px-6 py-4 text-body">
                            {val}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section dark>
        <Container narrow>
          <Reveal>
            <div className="text-center">
              <h2 className="text-display-md leading-tight font-bold text-white">
                Ready to get started?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/60">
                Tell us about your project and we will send a tailored quote with clear
                deliverables and timeline.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
              >
                Get your quote <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
