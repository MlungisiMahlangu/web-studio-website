import { FaqPage } from '@/components/sections/faq-accordion'
import { faqCategories, SITE_URL } from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Web Development Questions Answered',
  description: 'Everything you need to know about working with WEB-IN. Services, pricing, timelines, domains, ownership, support. South African web development FAQ.',
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap((category) =>
    category.items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    }))
  ),
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <Section dark className="relative overflow-hidden py-16 sm:py-20 md:py-24">
        {/* Grain overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
          }}
        />
        <Container>
          <Reveal>
            <p className="font-mono text-xs tracking-widest uppercase text-cream/50 mb-6">
              06 / FAQ
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-cream max-w-4xl">
              Good questions
              <br />
              <em className="italic text-cream/70">deserve clear answers.</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 text-lg sm:text-xl text-cream/60 max-w-2xl leading-relaxed">
              Everything you need to know before starting a project with WEB-IN — from
              services and timelines to domains, ownership, support and what happens
              after you get in touch.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 font-mono text-xs tracking-wide text-cream/30">
              Clear answers &middot; Straightforward process &middot; No unnecessary
              jargon
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* FAQ Content */}
      <FaqPage categories={faqCategories} />
    </>
  )
}
