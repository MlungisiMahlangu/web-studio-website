import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { faqs } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about pricing, timelines, domains, hosting, revisions and more.',
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <section className="inner-hero container">
        <p className="eyebrow">FAQ</p>
        <h1>
          Good questions
          <br />
          <em>deserve clear answers.</em>
        </h1>
        <p>Everything you need to know before starting a project with us.</p>
      </section>
      <section className="inner-content container">
        <div style={{ maxWidth: 780 }}>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <ArrowUpRight style={{ width: 18, transform: 'rotate(90deg)' }} />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="offer-banner" style={{ marginTop: 80 }}>
          <h2>Still have questions?</h2>
          <p>
            We are happy to help. Reach out through the contact form or WhatsApp and
            we will get back to you.
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
            <Link className="button button-dark" href="/contact">
              Contact us <ArrowUpRight />
            </Link>
            <Link className="button button-outline" href="/start-a-project">
              Start a project <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
