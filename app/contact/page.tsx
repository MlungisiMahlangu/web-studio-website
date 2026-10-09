import { Mail, Phone, MessageCircle } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { EnquiryForm } from '@/components/forms/enquiry-form'
import { STUDIO_EMAIL, STUDIO_PHONE, STUDIO_WHATSAPP } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch about your project. Reach out via email, phone or WhatsApp, or send us a message and we will respond within 1–2 business days.',
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
              <p className="font-mono text-xs uppercase tracking-wider text-accent">01 / Get in touch</p>
              <span className="h-px w-10 bg-cream/20" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-display-xl leading-tight tracking-tight text-cream">
              Let&apos;s build
              <br />
              <span className="italic text-accent">something real.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-[640px] text-lg leading-relaxed text-cream/60">
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
                <p className="font-mono text-xs uppercase tracking-wider text-muted mb-4">02 / Send a message</p>
                <h2 className="font-display text-display-md leading-tight tracking-tight">
                  Tell us about
                  <br />
                  <span className="italic text-accent">your project.</span>
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">
                  Fill in the form below and we&apos;ll get back to you within 1–2 business days with a thoughtful response.
                </p>
                <div className="mt-10 rounded-2xl border border-line bg-cream-light p-8 sm:p-10">
                  <EnquiryForm />
                </div>
              </div>
            </Reveal>

            {/* Info Sidebar */}
            <Reveal delay={150}>
              <div className="lg:pt-0 pt-4">
                <p className="font-mono text-xs uppercase tracking-wider text-muted mb-4">03 / Reach out directly</p>
                <h2 className="font-display text-display-sm leading-tight tracking-tight">
                  We&apos;re here
                  <br />
                  <span className="italic text-accent">when you&apos;re ready.</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  Prefer to skip the form? Reach out directly through email, phone or WhatsApp. We typically respond within a few hours during business hours.
                </p>

                <div className="mt-10 grid gap-4">
                  <a
                    href={`mailto:${STUDIO_EMAIL}`}
                    className="group flex items-center gap-5 rounded-2xl border border-line bg-cream p-6 transition-colors hover:border-accent/30 hover:bg-cream-light"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream-dark text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-muted">Email us</p>
                      <p className="mt-1 text-sm font-medium">{STUDIO_EMAIL}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${STUDIO_PHONE.replace(/\s/g, '')}`}
                    className="group flex items-center gap-5 rounded-2xl border border-line bg-cream p-6 transition-colors hover:border-accent/30 hover:bg-cream-light"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream-dark text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-muted">Call us</p>
                      <p className="mt-1 text-sm font-medium">{STUDIO_PHONE}</p>
                    </div>
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 rounded-2xl border border-line bg-cream p-6 transition-colors hover:border-accent/30 hover:bg-cream-light"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream-dark text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-muted">WhatsApp</p>
                      <p className="mt-1 text-sm font-medium">Chat with us</p>
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
