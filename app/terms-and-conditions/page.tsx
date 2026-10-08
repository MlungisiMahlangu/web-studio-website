import Link from 'next/link'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { STUDIO_NAME, STUDIO_EMAIL } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and conditions',
  description: `Terms and conditions for working with ${STUDIO_NAME}.`,
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <section className="inner-hero container">
        <p className="eyebrow">{STUDIO_NAME} / Legal</p>
        <h1>Terms and conditions</h1>
        <p>
          The terms that govern our working relationship.
        </p>
      </section>
      <section className="inner-content container">
        <div className="legal-content">
          <h2>Agreement</h2>
          <p>
            By engaging our services, you agree to the terms outlined below. A
            detailed project scope and quotation is provided before any work begins.
          </p>

          <h2>Project scope</h2>
          <p>
            All projects are scoped based on the requirements discussed during the
            enquiry process. Work outside the agreed scope may be quoted separately.
          </p>

          <h2>Payment terms</h2>
          <ul>
            <li>A deposit is required before development begins.</li>
            <li>The balance is due upon completion, before the website is deployed.</li>
            <li>Payment methods include EFT and other agreed-upon methods.</li>
          </ul>

          <h2>Revisions</h2>
          <p>
            Each package includes a specified number of revision rounds. Additional
            revision rounds can be added at R300 per round. Revisions are limited to
            the agreed scope.
          </p>

          <h2>Content</h2>
          <p>
            Website content (text, images, branding) is supplied by the client unless
            otherwise agreed. Delays in providing content may affect project timelines.
          </p>

          <h2>Domains and hosting</h2>
          <p>
            Selected packages include a free .co.za domain for the first year. The
            domain is registered in your name. Hosting may be included for an initial
            period; renewal fees apply thereafter.
          </p>

          <h2>Ownership</h2>
          <p>
            Upon full payment, you own your website and its content. The domain is
            registered in your name and belongs to you.
          </p>

          <h2>Support</h2>
          <p>
            Each package includes a post-launch support period for minor adjustments.
            Ongoing maintenance is available through our monthly care plans.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            We take care to deliver quality work, but we cannot be held liable for
            indirect damages, loss of revenue or business interruption arising from
            the use of the website.
          </p>

          <h2>Termination</h2>
          <p>
            Either party may terminate the agreement with written notice. In the event
            of termination, payment is due for work completed up to that point.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, contact us at{' '}
            <a href={`mailto:${STUDIO_EMAIL}`} style={{ color: 'var(--ink)', fontWeight: 500 }}>
              {STUDIO_EMAIL}
            </a>.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
