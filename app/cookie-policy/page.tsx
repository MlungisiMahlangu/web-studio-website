import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { PageHero } from '@/components/ui/page-hero'
import { STUDIO_NAME, STUDIO_EMAIL, LAST_UPDATED } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | WEB-IN',
  description: `Cookie policy for ${STUDIO_NAME}.`,
  alternates: {
    canonical: 'https://web-in.co.za/cookie-policy',
  },
}

const tocItems = [
  { id: 'what-are-cookies', label: 'What are cookies' },
  { id: 'how-we-use', label: 'How we use cookies' },
  { id: 'third-party', label: 'Third-party cookies' },
  { id: 'managing', label: 'Managing cookies' },
  { id: 'contact', label: 'Contact' },
]

export default function CookiePolicyPage() {
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
        title="Cookie policy"
        description="How we use cookies on our website."
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

              <h2 id="what-are-cookies">What are cookies</h2>
              <p>
                Cookies are small text files stored on your device when you visit a
                website. They help the website remember your preferences and improve your
                experience.
              </p>

              <h2 id="how-we-use">How we use cookies</h2>
              <p>
                Our website may use the following types of cookies:
              </p>
              <ul>
                <li>
                  <strong className="text-navy font-medium">Essential cookies</strong> — Required for the website to function properly.
                </li>
                <li>
                  <strong className="text-navy font-medium">Analytics cookies</strong> — Help us understand how visitors interact with the website.
                </li>
              </ul>

              <h2 id="third-party">Third-party cookies</h2>
              <p>
                We may use third-party services like Google Analytics, which set their own
                cookies. These are governed by the respective third-party privacy policies.
              </p>

              <h2 id="managing">Managing cookies</h2>
              <p>
                You can control and delete cookies through your browser settings. Note
                that disabling certain cookies may affect the functionality of the website.
              </p>

              <h2 id="contact">Contact</h2>
              <p>
                For questions about our cookie policy, contact us at{' '}
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
