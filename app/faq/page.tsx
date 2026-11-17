import { FaqPage } from '@/components/sections/faq-accordion'
import { faqCategories } from '@/lib/constants'
import { alternatesFor, faqSchema, webPageSchema, openGraphFor, twitterFor } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { PageHero } from '@/components/ui/page-hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Design FAQ',
  description:
    'Answers about website costs, timelines, ownership, payments, business email and care plans when working with WEB-IN in Johannesburg. Websites from R2,500 once-off.',
  keywords: [
    'web development faq',
    'website design questions',
    'web development pricing faq',
    'website ownership faq',
    'website care plan faq',
    'business email website',
    'web design timeline',
    'website development process',
  ],
  alternates: alternatesFor('/faq'),
  openGraph: openGraphFor('/faq', 'Website Design FAQ', 'Answers about website costs, timelines, ownership, payments, business email and care plans when working with WEB-IN in Johannesburg. Websites from R2,500 once-off.'),
  twitter: twitterFor('Website Design FAQ', 'Answers about website costs, timelines, ownership, payments, business email and care plans when working with WEB-IN in Johannesburg. Websites from R2,500 once-off.'),
}

const faqJsonLd = [
  webPageSchema({
    path: '/faq',
    name: 'Website design FAQ',
    description:
      'Answers about website costs, timelines, ownership, payments, business email and monthly care plans when working with WEB-IN.',
  }),
  faqSchema(faqCategories.flatMap((category) => category.items)),
]

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      {/* Hero */}
      <PageHero
        eyebrow="FAQ"
        title={<>Good questions<br />deserve clear answers.</>}
        description="Everything you need to know before starting a project with WEB-IN — from services and timelines to domains, ownership, business email, monthly care plans and what happens after you get in touch."
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
