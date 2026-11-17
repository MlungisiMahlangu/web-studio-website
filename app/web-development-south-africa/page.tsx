import type { Metadata } from 'next'
import { LandingPage } from '@/components/sections/landing-page'
import { alternatesFor } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Web Development South Africa',
  description:
    'Web development for South African businesses. Custom business websites, online stores and web applications built with modern, maintainable code. Projects from R2,500.',
  alternates: alternatesFor('/web-development-south-africa'),
  openGraph: {
    title: 'Web Development South Africa | WEB-IN',
    description:
      'Custom web development for South African businesses: websites, online stores and web applications built to be fast, secure and maintainable.',
    type: 'website',
    url: '/web-development-south-africa',
  },
}

const faqs = [
  {
    question: 'What is the difference between web design and web development?',
    answer:
      'Design decides how the website looks and how information is arranged for the person using it. Development turns that design into working pages, forms, integrations and responsive layouts. Most projects need both, which is why we handle them together.',
  },
  {
    question: 'What technology do you build with?',
    answer:
      'We build modern front-ends with React and Next.js, styled with Tailwind CSS. That stack gives fast pages, clean structure and a codebase that can grow. For content-driven sites we keep the editing model simple so you are not locked into a complicated system.',
  },
  {
    question: 'Can you integrate South African payment providers?',
    answer:
      'Yes. We integrate payment gateways such as PayFast, Yoco and Ozow where the provider supports your business type. Gateway fees and account approval sit with the provider, and you remain the account holder.',
  },
  {
    question: 'Will I be able to update the website myself?',
    answer:
      'For sites that need regular content changes, we can structure the build around an editor-friendly setup and include a handover session. Small text and image changes are also covered by our monthly care plans if you would rather not touch the site yourself.',
  },
  {
    question: 'How much does web development cost in South Africa?',
    answer:
      'A Starter Website is R2,500, a Business Website starts at R4,000 and an Online Store starts at R7,000. Custom web applications start at R10,000. The price depends on pages, features and integrations, and we quote the scope before work begins.',
  },
]

export default function WebDevelopmentSouthAfricaPage() {
  return (
    <LandingPage
      path="/web-development-south-africa"
      eyebrow="Web development in South Africa"
      title="Clean development that holds up after launch day."
      accent="holds up"
      description="We build business websites, online stores and web applications with the structure and performance a growing South African business actually needs."
      breadcrumbLabel="Web development South Africa"
      serviceName="Web development"
      priceValue={4000}
      isFrom
      intro={{
        heading: 'A website is software. It should be built like software.',
        paragraphs: [
          'Many small business websites are assembled quickly and then become difficult to change. Pages break, forms stop sending, images bloat the load time and nobody knows why. The problem is rarely the design. It is the foundation underneath it.',
          'We build with modern tooling and a clean component structure. Pages are composed from reusable parts, styles are consistent, and the code is readable enough for another developer to pick up later. That matters whether you plan to grow the site yourself or hand it to a team.',
          'It also means performance is treated as part of the build, not a final cleanup. Images are sized and compressed, pages are kept lean, and layouts are tested on real screen sizes before launch.',
        ],
        points: [
          'Semantic, accessible page structure',
          'Reusable components instead of one-off pages',
          'Optimised images and controlled page weight',
          'Forms and integrations tested end to end',
        ],
      }}
      sections={[
        {
          eyebrow: 'What we develop',
          heading: 'From a four-page site to a working application.',
          alt: false,
          cards: [
            {
              title: 'Business websites',
              text: 'Marketing sites with clear service pages, enquiry forms and the structure needed to grow. Business Websites start at R4,000.',
            },
            {
              title: 'Online stores',
              text: 'Product catalogues, cart flows and checkout integrations with South African payment providers. Stores start at R7,000.',
            },
            {
              title: 'Custom web applications',
              text: 'Booking systems, client portals, dashboards and internal tools scoped around a specific workflow. Applications start at R10,000.',
            },
            {
              title: 'Website redesigns',
              text: 'Existing sites rebuilt with better structure, speed and mobile behaviour. Redesigns start at R2,500.',
            },
            {
              title: 'Integrations',
              text: 'Payment gateways, email services, maps, analytics and CRMs connected so information moves without manual copying.',
            },
            {
              title: 'Website care',
              text: 'Managed hosting, business email within a mailbox allowance, security checks, backups and support after launch. Care plans are R149, R299 or R499 per month.',
            },
          ],
        },
        {
          eyebrow: 'Performance',
          heading: 'Speed is a business feature, not a technical detail.',
          alt: true,
          paragraphs: [
            'A slow website loses people before they read anything. On mobile data, the gap between a two-second page and a six-second page is the difference between an enquiry and a back button. We treat load time as part of the design brief.',
            'That means images are exported at sensible dimensions, fonts are limited, scripts are kept to what the page actually uses and unnecessary plugins are avoided. Pages are then checked on smaller screens and throttled connections rather than only on a desktop.',
            'Speed also affects search. Google uses page experience signals, and a site that loads quickly and does not jump around while loading tends to perform better. We cannot promise rankings, but we can remove the technical reasons a good page would struggle.',
          ],
        },
        {
          eyebrow: 'Maintainability',
          heading: 'Built so the next change is not a rebuild.',
          alt: false,
          paragraphs: [
            'Businesses change. A new service gets added, a location opens, a payment option is introduced. A well-built site absorbs those changes without breaking the layout or requiring a new project.',
            'We keep content and presentation separated where it makes sense, use consistent spacing and type styles, and document how the site is structured. You receive the files and access you need, and you own the website once the project is paid in full.',
            'If you later work with another developer or agency, they can read the code. That is a deliberate choice. Lock-in is not a feature.',
          ],
          points: [
            'Consistent design tokens and spacing',
            'Readable, component-based code',
            'Documented structure and handover',
            'No artificial platform lock-in',
          ],
        },
        {
          eyebrow: 'Security and compliance',
          heading: 'Sensible defaults, clear responsibilities.',
          alt: true,
          paragraphs: [
            'Every site is served over HTTPS where the hosting supports it. Forms are validated, dependencies are kept current and personal information is collected only where it is needed. We do not add tracking scripts that the business has not asked for.',
            'South African businesses also need to think about POPIA. We build forms and privacy links with that in mind, but you remain responsible for your own privacy notices and for how you store and use customer information.',
            'For stores and applications, payment details are handled by the payment provider rather than stored on your server. That keeps the sensitive part of the transaction with the company that specialises in it.',
          ],
        },
      ]}
      faqs={faqs}
      cta={{
        eyebrow: 'Start a development project',
        title: 'Send the requirements. We will send a plan.',
        description:
          'A short description of what you need is enough to start. We will tell you what is realistic, what it costs and how long it takes.',
        primaryLabel: 'Discuss your project',
      }}
    />
  )
}
