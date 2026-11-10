import Link from 'next/link'
import { ArrowUpRight, Check, Minus, Smartphone, Search, Mail, Globe, Headphones, Shield, FileText, Clock, RefreshCw, LifeBuoy } from 'lucide-react'
import { services, addons, maintenancePlans, maintenanceNote, comparisonFeatures, keyFaqs, LAST_UPDATED, STUDIO_DESCRIPTION } from '@/lib/constants'
import { faqSchema, webPageSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { PricingFaq } from '@/components/sections/pricing-faq'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { PageHero } from '@/components/ui/page-hero'
import { CTABand } from '@/components/ui/cta-band'
import { IconBox } from '@/components/ui/icon-box'
import { Reveal, RevealStagger } from '@/components/ui/reveal'

export const revalidate = 3600

const everyWebsiteFeatures = [
  { icon: Smartphone, title: 'Mobile-first design', desc: 'Looks great on every device, from phones to desktops.' },
  { icon: Search, title: 'SEO foundations', desc: 'Titles, descriptions, sitemap where applicable. No ranking guarantees.' },
  { icon: Mail, title: 'Clear contact options', desc: 'WhatsApp and a tested contact form so customers can reach you.' },
  { icon: Globe, title: 'Live launch with HTTPS', desc: 'Published live with HTTPS where supported.' },
  { icon: Headphones, title: 'Launch testing and support', desc: 'Tested before launch with a defined support period.' },
  { icon: Shield, title: 'Privacy-conscious build', desc: 'POPIA considered; you remain responsible for your own privacy notices.' },
]

const howPricingWorks = [
  'Prices are in rand for the scope listed; extra work is quoted before it starts.',
  '50% deposit to start, balance before launch; you own the website on full payment.',
  'Timelines start once we have your deposit and content.',
  'Payment gateway fees and third-party subscriptions are paid by you.',
  'You supply text and images unless you add content help.',
  'A revision round is one consolidated list of changes.',
]

const whichOneDoINeed = [
  { need: 'A site for myself or a small business', choose: 'Starter Website', slug: 'starter-website' },
  { need: 'More pages and a stronger enquiry path', choose: 'Business Website', slug: 'business-website' },
  { need: 'I already have a website', choose: 'Website Redesign', slug: 'website-redesign' },
  { need: 'To sell products online', choose: 'Online Store', slug: 'online-store' },
  { need: 'Logins, dashboards or bookings', choose: 'Custom Web Application', slug: 'custom-web-application' },
]

const lastUpdatedLabel = new Date(LAST_UPDATED).toLocaleDateString('en-ZA', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

const structuredData = [
  webPageSchema({
    path: '/pricing',
    name: 'Website design prices in South Africa',
    description: STUDIO_DESCRIPTION,
    dateModified: LAST_UPDATED,
  }),
  faqSchema(keyFaqs),
]

export default function PricingPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      {/* Hero */}
      <PageHero
        eyebrow="Services & Pricing"
        title="Everything your business needs online."
        description="From a starter website to a full business website or custom application — pick a starting point or let us scope something tailored to exactly what you need."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services & Pricing', href: '/pricing' },
        ]}
        accent="online"
        variant="centered"
      />

      <div className="border-b border-line bg-surface/60">
        <Container>
          <p className="py-3 text-center text-xs text-muted">
            Prices last updated:{' '}
            <time dateTime={LAST_UPDATED}>{lastUpdatedLabel}</time>. All prices are in
            South African rand (ZAR).
          </p>
        </Container>
      </div>

      {/* Which one do I need? */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Find your service"
              title="Which one do I need?"
              className="mb-8"
            />
          </Reveal>
          <Reveal>
            <div className="max-w-3xl mx-auto space-y-3">
              {whichOneDoINeed.map((item) => (
                <a
                  key={item.slug}
                  href={`#${item.slug}`}
                  className="flex items-center justify-between gap-4 rounded-xl border border-line bg-white px-6 py-4 shadow-card transition-all hover:border-brand/20 hover:shadow-lg"
                >
                  <span className="text-sm text-body">I need... {item.need}</span>
                  <span className="shrink-0 text-sm font-semibold text-brand">{item.choose} →</span>
                </a>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Service cards */}
      <Section alt>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our services"
              title="Choose your starting point"
              description="Each service is a proven starting point. We'll adjust the scope to fit your exact needs."
              className="mb-12"
            />
          </Reveal>
          <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={100}>
            {services.map((svc) => {
              const isPopular = svc.popular === true
              return (
                <article
                  key={svc.slug}
                  id={svc.slug}
                  className={`relative flex flex-col rounded-2xl transition-all duration-300 ${
                    isPopular
                      ? 'bg-dark-panel shadow-2xl -mt-2 ring-2 ring-brand'
                      : 'bg-white border border-line shadow-card hover:border-brand/20 hover:shadow-lg'
                  }`}
                >
                  {isPopular && (
                    <span className="absolute -top-3 left-8 inline-block rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase text-white" style={{ letterSpacing: '0.05em' }}>
                      Most popular
                    </span>
                  )}
                  <div className="p-7 pb-0">
                    <p className={`text-sm font-bold uppercase ${isPopular ? 'text-white/70' : 'text-muted'}`} style={{ letterSpacing: '0.14em' }}>
                      {svc.name}
                    </p>
                    <p className={`mt-2 text-sm italic ${isPopular ? 'text-white' : 'text-body'}`}>
                      {svc.tagline}
                    </p>
                    <div className="mt-4 flex items-baseline gap-1">
                      {svc.priceLabel.startsWith('From') && (
                        <span className={`text-xs ${isPopular ? 'text-white/70' : 'text-muted'}`}>From</span>
                      )}
                      <h3 className={`text-display-sm font-bold ${isPopular ? 'text-white' : 'text-navy'}`}>
                        {svc.priceLabel.replace('From ', '')}
                      </h3>
                    </div>
                    <div className="mt-3">
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${isPopular ? 'bg-brand/20 text-white/70' : 'bg-surface text-navy'}`}>
                        Best for: {svc.bestFor}
                      </span>
                    </div>
                  </div>

                  {/* Facts grid */}
                  <div className="mt-6 px-7 grid grid-cols-2 gap-3">
                    <div className={`flex items-center gap-2 rounded-lg p-2.5 ${isPopular ? 'bg-white/5' : 'bg-surface'}`}>
                      <FileText size={14} className={isPopular ? 'text-white/40' : 'text-muted'} />
                      <div>
                        <p className={`text-[10px] uppercase ${isPopular ? 'text-white/40' : 'text-muted'}`} style={{ letterSpacing: '0.1em' }}>Pages</p>
                        <p className={`text-xs font-medium ${isPopular ? 'text-white/70' : 'text-navy'}`}>{svc.facts.pages}</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 rounded-lg p-2.5 ${isPopular ? 'bg-white/5' : 'bg-surface'}`}>
                      <Clock size={14} className={isPopular ? 'text-white/40' : 'text-muted'} />
                      <div>
                        <p className={`text-[10px] uppercase ${isPopular ? 'text-white/40' : 'text-muted'}`} style={{ letterSpacing: '0.1em' }}>Timeline</p>
                        <p className={`text-xs font-medium ${isPopular ? 'text-white/70' : 'text-navy'}`}>{svc.facts.timeline}</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 rounded-lg p-2.5 ${isPopular ? 'bg-white/5' : 'bg-surface'}`}>
                      <RefreshCw size={14} className={isPopular ? 'text-white/40' : 'text-muted'} />
                      <div>
                        <p className={`text-[10px] uppercase ${isPopular ? 'text-white/40' : 'text-muted'}`} style={{ letterSpacing: '0.1em' }}>Revisions</p>
                        <p className={`text-xs font-medium ${isPopular ? 'text-white/70' : 'text-navy'}`}>{svc.facts.revisions}</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 rounded-lg p-2.5 ${isPopular ? 'bg-white/5' : 'bg-surface'}`}>
                      <LifeBuoy size={14} className={isPopular ? 'text-white/40' : 'text-muted'} />
                      <div>
                        <p className={`text-[10px] uppercase ${isPopular ? 'text-white/40' : 'text-muted'}`} style={{ letterSpacing: '0.1em' }}>Support</p>
                        <p className={`text-xs font-medium ${isPopular ? 'text-white/70' : 'text-navy'}`}>{svc.facts.support}</p>
                      </div>
                    </div>
                  </div>

                  {/* Included checklist */}
                  <div className="mt-6 px-7 flex-1">
                    <ul className="space-y-2.5">
                      {svc.included.map((item, idx) => {
                        const isLabel = item.endsWith(':')
                        return (
                          <li key={idx} className="flex items-start gap-3 text-sm">
                            <Check aria-hidden="true" className={`mt-0.5 h-4 w-4 shrink-0 ${isPopular ? 'text-brand' : 'text-brand'}`} />
                            <span className={isLabel ? (isPopular ? 'text-white/50 text-xs italic' : 'text-muted text-xs italic') : (isPopular ? 'text-white/60' : 'text-body')}>
                              {item}
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                  {/* Not included */}
                  {svc.notIncluded.length > 0 && (
                  <div className="mt-6 px-7">
                    <p className={`text-xs font-semibold uppercase mb-2 ${isPopular ? 'text-white/40' : 'text-muted'}`} style={{ letterSpacing: '0.1em' }}>
                      Not included
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {svc.notIncluded.map((item, idx) => (
                        <span
                          key={idx}
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs ${isPopular ? 'bg-white/5 text-white/40' : 'bg-surface text-muted'}`}
                        >
                          <Minus size={10} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  )}

                  {/* Actions */}
                  <div className="p-7 pt-6 flex flex-col gap-3">
                    <Link
                      href={`/contact?service=${encodeURIComponent(svc.name)}`}
                      className={`inline-flex items-center justify-center gap-2 rounded-full h-12 px-6 text-sm font-medium transition-all duration-300 ${
                        isPopular
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

      {/* Price list table */}
      <Section id="price-list">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Price list"
              title="All prices at a glance"
              description="The same list that powers our quotes and structured data. Every price is in South African rand."
              className="mb-10"
            />
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-line shadow-card">
              <table className="w-full min-w-[720px] text-left text-sm">
                <caption className="sr-only">
                  WEB-IN website design prices in South African rand
                </caption>
                <thead>
                  <tr className="border-b border-line bg-surface">
                    <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Service</th>
                    <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Price</th>
                    <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>What is included</th>
                    <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Delivery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {services.map((svc) => (
                    <tr key={svc.slug} className="hover:bg-surface/50 transition-colors">
                      <th scope="row" className="px-6 py-4 font-semibold text-navy align-top">{svc.name}</th>
                      <td className="px-6 py-4 whitespace-nowrap text-navy align-top">{svc.priceLabel}</td>
                      <td className="px-6 py-4 text-body align-top">{svc.summary}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-body align-top">{svc.facts.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="overflow-x-auto rounded-2xl border border-line shadow-card">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">WEB-IN add-on prices</caption>
                  <thead>
                    <tr className="border-b border-line bg-surface">
                      <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Add-on</th>
                      <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {addons.map((addon) => (
                      <tr key={addon.name}>
                        <th scope="row" className="px-6 py-3 font-medium text-navy">{addon.name}</th>
                        <td className="px-6 py-3 whitespace-nowrap text-body">{addon.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-line shadow-card">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">WEB-IN monthly maintenance plans</caption>
                  <thead>
                    <tr className="border-b border-line bg-surface">
                      <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Maintenance plan</th>
                      <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Price</th>
                      <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Includes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {maintenancePlans.map((plan) => (
                      <tr key={plan.name}>
                        <th scope="row" className="px-6 py-3 font-medium text-navy align-top">{plan.name}</th>
                        <td className="px-6 py-3 whitespace-nowrap text-body align-top">{plan.price}/month</td>
                        <td className="px-6 py-3 text-body align-top">{plan.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
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
              <table className="w-full min-w-[900px] text-left text-sm">
                <thead>
                  <tr className="border-b border-line bg-surface">
                    <th className="px-6 py-4 text-xs font-semibold uppercase text-muted sticky left-0 bg-surface z-10" style={{ letterSpacing: '0.14em' }}>
                      Feature
                    </th>
                    {services.map((svc) => (
                      <th
                        key={svc.slug}
                        className={`px-6 py-4 text-xs font-semibold uppercase ${svc.popular ? 'text-brand' : 'text-muted'}`}
                        style={{ letterSpacing: '0.14em' }}
                      >
                        {svc.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {comparisonFeatures.map((row) => (
                    <tr key={row.feature} className="hover:bg-surface/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-navy sticky left-0 bg-white z-10">
                        {row.feature}
                      </td>
                      {(['business', 'starter', 'redesign', 'store', 'app'] as const).map((col) => {
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
                          <td key={col} className={`px-6 py-4 ${col === 'business' ? 'font-medium text-navy' : 'text-body'}`}>
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

      {/* Care plans */}
      <Section dark>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Care plans"
              title="Ongoing support"
              description="Optional monthly plans to keep your website running smoothly after launch."
              light
              className="mb-12"
            />
          </Reveal>
          <RevealStagger className="grid gap-6 sm:grid-cols-2" stagger={100}>
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
          <p className="mt-8 text-center text-sm text-white/50">{maintenanceNote}</p>
        </Container>
      </Section>

      {/* Included with every website */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Every project includes"
              title="What you get with every website"
              description="No matter which service you choose, these essentials come standard."
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

      {/* How pricing works */}
      <Section alt>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Transparent process"
              title="How pricing works"
              className="mb-8"
            />
          </Reveal>
          <Reveal>
            <ul className="max-w-3xl mx-auto space-y-3">
              {howPricingWorks.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-body">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
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
