import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { STUDIO_NAME, STUDIO_EMAIL } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and conditions',
  description: `Terms and conditions for working with ${STUDIO_NAME}.`,
}

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <Section dark className="relative overflow-hidden pb-16 pt-16 sm:pb-20 sm:pt-20">
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.04] mix-blend-overlay pointer-events-none" />
        <Container narrow>
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-cream/50 transition-colors hover:text-cream/80"
          >
            <ArrowLeft className="h-3 w-3" />
            Back
          </Link>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-cream/40">
            {STUDIO_NAME} / Legal
          </p>
          <h1 className="font-display text-display-md sm:text-display-lg text-cream leading-tight">
            Terms and conditions
          </h1>
          <p className="mt-5 max-w-[520px] text-lg text-cream/60">
            The terms that govern our working relationship.
          </p>
        </Container>
      </Section>

      {/* Content */}
      <Section className="pb-24 sm:pb-32">
        <Container text>
          <div className="space-y-6 text-muted">
            <h2 className="font-display text-2xl text-ink mt-12 first:mt-0 mb-4">
              Agreement
            </h2>
            <p>
              By engaging our services, you agree to the terms outlined below. A
              detailed project scope and quotation is provided before any work begins.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Project scope
            </h2>
            <p>
              All projects are scoped based on the requirements discussed during the
              enquiry process. Work outside the agreed scope may be quoted separately.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Payment terms
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>A deposit is required before development begins.</li>
              <li>The balance is due upon completion, before the website is deployed.</li>
              <li>Payment methods include EFT and other agreed-upon methods.</li>
            </ul>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Revisions
            </h2>
            <p>
              Each package includes a specified number of revision rounds. Additional
              revision rounds can be added at R300 per round. Revisions are limited to
              the agreed scope.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Content
            </h2>
            <p>
              Website content (text, images, branding) is supplied by the client unless
              otherwise agreed. Delays in providing content may affect project timelines.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Domains and hosting
            </h2>
            <p>
              Selected packages include a free .co.za domain for the first year. The
              domain is registered in your name. Hosting may be included for an initial
              period; renewal fees apply thereafter.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Ownership
            </h2>
            <p>
              Upon full payment, you own your website and its content. The domain is
              registered in your name and belongs to you.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Support
            </h2>
            <p>
              Each package includes a post-launch support period for minor adjustments.
              Ongoing maintenance is available through our monthly care plans.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Limitation of liability
            </h2>
            <p>
              We take care to deliver quality work, but we cannot be held liable for
              indirect damages, loss of revenue or business interruption arising from
              the use of the website.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Termination
            </h2>
            <p>
              Either party may terminate the agreement with written notice. In the event
              of termination, payment is due for work completed up to that point.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Contact
            </h2>
            <p>
              For questions about these terms, contact us at{' '}
              <a
                href={`mailto:${STUDIO_EMAIL}`}
                className="text-ink font-medium underline decoration-line underline-offset-4 transition-colors hover:text-accent"
              >
                {STUDIO_EMAIL}
              </a>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
