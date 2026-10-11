'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Check, Smartphone, Search, Mail, Server, Headphones, Shield, Plus, ChevronDown } from 'lucide-react'
import { services, packages, addons, maintenancePlans, comparisonFeatures, serviceDetails, homepageFaqs, STUDIO_NAME, SITE_URL, STUDIO_EMAIL } from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { PageHero } from '@/components/ui/page-hero'
import { CTABand } from '@/components/ui/cta-band'
import { IconBox } from '@/components/ui/icon-box'
import { Badge } from '@/components/ui/badge'
import { Reveal, RevealStagger } from '@/components/ui/reveal'

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
  const [expandedPkg, setExpandedPkg] = useState<string | null>(null)

  const togglePkg = (name: string) => {
    setExpandedPkg(expandedPkg === name ? null : name)
  }

  // Service structured data for SEO
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: STUDIO_NAME,
    url: SITE_URL,
    email: STUDIO_EMAIL,
    description: 'Independent web development studio offering professional website design and development services in South Africa.',
    areaServed: {
      '@type': 'Country',
      name: 'South Africa',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: packages.map((pkg, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          name: pkg.name,
          description: pkg.description,
        },
        price: pkg.price.replace(/[^0-9]/g, ''),
        priceCurrency: 'ZAR',
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
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
        variant="centered"
      />

      {/* What you get with every website */}
      <Section>
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

      {/* Packages — main section */}
      <Section id="packages" alt>
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
            {packages.map((pack) => {
              const isExpanded = expandedPkg === pack.name
              const serviceKey = pack.href.replace('/pricing#', '').replace('-websites', '').replace('-pages', '')
              const detail = serviceDetails[serviceKey] || serviceDetails[pack.name.toLowerCase()]
              return (
                <article
                  key={pack.name}
                  className={`relative flex flex-col rounded-2xl transition-all duration-300 ${
                    pack.popular
                      ? 'bg-dark-panel shadow-2xl -mt-2'
                      : 'bg-white border border-line shadow-card hover:border-brand/20 hover:shadow-lg'
                  }`}
                >
                  {pack.popular && (
                    <span className="absolute -top-3 left-8 inline-block rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase text-white" style={{ letterSpacing: '0.05em' }}>
                      Most popular
                    </span>
                  )}
                  <div className="p-7 pb-0">
                    <p className={`text-xs font-semibold uppercase ${pack.popular ? 'text-white/40' : 'text-muted'}`} style={{ letterSpacing: '0.14em' }}>
                      {pack.name}
                    </p>
                    <h3 className={`mt-2 text-display-sm font-bold ${pack.popular ? 'text-white' : 'text-navy'}`}>
                      {pack.price}
                    </h3>
                    <p className={`mt-3 text-sm leading-relaxed ${pack.popular ? 'text-white/50' : 'text-body'}`}>
                      {pack.description}
                    </p>
                    <p className={`mt-2 text-xs ${pack.popular ? 'text-white/35' : 'text-muted'}`}>
                      {pack.timeframe}
                    </p>
                  </div>

                  {/* Features — always visible */}
                  <ul className="mt-6 px-7 flex-1 space-y-2.5">
                    {pack.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        <span className={pack.popular ? 'text-white/60' : 'text-body'}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expanded details */}
                  {isExpanded && detail && (
                    <div className={`mt-4 mx-7 pt-4 border-t ${pack.popular ? 'border-white/10' : 'border-line'} space-y-4`}>
                      {detail.featureGroups.map((group) => (
                        <div key={group.title}>
                          <p className={`text-xs font-semibold uppercase ${pack.popular ? 'text-white/70' : 'text-navy'} mb-2`} style={{ letterSpacing: '0.1em' }}>{group.title}</p>
                          <ul className="space-y-1.5">
                            {group.items.map((item) => (
                              <li key={item} className={`flex items-start gap-2 text-sm ${pack.popular ? 'text-white/50' : 'text-body'}`}>
                                <Check size={13} className="mt-0.5 shrink-0 text-brand" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {detail.idealFor.length > 0 && (
                        <div>
                          <p className={`text-xs font-semibold uppercase ${pack.popular ? 'text-white/70' : 'text-navy'} mb-2`} style={{ letterSpacing: '0.1em' }}>Who it's for</p>
                          <ul className="space-y-1.5">
                            {detail.idealFor.slice(0, 3).map((item) => (
                              <li key={item} className={`flex items-start gap-2 text-sm ${pack.popular ? 'text-white/50' : 'text-body'}`}>
                                <Check size={13} className="mt-0.5 shrink-0 text-brand" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="p-7 pt-5 flex flex-col gap-3">
                    {/* Expand/collapse details */}
                    {detail && (
                      <button
                        onClick={() => togglePkg(pack.name)}
                        className={`flex items-center justify-center gap-2 text-sm font-medium transition-colors ${pack.popular ? 'text-white/50 hover:text-white' : 'text-body hover:text-brand'}`}
                      >
                        {isExpanded ? 'Hide details' : 'View full details'}
                        <ChevronDown size={15} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                    <Link
                      href={`/contact?service=${encodeURIComponent(detail?.name || pack.name)}`}
                      className={`inline-flex items-center justify-center gap-2 rounded-full h-12 px-6 text-sm font-medium transition-all duration-300 ${
                        pack.popular
                          ? 'bg-brand text-white hover:bg-brand-hover'
                          : 'border border-line text-navy hover:bg-surface'
                      }`}
                    >
                      Get a quote <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              )
            })}
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
