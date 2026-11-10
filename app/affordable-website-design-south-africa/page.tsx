import type { Metadata } from 'next'
import { LandingPage } from '@/components/sections/landing-page'
import { alternatesFor } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Affordable Website Design South Africa',
  description:
    'Affordable website design for South African businesses without cutting the essentials. Starter websites from R2,500 with mobile design and search foundations.',
  alternates: alternatesFor('/affordable-website-design-south-africa'),
  openGraph: {
    title: 'Affordable Website Design South Africa | WEB-IN',
    description:
      'Professional websites at a realistic price. Starter sites from R2,500, business sites from R4,000, with no hidden extras in the quote.',
    type: 'website',
    url: '/affordable-website-design-south-africa',
  },
}

const faqs = [
  {
    question: 'What is the cheapest website you build?',
    answer:
      'The Starter Website is R2,500. It covers up to four pages, a mobile-first design, a contact form and the basic search foundations. It is a real website, not a template with your logo dropped in.',
  },
  {
    question: 'Why do some developers charge much less?',
    answer:
      'Low prices usually come from a template, limited pages or extras charged later. Sometimes mobile design, SEO setup or launch support is billed separately. We list what is included up front so the starting price is the price for that scope.',
  },
  {
    question: 'Are there hidden costs?',
    answer:
      'No hidden costs in our quotes. Domain registration and third-party services such as hosting, payment gateways or plugins are billed at cost or paid directly by you. Anything outside the agreed scope is quoted before it starts.',
  },
  {
    question: 'Can I pay in instalments?',
    answer:
      'Projects are split into a 50% deposit to start and the balance before launch. That spreads the cost across the project rather than requiring the full amount upfront. Monthly care plans are billed separately if you choose one.',
  },
  {
    question: 'Is a cheaper website bad for my business?',
    answer:
      'A cheap website is only a problem when it is slow, hard to use or impossible to update. Price should not come at the expense of mobile behaviour, clear contact options or a structure that can grow. We keep the scope tight rather than the quality low.',
  },
]

export default function AffordableWebsiteDesignPage() {
  return (
    <LandingPage
      path="/affordable-website-design-south-africa"
      eyebrow="Affordable website design"
      title="A fair price for a website that does the job."
      accent="fair price"
      description="Affordable does not have to mean flimsy. We keep the scope honest, the essentials in, and the price clear before anything starts."
      breadcrumbLabel="Affordable website design"
      serviceName="Affordable website design"
      priceValue={2500}
      isFrom={false}
      intro={{
        heading: 'Affordable means clear scope, not missing pieces.',
        paragraphs: [
          'When a website quote looks unusually low, something has usually been left out. It might be mobile design, proper page structure, a working contact form or the support needed after launch. The low number is real, but the finished website is not.',
          'Our pricing starts at R2,500 for a Starter Website and R4,000 for a Business Website. Those figures include the parts that make a website usable: responsive layouts, clear navigation, a tested enquiry form and search-friendly page structure.',
          'The scope is deliberately defined. If your project needs more pages, booking functionality or a store, we quote that work rather than hiding it in a vague hourly estimate. You should know what you are paying for before you commit.',
        ],
        points: [
          'Starter Website: R2,500',
          'Business Website: from R4,000',
          'Website Redesign: from R2,500',
          '50% deposit, balance before launch',
        ],
      }}
      sections={[
        {
          eyebrow: 'What is included',
          heading: 'The essentials are not extras.',
          alt: false,
          cards: [
            {
              title: 'Mobile-first design',
              text: 'The site is designed for a phone first, then expanded for tablet and desktop. No separate mobile add-on.',
            },
            {
              title: 'Clear navigation',
              text: 'A menu and page structure a first-time visitor can follow without guessing where to click.',
            },
            {
              title: 'A working contact form',
              text: 'Tested before launch, with a clear confirmation and a WhatsApp option where it suits the business.',
            },
            {
              title: 'Search foundations',
              text: 'Page titles, descriptions, headings and a sitemap. These are the basics, not a ranking guarantee.',
            },
            {
              title: 'Speed-conscious build',
              text: 'Compressed images and lean pages so the site does not punish someone on mobile data.',
            },
            {
              title: 'Launch support',
              text: 'Testing, a launch checklist and a defined support period after the site goes live.',
            },
          ],
        },
        {
          eyebrow: 'Where money is saved',
          heading: 'Lower cost without lower standards.',
          alt: true,
          paragraphs: [
            'The biggest cost in any website is time. We keep prices down by working with a defined scope, reusing a proven technical foundation and asking for content in a structured way. That reduces back-and-forth without cutting the parts you will notice later.',
            'A Starter Website intentionally covers fewer pages. If four pages are enough to explain what you do and how to contact you, there is no reason to pay for twelve. The site can grow later when the business needs it.',
            'We also avoid unnecessary subscriptions and plugins. Every tool added to a website has a cost, sometimes monthly. If a feature is not earning its place, it does not go in.',
          ],
          points: [
            'Defined page count instead of open-ended scope',
            'Proven technical foundation',
            'Structured content checklist',
            'No unnecessary paid plugins',
          ],
        },
        {
          eyebrow: 'Avoiding false savings',
          heading: 'What cheap websites usually cost later.',
          alt: false,
          paragraphs: [
            'A website that is hard to update becomes a monthly expense in time. A site that is slow loses enquiries quietly, and nobody sees the lost revenue in a report. A design that breaks on a phone turns away the majority of visitors before they read the first sentence.',
            'Redesigning a site that was built badly often costs more than building it properly the first time. That is the false economy we try to help businesses avoid.',
            'The right question is not only what the website costs today. It is what the website needs to do, and whether the price includes the things that make that possible.',
          ],
        },
        {
          eyebrow: 'Payment and ownership',
          heading: 'No surprise invoices, no locked doors.',
          alt: true,
          paragraphs: [
            'Projects start with a 50% deposit and the balance is due before launch. That is the whole payment structure for the project, unless the scope changes and you approve the change.',
            'Once the project is paid in full you own the website and its content. Domain registration, third-party software and subscriptions remain subject to their own terms, and we can register a domain in your name as an add-on.',
            'If you want ongoing help, Basic Care is R299 per month and Business Care is R499 per month. They are optional. The website works without them.',
          ],
        },
      ]}
      faqs={faqs}
      cta={{
        eyebrow: 'Get a clear quote',
        title: 'Tell us your budget and what the site must do.',
        description:
          'We will tell you honestly what fits, what does not, and where the money is best spent.',
        primaryLabel: 'Ask for a quote',
      }}
    />
  )
}
