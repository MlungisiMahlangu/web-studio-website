import Link from 'next/link'
import { ArrowUpRight, CircleArrowOutUpRight } from 'lucide-react'
import { services } from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Reveal, RevealStagger } from '@/components/ui/reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Business websites, portfolio websites, landing pages, booking websites, online stores, custom web applications and website redesigns.',
}

export default function ServicesPage() {
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
                What we build
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-display text-display-xl leading-tight tracking-tight mb-8">
                Digital work with
                <br />
                <em className="text-accent">purpose.</em>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg sm:text-xl text-cream/60 leading-relaxed max-w-[600px] mb-10">
                From a focused landing page to a feature-rich company website, we
                balance strong visual direction with a clear next step.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-7 py-3.5 text-base font-medium transition-all duration-300 ease-out-expo hover:bg-accent-dark"
              >
                Get a quote
                <ArrowUpRight size={18} />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <Section>
        <Container>
          <RevealStagger
            stagger={80}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map(({ icon: Icon, number, title, text, price, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col justify-between rounded-2xl border border-line bg-cream-light p-7 transition-all duration-300 ease-out-expo hover:border-ink/20 hover:shadow-[0_0_0_1px_rgba(12,12,14,0.08)] hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-muted">
                      {number}
                    </span>
                    <Icon
                      aria-hidden="true"
                      size={22}
                      className="text-muted transition-colors duration-300 group-hover:text-ink"
                    />
                  </div>
                  <h3 className="font-display text-display-sm leading-snug tracking-tight mb-3">
                    {title}
                  </h3>
                  <p className="text-muted leading-relaxed text-[15px]">
                    {text}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-line">
                  <span className="text-sm font-medium text-ink">{price}</span>
                  <CircleArrowOutUpRight
                    aria-hidden="true"
                    size={18}
                    className="text-muted transition-all duration-300 group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </Link>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* ─── BOTTOM BANNER ─── */}
      <Section className="!pt-0">
        <Container>
          <Reveal>
            <div className="rounded-2xl bg-ink text-cream px-8 py-16 sm:px-14 sm:py-20 text-center overflow-hidden relative">
              <div className="absolute inset-0 grain grain-dark opacity-40" />
              <div className="relative z-10">
                <h2 className="font-display text-display-md leading-tight tracking-tight mb-5">
                  Not sure which service fits?
                </h2>
                <p className="text-cream/60 text-lg leading-relaxed max-w-[520px] mx-auto mb-8">
                  Tell us about your project and we will recommend the right
                  approach. Every project receives a tailored scope and
                  transparent quote.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-7 py-3.5 text-base font-medium transition-all duration-300 ease-out-expo hover:bg-accent-dark"
                >
                  Let's talk
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
