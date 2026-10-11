import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { PageHero } from '@/components/ui/page-hero'
import { IconBox } from '@/components/ui/icon-box'
import { Reveal } from '@/components/ui/reveal'
import { EnquiryForm } from '@/components/forms/enquiry-form'
import { STUDIO_EMAIL, STUDIO_PHONE, STUDIO_WHATSAPP, STUDIO_LOCATION } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact WEB-IN | Get a Website Quote',
  description: 'Get in touch about your web project. Request a quote, ask questions, or discuss your ideas. Email, phone, or WhatsApp.',
  alternates: {
    canonical: 'https://web-in.co.za/contact',
  },
}

export default function ContactPage() {
  const whatsappLink = `https://wa.me/${STUDIO_WHATSAPP}`

  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Get in Touch"
        title={<>Let's build<br />something real.</>}
        description="Have a project in mind? Tell us what you're working on. We'll review the details and come back with a clear next step."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
        accent="real"
      />

      {/* Contact Form Section */}
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_400px] lg:gap-20">
            {/* Form Column */}
            <Reveal>
              <div>
                <p className="text-xs font-semibold uppercase text-brand mb-4" style={{ letterSpacing: '0.14em' }}>Send a message</p>
                <h2 className="text-display-md leading-tight font-bold text-navy">
                  Tell us about<br />your project.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-body">
                  Fill in the form below and we'll get back to you with a thoughtful response.
                </p>
                <div className="mt-10 rounded-2xl border border-line bg-white shadow-card p-8 sm:p-10">
                  <EnquiryForm />
                </div>
              </div>
            </Reveal>

            {/* Info Sidebar */}
            <Reveal delay={150}>
              <div className="lg:pt-0 pt-4">
                <p className="text-xs font-semibold uppercase text-brand mb-4" style={{ letterSpacing: '0.14em' }}>Reach out directly</p>
                <h2 className="text-display-sm leading-tight font-bold text-navy">
                  We're here<br />when you're ready.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-body">
                  Prefer to skip the form? Reach out directly through email, phone or WhatsApp.
                </p>

                <div className="mt-10 grid gap-4">
                  <a
                    href={`mailto:${STUDIO_EMAIL}`}
                    className="group flex items-center gap-5 rounded-2xl border border-line bg-white shadow-card p-6 transition-all duration-300 hover:border-brand/30 hover:shadow-lg"
                  >
                    <IconBox icon={Mail} className="shrink-0" />
                    <div>
                      <p className="text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Email us</p>
                      <p className="mt-1 text-sm font-medium text-navy">{STUDIO_EMAIL}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${STUDIO_PHONE.replace(/\s/g, '')}`}
                    className="group flex items-center gap-5 rounded-2xl border border-line bg-white shadow-card p-6 transition-all duration-300 hover:border-brand/30 hover:shadow-lg"
                  >
                    <IconBox icon={Phone} className="shrink-0" />
                    <div>
                      <p className="text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Call us</p>
                      <p className="mt-1 text-sm font-medium text-navy">{STUDIO_PHONE}</p>
                    </div>
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 rounded-2xl border border-line bg-white shadow-card p-6 transition-all duration-300 hover:border-brand/30 hover:shadow-lg"
                  >
                    <IconBox icon={MessageCircle} className="shrink-0" />
                    <div>
                      <p className="text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>WhatsApp</p>
                      <p className="mt-1 text-sm font-medium text-navy">Chat with us</p>
                    </div>
                  </a>

                  <div className="group flex items-center gap-5 rounded-2xl border border-line bg-white shadow-card p-6">
                    <IconBox icon={MapPin} className="shrink-0" />
                    <div>
                      <p className="text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Service area</p>
                      <p className="mt-1 text-sm font-medium text-navy">{STUDIO_LOCATION}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  )
}
