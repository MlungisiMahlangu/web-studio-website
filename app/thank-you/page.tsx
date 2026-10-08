import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'Your enquiry has been received.',
}

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <section className="inner-hero container" style={{ textAlign: 'center', borderBottom: 'none' }}>
        <p className="eyebrow">Enquiry received</p>
        <h1>
          Thank you.
          <br />
          <em>We will be in touch.</em>
        </h1>
        <p style={{ margin: '30px auto' }}>
          We have received your project enquiry and will review it shortly. Expect a
          response within 1–2 business days with a tailored recommendation.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="button button-dark" href="/">
            Back to home <ArrowUpRight />
          </Link>
        </div>
      </section>
      <section className="inner-content container" style={{ paddingTop: 40 }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <p className="eyebrow">What happens next</p>
          <div style={{ borderTop: '1px solid var(--line)', marginTop: 24 }}>
            {[
              ['01', 'We review your brief', 'Our team reviews your requirements, goals and budget.'],
              ['02', 'Clarification if needed', 'We may reach out for more details or a short conversation.'],
              ['03', 'You receive your quote', 'A tailored scope, timeline and transparent quotation.'],
              ['04', 'Approve and begin', 'Once approved and the deposit is paid, development starts.'],
            ].map(([num, title, desc]) => (
              <div
                key={num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '50px 1fr',
                  gap: 20,
                  padding: '20px 0',
                  borderBottom: '1px solid var(--line)',
                  textAlign: 'left',
                }}
              >
                <span style={{ color: 'var(--muted)', fontSize: 13, fontWeight: 600 }}>{num}</span>
                <div>
                  <h3 style={{ fontSize: 16, margin: '0 0 4px', fontWeight: 500 }}>{title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: 14, margin: 0, lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
