import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { STUDIO_NAME, STUDIO_EMAIL } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: `Privacy policy for ${STUDIO_NAME}.`,
}

export default function PrivacyPolicyPage() {
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
            Privacy policy
          </h1>
          <p className="mt-5 max-w-[520px] text-lg text-cream/60">
            Clear, straightforward information about how we handle your information.
          </p>
        </Container>
      </Section>

      {/* Content */}
      <Section className="pb-24 sm:pb-32">
        <Container text>
          <div className="space-y-6 text-muted">
            <h2 className="font-display text-2xl text-ink mt-12 first:mt-0 mb-4">
              Information we collect
            </h2>
            <p>
              We collect only the information needed to respond to enquiries, deliver
              projects and provide support. This may include your name, email address,
              phone number and project details submitted through our contact forms.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              How we use your information
            </h2>
            <p>
              Your information is used solely for the purpose of communicating about
              your project, providing quotes, delivering websites and offering
              post-launch support. We do not sell, trade or share personal information
              with third parties.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Data storage
            </h2>
            <p>
              Project files and communications are stored securely. We retain your
              information only for as long as necessary to fulfil our obligations and
              maintain our relationship.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Cookies
            </h2>
            <p>
              Our website may use essential cookies for functionality and analytics
              cookies to understand how visitors interact with the site. You can
              control cookie preferences through your browser settings.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Third-party services
            </h2>
            <p>
              We may use third-party services such as analytics tools and hosting
              providers. These services have their own privacy policies and we
              encourage you to review them.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Your rights
            </h2>
            <p>
              You have the right to access, correct or delete your personal
              information. Contact us at{' '}
              <a
                href={`mailto:${STUDIO_EMAIL}`}
                className="text-ink font-medium underline decoration-line underline-offset-4 transition-colors hover:text-accent"
              >
                {STUDIO_EMAIL}
              </a>{' '}
              to make a request.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Changes to this policy
            </h2>
            <p>
              We may update this policy from time to time. Any changes will be posted
              on this page with an updated revision date.
            </p>

            <h2 className="font-display text-2xl text-ink mt-12 mb-4">
              Contact
            </h2>
            <p>
              For privacy-related questions, contact us through the{' '}
              <Link
                href="/contact"
                className="text-ink font-medium underline decoration-line underline-offset-4 transition-colors hover:text-accent"
              >
                contact form
              </Link>{' '}
              or email us directly.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
