import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services, SITE_URL, STUDIO_NAME } from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal, RevealStagger } from '@/components/ui/reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Design Services in South Africa | WEB-IN',
  description: 'Professional website design services in South Africa. Business websites, portfolios, landing pages, online stores, booking systems and custom web applications.',
  alternates: {
    canonical: 'https://web-in.co.za/services',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: `${SITE_URL}/services`,
    },
  ],
}

const serviceJsonLd = services.map((service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  description: service.text,
  provider: {
    '@type': 'Organization',
    name: STUDIO_NAME,
    url: SITE_URL,
  },
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
}))

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, ...serviceJsonLd]) }}
      />
      <Section dark className="pb-20 sm:pb-28">
        <Container>
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">
              What we build
            </p>
            <h1 className="font-display text-display-xl leading-tight tracking-tight">
              Website Design Services
              <br />
              <em className="italic text-accent">in South Africa.</em>
            </h1>
            <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-cream/60">
              From a simple landing page to a full business website or custom
              application — we build modern, fast websites that help South African
              businesses grow online.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Everything you need online"
              description="Professional web development services with transparent pricing. Every project includes responsive design, SEO basics, and ongoing support."
              center
              className="mx-auto mb-14"
            />
          </Reveal>

          <RevealStagger
            stagger={80}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group relative flex flex-col rounded-2xl border border-line bg-cream-light p-8 transition-all duration-300 ease-out-expo hover:border-ink/20 hover:shadow-[0_0_0_1px_rgba(12,12,14,0.08)]"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-ink/5 group-hover:bg-ink/10 transition-colors">
                      <Icon aria-hidden="true" size={24} className="text-muted" />
                    </div>
                    <ArrowUpRight
                      aria-hidden="true"
                      size={20}
                      className="text-muted/40 group-hover:text-ink transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-xs text-muted mb-2">{service.number}</p>
                    <h3 className="font-display text-display-sm leading-snug tracking-tight mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {service.text}
                    </p>
                  </div>
                  <p className="font-mono text-sm font-semibold text-ink">
                    {service.price}
                  </p>
                </Link>
              )
            })}
          </RevealStagger>
        </Container>
      </Section>

      {/* How We Work Section */}
      <Section className="!pt-0">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="A clear process from start to finish"
              description="Every project follows our proven 5-phase process: discover, design, build, test, launch. Transparent communication and no surprises."
              center
              className="mx-auto mb-14"
            />
          </Reveal>

          <RevealStagger
            stagger={80}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { number: '01', title: 'Discover', text: 'We learn about your business, goals and audience.' },
              { number: '02', title: 'Design', text: 'We create a custom design tailored to your brand.' },
              { number: '03', title: 'Build', text: 'We develop your website with clean, modern code.' },
              { number: '04', title: 'Launch', text: 'We test everything and deploy your live website.' },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-line bg-cream-light p-6"
              >
                <p className="font-mono text-xs text-muted mb-3">{step.number}</p>
                <h3 className="font-display text-xl leading-snug tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </RevealStagger>

          <Reveal>
            <div className="mt-10 text-center">
              <Link
                href="/process"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-ink transition-colors"
              >
                Learn more about our process
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* FAQs Section */}
      <Section className="bg-cream-light !pt-0">
        <Container narrow>
          <Reveal>
            <SectionHeading
              eyebrow="FAQs"
              title="Common questions about our services"
              center
              className="mx-auto mb-10"
            />
          </Reveal>

          <RevealStagger stagger={80} className="space-y-4">
            {[
              {
                q: 'How long does it take to build a website?',
                a: 'Most projects take 2-4 weeks from start to launch. Landing pages can be completed in 1-2 weeks, while complex business websites or online stores may take 4-6 weeks.',
              },
              {
                q: 'Do I own my website after it\'s built?',
                a: 'Yes, absolutely. Once your website is complete and paid for, you own everything — the design, code, content and domain. Full ownership, no lock-in.',
              },
              {
                q: 'Can you help with hosting and domain names?',
                a: 'Yes. We can help you register a domain name and set up hosting. We recommend reliable South African or international hosting providers based on your needs.',
              },
              {
                q: 'Do you provide ongoing support after launch?',
                a: 'Yes. Every project includes 30 days of post-launch support. We also offer monthly maintenance plans for ongoing updates, security and backups.',
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-line bg-cream p-6 open:shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-display text-lg leading-snug tracking-tight pr-4">
                    {faq.q}
                  </h3>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ink/5 flex items-center justify-center group-open:rotate-45 transition-transform">
                    <ArrowUpRight size={14} className="text-muted" />
                  </span>
                </summary>
                <p className="mt-4 text-muted leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </RevealStagger>

          <Reveal>
            <div className="mt-10 text-center">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-ink transition-colors"
              >
                View all frequently asked questions
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="!pt-0">
        <Container narrow>
          <Reveal>
            <div className="rounded-2xl bg-ink text-cream px-8 py-14 sm:px-14 sm:py-18 text-center overflow-hidden relative">
              <div className="absolute inset-0 grain grain-dark opacity-40" />
              <div className="relative z-10">
                <h2 className="font-display text-display-md leading-tight tracking-tight mb-5">
                  Not sure which service you need?
                </h2>
                <p className="text-cream/60 text-lg leading-relaxed max-w-[520px] mx-auto mb-8">
                  Tell us about your project and we'll recommend the best approach
                  with a clear quote and timeline.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-7 py-3.5 text-base font-medium transition-all duration-300 ease-out-expo hover:bg-accent-dark"
                >
                  Get your quote
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
