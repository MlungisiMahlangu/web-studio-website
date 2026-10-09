import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal, RevealStagger } from '@/components/ui/reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Web Development South Africa',
  description: 'Professional web development services in South Africa. Business websites, portfolios, landing pages, online stores, booking systems and custom applications. From R1,500.',
  alternates: {
    canonical: 'https://web-in.co.za/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      <Section dark className="pb-20 sm:pb-28">
        <Container>
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">
              What we build
            </p>
            <h1 className="font-display text-display-xl leading-tight tracking-tight">
              Web development services
              <br />
              <em className="italic text-accent">tailored to you.</em>
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
