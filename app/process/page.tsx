import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal, RevealStagger } from '@/components/ui/reveal'
import { ProcessFAQ } from '@/components/sections/process-faq'
import {
  processPhases,
  processExpectations,
  processClientNeeds,
  processSupportLevels,
} from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Process',
  description:
    'From first conversation to live website. A clear path from enquiry to launch with communication and decisions kept clear along the way.',
}

export default function ProcessPage() {
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
                03 / How we work
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-display text-display-xl leading-tight tracking-tight mb-8">
                From first conversation
                <br />
                to <em className="text-accent">live website.</em>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg sm:text-xl text-cream/60 leading-relaxed max-w-[600px] mb-6">
                A great website should feel exciting to build — not complicated. Our
                process gives every project a clear path from the first conversation
                through planning, design, development, review and launch, with
                communication and decisions kept clear along the way.
              </p>
            </Reveal>

            <Reveal delay={250}>
              <p className="font-mono text-sm text-cream/40 mb-10">
                Clear process · Thoughtful work · No unnecessary complexity
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── JOURNEY BAR ─── */}
      <Section className="!py-14 sm:!py-16">
        <Container>
          <Reveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0">
              {processPhases.map((phase, i) => (
                <div key={phase.number} className="flex items-center gap-6 sm:flex-1">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-ink text-cream font-mono text-sm font-medium">
                      {phase.number}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted">
                      {phase.label}
                    </span>
                  </div>
                  {i < processPhases.length - 1 && (
                    <div className="hidden sm:block flex-1 h-px bg-line-dark mx-4" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ─── INTRODUCTION ─── */}
      <Section>
        <Container text>
          <Reveal>
            <SectionHeading
              title="A clear process makes better projects."
              className="mb-6"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-muted leading-relaxed mb-4">
              We keep the process structured without making it rigid. Every project
              is different, but the fundamentals stay the same: understand the goal,
              define the scope, create the experience, build it properly, review the
              result and launch with confidence.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-lg text-muted leading-relaxed">
              The client should always understand what stage the project is in and
              what happens next.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ─── PROCESS PHASES (Timeline) ─── */}
      <Section className="!bg-cream-dark">
        <Container>
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-line hidden sm:block" />

            <RevealStagger stagger={120} className="space-y-16 sm:space-y-20">
              {processPhases.map((phase) => (
                <div key={phase.number} className="relative sm:pl-16">
                  {/* Phase marker */}
                  <div className="absolute left-0 top-0 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-ink text-cream font-mono text-sm font-medium">
                    {phase.number}
                  </div>

                  {/* Mobile marker */}
                  <div className="flex items-center gap-3 mb-5 sm:hidden">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-ink text-cream font-mono text-sm font-medium">
                      {phase.number}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted">
                      {phase.label}
                    </span>
                  </div>

                  {/* Desktop label */}
                  <p className="hidden sm:block font-mono text-xs uppercase tracking-wider text-accent mb-3">
                    {phase.label}
                  </p>

                  <h2 className="font-display text-display-sm leading-tight tracking-tight mb-4">
                    {phase.heading}
                  </h2>

                  <p className="text-muted leading-relaxed max-w-[600px] mb-8">
                    {phase.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {phase.items.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-line bg-cream-light p-5"
                      >
                        <h3 className="font-medium text-ink mb-1.5">{item.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </Section>

      {/* ─── AFTER LAUNCH ─── */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="After launch"
              title="Launch isn't necessarily the end."
              description="Once your website is live, you can choose the level of support that makes sense for your business. Depending on your package, minor post-launch support may be included for a defined period. For longer-term needs, WEB-IN also offers optional maintenance plans."
              className="mb-10"
            />
          </Reveal>

          <RevealStagger stagger={80} className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {processSupportLevels.map((level) => (
              <div
                key={level.title}
                className="rounded-2xl border border-line bg-cream-light p-6"
              >
                <h3 className="font-display text-lg mb-2">{level.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{level.description}</p>
              </div>
            ))}
          </RevealStagger>

          <Reveal>
            <p className="text-sm text-muted mb-4">
              Major new work is quoted separately.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-ink hover:text-accent-dark transition-colors duration-300"
            >
              View maintenance plans
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* ─── EXPECTATIONS ─── */}
      <Section className="!bg-cream-dark">
        <Container>
          <Reveal>
            <SectionHeading
              title="Throughout the project, expect clarity."
              className="mb-10"
            />
          </Reveal>

          <RevealStagger stagger={80} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {processExpectations.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-line bg-cream-light p-6"
              >
                <span className="font-mono text-xs text-accent mb-3 block">
                  {item.number}
                </span>
                <h3 className="font-display text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* ─── WHAT WE NEED FROM YOU ─── */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              title="Great websites are collaborative."
              description="We handle the design, development and technical implementation. Your input helps us make the final website genuinely useful for your business."
              className="mb-10"
            />
          </Reveal>

          <RevealStagger stagger={80} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {processClientNeeds.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-line bg-cream-light p-6"
              >
                <span className="font-mono text-xs text-accent mb-3 block">
                  {item.number}
                </span>
                <h3 className="font-display text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* ─── HOW LONG ─── */}
      <Section className="!bg-cream-dark">
        <Container text>
          <Reveal>
            <SectionHeading
              title="How long will your project take?"
              className="mb-6"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-muted leading-relaxed mb-4">
              Every project has its own timeline. The timeframe depends on the type
              of website, number of pages, functionality, integrations, content and
              how quickly feedback and approvals are provided.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Our packages include estimated delivery windows, while the final
              timeline is confirmed based on the agreed project scope.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-ink hover:text-accent-dark transition-colors duration-300"
            >
              View all services
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* ─── WHEN DOES WORK BEGIN ─── */}
      <Section>
        <Container text>
          <Reveal>
            <SectionHeading
              title="When does work officially begin?"
              className="mb-6"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-muted leading-relaxed">
              Once the project scope and quotation have been approved and the
              required deposit has been paid, development can begin. We then confirm
              the project requirements and next steps before moving into production.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ─── FAQ ─── */}
      <Section className="!bg-cream-dark">
        <Container>
          <Reveal>
            <SectionHeading
              title="Questions before we begin?"
              className="mb-10"
            />
          </Reveal>
          <Reveal delay={100}>
            <ProcessFAQ />
          </Reveal>
        </Container>
      </Section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative bg-ink text-cream overflow-hidden">
        <div className="absolute inset-0 grain grain-dark" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-ink-light/30" />

        <Container className="relative z-10 py-28 sm:py-36 md:py-44">
          <div className="max-w-[700px]">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-wider text-accent mb-6">
                Ready when you are
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-display text-display-lg leading-tight tracking-tight mb-8">
                Let&apos;s build something
                <br />
                <em className="text-accent">worth putting online.</em>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg sm:text-xl text-cream/60 leading-relaxed max-w-[600px] mb-10">
                Tell us what you&apos;re working on, where you&apos;re starting from
                and what you want the website to achieve. We&apos;ll review your
                requirements and help you understand the best way forward.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-7 py-3.5 text-base font-medium transition-all duration-300 ease-out-expo hover:bg-accent-dark"
                >
                  Let&apos;s talk
                  <ArrowUpRight size={18} />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 text-cream/60 hover:text-cream transition-colors duration-300"
                >
                  View our work
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
