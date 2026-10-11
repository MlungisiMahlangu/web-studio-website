import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'Thanks for reaching out. We will review your message and get back to you within 1–2 business days.',
}

export default function ThankYouPage() {
  return (
    <>
      {/* Hero */}
      <Section dark className="!py-32 sm:!py-40 md:!py-48">
        <Container narrow className="text-center">
          <Reveal variant="scale">
            <div className="flex justify-center mb-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-xs font-semibold uppercase text-brand mb-6" style={{ letterSpacing: '0.14em' }}>
              Message received
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="text-display-lg leading-tight font-extrabold text-white">
              Thank you for
              <br />
              reaching out.
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-8 text-lg leading-relaxed text-white/60">
              We&apos;ve received your message and will review the details shortly. Expect a thoughtful response from us within 1–2 business days.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <p className="mt-4 text-base leading-relaxed text-white/40">
              In the meantime, feel free to explore our work or learn more about how we work. When you&apos;re ready, we&apos;ll be here.
            </p>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                Back to home
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/15 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white/30"
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
