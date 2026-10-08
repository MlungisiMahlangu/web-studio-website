import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { STUDIO_NAME, STUDIO_EMAIL } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie policy',
  description: 'Cookie policy for [STUDIO NAME].',
}

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <section className="inner-hero container">
        <p className="eyebrow">{STUDIO_NAME} / Legal</p>
        <h1>Cookie policy</h1>
        <p>
          How we use cookies on our website.
        </p>
      </section>
      <section className="inner-content container">
        <div className="legal-content">
          <h2>What are cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help the website remember your preferences and improve your
            experience.
          </p>

          <h2>How we use cookies</h2>
          <p>
            Our website may use the following types of cookies:
          </p>
          <ul>
            <li><strong>Essential cookies</strong> — Required for the website to function properly.</li>
            <li><strong>Analytics cookies</strong> — Help us understand how visitors interact with the website.</li>
          </ul>

          <h2>Third-party cookies</h2>
          <p>
            We may use third-party services like Google Analytics, which set their own
            cookies. These are governed by the respective third-party privacy policies.
          </p>

          <h2>Managing cookies</h2>
          <p>
            You can control and delete cookies through your browser settings. Note
            that disabling certain cookies may affect the functionality of the website.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about our cookie policy, contact us at{' '}
            <a href={`mailto:${STUDIO_EMAIL}`} style={{ color: 'var(--ink)', fontWeight: 500 }}>
              {STUDIO_EMAIL}
            </a>.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
