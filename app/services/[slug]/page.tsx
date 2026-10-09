import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Check, Clock, Globe } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal, RevealStagger } from '@/components/ui/reveal'
import { serviceDetails } from '@/lib/constants'
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
    title: detail.name,
    description: detail.intro,
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const detail = serviceDetails[slug]
  if (!detail) notFound()

  const serviceHref = `/contact?service=${encodeURIComponent(detail.name)}`

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-ink text-cream overflow-hidden">
        <div className="absolute inset-0 grain grain-dark" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-ink-light/30" />

        <Container className="relative z-10 py-28 sm:py-36 md:py-44">
          <div className="max-w-[800px]">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-wider text-accent mb-6">
                {detail.name}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-display text-display-xl leading-tight tracking-tight mb-8">
                {detail.intro}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg sm:text-xl text-cream/60 leading-relaxed max-w-[600px]">
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
              title={<>All the essentials,<br /><em>ready to go.</em></>}
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
                  className="rounded-2xl border border-line bg-cream-light p-7 transition-all duration-300 ease-out-expo hover:border-ink/20 hover:shadow-[0_0_0_1px_rgba(12,12,14,0.08)]"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-ink/5">
                      <Icon aria-hidden="true" size={20} className="text-muted" />
                    </div>
                    <h3 className="font-display text-display-sm leading-snug tracking-tight">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] text-muted leading-snug">
                        <Check aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-accent-dark" />
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
            <div className="rounded-2xl border border-line bg-cream-light p-8 sm:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
                    Built for
                  </p>
                  <h2 className="font-display text-display-md leading-tight tracking-tight">
                    Is this
                    <br />
                    <em>right for you?</em>
                  </h2>
                </div>
                <ul className="space-y-4">
                  {detail.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base leading-snug">
                      <Check aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-accent-dark" />
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
            <div className="rounded-2xl bg-ink text-cream px-8 py-14 sm:px-14 sm:py-18 overflow-hidden relative">
              <div className="absolute inset-0 grain grain-dark opacity-40" />
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-cream/40 mb-3">
                      Investment
                    </p>
                    <h2 className="font-display text-display-md leading-tight tracking-tight mb-2">
                      {detail.price}
                    </h2>
                    <p className="text-cream/50 text-[15px] leading-relaxed">
                      Final scope is confirmed before work begins.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cream/10">
                        <Clock aria-hidden="true" size={18} className="text-cream/60" />
                      </div>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-cream/40 mb-1">
                          Timeline
                        </p>
                        <p className="text-base font-semibold text-cream">
                          {detail.timeframe}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cream/10">
                        <Globe aria-hidden="true" size={18} className="text-cream/60" />
                      </div>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-cream/40 mb-1">
                          Domain
                        </p>
                        <p className="text-sm text-cream/80">
                          {detail.domain}
                        </p>
                      </div>
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
            <div className="rounded-2xl bg-ink text-cream px-8 py-16 sm:px-14 sm:py-20 text-center overflow-hidden relative">
              <div className="absolute inset-0 grain grain-dark opacity-40" />
              <div className="relative z-10">
                <h2 className="font-display text-display-md leading-tight tracking-tight mb-5">
                  Ready to get started?
                </h2>
                <p className="text-cream/60 text-lg leading-relaxed max-w-[520px] mx-auto mb-8">
                  Let&rsquo;s discuss your project and put together a scope that fits your goals and budget.
                </p>
                <Link
                  href={serviceHref}
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-7 py-3.5 text-base font-medium transition-all duration-300 ease-out-expo hover:bg-accent-dark"
                >
                  {detail.cta}
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
