import { carePlans, emailShort } from './care-plans'

export const STUDIO_NAME = 'WEB-IN'
// TODO: replace with the registered legal entity name if it differs from the trading name.
export const STUDIO_LEGAL_NAME = 'WEB-IN'
export const SITE_URL = 'https://www.web-in.co.za'
export const SITE_HOST = 'www.web-in.co.za'
export const STUDIO_TAGLINE = 'Built for your business. Designed for the web.'
export const STUDIO_BRAND_LINE =
  'WEB-IN | Website Design & Development, Johannesburg, South Africa'
export const STUDIO_DESCRIPTION =
  'WEB-IN is an independent web studio in Johannesburg, South Africa. We design and build fast, mobile-first business websites, online stores and web applications, then manage the technical side for clients who choose a care plan. Websites start at R2,500.'
export const STUDIO_DESCRIPTION_LONG =
  'WEB-IN is an independent web studio based in Johannesburg, South Africa, working remotely with businesses across the country. We design and build business websites, online stores and custom web applications, then manage the hosting, email, updates and technical care for clients who choose a monthly plan. Websites start at R2,500, business websites from R4,000 and online stores from R7,000.'
export const STUDIO_EMAIL = 'teamwebin3@gmail.com'
export const STUDIO_PHONE = '+27 64 953 1145'
export const STUDIO_WHATSAPP = '27649531145'
export const STUDIO_LOCATION = 'Johannesburg, Gauteng, South Africa'
export const STUDIO_SERVICE_AREA =
  'Johannesburg, South Africa (serving clients across South Africa)'
export const STUDIO_LOCALITY = 'Johannesburg'
export const STUDIO_REGION = 'Gauteng'
export const STUDIO_COUNTRY = 'ZA'
export const SERVICE_AREAS = [
  'South Africa',
  'Gauteng',
  'Johannesburg',
  'Sandton',
  'Midrand',
  'Randburg',
  'Pretoria',
  'Soweto',
]
// Prices changed on this date. Bump it whenever lib/constants.ts price values change.
export const LAST_UPDATED = '2026-11-16'
// Used for dateModified signals while prices remain unchanged.
export const CONTENT_UPDATED = '2026-11-10'
export const PRICE_VALID_UNTIL = '2026-12-31'
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwlvornn'
export const INDEXNOW_KEY = '7f2c9a4e6b1d8c3f5a0e9b7d4c2a6f81'

export interface SocialProfile {
  label: string
  url: string
}

// TODO: create these profiles and add the URLs here. sameAs is the strongest entity signal,
// and the footer only renders profiles that exist. Do not add a profile you have not created.
// Google Business Profile, LinkedIn company page, Facebook, Instagram, X/Twitter,
// TikTok, YouTube, GitHub organisation, Clutch, Sortlist, GoodFirms.
export const SOCIAL_LINKS: SocialProfile[] = []

export const ALTERNATE_NAMES = [
  'WEB-IN',
  'WEB-IN Digital Studio',
  'Web-In',
  'WEBIN',
  'Web In',
  'Web In South Africa',
  'web-in.co.za',
  'WEB-IN Web Studio',
]

export const KNOWS_ABOUT = [
  'Website design',
  'Web development',
  'Business websites',
  'Online stores',
  'Ecommerce development',
  'Website redesign',
  'Custom web applications',
  'Mobile-first responsive design',
  'Search engine optimisation basics',
  'PayFast, Yoco and Ozow payment integration',
  'Website maintenance',
  'Website hosting management',
  'Business email setup',
  'Domain and DNS configuration',
]

// SEO Keywords
export const PRIMARY_KEYWORDS = [
  'website design south africa',
  'web development south africa',
  'website developer johannesburg',
  'affordable websites south africa',
  'professional web design',
  'business website design',
  'ecommerce website south africa',
  'custom web applications',
  'website redesign south africa',
]

export interface ServiceFacts {
  pages: string
  timeline: string
  revisions: string
  support: string
}

export interface ServiceCard {
  slug: string
  name: string
  tagline: string
  summary: string
  priceLabel: string
  priceValue: number
  isFrom: boolean
  priceNote?: string
  bestFor: string
  popular?: boolean
  facts: ServiceFacts
  included: string[]
  notIncluded: string[]
}

export const services: ServiceCard[] = [
  {
    slug: 'starter-website',
    name: 'Starter Website',
    tagline: 'A professional site for individuals and small businesses.',
    summary:
      'A professional website of up to 4 pages for individuals and small businesses, with a contact form, WhatsApp link and basic SEO setup.',
    priceLabel: 'R2,500',
    priceValue: 2500,
    isFrom: false,
    bestFor: 'Portfolios, freelancers, personal brands',
    facts: {
      pages: 'Up to 4 pages',
      timeline: '1-2 weeks',
      revisions: '1 revision round',
      support: '14 days support',
    },
    included: [
      'Custom design',
      'Up to 4 pages (Home, About, Services, Contact)',
      'Portfolio gallery and CV download',
      'WhatsApp link + contact form',
      'Social media links',
      'Basic SEO setup',
      'Launch testing',
    ],
    notIncluded: [
      'Online payments',
      'Booking system',
      'Logins or database',
    ],
  },
  {
    slug: 'business-website',
    name: 'Business Website',
    tagline: 'A complete website that turns visitors into enquiries.',
    summary:
      'A complete website of up to 8 pages for established small businesses, with detailed UI/UX design, service pages, Google Maps, testimonials and a tested enquiry form.',
    priceLabel: 'From R4,000',
    priceValue: 4000,
    isFrom: true,
    bestFor: 'Established small businesses',
    popular: true,
    facts: {
      pages: 'Up to 8 pages',
      timeline: '2-3 weeks',
      revisions: '2 revision rounds',
      support: '30 days support',
    },
    included: [
      'Everything in Starter, plus:',
      'Up to 8 pages',
      'Detailed UI/UX design',
      'Service pages and gallery',
      'Google Maps',
      'Testimonials section',
      'SEO, sitemap and analytics',
      'Tested enquiry form',
    ],
    notIncluded: [
      'Online payments',
      'Custom booking engine',
      'Advanced CMS',
    ],
  },
  {
    slug: 'online-store',
    name: 'Online Store',
    tagline: 'Sell products online with a cart and secure checkout.',
    summary:
      'An online store with up to 30 products, cart and checkout, and one South African payment gateway such as PayFast, Yoco or Ozow.',
    priceLabel: 'From R7,000',
    priceValue: 7000,
    isFrom: true,
    bestFor: 'Retailers and product brands',
    facts: {
      pages: 'Up to 30 products',
      timeline: '3-5 weeks',
      revisions: '2 revision rounds',
      support: '30 days support',
    },
    included: [
      'Custom storefront design',
      'Products and categories',
      'Cart and checkout',
      '1 payment gateway (PayFast, Yoco or Ozow)',
      'Order emails and basic order management',
      'Delivery or collection settings',
      'SEO and analytics setup',
      'Tested before launch',
      'Authentication',
    ],
    notIncluded: [],
  },
  {
    slug: 'website-redesign',
    name: 'Website Redesign',
    tagline: 'Refresh your current site without starting over.',
    summary:
      'A redesign of an existing website with a new design and navigation, a better mobile experience, a content refresh and SEO checks with URL redirects.',
    priceLabel: 'From R2,500',
    priceValue: 2500,
    isFrom: true,
    bestFor: 'Outdated or hard-to-use websites',
    facts: {
      pages: 'Priced by pages',
      timeline: '1-3 weeks',
      revisions: '1 revision round',
      support: '14 days support',
    },
    included: [
      'Review of your current site',
      'New design and navigation',
      'Better mobile experience',
      'Content refresh (existing content)',
      'SEO checks and URL redirects',
      'Testing and launch',
      'New functionality (quoted)',
      'Full rebuilds (quoted)',
    ],
    notIncluded: [],
  },
  {
    slug: 'custom-web-application',
    name: 'Custom Web Application',
    tagline: 'Custom systems built around how your business works.',
    summary:
      'A custom web application with logins and user roles, dashboards, bookings, database integration or other business-specific workflows, scoped after discovery.',
    priceLabel: 'From R10,000',
    priceValue: 10000,
    isFrom: true,
    bestFor: 'Portals, dashboards, booking systems',
    facts: {
      pages: 'Scope after discovery',
      timeline: '4-8+ weeks',
      revisions: 'Set in proposal',
      support: 'Set in proposal',
    },
    included: [
      'Discovery and written scope',
      'Custom interfaces and workflows',
      'Logins and user roles',
      'Database and API integration',
      'Dashboards, forms or bookings',
      'Security basics and testing',
      'Documentation and handover',
      'Complex permissions (quoted per project)',
      'Heavy integrations (quoted per project)',
    ],
    notIncluded: [],
  },
]




export interface Addon {
  name: string
  price: string
  priceValue: number | null
  isFrom: boolean
}

export const addons: Addon[] = [
  { name: 'Extra page', price: 'R500', priceValue: 500, isFrom: false },
  { name: 'Extra revision round', price: 'R300', priceValue: 300, isFrom: false },
  { name: 'Blog setup', price: 'From R1,000', priceValue: 1000, isFrom: true },
  { name: 'Booking functionality', price: 'From R2,000', priceValue: 2000, isFrom: true },
  { name: 'Extra products (store), per 10', price: 'R300', priceValue: 300, isFrom: false },
  { name: 'SEO enhancement', price: 'From R1,000', priceValue: 1000, isFrom: true },
  { name: 'Google Business Profile setup', price: 'R500', priceValue: 500, isFrom: false },
  { name: 'Domain registration in your name, at cost + R100', price: 'At cost + R100', priceValue: null, isFrom: false },
  { name: 'Logo design', price: 'R500', priceValue: 500, isFrom: false },
]

// Development packages are once-off. Always show the billing basis next to a price
// so it cannot be confused with the monthly care plans.
export const ONCE_OFF_LABEL = 'Once-off'
export const ONCE_OFF_NOTE =
  'Pay once. No monthly fee required to own your website.'
export const MONTHLY_LABEL = 'Monthly'

export interface ProcessPhase {
  number: string
  label: string
  heading: string
  description: string
  items: { title: string; description: string }[]
}

export const processPhases: ProcessPhase[] = [
  {
    number: '01',
    label: 'DISCOVER',
    heading: 'Start with the idea.',
    description:
      'Every project begins with a conversation. Tell us about your business, idea or existing website, what you want to achieve and what you need the website to do. You don\'t need to have everything figured out before getting in touch.',
    items: [
      { title: 'Project enquiry', description: 'Tell us about the project through the enquiry form.' },
      { title: 'Goals & requirements', description: 'We understand what the website needs to achieve.' },
      { title: 'Initial direction', description: 'We identify the type of website and functionality that best fits your needs.' },
    ],
  },
  {
    number: '02',
    label: 'DEFINE',
    heading: 'Turn the idea into a clear plan.',
    description:
      'Once we understand the project, we define what needs to be built. We prepare a clear project scope and quotation so you understand what is included before development begins.',
    items: [
      { title: 'Project scope', description: 'The pages, features and functionality included in the project.' },
      { title: 'Timeline', description: 'An estimated delivery timeframe based on the agreed scope.' },
      { title: 'Investment', description: 'A clear quotation based on the requirements.' },
      { title: 'Questions answered', description: 'Anything unclear is discussed before the project begins.' },
    ],
  },
  {
    number: '03',
    label: 'DESIGN & DEVELOP',
    heading: 'Design it. Build it. Refine it.',
    description:
      'Once the project is approved and the required deposit has been paid, the work begins. We turn the agreed direction into a responsive, functional website and keep quality in focus throughout development.',
    items: [
      { title: 'Design', description: 'We establish the visual direction, layout, hierarchy and user experience.' },
      { title: 'Development', description: 'We build the website and implement the required functionality.' },
      { title: 'Review', description: 'You see the website, provide feedback and we refine it within the revision rounds included in your package.' },
    ],
  },
  {
    number: '04',
    label: 'REVIEW & TEST',
    heading: 'Test it on the devices your customers use.',
    description:
      'Before anything goes live, we test the website the way a customer would use it: on a phone, through the forms, across the key pages and through any integrations in the agreed scope.',
    items: [
      { title: 'Mobile and desktop', description: 'Layouts, menus and text are checked on real screen sizes.' },
      { title: 'Forms and enquiries', description: 'The contact form, WhatsApp links and notifications are tested end to end.' },
      { title: 'Integrations', description: 'Payments, email notifications and third-party services are checked where included.' },
    ],
  },
  {
    number: '05',
    label: 'LAUNCH',
    heading: 'Ready for the real world.',
    description:
      'We prepare the production environment, configure the domain and DNS, confirm HTTPS and run the final checks before taking the website live. If business email is part of your care plan, the mailboxes and mail records are set up at this stage.',
    items: [
      { title: 'Production setup', description: 'The website is moved into its production environment.' },
      { title: 'Domain, DNS and HTTPS', description: 'The domain points to the live site and HTTPS is confirmed.' },
      { title: 'Email setup', description: 'Mailboxes, MX, SPF, DKIM and DMARC are configured for care plan clients.' },
    ],
  },
  {
    number: '06',
    label: 'MANAGE',
    heading: 'The technical side keeps running.',
    description:
      'For clients on a care plan, WEB-IN continues after launch: hosting management, SSL and uptime checks, security updates, backups where supported, business email within the allowance, small content changes and support. You can also buy the website without a plan and manage it yourself.',
    items: [
      { title: 'Hosting and domain', description: 'Hosting, DNS and the renewal process are managed for you.' },
      { title: 'Checks and updates', description: 'Monitoring, security updates and backup checks run on the plan schedule.' },
      { title: 'Support', description: 'Report a problem and we respond within the plan response target.' },
    ],
  },
  {
    number: '07',
    label: 'IMPROVE',
    heading: 'The website grows with the business.',
    description:
      'New pages, new features, redesigns and application development sit outside the monthly care plans. When you need them, we scope and quote the work separately so the plan stays predictable.',
    items: [
      { title: 'New pages and features', description: 'Quoted based on the agreed scope before work starts.' },
      { title: 'Redesigns', description: 'A larger redesign is a project, not a maintenance task.' },
      { title: 'Application work', description: 'New workflows and integrations are scoped individually.' },
    ],
  },
]

export const processExpectations = [
  {
    number: '01',
    title: 'Clear communication',
    description: 'We keep you informed about what is happening and what comes next.',
  },
  {
    number: '02',
    title: 'Defined scope',
    description: 'You know what the agreed project includes before development begins.',
  },
  {
    number: '03',
    title: 'Collaboration',
    description: 'Your input matters throughout the design and review stages.',
  },
  {
    number: '04',
    title: 'Attention to detail',
    description: 'We care about the experience users see and the technical foundation underneath it.',
  },
]

export const processClientNeeds = [
  {
    number: '01',
    title: 'Direction',
    description: 'Tell us what you want the website to achieve.',
  },
  {
    number: '02',
    title: 'Content',
    description: 'Provide the relevant text, images, branding and information required for the project.',
  },
  {
    number: '03',
    title: 'Feedback',
    description: 'Review the work and provide feedback during the agreed review stages.',
  },
  {
    number: '04',
    title: 'Decisions',
    description: 'Approve the agreed direction and final website so the project can continue moving forward.',
  },
]

export const processSupportLevels = [
  {
    title: 'No monthly plan',
    description: 'You buy the website once-off and manage hosting, email and updates yourself after the support period.',
  },
  {
    title: 'Monthly care plan',
    description: 'WEB-IN manages hosting, domain/DNS, business email within the allowance, updates, checks, backups where supported and support.',
  },
  {
    title: 'Future improvements',
    description: 'New pages, features, redesigns and application work are quoted separately from the monthly plan.',
  },
]

export const processFaqs: [string, string][] = [
  [
    'Can I contact WEB-IN before I know exactly what I need?',
    'Yes. The initial enquiry is there to help us understand what you\'re trying to achieve and determine the best direction.',
  ],
  [
    'How do I get a quote?',
    'Submit the project enquiry. We review your requirements and use the information provided to determine the appropriate scope and quotation.',
  ],
  [
    'Do I need to provide all the content?',
    'Content requirements depend on the project. We\'ll clarify what is needed during the planning stage.',
  ],
  [
    'How many revisions are included?',
    'Revision rounds depend on the package selected.',
  ],
  [
    'When do I pay?',
    'The deposit is paid after the project scope and quotation are approved and before development begins. Care plans, where chosen, are billed monthly in advance.',
  ],
  [
    'Can I request changes after launch?',
    'Minor content changes are covered within the allowance of a care plan. Larger changes, new pages and new functionality are quoted separately.',
  ],
  [
    'Do I have to choose a monthly care plan?',
    'No. You can buy the website without a plan. The care plans exist for businesses that would rather not manage hosting, email, updates and checks themselves.',
  ],
  [
    'Will you handle the domain and email?',
    'On a care plan, yes. The domain stays registered in your name, and we manage its configuration and renewal process. Business email is included within the plan\'s mailbox allowance. The domain renewal cost itself is disclosed separately.',
  ],
]

export interface FaqItem {
  question: string
  answer: string
}

export interface FaqCategory {
  id: string
  number: string
  label: string
  heading: string
  intro: string
  items: FaqItem[]
  cta?: { text: string; href: string }
}

const carePriceSummary = `${carePlans[0].name} ${carePlans[0].priceLabel}/month, ${carePlans[1].name} ${carePlans[1].priceLabel}/month and ${carePlans[2].name} ${carePlans[2].priceLabel}/month`

export const faqCategories: FaqCategory[] = [
  {
    id: 'pricing',
    number: '01',
    label: 'PRICING',
    heading: 'Pricing and costs',
    intro: 'Clear answers about what things cost.',
    items: [
      {
        question: 'How much does a website cost?',
        answer: `Website design and development is a once-off project fee. Launch prices start at R2,500 for a Starter Website and from R4,000 for a Business Website. Redesigns start from R2,500, online stores from R7,000 and custom web applications from R10,000. Monthly website care is optional and billed monthly: ${carePriceSummary}. Every quote lists exactly what is included, and extras are quoted before any extra work starts.`,
      },
      {
        question: 'Is the website price once-off or monthly?',
        answer: 'The design and development price is once-off. You pay for the build, and once it is paid in full you own the website and its content. A monthly care plan is optional. It covers hosting management, email, updates, checks and support after launch. You do not need a care plan to own or keep your website.',
      },
      {
        question: 'What if I need more than what is included?',
        answer: 'Extra pages, revision rounds and features have fixed add-on prices, so you always know the cost before we start.',
      },
      {
        question: 'How do I pay WEB-IN?',
        answer: 'We take a 50% deposit to start and the balance before launch. Care plans, where chosen, are billed monthly in advance.',
      },
      {
        question: 'What is the difference between a Starter and Business website?',
        answer: 'A Starter Website costs R2,500 and covers up to 4 pages with a contact form and basic SEO. A Business Website starts at R4,000 and covers up to 8 pages, detailed UI/UX design, service pages, Google Maps, testimonials, analytics and a tested enquiry form.',
      },
    ],
  },
  {
    id: 'timeline',
    number: '02',
    label: 'TIMELINE',
    heading: 'How long it takes',
    intro: 'Understanding the process and timelines.',
    items: [
      {
        question: 'How long does a website take?',
        answer: 'Starter sites take 1-2 weeks, Business sites 2-3 weeks, stores 3-5 weeks and custom applications 4-8+ weeks. Timelines start once we have your deposit and content.',
      },
    ],
  },
  {
    id: 'ownership',
    number: '03',
    label: 'OWNERSHIP',
    heading: 'What you own',
    intro: 'Domain, ownership and what happens after launch.',
    items: [
      {
        question: 'Do I own my website?',
        answer: 'Yes. Once the project is paid in full, you own the website and its content. Third-party software and subscriptions stay subject to their own terms. If you end a care plan, we agree a migration or handover so you keep your content and files.',
      },
      {
        question: 'Who owns my domain?',
        answer: 'You do. We register the domain in your name and can manage the configuration and renewal process on your behalf. The domain remains yours, and you can recover access or transfer it at any time.',
      },
      {
        question: 'Does the monthly plan include domain renewal?',
        answer: 'The management fee covers handling the renewal process, not the domain registration cost itself. Where we collect and pay the renewal on your behalf, the amount is disclosed separately and is never silently absorbed into the plan.',
      },
    ],
  },
  {
    id: 'care-hosting',
    number: '04',
    label: 'CARE & HOSTING',
    heading: 'Website care, hosting and email',
    intro: 'How ongoing management works after launch.',
    items: [
      {
        question: 'What is website care?',
        answer: 'Website care is the ongoing technical work that keeps a site healthy: hosting and domain/DNS management, SSL and uptime checks, security updates, backups where the platform supports them, small content changes and support when something breaks. WEB-IN offers three monthly plans: ' + carePriceSummary + '.',
      },
      {
        question: 'What happens after my website is launched?',
        answer: 'Your site goes live and you get a defined support period for fixes. After that you can choose a care plan, manage the site yourself, or ask us for help when needed. Nothing forces you onto a monthly plan.',
      },
      {
        question: 'Does WEB-IN offer website hosting?',
        answer: 'Yes, as part of a care plan. We manage the hosting arrangement that suits the project: shared hosting with cPanel for simple sites, or platforms such as Vercel, Netlify or dedicated application infrastructure for stores and custom apps.',
      },
      {
        question: 'Do I need to manage hosting myself?',
        answer: 'No, not if you choose a care plan. We manage the hosting, server settings, DNS records and technical updates covered by your plan. You do not need to touch a hosting dashboard. If you prefer to keep control of the accounts yourself, you can.',
      },
      {
        question: 'Is business email included?',
        answer: `Yes. Every care plan includes business email on your own domain within the plan's mailbox allowance: ${emailShort(carePlans[0])} on Essential Web Care, ${emailShort(carePlans[1])} on Business Website Care and ${emailShort(carePlans[2])} on Advanced Application Management. Additional mailboxes, extra storage and premium suites such as Google Workspace or Microsoft 365 are quoted or billed separately.`,
      },
      {
        question: 'Does the plan include unlimited email accounts?',
        answer: 'No. Each plan includes a defined number of mailboxes and a fair-use allowance for storage and normal business sending. The allowance is not unlimited, and bulk or marketing email is not part of the service.',
      },
      {
        question: 'What is the difference between hosting and website management?',
        answer: 'Hosting is the server or platform where the website files run. Website management is the ongoing work around it: updates, security, backups, monitoring, domain and DNS, email mailboxes, content changes and support. A care plan includes both the hosting arrangement and the management.',
      },
      {
        question: 'What happens if my website goes offline?',
        answer: 'On a care plan, report it and we investigate during support hours. Monitoring usually catches problems first. Most websites are restored quickly, but no provider can guarantee 100% uptime, and recovery depends on what caused the outage.',
      },
      {
        question: 'Are backups included?',
        answer: 'Backups are taken where the hosting platform supports them, and Business Website Care adds monthly backup verification. We do not guarantee that every version of every file can be recovered. If you need guaranteed retention or long-term archives, we can quote a separate arrangement.',
      },
      {
        question: 'Can WEB-IN manage a website built by another developer?',
        answer: 'Often, yes. We review the code, hosting and access first, then confirm what we can support. If a site is built in a way that cannot be maintained safely, we will say so and quote a rebuild or migration instead.',
      },
      {
        question: 'Can I cancel my monthly care plan?',
        answer: 'Yes. Care plans run month to month with the notice period set out in the terms. Cancelling is straightforward, and we agree what happens to hosting, email and access before the plan ends.',
      },
      {
        question: 'What happens to my website if I stop using WEB-IN?',
        answer: 'You keep your website content and your domain. We agree a handover or migration of files, DNS and accounts so the site can continue elsewhere. The website does not become hostage to the care plan.',
      },
      {
        question: 'Are new features or redesigns included in the monthly plan?',
        answer: 'No. Care plans cover maintenance and the agreed allowances, not unlimited development. New pages, new features, redesigns and application work are quoted separately.',
      },
      {
        question: 'Does Advanced Application Management include database hosting?',
        answer: 'No. The monthly fee is the management fee for the application. Database hosting, cloud compute, storage, payment gateway fees, external APIs and premium software are variable third-party costs and are quoted or billed separately.',
      },
      {
        question: 'Are third-party services included?',
        answer: 'No. Domain registration, extra mailboxes or storage, premium email suites, payment gateway fees, external APIs and other third-party subscriptions are separate from both the build price and the management fee unless a quote says otherwise.',
      },
      {
        question: 'Can I buy a website without a monthly plan?',
        answer: 'Yes. You can buy the website as a once-off project and stop there. The care plans exist for businesses that would rather not manage hosting, email, updates and checks themselves.',
      },
    ],
  },
  {
    id: 'stores-payments',
    number: '05',
    label: 'STORES & PAYMENTS',
    heading: 'Online stores and payments',
    intro: 'How payments and stores work.',
    items: [
      {
        question: 'How do payments work for online stores?',
        answer: 'We integrate one South African payment gateway such as PayFast, Yoco or Ozow. You apply for the merchant account in your business name, and the gateway\'s transaction fees are paid by you.',
      },
    ],
  },
  {
    id: 'about',
    number: '06',
    label: 'ABOUT WEB-IN',
    heading: 'Who you are working with',
    intro: 'The business behind the website.',
    items: [
      {
        question: 'What is WEB-IN?',
        answer: 'WEB-IN is an independent web studio in Johannesburg, South Africa, working remotely with businesses across the country. It designs and builds business websites, online stores and custom web applications, and manages hosting, email and technical care for clients who choose a monthly plan. Websites start at R2,500 and the full price list is published on the pricing page.',
      },
      {
        question: 'Is WEB-IN legitimate?',
        answer: 'Yes. WEB-IN is a small independent business with live project work, a published price list, written quotes and defined payment terms: a 50% deposit to start and the balance before launch. You can contact us directly by email, phone or WhatsApp before paying anything.',
      },
      {
        question: 'Who builds websites in Johannesburg?',
        answer: 'WEB-IN is based in Johannesburg, Gauteng, and works remotely with businesses across South Africa. Projects are designed and built by the same person you speak to, with direct communication by email, phone or WhatsApp and no account managers in between.',
      },
    ],
  },
]

export interface PortfolioProject {
  slug: string
  title: string
  subtitle: string
  industry: string
  type: string
  role: string
  description: string
  technologies: string[]
  liveUrl: string
  codeUrl: string
  cardBg: string
  demo: boolean
  challenge?: string
  approach?: string
  features?: string[]
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'roadwheels',
    title: 'RoadWheels',
    subtitle: 'A complete car rental platform with intuitive booking flows.',
    industry: 'Mobility',
    type: 'Full-stack web application',
    role: 'Full-stack development · Solo project',
    description:
      'A complete car rental platform with intuitive booking flows, fleet management and an administrative dashboard. Built end to end with authentication, structured data management and a responsive customer experience.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
    liveUrl: 'https://roadwheelssa.vercel.app',
    codeUrl: 'https://github.com/MlungisiMahlangu/RoadWheels',
    cardBg: '#dce2ff',
    demo: false,
    challenge: 'Build a complete car rental platform that handles the full customer journey — from browsing available vehicles to booking, payment and fleet management — while remaining intuitive for non-technical users.',
    approach: 'The platform was structured around three core experiences: a customer-facing booking flow, a fleet management dashboard for administrators and a secure authentication layer. The UI was designed to be clean and mobile-first, with clear calls to action at every stage of the rental process.',
    features: ['Vehicle browsing and search', 'Booking flow with date selection', 'User authentication and accounts', 'Admin dashboard for fleet management', 'Responsive customer interface', 'Structured data layer with MongoDB'],
  },
  {
    slug: 'e-safetyrides',
    title: 'E-SafetyRides',
    subtitle: 'A safety-first platform helping riders check driver records.',
    industry: 'Safety',
    type: 'Team project',
    role: 'Full-stack development · Collaborative project',
    description:
      'A safety-focused platform designed to help e-hailing riders check driver records before getting into a vehicle. The project combines authentication, search, reporting and notification functionality within a structured full-stack architecture.',
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'Firebase', 'Firestore'],
    liveUrl: 'https://e-safetyridessa.vercel.app',
    codeUrl: 'https://github.com/Ronzasa/E-SafetyRides',
    cardBg: '#16181d',
    demo: false,
    challenge: 'Create a platform that helps e-hailing riders make informed safety decisions by checking driver records, while handling authentication, real-time data and reporting in a collaborative development environment.',
    approach: 'The team built a modular Route-Controller-Service architecture separating concerns across authentication, search, reports and notifications. Firebase and Firestore were used for real-time data and authentication, while the frontend was built with React and Vite for a fast development experience.',
    features: ['Driver record search', 'User authentication', 'Incident reporting system', 'Notification functionality', 'Real-time data with Firestore', 'Collaborative full-stack architecture'],
  },
  {
    slug: 'grip-on',
    title: 'Grip On',
    subtitle: 'A complete online store for a Johannesburg gym-apparel brand, from storefront to admin back office.',
    industry: 'Retail',
    type: 'E-commerce platform',
    role: 'Full-stack development & design · Solo project',
    description:
      'A production online store for a Johannesburg gym-apparel brand: a dark, orange-accented storefront built with Next.js and Supabase, with a filterable catalogue, colourway-level product pages, search, a cash-on-delivery checkout that re-prices the order on the server, guest order tracking and a private admin back office for orders, products, customers and store settings.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    liveUrl: 'https://grip-on-website.netlify.app',
    codeUrl: 'https://github.com/MlungisiMahlangu/grip-on-website',
    cardBg: '#f1e8d8',
    demo: false,
    challenge: 'Give a small Johannesburg gym brand a real store rather than a brochure page — a catalogue customers can browse, filter and search, a checkout that cannot be talked into the wrong total from the browser, and a back office the owner can run the business from without asking a developer to change a price or a photo.',
    approach: 'Built on the Next.js App Router with TypeScript in strict mode and Tailwind CSS, backed by Supabase Postgres, Auth, Storage and row-level security. Prices, delivery and availability are recalculated inside a create_order database function, so the client never decides what an order costs. Cart and wishlist persist through Zustand, forms run on React Hook Form with Zod schemas shared with server actions, and order and status emails go out through Resend. The admin area sits behind its own role check and refreshes over Supabase realtime.',
    features: ['Catalogue filtered by size, colour, collection and price through the URL', 'Product pages with colourways, galleries and related items', 'Tokenised search across names, details and colours', 'Three-step cash-on-delivery checkout with server-side pricing', 'Guest order tracking and cookie-gated order confirmations', 'Admin back office for orders, products, colourways, customers and settings', 'Realtime order updates with a guarded status workflow', 'Direct-to-storage product image uploads and an SEO, sitemap and Google Merchant feed layer'],
  },
  {
    slug: 'countryscope',
    title: 'CountryScope',
    subtitle: 'An interactive country explorer powered by REST API.',
    industry: 'Education',
    type: 'Web application',
    role: 'Frontend development · Solo project',
    description:
      'An interactive country explorer that uses a REST API to provide searching, filtering and country information through a responsive, data-driven interface.',
    technologies: ['JavaScript', 'REST API', 'Responsive UI'],
    liveUrl: 'https://mlungisimahlangu.github.io/CountryScope',
    codeUrl: 'https://github.com/MlungisiMahlangu/CountryScope',
    cardBg: '#dce2ff',
    demo: false,
    challenge: 'Build an interactive data-driven interface that lets users explore, search and filter country information from a REST API while maintaining a responsive and performant experience.',
    approach: 'The application fetches country data from a public REST API and renders it through a clean, filterable interface. Search and region filtering are handled client-side for instant feedback, with a responsive grid that adapts from desktop to mobile.',
    features: ['REST API data integration', 'Real-time search and filtering', 'Region-based filtering', 'Responsive grid layout', 'Country detail views', 'Performant client-side rendering'],
  },
]

export const comparisonFeatures = [
  { feature: 'Pages', starter: 'Up to 4', business: 'Up to 8', redesign: 'By scope', store: 'Up to 30 products', app: 'Custom scope' },
  { feature: 'Timeline', starter: '1-2 wks', business: '2-3 wks', redesign: '1-3 wks', store: '3-5 wks', app: '4-8+ wks' },
  { feature: 'Revisions', starter: '1', business: '2', redesign: '1', store: '2', app: 'In proposal' },
  { feature: 'Support', starter: '14 days', business: '30 days', redesign: '14 days', store: '30 days', app: 'In proposal' },
  { feature: 'Contact form + WhatsApp', starter: true, business: true, redesign: true, store: true, app: 'As agreed' },
  { feature: 'SEO basics', starter: true, business: 'yes + sitemap', redesign: true, store: true, app: 'Basic' },
  { feature: 'Analytics setup', starter: false, business: true, redesign: false, store: true, app: 'As agreed' },
  { feature: 'Gallery + Google Maps', starter: 'Gallery', business: true, redesign: 'As needed', store: false, app: false },
  { feature: 'Cart + payments', starter: false, business: false, redesign: false, store: true, app: 'If agreed' },
  { feature: 'Logins + database', starter: false, business: false, redesign: false, store: 'Add-on', app: true },
]

// ─── Enquiry form options ───
// Build and care are separate optional choices, so a visitor can ask for both.

export interface EnquiryServiceOption {
  value: string
  description: string
  planId?: string
  popular?: boolean
}

export const buildServiceOptions: EnquiryServiceOption[] = [
  {
    value: 'Starter Website',
    description: 'A focused site of up to 4 pages for a small business.',
  },
  {
    value: 'Business Website',
    description: 'A complete site of up to 8 pages with service pages and SEO.',
  },
  {
    value: 'Website Redesign',
    description: 'A fresh design for a website you already have.',
  },
  {
    value: 'Online Store',
    description: 'Sell products with a cart and secure checkout.',
  },
  {
    value: 'Custom Web Application',
    description: 'Dashboards, bookings, logins or custom workflows.',
  },
]

export interface CareServiceOption {
  value: string
  label: string
  planId?: string
}

// Plan names and prices come from lib/care-plans.ts so the form can never drift.
export const careServiceOptions: CareServiceOption[] = carePlans.map((plan) => ({
  value: plan.name,
  label: `${plan.name} – ${plan.priceLabel}/month${plan.popular ? ' (Most popular)' : ''}`,
  planId: plan.id,
}))

export const contactMethodOptions = ['WhatsApp', 'Phone call', 'Email'] as const

export const hasWebsiteOptions = ['Yes', 'No'] as const

export const domainStatusOptions = [
  'I need a new domain',
  'I already have a domain',
  'Not sure yet',
]

export const emailCountOptions = [
  '1\u20132',
  '3\u20135',
  '6\u201310',
  'Not sure yet',
]

export const referralSourceOptions = [
  'Google search',
  'Social media',
  'Friend / referral',
  'Saw our work online',
  'AI assistant (e.g. ChatGPT)',
  'Other',
]

export const enquiryBudgetOptions = [
  'Under R3,000',
  'R3,000 \u2013 R6,999',
  'R7,000 \u2013 R14,999',
  'R15,000+',
  'Not sure yet',
]

export const enquiryTimelineOptions = [
  'As soon as possible',
  'Within a month',
  'In 2\u20133 months',
  'Flexible',
]

export const homepageFaqs = [
  {
    question: 'How much does a website cost?',
    answer: 'Website design and development is a once-off fee. Launch prices start at R2,500 for a Starter Website and from R4,000 for a Business Website. Redesigns start from R2,500, online stores from R7,000 and custom web applications from R10,000. Every quote lists exactly what is included, and extras are quoted before any extra work starts.',
  },
  {
    question: 'How long does a website take?',
    answer: 'Starter sites take 1-2 weeks, Business sites 2-3 weeks, stores 3-5 weeks and custom applications 4-8+ weeks. Timelines start once we have your deposit and content.',
  },
  {
    question: 'What happens after my website is launched?',
    answer: `You can buy the website without a monthly plan, or choose ongoing care. The care plans cover hosting management, business email within a mailbox allowance, SSL and uptime checks, security updates, backups where supported, small content changes and support: ${carePriceSummary}.`,
  },
  {
    question: 'Do I own my website and domain?',
    answer: 'Yes. Once the project is paid in full, you own the website and its content, and the domain is registered in your name. If you end a care plan, we agree a handover so you keep your content, domain and access.',
  },
  {
    question: 'Is business email included?',
    answer: `Yes, within each plan's mailbox allowance: ${emailShort(carePlans[0])} on Essential Web Care, ${emailShort(carePlans[1])} on Business Website Care and ${emailShort(carePlans[2])} on Advanced Application Management. Extra mailboxes, extra storage and premium suites are quoted separately.`,
  },
]

// Written in the question-and-answer form AI assistants quote. Keep answers 40-60 words
// and keep every price identical to the constants above.
export const keyFaqs: FaqItem[] = [
  {
    question: 'How much does a website cost in South Africa?',
    answer:
      'A small business website in South Africa usually costs between R2,500 and R15,000 depending on size and features. WEB-IN publishes fixed starting prices: Starter Website R2,500, Business Website from R4,000, Website Redesign from R2,500, Online Store from R7,000 and Custom Web Application from R10,000.',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'Most small business websites take 1 to 3 weeks with WEB-IN. A Starter Website takes 1 to 2 weeks, a Business Website 2 to 3 weeks, an online store 3 to 5 weeks and a custom web application 4 to 8 weeks or more. Timelines start once the deposit and content are in.',
  },
  {
    question: 'Who builds websites in Johannesburg?',
    answer:
      'WEB-IN is an independent web developer based in Johannesburg, Gauteng, working remotely with businesses across South Africa. Projects are designed and built by the same person you speak to, with direct communication by email, phone or WhatsApp and no account managers in between.',
  },
  {
    question: 'What is WEB-IN?',
    answer:
      'WEB-IN is an independent website design and development studio in Johannesburg, South Africa, working with businesses across the country. It builds business websites, online stores and custom web applications. Websites start at R2,500 and the full price list is published at web-in.co.za/pricing.',
  },
  {
    question: 'Is WEB-IN legitimate?',
    answer:
      'Yes. WEB-IN is a small independent business with live project work, a published price list, written quotes and defined payment terms: a 50% deposit to start and the balance before launch. You can contact us directly by email, phone or WhatsApp before paying anything.',
  },
  {
    question: 'Do you build online stores with PayFast, Yoco or Ozow?',
    answer:
      'Yes. WEB-IN builds online stores with one South African payment gateway, such as PayFast, Yoco or Ozow, included in the Online Store package from R7,000. You apply for the merchant account in your business name, and the gateway transaction fees are paid by you.',
  },
  {
    question: 'Is the website price once-off?',
    answer:
      'Yes. Design and development is a once-off project fee: Starter Website R2,500, Business Website from R4,000, Website Redesign from R2,500, Online Store from R7,000 and Custom Web Application from R10,000. Once it is paid in full you own the website and its content. A monthly care plan is optional.',
  },
  {
    question: 'What is included in website care?',
    answer:
      `WEB-IN offers three monthly plans: Essential Web Care ${carePlans[0].priceLabel}/month for simple sites, Business Website Care ${carePlans[1].priceLabel}/month for growing businesses, and Advanced Application Management ${carePlans[2].priceLabel}/month for stores, dashboards and custom apps. Each plan includes hosting management, business email within a mailbox allowance, SSL and uptime checks, security updates, backups where supported, content allowances and support.`,
  },
  {
    question: 'Is business email included in the monthly plan?',
    answer:
      `Yes. Every care plan includes business email on your own domain within the plan's mailbox allowance: ${emailShort(carePlans[0])} on Essential Web Care, ${emailShort(carePlans[1])} on Business Website Care and ${emailShort(carePlans[2])} on Advanced Application Management. Extra mailboxes, extra storage and premium suites such as Google Workspace or Microsoft 365 are quoted or billed separately. Mailboxes are not unlimited.`,
  },
  {
    question: 'Do I own my website?',
    answer:
      'Yes. Once the project is paid in full, you own the website and its content. The domain is registered in your name. Third-party software and subscriptions stay subject to their own terms, and if you end a care plan we agree a migration or handover so you keep your content, domain and access.',
  },
  {
    question: 'What is the difference between a Starter and Business website?',
    answer:
      'A Starter Website costs R2,500 and covers up to 4 pages with a contact form and basic SEO. A Business Website starts at R4,000 and covers up to 8 pages, detailed UI/UX design, service pages, Google Maps, testimonials, analytics and a tested enquiry form.',
  },
]

export { blogArticles } from './blog-data'
export type { BlogArticle } from './blog-data'
