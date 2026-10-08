import Link from 'next/link'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { EnquiryForm } from '@/components/forms/enquiry-form'
import { STUDIO_EMAIL, WHATSAPP_LINK } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch about your project. Send an enquiry or chat with us on WhatsApp.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="inner-hero container">
        <p className="eyebrow">Get in touch</p>
        <h1>
          Have a good idea?
          <br />
          <em>Let&apos;s make it real.</em>
        </h1>
        <p>
          Tell us about what you are building. We will get back to you with a
          thoughtful next step.
        </p>
      </section>
      <section className="inner-content container form-layout">
        <div>
          <p className="eyebrow">Other ways to reach us</p>
          <h2>
            We are here to help.
          </h2>
          <div style={{ display: 'grid', gap: 20, marginTop: 24 }}>
            <div>
              <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)', margin: '0 0 6px' }}>
                Email
              </p>
              <a href={`mailto:${STUDIO_EMAIL}`} style={{ fontSize: 16, fontWeight: 500 }}>
                {STUDIO_EMAIL}
              </a>
            </div>
            <div>
              <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)', margin: '0 0 6px' }}>
                WhatsApp
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, fontWeight: 500 }}
              >
                <MessageCircle style={{ width: 18 }} /> Chat with us
              </a>
            </div>
            <div>
              <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)', margin: '0 0 6px' }}>
                Prefer a full project brief?
              </p>
              <Link href="/start-a-project" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, fontWeight: 500 }}>
                Use our project form <ArrowUpRight style={{ width: 16 }} />
              </Link>
            </div>
          </div>
        </div>
        <EnquiryForm />
      </section>
      <Footer />
    </>
  )
}
