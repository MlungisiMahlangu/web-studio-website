import { Mail, Phone, MessageCircle } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { EnquiryForm } from '@/components/forms/enquiry-form'
import { STUDIO_EMAIL, STUDIO_PHONE, STUDIO_WHATSAPP } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact WEB-IN | Get a Website Quote',
  description: 'Get in touch about your web project. Request a quote, ask questions, or discuss your ideas. Response within 1-2 business days. Email, phone, or WhatsApp.',
  alternates: {
    canonical: 'https://web-in.co.za/contact',
  },
}

export default function ContactPage() {
  const whatsappLink = `https://wa.me/${STUDIO_WHATSAPP}`

  return (
    <>
      {/* Hero */}
      <Section dark className="!pb-24 sm:!pb-32">
        <Container>
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <p className="text-xs font-semibold uppercase text-brand" style={{ letterSpacing: '0.14em' }}>01 / Get in touch</p>
              <span className="h-px w-10 bg-white/20" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-display-lg leading-tight font-extrabold text-white">
              Let&apos;s build
              <br />
              something real.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-[640px] text-lg leading-relaxed text-white/60">
              Have a project in mind? Tell us what you&apos;re working on. We&apos;ll review the details and come back with a clear next step.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_400px] lg:gap-20">
            {/* Form Column */}
            <Reveal>
              <div>
                <p className="text-xs font-semibold uppercase text-brand mb-4" style={{ letterSpacing: '0.14em' }}>02 / Send a message</p>
                <h2 className="text-display-md leading-tight font-bold text-navy">
                  Tell us about
                  <br />
                  your project.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-body">
                  Fill in the form below and we&apos;ll get back to you within 1–2 business days with a thoughtful response.
                </p>
                <div className="mt-10 rounded-2xl border border-line bg-white shadow-card p-8 sm:p-10">
                  <EnquiryForm />
                </div>
              </div>
            </Reveal>

            {/* Info Sidebar */}
            <Reveal delay={150}>
              <div className="lg:pt-0 pt-4">
                <p className="text-xs font-semibold uppercase text-brand mb-4" style={{ letterSpacing: '0.14em' }}>03 / Reach out directly</p>
                <h2 className="text-display-sm leading-tight font-bold text-navy">
                  We&apos;re here
                  <br />
                  when you&apos;re ready.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-body">
                  Prefer to skip the form? Reach out directly through email, phone or WhatsApp. We typically respond within a few hours during business hours.
                </p>

                <div className="mt-10 grid gap-4">
                  <a
                    href={`mailto:${STUDIO_EMAIL}`}
                    className="group flex items-center gap-5 rounded-2xl border border-line bg-white shadow-card p-6 transition-all duration-300 hover:border-brand/30"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Email us</p>
                      <p className="mt-1 text-sm font-medium text-navy">{STUDIO_EMAIL}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${STUDIO_PHONE.replace(/\s/g, '')}`}
                    className="group flex items-center gap-5 rounded-2xl border border-line bg-white shadow-card p-6 transition-all duration-300 hover:border-brand/30"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Call us</p>
                      <p className="mt-1 text-sm font-medium text-navy">{STUDIO_PHONE}</p>
                    </div>
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 rounded-2xl border border-line bg-white shadow-card p-6 transition-all duration-300 hover:border-brand/30"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>WhatsApp</p>
                      <p className="mt-1 text-sm font-medium text-navy">Chat with us</p>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

    </>
  )
}
