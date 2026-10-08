import Link from 'next/link'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { STUDIO_NAME, STUDIO_EMAIL } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund and cancellation policy',
  description: 'Refund and cancellation policy for [STUDIO NAME].',
}

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <section className="inner-hero container">
        <p className="eyebrow">{STUDIO_NAME} / Legal</p>
        <h1>
          Refund and
          <br />
          cancellation policy
        </h1>
        <p>
          Our policy regarding project cancellations and refunds.
        </p>
      </section>
      <section className="inner-content container">
        <div className="legal-content">
          <h2>Cancellation by client</h2>
          <p>
            You may cancel a project at any time by providing written notice. The
            following terms apply:
          </p>
          <ul>
            <li>If work has not yet begun, the deposit is refundable minus any administrative costs.</li>
            <li>If work is in progress, payment is due for all completed work up to the cancellation date.</li>
            <li>If the project is complete, no refund is applicable.</li>
          </ul>

          <h2>Cancellation by us</h2>
          <p>
            In the unlikely event that we need to cancel a project, we will provide
            written notice and a full refund for any work not yet delivered.
          </p>

          <h2>Refund timeline</h2>
          <p>
            Approved refunds are processed within 7–14 business days via the original
            payment method.
          </p>

          <h2>Non-refundable items</h2>
          <ul>
            <li>Domain registrations (once registered)</li>
            <li>Third-party services already purchased on your behalf</li>
            <li>Completed work that has been delivered and accepted</li>
          </ul>

          <h2>Disputes</h2>
          <p>
            If you are not satisfied with the work, we encourage you to contact us
            first so we can address your concerns. We are committed to delivering
            quality work and will work with you to resolve any issues.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about this policy, contact us at{' '}
            <a href={`mailto:${STUDIO_EMAIL}`} style={{ color: 'var(--ink)', fontWeight: 500 }}>
              {STUDIO_EMAIL}
            </a>{' '}
            or through our{' '}
            <Link href="/contact" style={{ color: 'var(--ink)', fontWeight: 500 }}>
              contact form
            </Link>.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
