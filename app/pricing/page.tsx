import Link from 'next/link'
import {
  ArrowUpRight,
  Check,
  Minus,
  Smartphone,
  Search,
  Mail,
  Globe,
  Headphones,
  Shield,
  FileText,
  Clock,
  RefreshCw,
  LifeBuoy,
  Wallet,
  Repeat,
} from 'lucide-react'
import {
  services,
  addons,
  comparisonFeatures,
  keyFaqs,
  LAST_UPDATED,
  STUDIO_DESCRIPTION,
  ONCE_OFF_NOTE,
} from '@/lib/constants'
import { breadcrumbSchema, faqSchema, webPageSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { PricingFaq } from '@/components/sections/pricing-faq'
import { CarePlanCards, CarePlanNotes } from '@/components/sections/care-plans'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { PageHero } from '@/components/ui/page-hero'
import { CTABand } from '@/components/ui/cta-band'
import { IconBox } from '@/components/ui/icon-box'
import { Reveal, RevealStagger } from '@/components/ui/reveal'
import { PricingDealSection } from '@/components/promo/pricing-deal-section'
import { isBlackFridayActive, withBlackFridayFaq } from '@/lib/promo'

export const revalidate = 3600

const everyWebsiteFeatures = [
  { icon: Smartphone, title: 'Mobile-first design', desc: 'Looks great on every device, from phones to desktops.' },
  { icon: Search, title: 'SEO foundations', desc: 'Titles, descriptions, sitemap where applicable. No ranking guarantees.' },
  { icon: Mail, title: 'Clear contact options', desc: 'WhatsApp and a tested contact form so customers can reach you.' },
  { icon: Globe, title: 'Live launch with HTTPS', desc: 'Published live with HTTPS where supported.' },
  { icon: Headphones, title: 'Launch testing and support', desc: 'Tested before launch with a defined support period.' },
  { icon: Shield, title: 'Privacy-conscious build', desc: 'POPIA considered; you remain responsible for your own privacy notices.' },
]

const whichOneDoINeed = [
  { need: 'A site for myself or a small business', choose: 'Starter Website', href: '#starter-website' },
  { need: 'More pages and a stronger enquiry path', choose: 'Business Website', href: '#business-website' },
  { need: 'I already have a website', choose: 'Website Redesign', href: '#website-redesign' },
  { need: 'To sell products online', choose: 'Online Store', href: '#online-store' },
  { need: 'Logins, dashboards or bookings', choose: 'Custom Web Application', href: '#custom-web-application' },
  { need: 'Someone to run the technical side after launch', choose: 'Website Care & Management', href: '#care-plans' },
]

const lastUpdatedLabel = new Date(LAST_UPDATED).toLocaleDateString('en-ZA', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export default function PricingPage() {
  const structuredData = [
    webPageSchema({
      path: '/pricing',
      name: 'Website design and care prices in South Africa',
      description: STUDIO_DESCRIPTION,
      dateModified: LAST_UPDATED,
    }),
    breadcrumbSchema([
      { label: 'Home', href: '/' },
      { label: 'Services & Pricing', href: '/pricing' },
    ]),
    faqSchema(withBlackFridayFaq(keyFaqs)),
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      <PageHero
        eyebrow="Services & Pricing"
        title="Everything your business needs online."
        description="Design and development is once-off. Ongoing care is optional. Pick a starting point, or choose a monthly plan and we manage the technical side after launch."
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

      {/* How pricing works */}
      <Section tight>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How pricing works"
              title="Two separate decisions."
              description="Build the website once. Choose ongoing care only if you want us to run the technical side."
              className="mb-10"
            />
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card sm:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-tint">
                  <Wallet aria-hidden="true" className="h-5 w-5 text-brand" />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase text-brand" style={{ letterSpacing: '0.14em' }}>
                  Step 1 — Once-off
                </p>
                <h3 className="mt-2 text-xl font-bold text-navy">Pay once for the build.</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  You pay a once-off fee for design and development. When it is paid in full, your
                  website, its content and your domain are yours. No monthly fee is required to keep
                  them.
                </p>
                <p className="mt-4 text-sm font-medium text-navy">{ONCE_OFF_NOTE}</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card sm:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-tint">
                  <Repeat aria-hidden="true" className="h-5 w-5 text-brand" />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase text-brand" style={{ letterSpacing: '0.14em' }}>
                  Step 2 — Optional monthly
                </p>
                <h3 className="mt-2 text-xl font-bold text-navy">Add care if you want us to run it.</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  A monthly plan covers hosting management, business email within the allowance,
                  SSL and uptime checks, security updates, backups where supported, small content
                  changes and support. You can skip it entirely.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Which one do I need? */}
      <Section alt>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Find your service" title="Which one do I need?" className="mb-8" />
          </Reveal>
          <Reveal>
            <div className="mx-auto max-w-3xl space-y-3">
              {whichOneDoINeed.map((item) => (
                <a
                  key={item.choose}
                  href={item.href}
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

      {/* Development services */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Website design & development"
              title="Choose your starting point."
              description="Each service is a proven starting point, quoted once-off with a defined scope. We adjust the scope to fit your exact needs."
              className="mb-12"
            />
          </Reveal>
          {isBlackFridayActive() && <PricingDealSection />}
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
                    <div className="mt-2">
                      <span className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase ${isPopular ? 'bg-brand/20 text-white' : 'bg-blue-tint text-brand-hover'}`} style={{ letterSpacing: '0.08em' }}>
                        Once-off
                      </span>
                    </div>
                    <p className={`mt-3 text-xs ${isPopular ? 'text-white/50' : 'text-muted'}`}>
                      {ONCE_OFF_NOTE}
                    </p>
                    <div className="mt-3">
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${isPopular ? 'bg-brand/20 text-white/70' : 'bg-surface text-navy'}`}>
                        Best for: {svc.bestFor}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 px-7 grid grid-cols-2 gap-3">
                    <div className={`flex items-center gap-2 rounded-lg p-2.5 ${isPopular ? 'bg-white/5' : 'bg-surface'}`}>
                      <FileText size={14} className={isPopular ? 'text-white/60' : 'text-muted'} />
                      <div>
                        <p className={`text-[10px] uppercase ${isPopular ? 'text-white/60' : 'text-muted'}`} style={{ letterSpacing: '0.1em' }}>Pages</p>
                        <p className={`text-xs font-medium ${isPopular ? 'text-white/70' : 'text-navy'}`}>{svc.facts.pages}</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 rounded-lg p-2.5 ${isPopular ? 'bg-white/5' : 'bg-surface'}`}>
                      <Clock size={14} className={isPopular ? 'text-white/60' : 'text-muted'} />
                      <div>
                        <p className={`text-[10px] uppercase ${isPopular ? 'text-white/60' : 'text-muted'}`} style={{ letterSpacing: '0.1em' }}>Timeline</p>
                        <p className={`text-xs font-medium ${isPopular ? 'text-white/70' : 'text-navy'}`}>{svc.facts.timeline}</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 rounded-lg p-2.5 ${isPopular ? 'bg-white/5' : 'bg-surface'}`}>
                      <RefreshCw size={14} className={isPopular ? 'text-white/60' : 'text-muted'} />
                      <div>
                        <p className={`text-[10px] uppercase ${isPopular ? 'text-white/60' : 'text-muted'}`} style={{ letterSpacing: '0.1em' }}>Revisions</p>
                        <p className={`text-xs font-medium ${isPopular ? 'text-white/70' : 'text-navy'}`}>{svc.facts.revisions}</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 rounded-lg p-2.5 ${isPopular ? 'bg-white/5' : 'bg-surface'}`}>
                      <LifeBuoy size={14} className={isPopular ? 'text-white/60' : 'text-muted'} />
                      <div>
                        <p className={`text-[10px] uppercase ${isPopular ? 'text-white/60' : 'text-muted'}`} style={{ letterSpacing: '0.1em' }}>Support</p>
                        <p className={`text-xs font-medium ${isPopular ? 'text-white/70' : 'text-navy'}`}>{svc.facts.support}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 px-7 flex-1">
                    <ul className="space-y-2.5">
                      {svc.included.map((item, idx) => {
                        const isLabel = item.endsWith(':')
                        return (
                          <li key={idx} className="flex items-start gap-3 text-sm">
                            <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                            <span className={isLabel ? (isPopular ? 'text-white/50 text-xs italic' : 'text-muted text-xs italic') : (isPopular ? 'text-white/60' : 'text-body')}>
                              {item}
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                  {svc.notIncluded.length > 0 && (
                  <div className="mt-6 px-7">
                    <p className={`text-xs font-semibold uppercase mb-2 ${isPopular ? 'text-white/60' : 'text-muted'}`} style={{ letterSpacing: '0.1em' }}>
                      Not included
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {svc.notIncluded.map((item, idx) => (
                        <span
                          key={idx}
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs ${isPopular ? 'bg-white/5 text-white/60' : 'bg-surface text-muted'}`}
                        >
                          <Minus size={10} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  )}

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

      {/* Price list */}
      <Section alt id="price-list">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Price list"
              title="All once-off prices at a glance"
              description="The same list that powers our quotes and structured data. Every price is in South African rand."
              className="mb-10"
            />
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-line shadow-card">
              <table className="w-full min-w-[760px] text-left text-sm">
                <caption className="sr-only">
                  WEB-IN once-off website design prices in South African rand
                </caption>
                <thead>
                  <tr className="border-b border-line bg-surface">
                    <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Service</th>
                    <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Price</th>
                    <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Billing</th>
                    <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Delivery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {services.map((svc) => (
                    <tr key={svc.slug} className="hover:bg-surface/50 transition-colors">
                      <th scope="row" className="px-6 py-4 font-semibold text-navy align-top">{svc.name}</th>
                      <td className="px-6 py-4 whitespace-nowrap text-navy align-top">{svc.priceLabel}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-body align-top">Once-off</td>
                      <td className="px-6 py-4 whitespace-nowrap text-body align-top">{svc.facts.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-line bg-white shadow-card">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">WEB-IN add-on prices</caption>
                <thead>
                  <tr className="border-b border-line bg-surface">
                    <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Add-on</th>
                    <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Price</th>
                    <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Billing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {addons.map((addon) => (
                    <tr key={addon.name}>
                      <th scope="row" className="px-6 py-3 font-medium text-navy">{addon.name}</th>
                      <td className="px-6 py-3 whitespace-nowrap text-body">{addon.price}</td>
                      <td className="px-6 py-3 whitespace-nowrap text-muted">
                        {addon.name.includes('Domain registration') ? 'Renewed annually' : 'Once-off'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Care plans */}
      <Section id="care-plans">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Website Care & Management"
              title="More than a website launch."
              description="We can continue managing the technical side after the site goes live: hosting, domain and DNS, business email, updates, checks, backups and support. Monthly plans, billed in advance, cancel per the terms."
              className="mb-12"
            />
          </Reveal>

          <CarePlanCards />

          <CarePlanNotes />

          <Reveal>
            <div className="mt-8 flex justify-center">
              <Link
                href="/website-care-management"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-navy px-7 text-sm font-medium text-white transition-colors hover:bg-navy/90"
              >
                Compare care plans
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Comparison table (development) */}
      <Section alt id="comparison">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Compare development services" title="Side by side" className="mb-12" />
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-line shadow-card">
              <table className="w-full min-w-[900px] text-left text-sm">
                <caption className="sr-only">WEB-IN development services compared</caption>
                <thead>
                  <tr className="border-b border-line bg-surface">
                    <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase text-muted sticky left-0 bg-surface z-10" style={{ letterSpacing: '0.14em' }}>
                      Feature
                    </th>
                    {services.map((svc) => (
                      <th
                        key={svc.slug}
                        scope="col"
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
                      <th scope="row" className="px-6 py-4 font-medium text-navy sticky left-0 bg-white z-10">
                        {row.feature}
                      </th>
                      {(['business', 'starter', 'redesign', 'store', 'app'] as const).map((col) => {
                        const val = row[col]
                        if (val === true)
                          return (
                            <td key={col} className="px-6 py-4">
                              <Check aria-label="Included" className="h-4 w-4 text-brand" />
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
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Add-ons"
              title="Extend your build."
              description="Once-off additions to any development package. Everything is quoted before work begins."
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

      {/* Included with every website */}
      <Section alt>
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

      {/* Pricing FAQ */}
      <Section id="pricing-faq">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Common pricing questions"
              description="Costs, billing, ownership and what happens after launch."
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
