import type { Metadata } from 'next'
import { LandingPage } from '@/components/sections/landing-page'
import { carePriceChoices } from '@/lib/care-plans'
import { alternatesFor, openGraphFor, twitterFor } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Website Redesign South Africa',
  description:
    'Website redesign for South African businesses. Keep the content that works, rebuild the design, speed and mobile experience. Redesign projects start at R2,500.',
  alternates: alternatesFor('/website-redesign-south-africa'),
  openGraph: openGraphFor('/website-redesign-south-africa', 'Website Redesign South Africa', 'Website redesign for South African businesses. Keep the content that works, rebuild the design, speed and mobile experience. Redesign projects start at R2,500.'),
  twitter: twitterFor('Website Redesign South Africa', 'Website redesign for South African businesses. Keep the content that works, rebuild the design, speed and mobile experience. Redesign projects start at R2,500.'),
}

const faqs = [
  {
    question: 'How do I know if my website needs a redesign?',
    answer:
      'Common signs are a site that is hard to use on a phone, slow pages, an outdated look, unclear navigation or a contact form that no longer works. If updating content is difficult or the site no longer reflects the business, a redesign is usually cheaper than patching it repeatedly.',
  },
  {
    question: 'How much does a website redesign cost?',
    answer:
      'Website redesigns start at R2,500. The final price depends on the number of pages, how much content needs to be migrated or rewritten and whether new features are added. We review the existing site before quoting.',
  },
  {
    question: 'Will I lose my search rankings?',
    answer:
      'A redesign can protect rankings if existing URLs are kept or redirected properly and page titles and content stay relevant. We map the old pages to the new ones and set up redirects where needed. Rankings are never guaranteed, but we avoid the technical mistakes that cause avoidable drops.',
  },
  {
    question: 'Can you keep my existing content?',
    answer:
      'Yes. We review what is there, keep the pages and wording that still serve the business, and rewrite or remove what does not. You do not need to start from a blank page unless you want to.',
  },
  {
    question: 'How long does a redesign take?',
    answer:
      'Most redesigns take two to four weeks once content and access are in place, depending on page count and how much restructuring is needed. A small site can be faster; a large one with a store or application takes longer.',
  },
]

export default function WebsiteRedesignSouthAfricaPage() {
  return (
    <LandingPage
      path="/website-redesign-south-africa"
      eyebrow="Website redesign"
      title="Your content is fine. The website around it is not."
      accent="website"
      description="We rebuild outdated websites with a clearer structure, faster pages and a mobile experience that no longer turns customers away."
      breadcrumbLabel="Website redesign South Africa"
      serviceName="Website redesign"
      priceValue={2500}
      isFrom
      intro={{
        heading: 'A redesign should fix the cause, not just the surface.',
        paragraphs: [
          'Businesses often ask for a new look when the real problem is underneath. The site is slow, the menu is confusing, the pages do not work on a phone, or updating a single sentence requires a developer. A fresh coat of paint does not fix any of that.',
          'We start by reviewing the existing site: what pages exist, which ones people actually use, where the enquiry path breaks and what content is still accurate. Some pages are worth keeping. Some need rewriting. A few should disappear.',
          'Then we rebuild the design and front-end around the content that earns its place. The result should feel like the same business, presented properly, without losing the pages that already bring in traffic.',
        ],
        points: [
          'Content audit before design begins',
          'Old URLs kept or redirected',
          'Mobile experience rebuilt from the ground up',
          'Speed treated as part of the redesign',
        ],
      }}
      sections={[
        {
          eyebrow: 'Signs it is time',
          heading: 'When patching the site costs more than rebuilding it.',
          alt: false,
          cards: [
            {
              title: 'It fails on a phone',
              text: 'Text is tiny, buttons are hard to tap and the menu does not work. Most visitors will leave before they read anything.',
            },
            {
              title: 'It loads slowly',
              text: 'Large uncompressed images and unnecessary scripts make the site feel broken on mobile data.',
            },
            {
              title: 'The structure is unclear',
              text: 'Visitors cannot tell what you offer or where to go next, so they go back to the search results.',
            },
            {
              title: 'Content is out of date',
              text: 'Old services, wrong prices or a contact form that no longer sends. Each one quietly damages trust.',
            },
            {
              title: 'Updates are painful',
              text: 'Changing a sentence requires a developer, so the site stops being maintained and drifts further out of date.',
            },
            {
              title: 'It no longer matches the business',
              text: 'The business has grown or changed direction, and the website still describes the version from five years ago.',
            },
          ],
        },
        {
          eyebrow: 'The process',
          heading: 'Keep what works. Rebuild what does not.',
          alt: true,
          paragraphs: [
            'We begin with an inventory of the current site and a short conversation about what the business needs now. That tells us which pages to keep, which to merge and which to remove.',
            'Design comes next, using the existing brand where it is still relevant and tightening it where it is not. We do not invent a new identity unless you ask for one. The goal is a clearer version of the business you already are.',
            'Development follows, with the old URLs mapped to the new structure. Once the new site is ready, we test forms, check redirects and launch. The old site stays available until the new one is confirmed working.',
          ],
          points: [
            'Page inventory and content review',
            'URL mapping and redirect plan',
            'Design aligned to the existing brand',
            'Forms and integrations retested',
            'Redirect checks after launch',
          ],
        },
        {
          eyebrow: 'Protecting visibility',
          heading: 'A redesign should not erase your history.',
          alt: false,
          paragraphs: [
            'Search engines remember pages. If a redesign moves every URL without redirects, the traffic those pages earned disappears. We keep the structure where it makes sense and redirect the rest.',
            'Page titles, descriptions and headings are rewritten where needed but not thrown away for the sake of change. Content that already answers a customer question is an asset.',
            'We also keep the technical basics intact: a sitemap, crawlable links, sensible page speed and a clear internal linking structure. These are not optional extras in a redesign; they are how the new site gets found.',
          ],
        },
        {
          eyebrow: 'After launch',
          heading: 'A redesign is the start of a healthier site.',
          alt: true,
          paragraphs: [
            `Once the new site is live, it needs the same care as any other. Content changes, software updates and periodic checks keep it useful. Optional care plans are ${carePriceChoices} per month depending on the site, and each includes business email within its mailbox allowance.`,
            'You own the new website once the project is paid in full, including the code and content. There is no requirement to stay on a plan to keep the site running.',
            'If the redesign uncovers a bigger need, such as a store or a booking system, we scope that separately rather than quietly expanding the original project.',
          ],
        },
      ]}
      faqs={faqs}
      cta={{
        eyebrow: 'Review your current site',
        title: 'Send us the link. We will tell you what we would change.',
        description:
          'A short, honest review of what is working, what is not, and whether a redesign is actually the right next step.',
        primaryLabel: 'Request a review',
      }}
    />
  )
}
