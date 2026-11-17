import type { Metadata } from 'next'
import { LandingPage } from '@/components/sections/landing-page'
import { carePlans, carePriceChoices } from '@/lib/care-plans'
import { alternatesFor, openGraphFor, twitterFor } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Website Cost South Africa',
  description:
    'What a website costs in South Africa: Starter R2,500, Business from R4,000, stores from R7,000 and custom applications from R10,000. See what changes the price.',
  alternates: alternatesFor('/website-cost-south-africa'),
  openGraph: openGraphFor('/website-cost-south-africa', 'Website Cost South Africa', 'What a website costs in South Africa: Starter R2,500, Business from R4,000, stores from R7,000 and custom applications from R10,000. See what changes the price.'),
  twitter: twitterFor('Website Cost South Africa', 'What a website costs in South Africa: Starter R2,500, Business from R4,000, stores from R7,000 and custom applications from R10,000. See what changes the price.'),
}

const faqs = [
  {
    question: 'How much should I budget for a website in South Africa?',
    answer:
      'For a small business brochure site, budget from R2,500 for a Starter Website and from R4,000 for a Business Website. Online stores start at R7,000 and custom web applications start at R10,000. The right budget depends on the pages, features and integrations the business actually needs.',
  },
  {
    question: 'What makes a website more expensive?',
    answer:
      'More pages, custom design work, ecommerce functionality, booking systems, integrations, copywriting and photography all add cost. Rushed timelines can too. The cheapest version of a project is the one with a clear scope and content ready before work starts.',
  },
  {
    question: 'Are hosting and domain included?',
    answer:
      'Domain registration and renewal are separate from the design and build price, and can be registered in your name as an add-on. Website hosting is arranged and managed as part of an optional care plan, or you can pay for hosting directly if you prefer to manage it yourself.',
  },
  {
    question: 'Do you charge monthly fees?',
    answer:
      `Not by default. A website is a once-off project. If you want ongoing updates, security checks, support and business email, optional care plans are ${carePriceChoices} per month depending on the site.`,
  },
  {
    question: 'Why do quotes for the same website vary so much?',
    answer:
      'Quotes often describe different things. One may exclude mobile design, SEO basics, content entry or post-launch support. Another may include more pages or a custom design. Compare the scope line by line, not only the total.',
  },
  {
    question: 'Can I get a website for less than R2,500?',
    answer:
      'You can find cheaper template-based sites, but the price usually comes with fewer pages, limited support or essential features charged later. Our Starter Website is the lowest scope we offer because it still includes responsive design, a contact form and search foundations.',
  },
]

export default function WebsiteCostSouthAfricaPage() {
  return (
    <LandingPage
      path="/website-cost-south-africa"
      eyebrow="Website costs in South Africa"
      title="What a website actually costs, without the guesswork."
      accent="actually costs"
      description="Real starting prices, what each one includes and the factors that move the number. No vague ranges, no surprise extras."
      breadcrumbLabel="Website cost South Africa"
      serviceName="Website design and development"
      priceValue={2500}
      isFrom
      intro={{
        heading: 'The price depends on what the website has to do.',
        paragraphs: [
          'A website is not one product. A four-page site for a consultant and an online store with hundreds of products are both websites, but they require very different amounts of design, development and testing. That is why quotes vary so widely.',
          'Our once-off starting prices are public. A Starter Website is R2,500, a Business Website starts at R4,000, an Online Store starts at R7,000 and a Custom Web Application starts at R10,000. A Website Redesign starts at R2,500. Those figures cover the scope described on the pricing page.',
          'If your project needs more than that scope, we quote the difference before work starts. You should never receive an invoice for work you did not agree to.',
        ],
        points: [
          'Starter Website: R2,500 once-off',
          'Business Website: from R4,000 once-off',
          'Online Store: from R7,000 once-off',
          'Website Redesign: from R2,500 once-off',
          'Custom Web Application: from R10,000 once-off',
        ],
      }}
      sections={[
        {
          eyebrow: 'Price drivers',
          heading: 'Six things that move the final number.',
          alt: false,
          cards: [
            {
              title: 'Number of pages',
              text: 'Each page needs structure, content and responsive design. More pages mean more work and more testing.',
            },
            {
              title: 'Custom design',
              text: 'A design built around the business takes longer than applying a template, and it usually ages better.',
            },
            {
              title: 'Ecommerce or bookings',
              text: 'Carts, payments, stock, delivery rules and booking logic add development and testing time.',
            },
            {
              title: 'Integrations',
              text: 'Payment gateways, email tools, maps, analytics and CRMs each need to be connected and checked.',
            },
            {
              title: 'Content readiness',
              text: 'Copywriting, photography and organising existing content add work if the business cannot supply them.',
            },
            {
              title: 'Timeline',
              text: 'A rushed deadline can require extra effort. A realistic schedule is usually cheaper and produces a better result.',
            },
          ],
        },
        {
          eyebrow: 'What is included',
          heading: 'The starting price is not a bare page.',
          alt: true,
          paragraphs: [
            'Even the Starter Website includes responsive design, a clear page structure, a tested contact form and the search basics. Those are not upgrades. They are what makes a website usable.',
            'Higher packages add pages, more detailed design, service pages, Google Maps, testimonials, analytics and ecommerce or application functionality. The pricing page lists the inclusions for each service so you can compare them directly.',
            'We separate the build from external costs. Domain registration and renewal, payment gateway fees and third-party subscriptions are not part of the design price. A care plan can cover managed hosting and business email within its allowance, and you keep ownership of your domain and content.',
          ],
          points: [
            'Responsive design included at every level',
            'Contact form tested before launch',
            'Search-friendly page structure included',
            'Clear written scope before work starts',
            'External services billed separately at cost',
          ],
        },
        {
          eyebrow: 'Ongoing costs',
          heading: 'What you pay after launch.',
          alt: false,
          paragraphs: [
            'A website needs a domain, and it needs hosting somewhere. The domain is an annual cost paid to the registrar. Hosting can be arranged and managed as part of an optional care plan, or paid for directly if you prefer. Paid plugins and subscriptions are separate too.',
            `Care plans are optional and priced flat: ${carePlans[0].name} is ${carePlans[0].priceLabel} per month, ${carePlans[1].name} is ${carePlans[1].priceLabel} per month and ${carePlans[2].name} is ${carePlans[2].priceLabel} per month. Each includes business email within its mailbox allowance, plus hosting management, security checks, backups where supported, small content updates and support.`,
            'If you prefer to handle updates yourself, the website still works. The care plans exist for businesses that would rather not think about it.',
          ],
        },
        {
          eyebrow: 'Budgeting advice',
          heading: 'How to spend the money well.',
          alt: true,
          paragraphs: [
            'Spend first on the things customers experience: clear content, a fast mobile layout and an obvious way to make contact. Those produce enquiries. Decorative animation and unnecessary features can wait.',
            'If the budget is tight, reduce the page count rather than the quality. A focused four-page site that loads quickly will outperform a sprawling site that is slow and hard to navigate.',
            'Ask for a written scope with inclusions and exclusions. A quote that cannot explain what is included is not a quote you can compare.',
          ],
          points: [
            'Prioritise content, speed and contact paths',
            'Reduce pages before reducing quality',
            'Ask for inclusions and exclusions in writing',
            'Plan for the domain as a separate annual cost',
          ],
        },
      ]}
      faqs={faqs}
      cta={{
        eyebrow: 'Get a real number',
        title: 'Tell us the scope and we will price it properly.',
        description:
          'Send a short brief with the pages and features you need. We will reply with a clear scope and a fixed starting price.',
        primaryLabel: 'Request pricing',
      }}
    />
  )
}
