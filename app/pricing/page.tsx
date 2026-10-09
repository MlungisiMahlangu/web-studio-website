import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { packages, addons, maintenancePlans, comparisonFeatures } from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal, RevealStagger } from '@/components/ui/reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for websites starting from R1,500. Clear services, no hidden costs. Landing pages, business websites, online stores and more.',
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <Section dark className="pb-20 sm:pb-28 md:pb-32">
        <Container>
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">
              Clear from the start
            </p>
            <h1 className="font-display text-display-xl leading-tight tracking-tight">
              Premium work,
              <br />
              <em className="italic text-accent">without the mystery.</em>
            </h1>
            <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-cream/60">
              Transparent starting points for thoughtful digital experiences. Every
              project receives a tailored scope and quotation.
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
                className={`flex flex-col rounded-2xl p-8 ${
                  pack.popular
                    ? 'bg-ink text-cream ring-1 ring-inset ring-white/10'
                    : 'bg-cream-light border border-line'
                }`}
              >
                {pack.popular && (
                  <span className="mb-4 inline-block self-start rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}
                <div>
                  <p className={`font-mono text-xs uppercase tracking-wider ${pack.popular ? 'text-cream/50' : 'text-muted'}`}>
                    {pack.name}
                  </p>
                  <h3 className="mt-2 font-display text-display-sm tracking-tight">
                    {pack.price}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed ${pack.popular ? 'text-cream/60' : 'text-muted'}`}>
                    {pack.description}
                  </p>
                  <p className={`mt-2 font-mono text-xs ${pack.popular ? 'text-cream/40' : 'text-muted/70'}`}>
                    {pack.timeframe}
                  </p>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        aria-hidden="true"
                        className={`mt-0.5 h-4 w-4 shrink-0 ${pack.popular ? 'text-accent' : 'text-muted'}`}
                      />
                      <span className={pack.popular ? 'text-cream/80' : 'text-ink-light'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={pack.href}
                  className={`mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                    pack.popular
                      ? 'bg-accent text-white hover:bg-accent-dark'
                      : 'border border-line-dark text-ink hover:bg-ink hover:text-cream'
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
      <Section className="py-16 sm:py-20">
        <Container narrow>
          <Reveal>
            <div className="rounded-2xl border border-line bg-cream-light p-10 sm:p-12">
              <h2 className="font-display text-display-sm leading-tight tracking-tight">
                Selected services include a free .co.za domain for the first year.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
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
                <span className="text-sm font-medium">{addon.name}</span>
                <span className="shrink-0 font-mono text-sm text-muted">{addon.price}</span>
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
                <h3 className="font-display text-xl tracking-tight text-cream">
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-display-sm text-accent">{plan.price}</span>
                  <span className="font-mono text-xs text-cream/40">/month</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-cream/60">
                  {plan.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-cream/70">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
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
            <div className="overflow-x-auto rounded-2xl border border-line">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead>
                  <tr className="border-b border-line bg-cream-light">
                    <th className="px-6 py-4 font-mono text-xs font-medium uppercase tracking-wider text-muted">
                      Feature
                    </th>
                    <th className="px-6 py-4 font-mono text-xs font-medium uppercase tracking-wider text-muted">
                      Landing
                    </th>
                    <th className="px-6 py-4 font-mono text-xs font-medium uppercase tracking-wider text-muted">
                      Business
                    </th>
                    <th className="px-6 py-4 font-mono text-xs font-medium uppercase tracking-wider text-muted">
                      Starter
                    </th>
                    <th className="px-6 py-4 font-mono text-xs font-medium uppercase tracking-wider text-muted">
                      Portfolio
                    </th>
                    <th className="px-6 py-4 font-mono text-xs font-medium uppercase tracking-wider text-muted">
                      Professional
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {comparisonFeatures.map((row) => (
                    <tr key={row.feature} className="hover:bg-cream-light/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-ink">
                        {row.feature}
                      </td>
                      {(['landing', 'business', 'starter', 'portfolio', 'professional'] as const).map((col) => {
                        const val = row[col]
                        if (val === true)
                          return (
                            <td key={col} className="px-6 py-4">
                              <Check aria-hidden="true" className="h-4 w-4 text-accent" />
                            </td>
                          )
                        if (val === false)
                          return (
                            <td key={col} className="px-6 py-4 text-muted/40">
                              —
                            </td>
                          )
                        return (
                          <td key={col} className="px-6 py-4 text-muted">
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
              <h2 className="font-display text-display-md leading-tight tracking-tight text-cream">
                Ready to get started?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-cream/60">
                Tell us about your project and we will send a tailored quote with clear
                deliverables and timeline.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
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
