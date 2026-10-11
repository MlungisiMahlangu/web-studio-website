import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { STUDIO_NAME, STUDIO_EMAIL } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund and cancellation policy',
  description: `Refund and cancellation policy for ${STUDIO_NAME}.`,
}

export default function RefundPolicyPage() {
  return (
    <>
      {/* Hero */}
      <Section dark className="pb-16 pt-16 sm:pb-20 sm:pt-20">
        <Container narrow>
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white/50 transition-colors hover:text-white/80"
          >
            <ArrowLeft className="h-3 w-3" />
            Back
          </Link>
          <p className="mb-4 text-xs font-semibold uppercase text-white/40" style={{ letterSpacing: '0.14em' }}>
            {STUDIO_NAME} / Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Refund and
            <br />
            cancellation policy
          </h1>
          <p className="mt-5 max-w-[520px] text-lg text-white/60">
            Our policy regarding project cancellations and refunds.
          </p>
        </Container>
      </Section>

      {/* Content */}
      <Section className="pb-24 sm:pb-32">
        <Container text>
          <div className="space-y-6 text-muted">
            <h2 className="text-2xl font-bold text-navy mt-12 first:mt-0 mb-4">
              Cancellation by client
            </h2>
            <p>
              You may cancel a project at any time by providing written notice. The
              following terms apply:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>If work has not yet begun, the deposit is refundable minus any administrative costs.</li>
              <li>If work is in progress, payment is due for all completed work up to the cancellation date.</li>
              <li>If the project is complete, no refund is applicable.</li>
            </ul>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Cancellation by us
            </h2>
            <p>
              In the unlikely event that we need to cancel a project, we will provide
              written notice and a full refund for any work not yet delivered.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Refund timeline
            </h2>
            <p>
              Approved refunds are processed within 7–14 business days via the original
              payment method.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Non-refundable items
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Domain registrations (once registered)</li>
              <li>Third-party services already purchased on your behalf</li>
              <li>Completed work that has been delivered and accepted</li>
            </ul>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Disputes
            </h2>
            <p>
              If you are not satisfied with the work, we encourage you to contact us
              first so we can address your concerns. We are committed to delivering
              quality work and will work with you to resolve any issues.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Contact
            </h2>
            <p>
              For questions about this policy, contact us at{' '}
              <a
                href={`mailto:${STUDIO_EMAIL}`}
                className="text-navy font-medium underline decoration-line underline-offset-4 transition-colors hover:text-brand"
              >
                {STUDIO_EMAIL}
              </a>{' '}
              or through our{' '}
              <Link
                href="/contact"
                className="text-navy font-medium underline decoration-line underline-offset-4 transition-colors hover:text-brand"
              >
                contact form
              </Link>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
