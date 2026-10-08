import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { FaqPage } from '@/components/sections/faq-accordion'
import { faqCategories } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Everything you need to know before starting a project with WEB-IN — from pricing and timelines to domains, ownership, support and what happens after you get in touch.',
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <section className="faq-hero container">
        <p className="eyebrow">06 / FAQ</p>
        <h1>
          Good questions
          <br />
          <em>deserve clear answers.</em>
        </h1>
        <p className="faq-hero-copy">
          Everything you need to know before starting a project with WEB-IN — from
          pricing and timelines to domains, ownership, support and what happens
          after you get in touch.
        </p>
        <p className="faq-hero-meta">
          Clear answers &middot; Straightforward process &middot; No unnecessary
          jargon
        </p>
      </section>
      <FaqPage categories={faqCategories} />
      <Footer />
    </>
  )
}
