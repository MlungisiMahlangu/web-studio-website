import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { PageHero } from '@/components/ui/page-hero'
import { STUDIO_NAME, STUDIO_EMAIL, LAST_UPDATED } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund and Cancellation Policy | WEB-IN',
  description: `Refund and cancellation policy for ${STUDIO_NAME}.`,
  alternates: {
    canonical: 'https://web-in.co.za/refund-cancellation-policy',
  },
}

const tocItems = [
  { id: 'cancellation-by-client', label: 'Cancellation by client' },
  { id: 'cancellation-by-us', label: 'Cancellation by us' },
  { id: 'refund-timeline', label: 'Refund timeline' },
  { id: 'non-refundable', label: 'Non-refundable items' },
  { id: 'disputes', label: 'Disputes' },
  { id: 'contact', label: 'Contact' },
]

export default function RefundPolicyPage() {
  const lastUpdated = new Date(LAST_UPDATED).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      {/* Hero */}
      <PageHero
        dark
        compact
        eyebrow={`${STUDIO_NAME} / Legal`}
        title={<>Refund and<br />cancellation policy</>}
        description="Our policy regarding project cancellations and refunds."
      />

      {/* Last Updated + TOC */}
      <Section tight>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
            {/* TOC Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky" style={{ top: 'var(--sticky-top)' }}>
                <p className="text-xs font-semibold uppercase text-muted mb-4" style={{ letterSpacing: '0.14em' }}>
                  Last updated: {lastUpdated}
                </p>
                <nav>
                  <p className="text-xs font-semibold uppercase text-muted mb-3" style={{ letterSpacing: '0.14em' }}>
                    Contents
                  </p>
                  <ul className="space-y-2">
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm text-body hover:text-brand transition-colors"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="prose-legal">
              <p className="lg:hidden text-sm text-muted mb-8">
                Last updated: {lastUpdated}
              </p>

              <h2 id="cancellation-by-client">Cancellation by client</h2>
              <p>
                You may cancel a project at any time by providing written notice. The
                following terms apply:
              </p>
              <ul>
                <li>If work has not yet begun, the deposit is refundable minus any administrative costs.</li>
                <li>If work is in progress, payment is due for all completed work up to the cancellation date.</li>
                <li>If the project is complete, no refund is applicable.</li>
              </ul>

              <h2 id="cancellation-by-us">Cancellation by us</h2>
              <p>
                In the unlikely event that we need to cancel a project, we will provide
                written notice and a full refund for any work not yet delivered.
              </p>

              <h2 id="refund-timeline">Refund timeline</h2>
              <p>
                Approved refunds are processed within 7–14 business days via the original
                payment method.
              </p>

              <h2 id="non-refundable">Non-refundable items</h2>
              <ul>
                <li>Domain registrations (once registered)</li>
                <li>Third-party services already purchased on your behalf</li>
                <li>Completed work that has been delivered and accepted</li>
              </ul>

              <h2 id="disputes">Disputes</h2>
              <p>
                If you are not satisfied with the work, we encourage you to contact us
                first so we can address your concerns. We are committed to delivering
                quality work and will work with you to resolve any issues.
              </p>

              <h2 id="contact">Contact</h2>
              <p>
                For questions about this policy, contact us at{' '}
                <a href={`mailto:${STUDIO_EMAIL}`}>
                  {STUDIO_EMAIL}
                </a>{' '}
                or through our{' '}
                <Link href="/contact">
                  contact form
                </Link>.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
