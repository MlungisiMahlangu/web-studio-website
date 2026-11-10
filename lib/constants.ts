export const STUDIO_NAME = 'WEB-IN'
// TODO: replace with the registered legal entity name if it differs from the trading name.
export const STUDIO_LEGAL_NAME = 'WEB-IN'
export const SITE_URL = 'https://www.web-in.co.za'
export const SITE_HOST = 'www.web-in.co.za'
export const STUDIO_TAGLINE = 'Built for your business. Designed for the web.'
export const STUDIO_BRAND_LINE =
  'WEB-IN | Website Design & Development, Johannesburg, South Africa'
export const STUDIO_DESCRIPTION =
  'WEB-IN is an independent web developer in Johannesburg, South Africa. We build fast, mobile-first business websites, online stores and web applications for businesses across the country. Websites start at R2,500.'
export const STUDIO_DESCRIPTION_LONG =
  'WEB-IN is an independent web development studio based in Johannesburg, South Africa, working remotely with businesses across the country. We design and build business websites, online stores and custom web applications, and you deal directly with the person building your site. Websites start at R2,500, business websites from R4,000 and online stores from R7,000.'
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
export const LAST_UPDATED = '2026-10-14'
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

export const maintenancePlans = [
  {
    name: 'Basic Care',
    price: 'R299',
    priceValue: 299,
    description: 'Uptime and security checks, 1h30min per day of small content updates, minor bug fixes, reply within 2 business days.',
    features: [
      'Uptime and security checks',
      '1h30min per day of small content updates',
      'Minor bug fixes',
      'Reply within 2 business days',
    ],
  },
  {
    name: 'Business Care',
    price: 'R499',
    priceValue: 499,
    description: 'Everything in Basic, 2h30min per day of updates, monthly performance and backup check, reply within 1 business day.',
    features: [
      'Everything in Basic Care',
      '2h30min per day of updates',
      'Monthly performance and backup check',
      'Reply within 1 business day',
    ],
  },
]

export const maintenanceNote = 'Unused hours do not roll over. Stores and apps get a quoted plan.'



export const processSteps = [
  {
    number: '01',
    title: 'Tell us about your project',
    description:
      'Submit your project enquiry through our form. Share as much or as little as you know.',
  },
  {
    number: '02',
    title: 'We review your requirements',
    description:
      'We review your goals, features, budget and timeline to understand what you need.',
  },
  {
    number: '03',
    title: 'Receive your quote',
    description:
      'You receive a tailored project scope and quotation with clear deliverables.',
  },
  {
    number: '04',
    title: 'Approve and start',
    description:
      'Once the quote is approved and the required deposit is paid, development begins.',
  },
  {
    number: '05',
    title: 'Design and development',
    description:
      'Your website is designed, built and tested with care at every stage.',
  },
  {
    number: '06',
    title: 'Your review',
    description:
      'You review the website and provide feedback within your included revision rounds.',
  },
  {
    number: '07',
    title: 'Launch',
    description:
      'Your website goes live. We handle launch, DNS and final checks.',
  },
  {
    number: '08',
    title: 'Ongoing support',
    description:
      'Optional maintenance and support plans are available to keep your site running smoothly.',
  },
]

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
    label: 'CREATE',
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
    label: 'LAUNCH',
    heading: 'Ready for the real world.',
    description:
      'Once the website has been reviewed and approved, we prepare everything for launch. We handle the agreed launch, domain/DNS configuration and final production checks before taking the website live.',
    items: [
      { title: 'Final checks', description: 'Everything is reviewed before launch.' },
      { title: 'Production setup', description: 'The website is moved into its production environment.' },
      { title: 'Go live', description: 'The website goes live.' },
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
    title: 'Minor post-launch support',
    description: 'For the small adjustments covered by the selected package.',
  },
  {
    title: 'Ongoing maintenance',
    description: 'For businesses that want continued technical and content support.',
  },
  {
    title: 'Future improvements',
    description: 'For new pages, features, functionality or larger changes that fall outside maintenance.',
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
    'The required deposit is paid after the project scope and quotation are approved and before development begins.',
  ],
  [
    'Can I request changes after launch?',
    'Yes. Minor changes may be covered by applicable post-launch support, while larger changes or new functionality are quoted separately.',
  ],
  [
    'Do you provide ongoing maintenance?',
    'Yes. Optional maintenance plans are available depending on your needs.',
  ],
  [
    'Will you handle the domain?',
    'Where included in the selected package or agreed scope, WEB-IN can assist with domain registration and configuration. Third-party renewal and subscription costs are separate unless explicitly included.',
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
        answer: 'Launch prices start at R2,500 for a Starter Website and from R4,000 for a Business Website. Redesigns start from R2,500, online stores from R7,000 and custom web applications from R10,000. Every quote lists exactly what is included, and extras are quoted before any extra work starts.',
      },
      {
        question: 'What if I need more than what is included?',
        answer: 'Extra pages, revision rounds and features have fixed add-on prices, so you always know the cost before we start.',
      },
      {
        question: 'How do I pay WEB-IN?',
        answer: 'We take a 50% deposit to start and the balance before launch.',
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
        answer: 'Yes. Once the project is paid in full, you own the website and its content. Third-party software and subscriptions stay subject to their own terms.',
      },
      {
        question: 'Do you provide a domain?',
        answer: 'We do not include a free domain. We can register one in your name as an add-on, or connect a domain you already own.',
      },
    ],
  },
  {
    id: 'stores-payments',
    number: '04',
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
    id: 'maintenance',
    number: '05',
    label: 'MAINTENANCE',
    heading: 'Ongoing support',
    intro: 'Care plans and maintenance.',
    items: [
      {
        question: 'Do you offer maintenance?',
        answer: 'Yes. Basic Care (R299 per month) and Business Care (R499 per month) cover small updates, checks and support after launch.',
      },
      {
        question: 'What is included in website maintenance?',
        answer: 'Basic Care covers uptime and security checks, small content updates, minor bug fixes and replies within two business days. Business Care adds more update time, monthly performance and backup checks, and replies within one business day.',
      },
    ],
    cta: { text: 'View All Services', href: '/pricing' },
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
        answer: 'WEB-IN is an independent website design and development studio in Johannesburg, South Africa, working remotely with businesses across the country. It builds business websites, online stores and custom web applications. Websites start at R2,500 and the full price list is published on the pricing page.',
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
    subtitle: 'A bold, redesigned gym-apparel storefront with a strong streetwear edge.',
    industry: 'Retail',
    type: 'E-commerce frontend',
    role: 'Frontend development & design · Solo project',
    description:
      'A redesigned gym-apparel storefront for a Johannesburg brand, built around a bold dark theme with orange accents, full-bleed lifestyle imagery and a “built for the work” identity that carries through from the homepage into product discovery.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://grip-on-website.netlify.app',
    codeUrl: 'https://github.com/MlungisiMahlangu/grip-on-website',
    cardBg: '#f1e8d8',
    demo: false,
    challenge: 'Rebuild the storefront design so it feels like a genuine gym brand rather than a generic template — a bold visual identity, lifestyle-led imagery and clear product hierarchy — while staying fast and lightweight without a backend or e-commerce platform.',
    approach: 'The redesign centres on a dark, high-contrast palette with orange accents, large hero photography and condensed display typography to communicate the “built for the work” positioning. It was rebuilt with vanilla HTML, CSS and JavaScript so the stronger design still loads quickly and adapts cleanly from mobile to desktop.',
    features: ['Bold dark theme with orange accents', 'Full-bleed lifestyle hero imagery', 'Strong typographic brand identity', 'Responsive layout across devices', 'Smooth browsing experience', 'Lightweight vanilla implementation'],
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

export const enquiryServiceOptions = [
  'Starter Website',
  'Business Website',
  'Website Redesign',
  'Online Store',
  'Custom Web Application',
  'Not Sure Yet',
]

export const referralSourceOptions = [
  'Google Search',
  'Social Media',
  'Friend or Colleague',
  'Saw our work online',
  'LinkedIn',
  'Instagram',
  'Facebook',
  'Other',
]

export const enquiryFeatureOptions = [
  'WhatsApp',
  'Contact form',
  'Google Maps',
  'Image gallery',
  'Testimonials',
  'Blog',
  'Booking system',
  'Online payments',
  'Customer accounts',
  'Newsletter',
  'Social media integration',
  'Google Analytics',
  'Google Business Profile',
  'SEO',
  'Multiple languages',
  'Custom functionality',
]

export const enquiryBudgetOptions = [
  'Under R3,000',
  'R3,000–R6,999',
  'R7,000+',
  'R10,000+',
]

export const enquiryTimelineOptions = [
  'ASAP',
  'Within 2 weeks',
  '2\u20134 weeks',
  '1\u20132 months',
  'No specific deadline',
]

export const enquiryGoalOptions = [
  'Generate enquiries',
  'Get WhatsApp messages',
  'Sell products',
  'Get bookings',
  'Showcase services',
  'Build credibility',
  'Personal branding',
  'Provide information',
  'Other',
]

export const enquiryDesignOptions = [
  'Modern',
  'Minimal',
  'Luxury',
  'Corporate',
  'Creative',
  'Bold',
  'Dark',
  'Light',
]

export const homepageFaqs = [
  {
    question: 'How much does a website cost?',
    answer: 'Launch prices start at R2,500 for a Starter Website and from R4,000 for a Business Website. Redesigns start from R2,500, online stores from R7,000 and custom web applications from R10,000. Every quote lists exactly what is included, and extras are quoted before any extra work starts.',
  },
  {
    question: 'How long does a website take?',
    answer: 'Starter sites take 1-2 weeks, Business sites 2-3 weeks, stores 3-5 weeks and custom applications 4-8+ weeks. Timelines start once we have your deposit and content.',
  },
  {
    question: 'Do I own my website?',
    answer: 'Yes. Once the project is paid in full, you own the website and its content. Third-party software and subscriptions stay subject to their own terms.',
  },
  {
    question: 'Do you provide a domain?',
    answer: 'We do not include a free domain. We can register one in your name as an add-on, or connect a domain you already own.',
  },
  {
    question: 'Do you offer maintenance?',
    answer: 'Yes. Basic Care (R299 per month) and Business Care (R499 per month) cover small updates, checks and support after launch.',
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
    question: 'What is included in website maintenance?',
    answer:
      'Basic Care costs R299 per month and covers uptime and security checks, small content updates, minor bug fixes and replies within two business days. Business Care costs R499 per month and adds more update time, monthly performance and backup checks, and replies within one business day.',
  },
  {
    question: 'Do I own my website?',
    answer:
      'Yes. Once the project is paid in full, you own the website and its content. Domains, third-party software and subscriptions stay subject to their own terms, and we can register a domain in your name as an add-on.',
  },
  {
    question: 'What is the difference between a Starter and Business website?',
    answer:
      'A Starter Website costs R2,500 and covers up to 4 pages with a contact form and basic SEO. A Business Website starts at R4,000 and covers up to 8 pages, detailed UI/UX design, service pages, Google Maps, testimonials, analytics and a tested enquiry form.',
  },
]

export { blogArticles } from './blog-data'
export type { BlogArticle } from './blog-data'
