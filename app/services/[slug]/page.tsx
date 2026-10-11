import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Check, Clock, Globe } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal, RevealStagger } from '@/components/ui/reveal'
import { serviceDetails, SITE_URL, STUDIO_NAME } from '@/lib/constants'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const detail = serviceDetails[slug]
  if (!detail) return {}
  return {
    title: `${detail.name} | Web Development Services`,
    description: `${detail.intro} Professional ${detail.name.toLowerCase()} in South Africa. From ${detail.price}. Clear scope, no hidden costs.`,
    alternates: {
      canonical: `${SITE_URL}/services/${slug}`,
    },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const detail = serviceDetails[slug]
  if (!detail) notFound()

  const serviceHref = `/contact?service=${encodeURIComponent(detail.name)}`

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: detail.name,
    description: detail.description,
    provider: {
      '@type': 'Organization',
      name: STUDIO_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'South Africa',
    },
    offers: {
      '@type': 'Offer',
      price: detail.price.replace(/[^0-9,]/g, ''),
      priceCurrency: 'ZAR',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {/* ─── HERO ─── */}
      <section className="relative bg-dark-panel text-white overflow-hidden">
        <Container className="relative z-10 py-28 sm:py-36 md:py-44">
          <div className="max-w-[800px]">
            <Reveal>
              <p className="text-xs font-semibold uppercase text-brand mb-6" style={{ letterSpacing: '0.14em' }}>
                {detail.name}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-hero font-extrabold leading-tight tracking-tight mb-8">
                {detail.intro}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-[600px]">
                {detail.description}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── FEATURE GROUPS ─── */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What you get"
              title={<>All the essentials,<br /><span className="text-brand">ready to go.</span></>}
              center
              className="mx-auto mb-14"
            />
          </Reveal>

          <RevealStagger
            stagger={80}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {detail.featureGroups.map((group) => {
              const Icon = group.icon
              return (
                <div
                  key={group.title}
                  className="rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-300 ease-out-expo hover:border-brand/20 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-tint/60">
                      <Icon aria-hidden="true" size={20} className="text-brand" />
                    </div>
                    <h3 className="text-xl font-bold leading-snug tracking-tight text-navy">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] text-muted leading-snug">
                        <Check aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-brand-hover" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </RevealStagger>
        </Container>
      </Section>

      {/* ─── IDEAL FOR ─── */}
      <Section className="!pt-0">
        <Container>
          <Reveal>
            <div className="rounded-2xl border border-line bg-white p-8 sm:p-12 shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div>
                  <p className="text-xs font-semibold uppercase text-muted mb-4" style={{ letterSpacing: '0.14em' }}>
                    Built for
                  </p>
                  <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-navy">
                    Is this
                    <br />
                    <span className="text-brand">right for you?</span>
                  </h2>
                </div>
                <ul className="space-y-4">
                  {detail.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base leading-snug text-body">
                      <Check aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-brand-hover" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ─── INVESTMENT / DOMAIN ─── */}
      <Section className="!pt-0">
        <Container>
          <Reveal>
            <div className="rounded-2xl bg-dark-panel text-white px-8 py-14 sm:px-14 sm:py-18">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-xs font-semibold uppercase text-white/40 mb-3" style={{ letterSpacing: '0.14em' }}>
                    Investment
                  </p>
                  <h2 className="text-3xl font-extrabold leading-tight tracking-tight mb-2">
                    {detail.price}
                  </h2>
                  <p className="text-white/50 text-[15px] leading-relaxed">
                    Final scope is confirmed before work begins.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10">
                      <Clock aria-hidden="true" size={18} className="text-white/60" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase text-white/40 mb-1" style={{ letterSpacing: '0.14em' }}>
                        Timeline
                      </p>
                      <p className="text-base font-bold text-white">
                        {detail.timeframe}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10">
                      <Globe aria-hidden="true" size={18} className="text-white/60" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase text-white/40 mb-1" style={{ letterSpacing: '0.14em' }}>
                        Domain
                      </p>
                      <p className="text-sm text-white/80">
                        {detail.domain}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ─── WHY US ─── */}
      <Section className="!pt-0">
        <Container text>
          <Reveal>
            <SectionHeading
              eyebrow="Why choose us"
              title="Built with your outcome in mind"
              description={detail.whyUs}
            />
          </Reveal>
        </Container>
      </Section>

      {/* ─── FINAL CTA ─── */}
      <Section className="!pt-0">
        <Container>
          <Reveal>
            <div className="rounded-2xl bg-dark-panel text-white px-8 py-16 sm:px-14 sm:py-20 text-center">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight mb-5">
                Ready to get started?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-[520px] mx-auto mb-8">
                Let&rsquo;s discuss your project and put together a scope that fits your goals and budget.
              </p>
              <Link
                href={serviceHref}
                className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-7 py-3.5 text-base font-semibold transition-all duration-300 ease-out-expo hover:bg-brand-hover"
              >
                {detail.cta}
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
