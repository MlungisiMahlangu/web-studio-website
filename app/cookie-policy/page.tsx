import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { PageHero } from '@/components/ui/page-hero'
import { STUDIO_NAME, STUDIO_EMAIL, LAST_UPDATED } from '@/lib/constants'
import { alternatesFor, openGraphFor, twitterFor } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: `Which cookies and local storage the ${STUDIO_NAME} website uses, what they do and how you can manage or clear them in your browser.`,
  alternates: alternatesFor('/cookie-policy'),
  openGraph: openGraphFor(
    '/cookie-policy',
    'Cookie Policy',
    'No tracking cookies: what WEB-IN stores in your browser, how cookie-free analytics work, and how to clear your data.',
  ),
  twitter: twitterFor(
    'Cookie Policy',
    'What WEB-IN stores in your browser, cookie-free analytics and how to clear your data.',
  ),
}

const tocItems = [
  { id: 'what-are-cookies', label: 'Cookies and local storage' },
  { id: 'what-we-store', label: 'What we store' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'managing', label: 'Managing your data' },
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
        compact
        eyebrow={`${STUDIO_NAME} / Legal`}
        title="Cookie policy"
        description="How we use cookies on our website."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Cookie Policy', href: '/cookie-policy' },
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

              <h2 id="what-are-cookies">Cookies and local storage</h2>
              <p>
                Cookies are small text files a website can store in your browser. Local
                storage works in a similar way, but the data stays in your browser and is
                not sent with every request. This website sets no advertising or tracking
                cookies.
              </p>

              <h2 id="what-we-store">What we store</h2>
              <p>
                We keep two preferences in your browser&apos;s local storage:
              </p>
              <ul>
                <li>
                  <strong className="text-navy font-medium">cookie-consent</strong> —
                  remembers that you dismissed the cookie notice so it does not appear
                  again.
                </li>
                <li>
                  <strong className="text-navy font-medium">webin:enquiry-draft</strong> —
                  saves your progress in the enquiry form so a refresh does not lose your
                  answers. It is cleared from your browser once the form is sent.
                </li>
              </ul>
              <p>
                Neither entry contains advertising identifiers or is shared with anyone.
              </p>

              <h2 id="analytics">Analytics</h2>
              <p>
                Our production site uses Vercel Analytics to count page views and measure
                site performance. It is cookie-free, does not fingerprint visitors and does
                not track you across other websites. Aggregate performance and usage
                figures may be processed by Vercel on our behalf.
              </p>

              <h2 id="managing">Managing your data</h2>
              <p>
                You can clear cookies and local storage at any time through your browser
                settings. Removing the enquiry draft simply means unsent answers are lost;
                the site continues to work normally.
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
