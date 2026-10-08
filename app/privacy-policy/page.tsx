import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { STUDIO_NAME, STUDIO_EMAIL } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'Privacy policy for [STUDIO NAME].',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <section className="inner-hero container">
        <p className="eyebrow">{STUDIO_NAME} / Legal</p>
        <h1>Privacy policy</h1>
        <p>
          Clear, straightforward information about how we handle your information.
        </p>
      </section>
      <section className="inner-content container">
        <div className="legal-content">
          <h2>Information we collect</h2>
          <p>
            We collect only the information needed to respond to enquiries, deliver
            projects and provide support. This may include your name, email address,
            phone number and project details submitted through our contact forms.
          </p>

          <h2>How we use your information</h2>
          <p>
            Your information is used solely for the purpose of communicating about
            your project, providing quotes, delivering websites and offering
            post-launch support. We do not sell, trade or share personal information
            with third parties.
          </p>

          <h2>Data storage</h2>
          <p>
            Project files and communications are stored securely. We retain your
            information only for as long as necessary to fulfil our obligations and
            maintain our relationship.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website may use essential cookies for functionality and analytics
            cookies to understand how visitors interact with the site. You can
            control cookie preferences through your browser settings.
          </p>

          <h2>Third-party services</h2>
          <p>
            We may use third-party services such as analytics tools and hosting
            providers. These services have their own privacy policies and we
            encourage you to review them.
          </p>

          <h2>Your rights</h2>
          <p>
            You have the right to access, correct or delete your personal
            information. Contact us at{' '}
            <a href={`mailto:${STUDIO_EMAIL}`} style={{ color: 'var(--ink)', fontWeight: 500 }}>
              {STUDIO_EMAIL}
            </a>{' '}
            to make a request.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. Any changes will be posted
            on this page with an updated revision date.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy-related questions, contact us through the{' '}
            <Link href="/contact" style={{ color: 'var(--ink)', fontWeight: 500 }}>
              contact form
            </Link>{' '}
            or email us directly.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
