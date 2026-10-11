import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { PageHero } from '@/components/ui/page-hero'
import { CTABand } from '@/components/ui/cta-band'
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
  title: 'Our Process | Web Development Workflow',
  description: 'From first conversation to live website. A clear 5-phase process: discover, design, build, test, launch. Transparent communication throughout your project.',
  alternates: {
    canonical: 'https://web-in.co.za/process',
  },
  openGraph: {
    title: 'Our Process | WEB-IN Workflow',
    description: 'A clear 4-phase process: Discover, Define, Create, Launch. Transparent communication throughout your project.',
    type: 'website',
    url: 'https://web-in.co.za/process',
  },
}

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="How we work"
        title={<>From first conversation<br />to live website.</>}
        description="A great website should feel exciting to build — not complicated. Our process gives every project a clear path from the first conversation through planning, design, development, review and launch, with communication and decisions kept clear along the way."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Process', href: '/process' },
        ]}
        accent="clear"
        variant="split"
        aside={
          <div className="rounded-2xl border border-line bg-white/80 backdrop-blur-sm shadow-lg p-6">
            <p className="text-xs font-semibold uppercase text-muted mb-5" style={{ letterSpacing: '0.14em' }}>4 phases</p>
            <div className="relative space-y-6">
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-line" />
              {processPhases.map((phase, i) => (
                <div key={phase.number} className="relative flex items-start gap-4">
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white text-sm font-bold shrink-0">
                    {phase.number}
                  </div>
                  <div className="pt-1.5">
                    <p className="text-sm font-bold text-navy">{phase.label}</p>
                    <p className="text-xs text-body leading-relaxed mt-0.5">{phase.description.slice(0, 80)}...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* Journey Bar */}
      <Section tight>
        <Container>
          <Reveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0">
              {processPhases.map((phase, i) => (
                <div key={phase.number} className="flex items-center gap-6 sm:flex-1">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white text-sm font-bold">
                      {phase.number}
                    </span>
                    <span className="text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>
                      {phase.label}
                    </span>
                  </div>
                  {i < processPhases.length - 1 && (
                    <div className="hidden sm:block flex-1 h-px bg-line mx-4" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Introduction */}
      <Section>
        <Container text>
          <Reveal>
            <SectionHeading
              title="A clear process makes better projects."
              className="mb-6"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-body leading-relaxed mb-4">
              We keep the process structured without making it rigid. Every project
              is different, but the fundamentals stay the same: understand the goal,
              define the scope, create the experience, build it properly, review the
              result and launch with confidence.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-lg text-body leading-relaxed">
              The client should always understand what stage the project is in and
              what happens next.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Process Phases */}
      <Section alt>
        <Container>
          <div className="relative">
            <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-line hidden sm:block" />

            <RevealStagger stagger={120} className="space-y-16 sm:space-y-20">
              {processPhases.map((phase) => (
                <div key={phase.number} className="relative sm:pl-16">
                  <div className="absolute left-0 top-0 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-brand text-white text-sm font-bold">
                    {phase.number}
                  </div>

                  <div className="flex items-center gap-3 mb-5 sm:hidden">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white text-sm font-bold">
                      {phase.number}
                    </span>
                    <span className="text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>
                      {phase.label}
                    </span>
                  </div>

                  <p className="hidden sm:block text-xs font-semibold uppercase text-brand mb-3" style={{ letterSpacing: '0.14em' }}>
                    {phase.label}
                  </p>

                  <h2 className="text-display-sm leading-tight font-bold text-navy mb-4">
                    {phase.heading}
                  </h2>

                  <p className="text-body leading-relaxed max-w-[600px] mb-8">
                    {phase.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {phase.items.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-line bg-white shadow-card p-5"
                      >
                        <h3 className="font-semibold text-navy mb-1.5">{item.title}</h3>
                        <p className="text-sm text-body leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </Section>

      {/* Expectations + Client Needs side by side */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              title="Throughout the project, expect clarity."
              description="Great websites are collaborative. We handle the design and development; your input helps us make the final website genuinely useful for your business."
              className="mb-12"
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Reveal>
              <div className="rounded-2xl border border-line bg-white shadow-card p-8 h-full">
                <p className="text-xs font-semibold uppercase text-brand mb-6" style={{ letterSpacing: '0.14em' }}>
                  What you can expect from us
                </p>
                <div className="space-y-4">
                  {processExpectations.map((item) => (
                    <div key={item.number} className="flex items-start gap-4">
                      <span className="text-sm font-semibold text-brand shrink-0 pt-0.5">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-navy mb-1">{item.title}</h3>
                        <p className="text-sm text-body leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-2xl border border-line bg-white shadow-card p-8 h-full">
                <p className="text-xs font-semibold uppercase text-brand mb-6" style={{ letterSpacing: '0.14em' }}>
                  What we need from you
                </p>
                <div className="space-y-4">
                  {processClientNeeds.map((item) => (
                    <div key={item.number} className="flex items-start gap-4">
                      <span className="text-sm font-semibold text-brand shrink-0 pt-0.5">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-navy mb-1">{item.title}</h3>
                        <p className="text-sm text-body leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* After Launch */}
      <Section alt>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="After launch"
              title="Launch isn't necessarily the end."
              description="Once your website is live, you can choose the level of support that makes sense for your business."
              className="mb-10"
            />
          </Reveal>

          <RevealStagger stagger={80} className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {processSupportLevels.map((level) => (
              <div
                key={level.title}
                className="rounded-2xl border border-line bg-white shadow-card p-6"
              >
                <h3 className="text-lg font-bold text-navy mb-2">{level.title}</h3>
                <p className="text-sm text-body leading-relaxed">{level.description}</p>
              </div>
            ))}
          </RevealStagger>

          <Reveal>
            <p className="text-sm text-body mb-4">
              Major new work is quoted separately.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:text-brand transition-colors duration-300"
            >
              View maintenance plans
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* Timeline */}
      <Section>
        <Container text>
          <Reveal>
            <SectionHeading
              title="How long will your project take?"
              className="mb-6"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-body leading-relaxed mb-4">
              Every project has its own timeline. The timeframe depends on the type
              of website, number of pages, functionality, integrations, content and
              how quickly feedback and approvals are provided.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-lg text-body leading-relaxed mb-8">
              Our packages include estimated delivery windows, while the final
              timeline is confirmed based on the agreed project scope.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:text-brand transition-colors duration-300"
            >
              View all services
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* FAQ */}
      <Section alt>
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

      {/* CTA */}
      <CTABand
        eyebrow="Ready when you are"
        title="Let's build something worth putting online."
        description="Tell us what you're working on, where you're starting from and what you want the website to achieve. We'll review your requirements and help you understand the best way forward."
        primaryHref="/contact"
        primaryLabel="Let's talk"
        secondaryHref="/work"
        secondaryLabel="View our work"
      />
    </>
  )
}
