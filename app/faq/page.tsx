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
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase text-brand mb-6" style={{ letterSpacing: '0.14em' }}>
              06 / FAQ
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-display-lg leading-tight font-extrabold text-white max-w-4xl">
              Good questions
              <br />
              deserve clear answers.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed">
              Everything you need to know before starting a project with WEB-IN — from
              services and timelines to domains, ownership, support and what happens
              after you get in touch.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-xs text-white/30">
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
