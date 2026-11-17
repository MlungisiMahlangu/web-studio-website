// Single source of truth for the monthly care and management plans.
// Every card, comparison table, FAQ, JSON-LD offer and llms output reads from here.
// Prices are flat monthly fees: never render "from" or "starting" for these plans.
//
// MAILBOX ALLOWANCES: these are placeholders for the owner to confirm before launch.
// Change the number here only; every page, table, schema and text file derives from it.

export interface CarePlanCta {
  label: string
  href: string
  formValue: string
}

export interface CarePlan {
  id: string
  name: string
  priceMonthly: number
  priceLabel: string
  currency: 'ZAR'
  billing: 'monthly, in advance'
  popular: boolean
  description: string
  idealFor: string
  inheritsFrom?: string
  features: string[]
  limitations: string[]
  notes?: string[]
  supportResponseTarget: string
  emailIncluded: true
  emailMailboxes: number
  storageGb: number
  emailLabel: string
  cta: CarePlanCta
}

export const carePlans: CarePlan[] = [
  {
    id: 'essential-web-care',
    name: 'Essential Web Care',
    priceMonthly: 199,
    priceLabel: 'R199',
    currency: 'ZAR',
    billing: 'monthly, in advance',
    popular: false,
    description:
      'Entry-level care for simple business websites, portfolios and smaller sites. We keep the technical side running so you can focus on the business.',
    idealFor: 'Simple business websites, portfolios, landing pages and smaller sites.',
    features: [
      'Managed hosting arrangement for supported standard websites',
      '5 GB SSD storage',
      'Basic hosting and domain/DNS configuration assistance',
      'SSL/HTTPS monitoring',
      'Website uptime checks',
      'Routine website health checks',
      'Basic security checks',
      'Routine backups where supported by the hosting environment',
      'Minor technical troubleshooting',
      'Small content corrections within a reasonable monthly allowance',
      'Basic contact form and website functionality checks',
      'Email support',
    ],
    limitations: [
      'Intended for straightforward websites, not complex online stores or custom applications',
      'No unlimited content changes, development or technical work',
    ],
    supportResponseTarget: 'Up to 2 business days',
    emailIncluded: true,
    emailMailboxes: 5,
    storageGb: 5,
    emailLabel: 'Includes up to 5 business email mailboxes',
    cta: {
      label: 'Start with Essential',
      href: '/contact?service=Essential%20Web%20Care',
      formValue: 'Essential Web Care',
    },
  },
  {
    id: 'business-website-care',
    name: 'Business Website Care',
    priceMonthly: 349,
    priceLabel: 'R349',
    currency: 'ZAR',
    billing: 'monthly, in advance',
    popular: true,
    description:
      'The recommended plan for small and growing businesses that depend on their website for enquiries and customer communication.',
    idealFor:
      'Businesses that depend on their website to generate enquiries, communicate with customers and maintain their online presence.',
    inheritsFrom: 'Essential Web Care',
    features: [
      'Everything in Essential Web Care, plus:',
      '15 GB SSD storage',
      'More regular website maintenance',
      'Larger content-update allowance',
      'More frequent technical health checks',
      'Performance monitoring and optimisation checks',
      'Monthly backup verification where supported',
      'More detailed security and dependency update checks where applicable',
      'Contact form and key functionality testing',
      'Minor website improvements within the agreed allowance',
      'Technical assistance and troubleshooting',
      'Priority support',
    ],
    limitations: [
      'No unlimited redesigns, new pages or major feature development',
    ],
    supportResponseTarget: 'Within 1 business day',
    emailIncluded: true,
    emailMailboxes: 10,
    storageGb: 15,
    emailLabel: 'Includes up to 10 business email mailboxes',
    cta: {
      label: 'Choose Business Website Care',
      href: '/contact?service=Business%20Website%20Care',
      formValue: 'Business Website Care',
    },
  },
  {
    id: 'advanced-application-management',
    name: 'Advanced Application Management',
    priceMonthly: 649,
    priceLabel: 'R649',
    currency: 'ZAR',
    billing: 'monthly, in advance',
    popular: false,
    description:
      'Technical management for online stores, booking platforms, dashboards and custom applications. Each application is assessed before we accept it.',
    idealFor:
      'Online stores, booking platforms, custom web applications, sites with user accounts, database-driven systems, dashboards, client portals and API integrations.',
    inheritsFrom: 'Business Website Care',
    features: [
      'Everything in Business Website Care where applicable, plus:',
      '30 GB SSD storage',
      'Application hosting and infrastructure management',
      'Application health monitoring',
      'Database health and backup checks',
      'Authentication and account-system checks',
      'API and integration monitoring',
      'Application dependency and software updates',
      'Security and access-control checks',
      'Error monitoring and troubleshooting',
      'Performance checks',
      'Deployment and release assistance',
      'Backup and recovery assistance where supported',
      'Ongoing technical maintenance',
      'Priority technical support',
      "A defined monthly review of the application's technical health",
    ],
    limitations: [
      'Each application is assessed individually before it is accepted onto this plan',
      'The monthly fee is a management fee, not unlimited infrastructure or development',
      'Database hosting, cloud compute, storage beyond the plan allowance, payment gateway fees, external APIs, premium software and other variable third-party costs are quoted or billed separately where necessary',
      'New features and major changes are quoted separately',
    ],
    supportResponseTarget: 'Priority, within 1 business day',
    emailIncluded: true,
    emailMailboxes: 20,
    storageGb: 30,
    emailLabel: 'Includes up to 20 business email mailboxes',
    cta: {
      label: 'Request an assessment',
      href: '/contact?service=Advanced%20Application%20Management',
      formValue: 'Advanced Application Management',
    },
  },
]

const careLabels = carePlans.map((plan) => plan.priceLabel)
const lastCareLabel = careLabels[careLabels.length - 1]

export const carePlanNote =
  'Care plans are optional. You can buy a website without one, and you can cancel or change plans with notice as set out in the terms.'

// Derived so page copy never hard-codes a monthly care price.
export const carePriceChoices =
  careLabels.length > 2
    ? `${careLabels.slice(0, -1).join(', ')} or ${lastCareLabel}`
    : careLabels.join(' or ')

export const carePriceRange = `${careLabels[0]} - ${lastCareLabel}`

export const carePlanBillingNote =
  'Monthly plans are billed in advance. Prices are in South African rand (ZAR).'

// Shared email wording: every plan includes business email within an allowance.
export const EMAIL_SUMMARY =
  'Every care plan includes business email on your own domain within the plan’s mailbox allowance. Email is arranged on a provider that suits the website: shared hosting may include mailboxes, while platforms such as Vercel or Netlify do not host email, so a separate mail provider is used and managed as part of your plan.'

export const EMAIL_SETUP_STEPS = [
  'Mailboxes created on your own domain',
  'MX, SPF, DKIM and DMARC records configured',
  'Basic setup and troubleshooting for the mailboxes in your allowance',
]

export const EMAIL_FAIR_USE = [
  'Mailbox allowances are shared fairly: reasonable storage and normal business sending volumes',
  'No bulk or marketing email blasts and no spam from the mailboxes we manage',
  'Provider sending limits and acceptable-use policies apply',
  'Extra mailboxes, extra storage and premium suites such as Google Workspace or Microsoft 365 are quoted or billed separately',
  'We do not guarantee deliverability or inbox placement; that depends on the receiving mail systems',
]

export const EMAIL_BILLED_SEPARATELY =
  'Domain registration and renewal remain separate from the monthly plan. Extra mailboxes, extra storage and premium email suites are quoted or billed separately.'

export const emailFeature = (plan: CarePlan) =>
  `Business email included with up to ${plan.emailMailboxes} mailbox${plan.emailMailboxes === 1 ? '' : 'es'} on your domain`

export const emailShort = (plan: CarePlan) =>
  `Up to ${plan.emailMailboxes} mailbox${plan.emailMailboxes === 1 ? '' : 'es'}`

export interface CareComparisonRow {
  label: string
  values: (string | boolean)[]
  emphasise?: boolean
}

// Generated so prices and mailbox counts can never drift from the plans above.
export const careComparisonRows: CareComparisonRow[] = [
  {
    label: 'Monthly price',
    values: carePlans.map((plan) => `${plan.priceLabel}/month`),
    emphasise: true,
  },
  {
    label: 'Best for',
    values: carePlans.map((plan) => plan.idealFor),
  },
  {
    label: 'Business email',
    values: carePlans.map((plan) => emailShort(plan)),
    emphasise: true,
  },
  {
    label: 'SSD storage',
    values: carePlans.map((plan) => `${plan.storageGb} GB`),
  },
  {
    label: 'Support response',
    values: carePlans.map((plan) => plan.supportResponseTarget),
  },
  {
    label: 'Hosting and domain/DNS assistance',
    values: [true, true, true],
  },
  {
    label: 'SSL/HTTPS and uptime checks',
    values: [true, true, true],
  },
  {
    label: 'Security checks',
    values: ['Basic', 'Detailed', 'Detailed plus access control'],
  },
  {
    label: 'Backups where supported',
    values: ['Routine', 'Routine plus monthly verification', 'Routine plus database checks'],
  },
  {
    label: 'Content updates',
    values: ['Small corrections', 'Larger allowance', 'Where applicable to the application'],
  },
  {
    label: 'Performance checks',
    values: [false, true, true],
  },
  {
    label: 'Application, database and API monitoring',
    values: [false, false, true],
  },
  {
    label: 'Authentication and access-control checks',
    values: [false, false, true],
  },
  {
    label: 'Deployment and release assistance',
    values: [false, false, true],
  },
  {
    label: 'Monthly technical review',
    values: [false, false, true],
  },
  {
    label: 'New pages, features and redesigns',
    values: ['Quoted separately', 'Quoted separately', 'Quoted separately'],
  },
]
