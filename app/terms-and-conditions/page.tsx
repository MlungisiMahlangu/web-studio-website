import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { PageHero } from '@/components/ui/page-hero'
import { STUDIO_NAME, STUDIO_EMAIL, LAST_UPDATED } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | WEB-IN',
  description: `Terms and conditions for working with ${STUDIO_NAME}.`,
  alternates: {
    canonical: 'https://web-in.co.za/terms-and-conditions',
  },
}

const tocItems = [
  { id: 'agreement', label: 'Agreement' },
  { id: 'project-scope', label: 'Project scope' },
  { id: 'payment-terms', label: 'Payment terms' },
  { id: 'revisions', label: 'Revisions' },
  { id: 'content', label: 'Content' },
  { id: 'domains-hosting', label: 'Domains and hosting' },
  { id: 'ownership', label: 'Ownership' },
  { id: 'support', label: 'Support' },
  { id: 'liability', label: 'Limitation of liability' },
  { id: 'termination', label: 'Termination' },
  { id: 'contact', label: 'Contact' },
]

export default function TermsPage() {
  const lastUpdated = new Date(LAST_UPDATED).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      {/* Hero */}
      <PageHero
        compact
        eyebrow={`${STUDIO_NAME} / Legal`}
        title="Terms and conditions"
        description="The terms that govern our working relationship."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Terms & Conditions', href: '/terms-and-conditions' },
        ]}
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

              <h2 id="agreement">Agreement</h2>
              <p>
                By engaging our services, you agree to the terms outlined below. A
                detailed project scope and quotation is provided before any work begins.
              </p>

              <h2 id="project-scope">Project scope</h2>
              <p>
                All projects are scoped based on the requirements discussed during the
                enquiry process. Work outside the agreed scope may be quoted separately.
              </p>

              <h2 id="payment-terms">Payment terms</h2>
              <ul>
                <li>A deposit is required before development begins.</li>
                <li>The balance is due upon completion, before the website is deployed.</li>
                <li>Payment methods include EFT and other agreed-upon methods.</li>
              </ul>

              <h2 id="revisions">Revisions</h2>
              <p>
                Each package includes a specified number of revision rounds. Additional
                revision rounds can be added at R300 per round. Revisions are limited to
                the agreed scope.
              </p>

              <h2 id="content">Content</h2>
              <p>
                Website content (text, images, branding) is supplied by the client unless
                otherwise agreed. Delays in providing content may affect project timelines.
              </p>

              <h2 id="domains-hosting">Domains and hosting</h2>
              <p>
                Selected packages include a free .co.za domain for the first year. The
                domain is registered in your name. Hosting may be included for an initial
                period; renewal fees apply thereafter.
              </p>

              <h2 id="ownership">Ownership</h2>
              <p>
                Upon full payment, you own your website and its content. The domain is
                registered in your name and belongs to you.
              </p>

              <h2 id="support">Support</h2>
              <p>
                Each package includes a post-launch support period for minor adjustments.
                Ongoing maintenance is available through our monthly care plans.
              </p>

              <h2 id="liability">Limitation of liability</h2>
              <p>
                We take care to deliver quality work, but we cannot be held liable for
                indirect damages, loss of revenue or business interruption arising from
                the use of the website.
              </p>

              <h2 id="termination">Termination</h2>
              <p>
                Either party may terminate the agreement with written notice. In the event
                of termination, payment is due for work completed up to that point.
              </p>

              <h2 id="contact">Contact</h2>
              <p>
                For questions about these terms, contact us at{' '}
                <a href={`mailto:${STUDIO_EMAIL}`}>
                  {STUDIO_EMAIL}
                </a>.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
