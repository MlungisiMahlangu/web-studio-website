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
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="font-mono text-xs uppercase tracking-wider text-accent mb-6">
              Message received
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="font-display text-display-xl leading-tight tracking-tight text-cream">
              Thank you for
              <br />
              <span className="italic text-accent">reaching out.</span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-8 text-lg leading-relaxed text-cream/60">
              We&apos;ve received your message and will review the details shortly. Expect a thoughtful response from us within 1–2 business days.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <p className="mt-4 text-base leading-relaxed text-cream/40">
              In the meantime, feel free to explore our work or learn more about how we work. When you&apos;re ready, we&apos;ll be here.
            </p>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Back to home
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-xl border border-cream/20 px-8 py-4 text-sm font-semibold text-cream transition-colors hover:border-accent/40 hover:text-accent"
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
