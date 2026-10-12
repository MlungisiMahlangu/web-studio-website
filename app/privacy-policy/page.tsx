import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { PageHero } from '@/components/ui/page-hero'
import { STUDIO_NAME, STUDIO_EMAIL, LAST_UPDATED } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | WEB-IN South Africa',
  description: `Privacy policy for ${STUDIO_NAME}. POPIA compliant. How we collect, use and protect your personal information.`,
  alternates: {
    canonical: 'https://web-in.co.za/privacy-policy',
  },
}

const tocItems = [
  { id: 'information-we-collect', label: 'Information we collect' },
  { id: 'how-we-use', label: 'How we use your information' },
  { id: 'data-storage', label: 'Data storage' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'third-party', label: 'Third-party services' },
  { id: 'your-rights', label: 'Your rights' },
  { id: 'popia', label: 'POPIA compliance' },
  { id: 'changes', label: 'Changes to this policy' },
  { id: 'contact', label: 'Contact' },
]

export default function PrivacyPolicyPage() {
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
        title="Privacy policy"
        description="Clear, straightforward information about how we handle your information."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy', href: '/privacy-policy' },
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

              <h2 id="information-we-collect">Information we collect</h2>
              <p>
                We collect only the information needed to respond to enquiries, deliver
                projects and provide support. This may include your name, email address,
                phone number and project details submitted through our contact forms.
              </p>

              <h2 id="how-we-use">How we use your information</h2>
              <p>
                Your information is used solely for the purpose of communicating about
                your project, providing quotes, delivering websites and offering
                post-launch support. We do not sell, trade or share personal information
                with third parties.
              </p>

              <h2 id="data-storage">Data storage</h2>
              <p>
                Project files and communications are stored securely. We retain your
                information only for as long as necessary to fulfil our obligations and
                maintain our relationship.
              </p>

              <h2 id="cookies">Cookies</h2>
              <p>
                Our website may use essential cookies for functionality and analytics
                cookies to understand how visitors interact with the site. You can
                control cookie preferences through your browser settings.
              </p>

              <h2 id="third-party">Third-party services</h2>
              <p>
                We may use third-party services such as analytics tools and infrastructure
                providers. These services have their own privacy policies and we
                encourage you to review them.
              </p>

              <h2 id="your-rights">Your rights</h2>
              <p>
                You have the right to access, correct or delete your personal
                information. Contact us at{' '}
                <a href={`mailto:${STUDIO_EMAIL}`}>
                  {STUDIO_EMAIL}
                </a>{' '}
                to make a request.
              </p>

              <h2 id="popia">POPIA compliance</h2>
              <p>
                As a South African business, we comply with the Protection of Personal
                Information Act (POPIA). We process personal information lawfully,
                reasonably and in a manner that protects your privacy. We only collect
                information for specific, legitimate purposes related to our web
                development services. You may at any time request access to your personal
                information, ask for corrections, or request deletion, subject to legal
                and contractual restrictions.
              </p>

              <h2 id="changes">Changes to this policy</h2>
              <p>
                We may update this policy from time to time. Any changes will be posted
                on this page with an updated revision date.
              </p>

              <h2 id="contact">Contact</h2>
              <p>
                For privacy-related questions, contact us through the{' '}
                <Link href="/contact">
                  contact form
                </Link>{' '}
                or email us directly.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
