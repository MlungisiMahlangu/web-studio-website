import type { Metadata } from 'next'
import { LandingPage } from '@/components/sections/landing-page'
import { carePriceChoices } from '@/lib/care-plans'
import { alternatesFor, openGraphFor, twitterFor } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Website Design Johannesburg',
  description:
    'Website design and development in Johannesburg for small businesses. Mobile-first sites from R2,500, built to load fast and turn enquiries into customers.',
  alternates: alternatesFor('/website-design-johannesburg'),
  openGraph: openGraphFor('/website-design-johannesburg', 'Website Design Johannesburg', 'Website design and development in Johannesburg for small businesses. Mobile-first sites from R2,500, built to load fast and turn enquiries into customers.'),
  twitter: twitterFor('Website Design Johannesburg', 'Website design and development in Johannesburg for small businesses. Mobile-first sites from R2,500, built to load fast and turn enquiries into customers.'),
}

const faqs = [
  {
    question: 'Do you work with businesses outside Johannesburg?',
    answer:
      'Yes. WEB-IN is based in Johannesburg and works remotely with businesses across South Africa, including clients in Sandton, Midrand, Randburg, Pretoria and Soweto. Work is handled by calls, email and WhatsApp, so location is not a barrier.',
  },
  {
    question: 'How much does a website cost in Johannesburg?',
    answer:
      'A Starter Website costs R2,500 and covers up to four pages with a contact form. A Business Website starts at R4,000 with more pages and a fuller enquiry path. Online stores start at R7,000. Final pricing depends on scope, and the pricing page lists exactly what each package includes.',
  },
  {
    question: 'How long does a Johannesburg website project take?',
    answer:
      'A Starter Website usually takes around one to two weeks once we have your deposit and content. Business websites typically take two to four weeks, and online stores or custom applications take longer. Timelines start when content and the deposit are in place.',
  },
  {
    question: 'Can you help with local search visibility?',
    answer:
      'Every website includes the technical foundations: clear titles and descriptions, a sitemap, fast pages and sensible page structure. We can also help you set up or clean up a Google Business Profile. We do not guarantee rankings, and ongoing SEO is a separate conversation.',
  },
  {
    question: 'Do you redesign existing Johannesburg websites?',
    answer:
      'Yes. Website redesigns start at R2,500. We look at what already works, keep the content worth keeping, and rebuild the design and front-end so the site is faster, clearer and easier to use on a phone.',
  },
]

export default function WebsiteDesignJohannesburgPage() {
  return (
    <LandingPage
      path="/website-design-johannesburg"
      eyebrow="Website design in Johannesburg"
      title="A website built for the way Johannesburg customers search."
      accent="Johannesburg"
      description="We design and build websites for Johannesburg businesses that need to look credible, load quickly and make it easy for customers to get in touch."
      breadcrumbLabel="Website design Johannesburg"
      serviceName="Website design and development"
      priceValue={2500}
      isFrom={false}
      intro={{
        heading: 'Good design starts with how your customers actually behave.',
        paragraphs: [
          'Most people looking for a service in Johannesburg start on a phone. They search, tap the first result that looks trustworthy, scan the page for proof and then look for a way to call, message or enquire. If your website takes too long to load, hides the phone number or looks dated, they move on to the next business.',
          'Our approach is practical. We start by understanding what you sell, who you serve and what a customer needs to know before they contact you. Then we design the pages around that path instead of filling space with generic content.',
          'That applies whether you run a small service business in Randburg, a professional practice in Sandton or a growing brand in Midrand. The design changes with the business; the thinking stays the same.',
        ],
        points: [
          'Mobile-first layouts that stay readable on a phone',
          'Clear calls to action, including WhatsApp and a tested form',
          'Fast pages with optimised images',
          'Local business information that is easy to find',
        ],
      }}
      sections={[
        {
          eyebrow: 'What we build',
          heading: 'Websites for Johannesburg businesses that need to be found and trusted.',
          alt: false,
          cards: [
            {
              title: 'Service businesses',
              text: 'Plumbers, electricians, cleaners and consultants need a clear list of services, service areas and a fast way to request a quote. We build the enquiry path around that.',
            },
            {
              title: 'Professional practices',
              text: 'Attorneys, accountants and healthcare professionals need to communicate expertise without clutter. The result is calm, structured and easy to scan.',
            },
            {
              title: 'Small and growing brands',
              text: 'A business that is growing needs room for more pages, products or locations. We structure the site so the next version does not require a rebuild.',
            },
            {
              title: 'Online stores',
              text: 'If you sell products, we build catalogues, product pages and checkout flows integrated with South African payment providers such as PayFast, Yoco or Ozow.',
            },
            {
              title: 'Website redesigns',
              text: 'An older site can keep its content and improve its design, speed and structure. Redesigns start at R2,500.',
            },
            {
              title: 'Custom web applications',
              text: 'Bookings, dashboards, client portals and internal tools are scoped individually. Custom work starts at R10,000.',
            },
          ],
        },
        {
          eyebrow: 'The local advantage',
          heading: 'Built in Johannesburg, for Johannesburg conditions.',
          alt: true,
          paragraphs: [
            'Local design is not about adding a skyline photo. It is about understanding how your customers talk, what they expect to pay and which contact methods they actually use. In South Africa, that often means WhatsApp first, clear pricing in rand and proof that the business is real. We work remotely with clients across Johannesburg and the rest of the country.',
            'We build for real devices and real connections. Pages are kept lean, images are compressed and layouts are tested on small screens. A website that looks good on a fast office connection but fails on mobile data is not finished.',
            'We also keep local formalities in mind. Your business details, privacy notice and terms are part of the build rather than an afterthought. If you already have those documents, we help you place them clearly.',
          ],
          points: [
            'WhatsApp contact built into the layout',
            'Prices shown in rand, without currency surprises',
            'Google Maps and service-area information where useful',
            'POPIA-aware forms and privacy links',
          ],
        },
        {
          eyebrow: 'How it works',
          heading: 'A short, clear process with no mystery invoices.',
          alt: false,
          paragraphs: [
            'We start with a conversation about your business, your customers and what the site needs to achieve. From there we agree on scope, pages and a fixed starting price. A 50% deposit books the project; the balance is due before launch.',
            'You supply the text and images unless you add content help. We give you a clear content checklist so you know what is needed and in what format. Design comes next, followed by development, testing and launch.',
            `After launch you have a defined support period. Optional care plans are ${carePriceChoices} per month depending on the site, covering ongoing updates, security checks, small changes and business email within the plan’s mailbox allowance. Neither the plan nor the support period is compulsory.`,
          ],
        },
        {
          eyebrow: 'What you get',
          heading: 'Every project includes the foundations.',
          alt: true,
          points: [
            'Responsive design for phone, tablet and desktop',
            'Search-friendly page titles, descriptions and headings',
            'Contact form tested before launch',
            'Image optimisation and sensible page speed',
            'HTTPS where the hosting supports it',
            'Launch checklist and handover',
            'A revision round based on one consolidated list',
            'A defined post-launch support period',
          ],
        },
      ]}
      faqs={faqs}
      cta={{
        eyebrow: 'Start a Johannesburg project',
        title: 'Tell us what your business needs to do online.',
        description:
          'Send us a short brief and we will come back with a clear scope and price. No pressure, no jargon.',
        primaryLabel: 'Request a quote',
      }}
    />
  )
}
