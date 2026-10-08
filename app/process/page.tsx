import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { processSteps } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Process',
  description: 'A clear path from enquiry to launch. See how we work, step by step.',
}

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <section className="inner-hero container">
        <p className="eyebrow">How it works</p>
        <h1>
          A clear path from
          <br />
          <em>idea to live.</em>
        </h1>
        <p>
          Good projects feel collaborative, not complicated. We keep the process
          focused, transparent and personal.
        </p>
      </section>
      <section className="inner-content container">
        <div style={{ maxWidth: 700 }}>
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {processSteps.map((step) => (
              <div
                key={step.number}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr',
                  gap: 24,
                  padding: '28px 0',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                <span style={{ color: 'var(--muted)', fontSize: 13, fontWeight: 600 }}>
                  {step.number}
                </span>
                <div>
                  <h2 style={{ fontSize: 22, margin: '0 0 8px', fontWeight: 500 }}>
                    {step.title}
                  </h2>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.7, margin: 0, maxWidth: 500 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="offer-banner" style={{ marginTop: 80 }}>
          <h2>Ready to start?</h2>
          <p>
            The first step is the easiest. Submit your project enquiry and we will
            get back to you with a clear recommendation.
          </p>
          <Link className="button button-dark" href="/start-a-project" style={{ marginTop: 24 }}>
            Start your project <ArrowUpRight />
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
