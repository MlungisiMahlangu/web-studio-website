import Link from 'next/link'
import { Mail, Phone, MessageCircle } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { EnquiryForm } from '@/components/forms/enquiry-form'
import { STUDIO_EMAIL, STUDIO_PHONE, STUDIO_WHATSAPP } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — WEB-IN',
  description: 'Get in touch about your project. Reach out via email, phone or WhatsApp, or send us a message and we will respond within 1–2 business days.',
}

export default function ContactPage() {
  const whatsappLink = `https://wa.me/${STUDIO_WHATSAPP}`

  return (
    <>
      <Navbar />
      <section className="inner-hero container">
        <p className="eyebrow">01 / Get in touch</p>
        <h1>
          Let&apos;s build
          <br />
          <em>something real.</em>
        </h1>
        <p>
          Have a project in mind? Tell us what you&apos;re working on. We&apos;ll review the details and come back with a clear next step.
        </p>
      </section>

      <section className="container contact-layout">
        <div className="contact-info">
          <div className="contact-info-intro">
            <p className="eyebrow">02 / Reach out directly</p>
            <h2>
              We&apos;re here
              <br />
              <em>when you&apos;re ready.</em>
            </h2>
            <p>
              Prefer to skip the form? Reach out directly through email, phone or WhatsApp. We typically respond within a few hours during business hours.
            </p>
          </div>

          <div className="contact-cards">
            <a href={`mailto:${STUDIO_EMAIL}`} className="contact-card">
              <Mail aria-hidden="true" />
              <div>
                <p className="contact-card-label">Email us</p>
                <p className="contact-card-value">{STUDIO_EMAIL}</p>
              </div>
            </a>

            <a href={`tel:${STUDIO_PHONE.replace(/\s/g, '')}`} className="contact-card">
              <Phone aria-hidden="true" />
              <div>
                <p className="contact-card-label">Call us</p>
                <p className="contact-card-value">{STUDIO_PHONE}</p>
              </div>
            </a>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-card">
              <MessageCircle aria-hidden="true" />
              <div>
                <p className="contact-card-label">WhatsApp</p>
                <p className="contact-card-value">Chat with us</p>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <div className="contact-form-intro">
            <p className="eyebrow">03 / Send a message</p>
            <h2>
              Tell us about
              <br />
              <em>your project.</em>
            </h2>
            <p>
              Fill in the form below and we&apos;ll get back to you within 1–2 business days with a thoughtful response.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <Footer />
    </>
  )
}
