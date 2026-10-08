import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank you — WEB-IN',
  description: 'Thanks for reaching out. We will review your message and get back to you within 1–2 business days.',
}

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <section className="container thankyou-section">
        <div className="thankyou-content">
          <CheckCircle2 className="thankyou-icon" aria-hidden="true" />
          <p className="eyebrow">Message received</p>
          <h1>
            Thank you for
            <br />
            <em>reaching out.</em>
          </h1>
          <p className="thankyou-lead">
            We&apos;ve received your message and will review the details shortly. Expect a thoughtful response from us within 1–2 business days.
          </p>
          <p>
            In the meantime, feel free to explore our work or learn more about how we work. When you&apos;re ready, we&apos;ll be here.
          </p>
          <div className="thankyou-actions">
            <Link className="button button-dark" href="/">
              Back to home <ArrowUpRight />
            </Link>
            <Link className="text-link" href="/work">
              View our work <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
