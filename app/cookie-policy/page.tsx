import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { STUDIO_NAME, STUDIO_EMAIL } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie policy',
  description: `Cookie policy for ${STUDIO_NAME}.`,
}

export default function CookiePolicyPage() {
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
            Cookie policy
          </h1>
          <p className="mt-5 max-w-[520px] text-lg text-white/60">
            How we use cookies on our website.
          </p>
        </Container>
      </Section>

      {/* Content */}
      <Section className="pb-24 sm:pb-32">
        <Container text>
          <div className="space-y-6 text-muted">
            <h2 className="text-2xl font-bold text-navy mt-12 first:mt-0 mb-4">
              What are cookies
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit a
              website. They help the website remember your preferences and improve your
              experience.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              How we use cookies
            </h2>
            <p>
              Our website may use the following types of cookies:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-navy font-medium">Essential cookies</strong> — Required for the website to function properly.
              </li>
              <li>
                <strong className="text-navy font-medium">Analytics cookies</strong> — Help us understand how visitors interact with the website.
              </li>
            </ul>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Third-party cookies
            </h2>
            <p>
              We may use third-party services like Google Analytics, which set their own
              cookies. These are governed by the respective third-party privacy policies.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Managing cookies
            </h2>
            <p>
              You can control and delete cookies through your browser settings. Note
              that disabling certain cookies may affect the functionality of the website.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Contact
            </h2>
            <p>
              For questions about our cookie policy, contact us at{' '}
              <a
                href={`mailto:${STUDIO_EMAIL}`}
                className="text-navy font-medium underline decoration-line underline-offset-4 transition-colors hover:text-brand"
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
