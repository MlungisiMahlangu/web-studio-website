import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { PageHero } from '@/components/ui/page-hero'
import { STUDIO_NAME, STUDIO_EMAIL, LAST_UPDATED } from '@/lib/constants'
import { carePlans } from '@/lib/care-plans'
import { alternatesFor, openGraphFor, twitterFor } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: `The terms that apply when you work with ${STUDIO_NAME}: scope, payment, revisions, content, domains, ownership and support.`,
  alternates: alternatesFor('/terms-and-conditions'),
  openGraph: openGraphFor(
    '/terms-and-conditions',
    'Terms and Conditions',
    'Scope, payment, revisions, content, domains, ownership and support when working with WEB-IN.',
  ),
  twitter: twitterFor(
    'Terms and Conditions',
    'The terms that apply when working with WEB-IN: scope, payment, ownership and support.',
  ),
}

const tocItems = [
  { id: 'agreement', label: 'Agreement' },
  { id: 'project-scope', label: 'Project scope' },
  { id: 'payment-terms', label: 'Payment terms' },
  { id: 'promotional-offers', label: 'Promotional offers' },
  { id: 'care-plans', label: 'Care plans' },
  { id: 'business-email', label: 'Business email' },
  { id: 'revisions', label: 'Revisions' },
  { id: 'content', label: 'Content' },
  { id: 'domains', label: 'Domains' },
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
                <li>The balance is due upon completion, before the website goes live.</li>
                <li>Payment methods include EFT and other agreed-upon methods.</li>
                <li>Monthly care plans are billed in advance. Prices are in South African rand (ZAR).</li>
              </ul>

              <h2 id="promotional-offers">Promotional offers</h2>
              <p>
                From time to time we run promotional offers on once-off development
                packages. A promotional price applies only during the stated period,
                only while any stated number of projects remains available, and only to
                the packages named in the offer.
              </p>
              <p>
                Unless the offer states otherwise, it does not apply to Website Redesign,
                monthly care plans, add-ons, domains or third-party costs. Promotional
                offers cannot be combined with other discounts and cannot be applied
                retroactively to existing quotes, paid projects or work already agreed.
              </p>
              <p>
                The scope, timeline, revision rounds, support period and payment terms
                for a package stay the same during a promotion. When the offer ends, the
                normal published prices apply. The specific terms of a promotion are
                shown with the offer on this website. If those terms conflict with this
                section, the promotion&apos;s stated terms apply for that promotion.
              </p>

              <h2 id="care-plans">Care plans</h2>
              <p>
                Care plans are optional. You can buy a website without a monthly plan and
                manage it yourself. The monthly fee covers the services listed for the
                selected plan, including managed hosting arrangements, security and uptime
                checks, backups where the hosting environment supports them, the content
                allowance, business email within the plan&apos;s mailbox allowance and
                support within the stated response target.
              </p>
              <p>Prices are flat monthly fees:</p>
              <ul>
                {carePlans.map((plan) => (
                  <li key={plan.id}>
                    {plan.name}: {plan.priceLabel} per month. {plan.emailLabel}.
                  </li>
                ))}
              </ul>
              <p>
                Plans do not include unlimited work. New pages, features, redesigns and
                major development are quoted separately. Third-party costs that vary, such
                as database hosting, cloud compute, storage beyond the plan allowance, payment gateway fees, external
                APIs and premium software, are quoted or billed separately where necessary.
              </p>
              <p>
                Plans may be cancelled or changed with written notice before the next
                billing date. Fees already paid for a billing period are not refunded unless
                required by law.
              </p>

              <h2 id="business-email">Business email</h2>
              <p>
                Business email is included in every care plan on your own domain, within
                the mailbox allowance for that plan. Setup includes creating the mailboxes,
                configuring MX, SPF, DKIM and DMARC records and basic troubleshooting for
                the mailboxes in the allowance.
              </p>
              <p>
                Mailbox allowances are shared fairly. Reasonable storage and normal
                business sending volumes apply. Bulk or marketing email blasts, spam and
                activity that breaches the provider&apos;s acceptable-use policy are not
                permitted. Provider sending limits apply.
              </p>
              <p>
                Extra mailboxes, extra storage and premium suites such as Google Workspace
                or Microsoft 365 are quoted or billed separately. We do not guarantee
                deliverability or inbox placement, because that depends on receiving mail
                systems outside our control.
              </p>

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

              <h2 id="domains">Domains</h2>
              <p>
                We do not include a free domain. Domains can be registered in your name as
                an add-on, or you may provide a domain you already own. Domain registration
                and renewal costs are separate from both the project fee and the monthly
                care plan. We can manage configuration and the renewal process on your
                behalf without taking ownership of the domain.
              </p>

              <h2 id="ownership">Ownership</h2>
              <p>
                Upon full payment, you own your website and its content. The domain is
                registered in your name and belongs to you. Access to the domain, hosting
                and mailboxes is handed over if the working relationship ends.
              </p>

              <h2 id="support">Support</h2>
              <p>
                Each development package includes a post-launch support period for minor
                adjustments. Ongoing maintenance is optional and available through the
                monthly care plans described above. A website bought without a care plan
                remains yours to keep and manage.
              </p>

              <h2 id="liability">Limitation of liability</h2>
              <p>
                We take care to deliver quality work, but we cannot be held liable for
                indirect damages, loss of revenue or business interruption arising from
                the use of the website. We do not guarantee uptime, search rankings, security
                against every possible attack, email deliverability or the completeness of
                any backup. Backups are taken where the hosting environment supports them
                and are not a substitute for keeping your own copies of important content.
              </p>

              <h2 id="termination">Termination</h2>
              <p>
                Either party may terminate the agreement with written notice. In the event
                of termination, payment is due for work completed up to that point. For care
                plans, we agree a handover of files, domain access, DNS records and mailboxes
                so the site can continue elsewhere. Mailbox data is handled in line with the
                email provider&apos;s export and retention options at the time of cancellation.
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
