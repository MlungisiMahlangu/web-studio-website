import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { PageHero } from '@/components/ui/page-hero'
import { Reveal } from '@/components/ui/reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'Thanks for reaching out. We will review your message and get back to you shortly.',
}

export default function ThankYouPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        dark
        eyebrow="Message received"
        title={<>Thank you for<br />reaching out.</>}
        description="We've received your message and will review the details shortly."
      />

      {/* What happens next */}
      <Section>
        <Container narrow>
          <Reveal>
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-tint text-brand">
                  <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                </div>
              </div>
              <h2 className="text-display-md leading-tight font-bold text-navy">
                What happens next
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex items-start gap-5 rounded-2xl border border-line bg-white shadow-card p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white text-sm font-bold">
                  1
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">We review your enquiry</h3>
                  <p className="text-body leading-relaxed">We'll read through your message and understand what you're looking for.</p>
                </div>
              </div>

              <div className="flex items-start gap-5 rounded-2xl border border-line bg-white shadow-card p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white text-sm font-bold">
                  2
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">We respond with a clear next step</h3>
                  <p className="text-body leading-relaxed">Expect a thoughtful response from us within 1–2 business days.</p>
                </div>
              </div>

              <div className="flex items-start gap-5 rounded-2xl border border-line bg-white shadow-card p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white text-sm font-bold">
                  3
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">We schedule a call if needed</h3>
                  <p className="text-body leading-relaxed">If your project needs a deeper conversation, we'll set up a time to talk.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-full bg-brand text-white h-12 px-7 text-sm font-medium transition-all duration-300 hover:bg-brand-hover"
              >
                Back to home
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-white text-navy h-12 px-7 text-sm font-medium transition-all duration-300 hover:border-brand/20 hover:shadow-lg"
              >
                View our work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
