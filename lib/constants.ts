import {
  Globe2,
  PenTool,
  Sparkles,
  Layers3,
  Code2,
  Paintbrush,
  type LucideIcon,
} from 'lucide-react'

export const STUDIO_NAME = 'WEB-IN'
export const SITE_URL = 'https://www.web-in.co.za'
export const STUDIO_TAGLINE = 'Built for your business. Designed for the web.'
export const STUDIO_DESCRIPTION =
  'Professional website design and development studio in South Africa. We build modern, fast, mobile-first websites, online stores and web applications for businesses. Affordable pricing from R1,500.'
export const STUDIO_EMAIL = 'teamwebin3@gmail.com'
export const STUDIO_PHONE = '+27 64 953 1145'
export const STUDIO_WHATSAPP = '27649531145'
export const STUDIO_LOCATION = 'Johannesburg, Gauteng, South Africa'
export const LAST_UPDATED = '2026-10-14'
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwlvornn'
export const SOCIAL_LINKS: string[] = []

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
  'landing page design',
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
  priceLabel: string
  bestFor: string
  popular?: boolean
  facts: ServiceFacts
  included: string[]
  notIncluded: string[]
}

export const services: ServiceCard[] = [
  {
    slug: 'landing-page',
    name: 'Landing Page',
    tagline: 'One focused page for one clear goal.',
    priceLabel: 'R1,500',
    bestFor: 'Campaigns, new businesses, single services',
    facts: {
      pages: '1 page',
      timeline: '5-10 days',
      revisions: '1 revision round',
      support: '14 days support',
    },
    included: [
      'Custom-designed page',
      'Hero, benefits and contact sections',
      'Mobile-responsive layout',
      'WhatsApp link + contact form',
      'Basic SEO setup',
      'Published live with HTTPS',
    ],
    notIncluded: [
      'Extra pages',
      'Copywriting and photos',
      'Logins or backend',
    ],
  },
  {
    slug: 'business-website',
    name: 'Business Website',
    tagline: 'A complete website that turns visitors into enquiries.',
    priceLabel: 'From R4,000',
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
    slug: 'starter-website',
    name: 'Starter Website',
    tagline: 'A professional site for individuals and small businesses.',
    priceLabel: 'R2,500',
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
    slug: 'website-redesign',
    name: 'Website Redesign',
    tagline: 'Refresh your current site without starting over.',
    priceLabel: 'From R2,500',
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
    ],
    notIncluded: [
      'Large content migration',
      'New functionality',
      'Full rebuilds (quoted)',
    ],
  },
  {
    slug: 'online-store',
    name: 'Online Store',
    tagline: 'Sell products online with a cart and secure checkout.',
    priceLabel: 'From R7,000',
    bestFor: 'Retailers and product brands',
    facts: {
      pages: 'Up to 20 products',
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
    ],
    notIncluded: [
      'Gateway transaction fees',
      'Customer accounts (add-on)',
      'Courier or stock integrations',
    ],
  },
  {
    slug: 'custom-web-application',
    name: 'Custom Web Application',
    tagline: 'Custom systems built around how your business works.',
    priceLabel: 'From R10,000',
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
    ],
    notIncluded: [
      'Complex permissions (quoted)',
      'Heavy integrations (quoted)',
    ],
  },
]




export const addons = [
  { name: 'Extra page', price: 'R500' },
  { name: 'Extra revision round', price: 'R300' },
  { name: 'Blog setup', price: 'From R1,000' },
  { name: 'Booking functionality', price: 'From R2,000' },
  { name: 'Customer accounts and order tracking (store)', price: 'From R1,500' },
  { name: 'Extra products (store), per 10', price: 'R300' },
  { name: 'SEO enhancement', price: 'From R1,000' },
  { name: 'Google Business Profile setup', price: 'R500' },
  { name: 'Business email setup', price: 'From R500' },
  { name: 'Domain registration in your name, at cost + R100', price: 'At cost + R100' },
  { name: 'Logo design', price: 'R500' },
]

export const maintenancePlans = [
  {
    name: 'Basic Care',
    price: 'R299',
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
        answer: 'Launch prices start at R1,500 for a Landing Page, R2,500 for a Starter Website and from R4,000 for a Business Website. Redesigns start from R2,500, online stores from R7,000 and custom web applications from R10,000. Every quote lists exactly what is included, and extras are quoted before any extra work starts.',
      },
      {
        question: 'What if I need more than what is included?',
        answer: 'Extra pages, revision rounds and features have fixed add-on prices, so you always know the cost before we start.',
      },
      {
        question: 'How do I pay WEB-IN?',
        answer: 'We take a 50% deposit to start and the balance before launch.',
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
        answer: 'Landing pages take 5-10 business days, Starter sites 1-2 weeks, Business sites 2-3 weeks, stores 3-5 weeks and custom applications 4-8+ weeks. Timelines start once we have your deposit and content.',
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
    ],
    cta: { text: 'View All Services', href: '/pricing' },
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
    subtitle: 'A gym-apparel concept storefront with clean product presentation.',
    industry: 'Retail',
    type: 'E-commerce frontend',
    role: 'Frontend development · Solo project',
    description:
      'A gym-apparel storefront concept focused on strong product presentation, responsive layouts and a smooth browsing experience from the landing page through product discovery.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://mlungisimahlangu.github.io/grip-on-website',
    codeUrl: 'https://github.com/MlungisiMahlangu/grip-on-website',
    cardBg: '#f1e8d8',
    demo: false,
    challenge: 'Design a gym-apparel storefront that communicates brand quality through strong product imagery, clean typography and a browsing experience that feels premium without relying on a backend or e-commerce platform.',
    approach: 'The site was built with vanilla HTML, CSS and JavaScript to keep it lightweight and fast. The design focused on large product imagery, generous whitespace and a clear visual hierarchy that guides visitors from the landing page through product discovery.',
    features: ['Strong product presentation', 'Responsive layout across devices', 'Smooth browsing experience', 'Clean visual hierarchy', 'Lightweight vanilla implementation', 'Mobile-first design'],
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
  { feature: 'Pages', landing: '1', starter: 'Up to 4', business: 'Up to 8', redesign: 'By scope', store: 'Up to 20 products', app: 'Custom scope' },
  { feature: 'Timeline', landing: '5-10 days', starter: '1-2 wks', business: '2-3 wks', redesign: '1-3 wks', store: '3-5 wks', app: '4-8+ wks' },
  { feature: 'Revisions', landing: '1', starter: '1', business: '2', redesign: '1', store: '2', app: 'In proposal' },
  { feature: 'Support', landing: '14 days', starter: '14 days', business: '30 days', redesign: '14 days', store: '30 days', app: 'In proposal' },
  { feature: 'Contact form + WhatsApp', landing: true, starter: true, business: true, redesign: true, store: true, app: 'As agreed' },
  { feature: 'SEO basics', landing: true, starter: true, business: 'yes + sitemap', redesign: true, store: true, app: 'Basic' },
  { feature: 'Analytics setup', landing: false, starter: false, business: true, redesign: false, store: true, app: 'As agreed' },
  { feature: 'Gallery + Google Maps', landing: false, starter: 'Gallery', business: true, redesign: 'As needed', store: false, app: false },
  { feature: 'Cart + payments', landing: false, starter: false, business: false, redesign: false, store: true, app: 'If agreed' },
  { feature: 'Logins + database', landing: false, starter: false, business: false, redesign: false, store: 'Add-on', app: true },
]

export const enquiryServiceOptions = [
  'Landing Page',
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
  'Under R2,000',
  'R2,000–R5,000',
  'R5,000–R10,000',
  'R10,000+',
  'Not sure yet',
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
    answer: 'Launch prices start at R1,500 for a Landing Page, R2,500 for a Starter Website and from R4,000 for a Business Website. Redesigns start from R2,500, online stores from R7,000 and custom web applications from R10,000. Every quote lists exactly what is included, and extras are quoted before any extra work starts.',
  },
  {
    question: 'How long does a website take?',
    answer: 'Landing pages take 5-10 business days, Starter sites 1-2 weeks, Business sites 2-3 weeks, stores 3-5 weeks and custom applications 4-8+ weeks. Timelines start once we have your deposit and content.',
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

export { blogArticles } from './blog-data'
export type { BlogArticle } from './blog-data'
