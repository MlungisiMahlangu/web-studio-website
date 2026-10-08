import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
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
      <Navbar />

      {/* Hero */}
      <section className="process-hero container">
        <p className="eyebrow">03 / How we work</p>
        <h1>
          From first conversation
          <br />
          to <em>live website.</em>
        </h1>
        <p>
          A great website should feel exciting to build — not complicated. Our
          process gives every project a clear path from the first conversation
          through planning, design, development, review and launch, with
          communication and decisions kept clear along the way.
        </p>
        <p className="process-hero-tagline">
          Clear process · Thoughtful work · No unnecessary complexity
        </p>
        <div className="process-hero-actions">
          <Link className="button button-light" href="/contact">
            Get a quote <ArrowUpRight />
          </Link>
          <Link className="text-link" href="/services">
            View our services <ArrowUpRight />
          </Link>
        </div>
      </section>

      {/* Hero visual — journey bar */}
      <section className="process-journey-bar">
        <div className="container">
          <div className="process-journey-track">
            {processPhases.map((phase, i) => (
              <div className="process-journey-step" key={phase.number}>
                <span className="process-journey-number">{phase.number}</span>
                <span className="process-journey-label">{phase.label}</span>
                {i < processPhases.length - 1 && (
                  <span className="process-journey-line" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="process-intro container">
        <ScrollReveal variant="default">
          <div className="process-intro-inner">
            <h2>A clear process makes better projects.</h2>
            <p>
              We keep the process structured without making it rigid. Every project
              is different, but the fundamentals stay the same: understand the goal,
              define the scope, create the experience, build it properly, review the
              result and launch with confidence.
            </p>
            <p>
              The client should always understand what stage the project is in and
              what happens next.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Process phases */}
      <section className="process-phases container">
        {processPhases.map((phase, index) => (
          <ScrollReveal
            key={phase.number}
            variant={index % 2 === 0 ? 'left' : 'right'}
          >
            <div className={`process-phase ${index % 2 === 1 ? 'process-phase-reverse' : ''}`}>
              <div className="process-phase-marker">
                <span className="process-phase-number">{phase.number}</span>
                <span className="process-phase-label">{phase.label}</span>
              </div>
              <div className="process-phase-content">
                <h2>{phase.heading}</h2>
                <p>{phase.description}</p>
                <div className="process-phase-items">
                  {phase.items.map((item) => (
                    <div className="process-phase-item" key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* After launch */}
      <section className="process-after-launch">
        <div className="container">
          <ScrollReveal variant="default">
            <div className="process-after-launch-inner">
              <p className="eyebrow">After launch</p>
              <h2>Launch isn&apos;t necessarily the end.</h2>
              <p>
                Once your website is live, you can choose the level of support that
                makes sense for your business. Depending on your package, minor
                post-launch support may be included for a defined period. For
                longer-term needs, WEB-IN also offers optional maintenance plans.
              </p>
              <div className="process-support-grid">
                {processSupportLevels.map((level) => (
                  <div className="process-support-card" key={level.title}>
                    <h3>{level.title}</h3>
                    <p>{level.description}</p>
                  </div>
                ))}
              </div>
              <p className="process-support-note">
                Major new work is quoted separately.
              </p>
              <Link className="text-link" href="/pricing">
                View maintenance plans <ArrowUpRight />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Expectations */}
      <section className="process-expectations container">
        <ScrollReveal variant="default">
          <div className="process-expectations-header">
            <h2>Throughout the project, expect clarity.</h2>
          </div>
        </ScrollReveal>
        <div className="process-expectations-list">
          {processExpectations.map((item, index) => (
            <ScrollReveal key={item.number} variant="stagger" delay={index * 80}>
              <div className="process-expectation-item">
                <span className="process-expectation-number">{item.number}</span>
                <div className="process-expectation-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* What we need from you */}
      <section className="process-client-needs container">
        <ScrollReveal variant="default">
          <div className="process-client-needs-header">
            <h2>Great websites are collaborative.</h2>
            <p>
              We handle the design, development and technical implementation. Your
              input helps us make the final website genuinely useful for your
              business.
            </p>
          </div>
        </ScrollReveal>
        <div className="process-client-needs-grid">
          {processClientNeeds.map((item, index) => (
            <ScrollReveal key={item.number} variant="stagger" delay={index * 80}>
              <div className="process-client-need">
                <span className="process-client-need-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* How long */}
      <section className="process-timeline container">
        <ScrollReveal variant="default">
          <div className="process-timeline-inner">
            <h2>How long will your project take?</h2>
            <p>
              Every project has its own timeline. The timeframe depends on the type
              of website, number of pages, functionality, integrations, content and
              how quickly feedback and approvals are provided.
            </p>
            <p>
              Our packages include estimated delivery windows, while the final
              timeline is confirmed based on the agreed project scope.
            </p>
            <Link className="text-link" href="/pricing">
              View pricing <ArrowUpRight />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* When does work begin */}
      <section className="process-deposit container">
        <ScrollReveal variant="default">
          <div className="process-deposit-inner">
            <h2>When does work officially begin?</h2>
            <p>
              Once the project scope and quotation have been approved and the
              required deposit has been paid, development can begin. We then confirm
              the project requirements and next steps before moving into production.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ */}
      <section className="process-faq container">
        <ScrollReveal variant="default">
          <div className="process-faq-header">
            <h2>Questions before we begin?</h2>
          </div>
        </ScrollReveal>
        <ProcessFAQ />
      </section>

      {/* Final CTA */}
      <section className="process-cta">
        <div className="container">
          <ScrollReveal variant="scale">
            <div className="process-cta-inner">
              <p className="eyebrow">Ready when you are</p>
              <h2>
                Let&apos;s build something
                <br />
                <em>worth putting online.</em>
              </h2>
              <p>
                Tell us what you&apos;re working on, where you&apos;re starting from
                and what you want the website to achieve. We&apos;ll review your
                requirements and help you understand the best way forward.
              </p>
              <div className="process-cta-actions">
                <Link className="button button-light" href="/contact">
                  Let's talk <ArrowUpRight />
                </Link>
                <Link className="text-link" href="/work">
                  View our work <ArrowUpRight />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
