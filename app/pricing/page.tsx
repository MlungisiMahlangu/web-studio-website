import Link from 'next/link'
import { ArrowUpRight, Check, Smartphone, Search, Mail, Server, Headphones, Shield, Plus, Minus } from 'lucide-react'
import { services, packages, addons, maintenancePlans, comparisonFeatures, serviceDetails, homepageFaqs } from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { PageHero } from '@/components/ui/page-hero'
import { CTABand } from '@/components/ui/cta-band'
import { IconBox } from '@/components/ui/icon-box'
import { Badge } from '@/components/ui/badge'
import { Reveal, RevealStagger } from '@/components/ui/reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services & Pricing | WEB-IN',
  description: 'Compare website design packages in South Africa. Landing pages, business websites, portfolios and online stores with clear pricing and no hidden costs from WEB-IN.',
  alternates: {
    canonical: 'https://web-in.co.za/pricing',
  },
}

const jumpLinks = [
  { label: 'Business Websites', href: '#pricing-business-websites' },
  { label: 'Portfolio', href: '#pricing-portfolio-websites' },
  { label: 'Landing Pages', href: '#pricing-landing-pages' },
  { label: 'Booking', href: '#pricing-booking-websites' },
  { label: 'Online Stores', href: '#pricing-online-stores' },
  { label: 'Custom Apps', href: '#pricing-custom-web-applications' },
  { label: 'Redesigns', href: '#pricing-website-redesigns' },
  { label: 'Packages', href: '#packages' },
  { label: 'Compare', href: '#comparison' },
  { label: 'FAQ', href: '#pricing-faq' },
]

const everyWebsiteFeatures = [
  { icon: Smartphone, title: 'Mobile-first design', desc: 'Looks great on every device, from phones to desktops.' },
  { icon: Search, title: 'SEO basics', desc: 'Meta tags, sitemap, search console — found on Google from day one.' },
  { icon: Mail, title: 'Contact forms', desc: 'WhatsApp, email and enquiry forms so customers can reach you.' },
  { icon: Server, title: 'Fast hosting setup', desc: 'We deploy your site on fast, reliable hosting with SSL.' },
  { icon: Headphones, title: 'Responsive support', desc: 'Post-launch support included with every project we build.' },
  { icon: Shield, title: 'POPIA-aware', desc: 'Built with South African privacy best practices in mind.' },
]

function PricingFaq() {
  return (
    <div className="space-y-3">
      {homepageFaqs.map((faq, i) => (
        <details
          key={i}
          className="group rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 open:shadow-lg open:border-brand/20"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-navy list-none">
            {faq.question}
            <span className="shrink-0 rounded-full bg-surface p-1.5 transition-transform duration-300 group-open:rotate-45">
              <Plus size={16} className="text-navy" />
            </span>
          </summary>
          <p className="mt-4 text-body leading-relaxed">{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Services & Pricing"
        title="Everything your business needs online."
        description="From a simple landing page to a full business website or custom application — pick a starting point or let us scope something tailored to exactly what you need."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services & Pricing', href: '/pricing' },
        ]}
        accent="online"
        variant="split"
        aside={
          <div className="rounded-2xl border border-line bg-white/80 backdrop-blur-sm shadow-lg p-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-navy">Packages</h3>
              <span className="text-xs font-medium text-muted uppercase" style={{ letterSpacing: '0.1em' }}>From</span>
            </div>
            {packages.slice(0, 5).map((pkg) => (
              <div key={pkg.name} className="flex items-center justify-between py-2 border-b border-line/50 last:border-0">
                <span className="text-sm font-medium text-navy">{pkg.name}</span>
                <span className="text-sm font-semibold text-brand">{pkg.price}</span>
              </div>
            ))}
            <Link
              href="#packages"
              className="flex items-center justify-center gap-2 w-full rounded-full bg-surface text-navy h-11 text-sm font-medium transition-colors hover:bg-blue-tint hover:text-brand mt-4"
            >
              Compare packages
              <ArrowUpRight size={14} />
            </Link>
          </div>
        }
      />

      {/* Sticky Jump List */}
      <div className="sticky z-30 bg-background/80 backdrop-blur border-b border-line" style={{ top: 'var(--sticky-top)' }}>
        <Container>
          <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
            {jumpLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 rounded-full bg-surface px-4 py-2 text-xs font-medium text-body transition-colors hover:bg-blue-tint hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* 7 Service Sections */}
      {services.map((service, idx) => {
        const detail = serviceDetails[service.href.replace('/pricing#pricing-', '').replace('/pricing#', '')]
        const isEven = idx % 2 === 0
        return (
          <Section key={service.href} alt={isEven} id={`pricing-${service.href.replace('/pricing#', '')}`}>
            <Container>
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
                <Reveal>
                  <div className="flex items-center gap-4 mb-6">
                    <IconBox icon={service.icon} size="lg" />
                    <div>
                      <p className="text-xs font-semibold uppercase text-muted mb-1" style={{ letterSpacing: '0.14em' }}>
                        Service {service.number}
                      </p>
                      <h2 className="text-display-sm font-bold text-navy leading-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-lg text-body leading-relaxed mb-6">
                    {detail?.description || service.text}
                  </p>
                  <div className="flex items-center gap-3 mb-6">
                    <Badge variant="brand">{service.price}</Badge>
                    {detail?.timeframe && (
                      <Badge>{detail.timeframe}</Badge>
                    )}
                  </div>
                  <Link
                    href={`/contact?service=${encodeURIComponent(detail?.name || service.title)}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-brand text-white h-12 px-7 text-sm font-medium transition-all duration-300 hover:bg-brand-hover"
                  >
                    Get a quote
                    <ArrowUpRight size={16} className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Reveal>

                {detail && (
                  <Reveal delay={100}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold uppercase text-navy mb-3" style={{ letterSpacing: '0.1em' }}>
                          What's included
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                          {detail.featureGroups.map((group) => (
                            <div key={group.title} className="rounded-xl border border-line bg-white p-4">
                              <p className="text-sm font-semibold text-navy mb-2">{group.title}</p>
                              <ul className="space-y-1.5">
                                {group.items.slice(0, 4).map((item) => (
                                  <li key={item} className="flex items-start gap-2 text-sm text-body">
                                    <Check size={14} className="mt-0.5 shrink-0 text-brand" />
                                    {item}
                                  </li>
                                ))}
                                {group.items.length > 4 && (
                                  <li className="text-xs text-muted">+{group.items.length - 4} more</li>
                                )}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase text-navy mb-3" style={{ letterSpacing: '0.1em' }}>
                          Who it's for
                        </h3>
                        <ul className="space-y-2">
                          {detail.idealFor.slice(0, 3).map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-body">
                              <Check size={14} className="mt-0.5 shrink-0 text-brand" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {detail.domain && (
                        <div className="rounded-xl bg-blue-tint border border-brand/10 p-4">
                          <p className="text-sm font-medium text-navy">{detail.domain}</p>
                        </div>
                      )}
                    </div>
                  </Reveal>
                )}
              </div>
            </Container>
          </Section>
        )
      })}

      {/* Packages */}
      <Section id="packages">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Packages"
              title="Choose your starting point"
              description="Each package is a proven starting point. We'll adjust the scope to fit your exact needs."
              className="mb-12"
            />
          </Reveal>
          <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={100}>
            {packages.map((pack) => (
              <article
                key={pack.name}
                className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                  pack.popular
                    ? 'bg-white ring-2 ring-brand shadow-xl -mt-2'
                    : 'bg-white border border-line shadow-card hover:border-brand/20 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                {pack.popular && (
                  <span className="absolute -top-3 left-8 inline-block rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase text-white" style={{ letterSpacing: '0.05em' }}>
                    Most popular
                  </span>
                )}
                <div>
                  <p className="text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>
                    {pack.name}
                  </p>
                  <h3 className="mt-2 text-display-sm font-bold text-navy">
                    {pack.price}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {pack.description}
                  </p>
                  <p className="mt-2 text-xs text-muted">
                    {pack.timeframe}
                  </p>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span className="text-body">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={pack.href}
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full h-12 px-6 text-sm font-medium transition-all duration-300 ${
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

      {/* What you get with every website */}
      <Section alt>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Every project includes"
              title="What you get with every website"
              description="No matter which package you choose, these essentials come standard."
              className="mb-12"
            />
          </Reveal>
          <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={80}>
            {everyWebsiteFeatures.map((feat) => (
              <div key={feat.title} className="flex items-start gap-4 rounded-2xl bg-white border border-line p-6 shadow-card">
                <IconBox icon={feat.icon} />
                <div>
                  <h3 className="text-sm font-semibold text-navy">{feat.title}</h3>
                  <p className="mt-1 text-sm text-body leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* Comparison table */}
      <Section id="comparison">
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
                    <th className="px-6 py-4 text-xs font-semibold uppercase text-muted sticky left-0 bg-surface z-10" style={{ letterSpacing: '0.14em' }}>
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
                      <td className="px-6 py-4 font-medium text-navy sticky left-0 bg-white z-10">
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

      {/* Add-ons */}
      <Section alt>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Add-ons"
              title="Extend your project"
              description="Add extra features to any service. All add-ons are quoted before work begins."
              className="mb-12"
            />
          </Reveal>
          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={60}>
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between gap-4 rounded-xl border border-line bg-white px-6 py-5 shadow-card"
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

      {/* Pricing FAQ */}
      <Section id="pricing-faq">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Common pricing questions"
              description="Everything you need to know about costs, timelines and what's included."
              className="mb-12"
            />
          </Reveal>
          <Reveal>
            <div className="max-w-3xl mx-auto">
              <PricingFaq />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* CTA */}
      <CTABand
        eyebrow="Ready to begin?"
        title="Let's build something real."
        description="Tell us about your project and we'll send a tailored quote with clear deliverables and timeline."
        primaryHref="/contact"
        primaryLabel="Get your quote"
        secondaryHref="/work"
        secondaryLabel="See our work"
      />
    </>
  )
}
