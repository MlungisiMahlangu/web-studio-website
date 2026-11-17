import type { Metadata } from 'next'
import { LandingPage } from '@/components/sections/landing-page'
import { carePlans } from '@/lib/care-plans'
import { alternatesFor, openGraphFor, twitterFor } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Ecommerce Website South Africa',
  description:
    'Online store development for South African businesses. Product catalogues, cart and checkout with PayFast, Yoco or Ozow. Ecommerce websites from R7,000.',
  alternates: alternatesFor('/ecommerce-website-south-africa'),
  openGraph: openGraphFor('/ecommerce-website-south-africa', 'Ecommerce Website South Africa', 'Online store development for South African businesses. Product catalogues, cart and checkout with PayFast, Yoco or Ozow. Ecommerce websites from R7,000.'),
  twitter: twitterFor('Ecommerce Website South Africa', 'Online store development for South African businesses. Product catalogues, cart and checkout with PayFast, Yoco or Ozow. Ecommerce websites from R7,000.'),
}

const faqs = [
  {
    question: 'Which payment providers can you integrate?',
    answer:
      'We work with South African providers such as PayFast, Yoco and Ozow, and can connect other gateways where they offer a supported integration. You hold the merchant account, and the provider handles card data. Approval and transaction fees are between you and the provider.',
  },
  {
    question: 'How much does an online store cost in South Africa?',
    answer:
      'Online stores start at R7,000. The final price depends on the number of products, how they are categorised, delivery options, payment integrations and any custom features. We quote the scope before work starts so there are no surprise line items.',
  },
  {
    question: 'Can I manage products myself after launch?',
    answer:
      'Yes. Product data, prices and stock can be managed through the store system we set up. We include a handover session covering products, orders and basic content changes.',
  },
  {
    question: 'Do you handle delivery and shipping setup?',
    answer:
      'We can configure delivery zones, rates and collection options inside the store. The actual courier account, rates and fulfilment remain your responsibility, and we connect the store to the option you choose.',
  },
  {
    question: 'Will the store work on a phone?',
    answer:
      'Every store is built mobile-first. Product listings, product pages, the cart and checkout are designed and tested on small screens, because that is where most South African shoppers will use them.',
  },
]

export default function EcommerceWebsiteSouthAfricaPage() {
  return (
    <LandingPage
      path="/ecommerce-website-south-africa"
      eyebrow="Ecommerce development"
      title="An online store that South African shoppers trust."
      accent="trust"
      description="Product catalogues, carts and checkout built around local payment methods, mobile behaviour and the way people actually buy online in South Africa."
      breadcrumbLabel="Ecommerce website South Africa"
      serviceName="Ecommerce website development"
      priceValue={7000}
      isFrom
      intro={{
        heading: 'Selling online is a sequence of small trust decisions.',
        paragraphs: [
          'A shopper lands on a product page. They check the photos, the price, the delivery information and whether the business looks legitimate. Then they add to cart and decide whether the checkout feels safe. Every one of those steps is a place where an online store can lose the sale.',
          'We design stores around that sequence. Product photography is given room, prices and delivery details are visible before checkout, and the cart does not surprise people with costs at the last step. The checkout is short and works properly on a phone.',
          'Payment is handled by established South African providers so card details never touch your own server. That is better for security and better for customer confidence.',
        ],
        points: [
          'Clear product pages with room for real photos',
          'Visible pricing and delivery information',
          'Cart and checkout tested on mobile',
          'PayFast, Yoco or Ozow integration',
        ],
      }}
      sections={[
        {
          eyebrow: 'Store foundations',
          heading: 'What a working online store needs.',
          alt: false,
          cards: [
            {
              title: 'Product structure',
              text: 'Categories, variants and search that make sense to a shopper who already knows roughly what they want.',
            },
            {
              title: 'Product pages',
              text: 'Images, descriptions, price, availability and delivery information arranged so the decision is easy.',
            },
            {
              title: 'Cart and checkout',
              text: 'A short, mobile-friendly flow with clear totals and a payment step that does not confuse the buyer.',
            },
            {
              title: 'Payments',
              text: 'Integration with a South African gateway, with card data handled by the provider rather than your site.',
            },
            {
              title: 'Delivery options',
              text: 'Delivery zones, rates and collection settings configured around how you actually fulfil orders.',
            },
            {
              title: 'Order notifications',
              text: 'Email confirmations for the customer and a clear view of new orders for you.',
            },
          ],
        },
        {
          eyebrow: 'Local reality',
          heading: 'Built for how South Africans shop.',
          alt: true,
          paragraphs: [
            'Most online shopping in South Africa happens on a phone, often on mobile data. A store built for a desktop screen and squeezed onto a phone will fail. We start with the small screen and work upward.',
            'Payment choice matters too. Some customers prefer a card, others use instant EFT or a wallet. Supporting the options your gateway provides reduces the number of people who abandon the cart because their preferred method is missing.',
            'Delivery expectations are part of the purchase. If a customer cannot see when an item will arrive or what delivery costs, they hesitate. We keep that information close to the price rather than buried in a policy page.',
          ],
          points: [
            'Mobile-first product and checkout layouts',
            'Instant EFT and card options where supported',
            'Delivery cost and timing shown early',
            'Clear returns and contact information',
          ],
        },
        {
          eyebrow: 'Running the store',
          heading: 'You should be able to run it without us.',
          alt: false,
          paragraphs: [
            'A store is not finished at launch. Products change, prices move and stock runs out. The system is set up so you can manage the day-to-day parts yourself, and we include a handover session that covers products, orders and basic settings.',
            `If you would rather not manage it, ${carePlans[2].name} is ${carePlans[2].priceLabel} per month and covers the store’s technical side, including business email within the plan’s mailbox allowance. A store rebuild or new feature is quoted separately.`,
            'We also keep an eye on the technical side after launch. Payment integrations, shipping settings and software updates are the parts most likely to break quietly, so they are worth checking regularly.',
          ],
        },
        {
          eyebrow: 'What to expect',
          heading: 'Scope, then build, then launch.',
          alt: true,
          points: [
            'A clear product and category plan',
            'Payment and delivery options agreed up front',
            'Product content checklist for your team',
            'Test orders placed before launch',
            'Mobile checkout tested on real devices',
            'Handover session for managing orders',
            'Defined post-launch support period',
            'Optional monthly care plan',
          ],
        },
      ]}
      faqs={faqs}
      cta={{
        eyebrow: 'Start an online store',
        title: 'Tell us what you sell and how you deliver it.',
        description:
          'We will map the catalogue, payments and delivery into a scope you can approve before any work begins.',
        primaryLabel: 'Plan your store',
      }}
    />
  )
}
