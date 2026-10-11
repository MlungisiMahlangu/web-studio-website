import { FaqPage } from '@/components/sections/faq-accordion'
import { faqCategories, SITE_URL } from '@/lib/constants'
import { PageHero } from '@/components/ui/page-hero'
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
      <PageHero
        eyebrow="FAQ"
        title={<>Good questions<br />deserve clear answers.</>}
        description="Everything you need to know before starting a project with WEB-IN — from services and timelines to domains, ownership, support and what happens after you get in touch."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'FAQ', href: '/faq' },
        ]}
        accent="clear"
      />

      {/* FAQ Content */}
      <FaqPage categories={faqCategories} />
    </>
  )
}
