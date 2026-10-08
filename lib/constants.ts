import {
  Globe2,
  PenTool,
  Sparkles,
  Compass,
  Layers3,
  Code2,
  Paintbrush,
  type LucideIcon,
} from 'lucide-react'

export const STUDIO_NAME = 'WEB-IN'
export const STUDIO_TAGLINE = 'Built for your business. Designed for the web.'
export const STUDIO_DESCRIPTION =
  'WEB-IN is an independent web development studio based in South Africa, creating modern websites and web solutions for small businesses, professionals, entrepreneurs and growing brands.'
export const STUDIO_EMAIL = 'hello@web-in.co.za'
export const STUDIO_LOCATION = 'South Africa'

export interface Service {
  slug: string
  icon: LucideIcon
  number: string
  title: string
  text: string
  price: string
  href: string
}

export const services: Service[] = [
  {
    icon: Globe2,
    number: '01',
    title: 'Business websites',
    text: 'Professional websites for companies and service businesses.',
    price: 'From R2,500',
    href: '/services/business-websites',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Portfolio websites',
    text: 'Personal brands, professionals, creatives and students.',
    price: 'From R2,000',
    href: '/services/portfolio-websites',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Landing pages',
    text: 'Focused pages built around one offer, product or campaign.',
    price: 'From R1,500',
    href: '/services/landing-pages',
  },
  {
    icon: Compass,
    number: '04',
    title: 'Booking websites',
    text: 'Make it easy for customers to enquire or book your services.',
    price: 'From R6,500',
    href: '/services/booking-websites',
  },
  {
    icon: Layers3,
    number: '05',
    title: 'Online stores',
    text: 'Product catalogues, shopping carts and online payments.',
    price: 'From R8,500',
    href: '/services/online-stores',
  },
  {
    icon: Code2,
    number: '06',
    title: 'Custom applications',
    text: 'Dashboards, portals, systems and custom functionality.',
    price: "Let's talk",
    href: '/services/custom-web-applications',
  },
  {
    icon: Paintbrush,
    number: '07',
    title: 'Website redesigns',
    text: 'Modernise an outdated website into something you are proud of.',
    price: 'From R2,500',
    href: '/services/website-redesigns',
  },
]

export interface ServiceDetail {
  slug: string
  name: string
  intro: string
  price: string
  timeframe: string
  description: string
  features: string[]
  domain: string
  cta: string
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'business-websites': {
    slug: 'business-websites',
    name: 'Business websites',
    intro:
      'A credible, conversion-ready home for your business online.',
    price: 'R4,500',
    timeframe: '2\u20133 weeks',
    description:
      'Your business deserves a website that works as hard as you do. We build professional, mobile-first websites that communicate trust, showcase your services and make it easy for customers to take the next step.',
    features: [
      'Up to 7 pages',
      'Custom UI/UX design',
      'Mobile-first responsive design',
      'Professional navigation',
      'Custom branded sections',
      'WhatsApp integration',
      'Contact form',
      'Google Maps integration',
      'Image gallery',
      'Testimonials section',
      'Social media integration',
      'Basic SEO setup',
      'Google Analytics setup',
      'Google Search Console setup',
      'Google Business Profile setup assistance',
      'Image optimisation',
      'Performance optimisation',
      'SSL',
      'Website deployment',
      '2 revision rounds',
      '3 months minor post-launch support',
    ],
    domain: 'FREE .co.za domain \u2014 first year included',
    cta: 'Build my business website',
  },
  'portfolio-websites': {
    slug: 'portfolio-websites',
    name: 'Portfolio websites',
    intro:
      'A memorable digital home for your work, skills and story.',
    price: 'R2,000',
    timeframe: '7\u201315 days',
    description:
      'Whether you are a student, creative, developer or professional, your portfolio should open doors. We build clean, confident portfolio websites that put your best work front and centre.',
    features: [
      'Home, About, Skills/Services, Projects, Contact',
      'CV/Resume download',
      'GitHub integration',
      'LinkedIn integration',
      'Social media links',
      'Custom UI design',
      'Mobile-first responsive design',
      'Contact form',
      'WhatsApp integration',
      'Basic SEO setup',
      'Image optimisation',
      'SSL',
      'Deployment',
      'Basic performance optimisation',
      '1 revision round',
      '14 days minor post-launch support',
    ],
    domain: 'Existing domain supported. .co.za available separately.',
    cta: 'Build my portfolio',
  },
  'landing-pages': {
    slug: 'landing-pages',
    name: 'Landing pages',
    intro:
      'One focused page built to turn attention into action.',
    price: 'R1,500',
    timeframe: '5\u201310 days',
    description:
      'Sometimes you do not need a full website \u2014 you need one sharp page that communicates a clear offer and drives action. Perfect for campaigns, product launches or single-service businesses.',
    features: [
      '1 professionally designed page',
      'Custom UI design',
      'Mobile-first responsive design',
      'Hero section',
      'About/service section',
      'Benefits/features section',
      'Call-to-action sections',
      'WhatsApp integration',
      'Contact form',
      'Social media links',
      'Basic SEO setup',
      'Image optimisation',
      'SSL',
      'Website deployment',
      'Basic performance optimisation',
      '1 revision round',
      '14 days minor post-launch support',
    ],
    domain: 'Domain not included. Client may use existing or purchase separately.',
    cta: 'Build my landing page',
  },
  'booking-websites': {
    slug: 'booking-websites',
    name: 'Booking websites',
    intro:
      'Make it simple for customers to enquire, schedule and show up.',
    price: 'R6,500',
    timeframe: '2\u20135 weeks',
    description:
      'For businesses that run on appointments, classes or consultations. We build booking experiences that make it effortless for customers to find you, understand your services and book.',
    features: [
      'Custom UI/UX design',
      'Service pages',
      'Staff/service information',
      'Booking/enquiry system',
      'Date and time selection',
      'Booking form',
      'Email notifications',
      'WhatsApp integration',
      'Mobile-first responsive design',
      'Basic admin/booking management',
      'Contact form',
      'Basic SEO',
      'Google Analytics setup',
      'Google Maps where applicable',
      'SSL',
      'Website deployment',
      'Performance optimisation',
      '2 revision rounds',
      '3 months minor post-launch support',
    ],
    domain: 'FREE .co.za domain \u2014 first year included',
    cta: 'Build my booking website',
  },
  'online-stores': {
    slug: 'online-stores',
    name: 'Online stores',
    intro:
      'A polished storefront for products, payments and growth.',
    price: 'R8,500',
    timeframe: '3\u20136 weeks',
    description:
      'Sell your products online with a store that looks professional, loads fast and makes checkout effortless. From product catalogues to payment gateways, we build e-commerce experiences ready for growth.',
    features: [
      'Custom e-commerce UI/UX',
      'Homepage',
      'Product catalogue',
      'Product categories',
      'Product pages',
      'Shopping cart',
      'Checkout',
      'Payment gateway integration',
      'Order management',
      'Mobile-first responsive design',
      'WhatsApp integration',
      'Contact form',
      'Basic SEO',
      'Google Analytics setup',
      'Google Search Console setup',
      'Image optimisation',
      'Performance optimisation',
      'SSL',
      'Website deployment',
      '2 revision rounds',
      '5 months minor post-launch support',
    ],
    domain: 'FREE .co.za domain \u2014 first year included',
    cta: 'Build my online store',
  },
  'custom-web-applications': {
    slug: 'custom-web-applications',
    name: 'Custom web applications',
    intro:
      'Purpose-built digital tools for the way your business works.',
    price: 'R10,000+',
    timeframe: '4\u20138+ weeks',
    description:
      'When your business needs more than a website, we build custom web applications \u2014 dashboards, portals, management systems and internal tools designed around your specific workflow.',
    features: [
      'Requirements analysis',
      'Custom UI/UX design',
      'Responsive interface',
      'Custom functionality',
      'Database architecture',
      'Authentication where required',
      'Admin functionality',
      'API integration',
      'Testing',
      'Deployment',
      'Basic documentation',
      'Project-specific support period',
    ],
    domain: 'Quoted individually based on requirements.',
    cta: 'Discuss my application',
  },
  'website-redesigns': {
    slug: 'website-redesigns',
    name: 'Website redesigns',
    intro:
      'A sharper, faster and more confident version of what you already have.',
    price: 'R2,500',
    timeframe: '1\u20133 weeks',
    description:
      'Your existing website may have served its purpose, but if it no longer reflects the quality of your business, it is time for a change. We redesign websites to be modern, fast and conversion-focused.',
    features: [
      'Existing website assessment',
      'UX/UI review',
      'Modern visual redesign',
      'Mobile responsiveness improvements',
      'Improved navigation',
      'Improved typography',
      'Improved spacing and layout',
      'Modernised branding implementation',
      'Performance improvements',
      'Basic SEO preservation/setup',
      'WhatsApp integration',
      'Contact form improvements',
      'Image optimisation',
      'SSL configuration',
      'Website deployment',
      '1\u20132 revision rounds',
      'Minor post-launch support',
    ],
    domain: 'Final price depends on number of pages, current technology and scope.',
    cta: 'Redesign my website',
  },
}

export interface PricingPackage {
  name: string
  price: string
  description: string
  timeframe: string
  popular?: boolean
  features: string[]
  href: string
}

export const packages: PricingPackage[] = [
  {
    name: 'Landing Page',
    price: 'R1,500',
    description:
      'Best for a focused campaign, product, service or single business offering.',
    timeframe: '5\u201310 days',
    features: [
      '1 professionally designed page',
      'Custom UI design',
      'Mobile-first responsive',
      'WhatsApp + contact form',
      'Basic SEO setup',
      'SSL + deployment',
      '1 revision round',
      '14 days support',
    ],
    href: '/services/landing-pages',
  },
  {
    name: 'Portfolio',
    price: 'From R2,000',
    description:
      'Best for students, professionals, creatives and personal brands.',
    timeframe: '7\u201315 days',
    features: [
      'Home, About, Skills, Projects, Contact',
      'CV download + social links',
      'Custom UI design',
      'Mobile-first responsive',
      'WhatsApp + contact form',
      'Basic SEO + deployment',
      '1 revision round',
      '14 days support',
    ],
    href: '/services/portfolio-websites',
  },
  {
    name: 'Starter',
    price: 'R2,500',
    description:
      'For individuals, freelancers and small businesses getting started.',
    timeframe: '7\u201315 days',
    features: [
      '1\u20133 pages',
      'Custom UI/UX design',
      'Mobile-first responsive',
      'WhatsApp + contact form',
      'Social media links',
      'Basic SEO + deployment',
      '1 revision round',
      '14 days support',
    ],
    href: '/start-a-project',
  },
  {
    name: 'Business',
    price: 'R4,500',
    description:
      'For established businesses ready for a stronger online presence.',
    timeframe: '2\u20133 weeks',
    popular: true,
    features: [
      'Up to 7 pages',
      'Custom UI/UX design',
      'Mobile-first responsive',
      'Google Maps + gallery',
      'Testimonials section',
      'SEO + analytics setup',
      'FREE .co.za domain (1 year)',
      '2 revision rounds',
      '3 months support',
    ],
    href: '/start-a-project',
  },
  {
    name: 'Professional',
    price: 'R7,500',
    description:
      'For businesses that want a premium, feature-rich experience.',
    timeframe: '2\u20135 weeks',
    features: [
      'Up to 10 pages',
      'Advanced UI/UX design',
      'Premium animations',
      'Blog/CMS functionality',
      'Advanced SEO foundations',
      'Conversion-focused structure',
      'FREE .co.za domain (1 year)',
      '3 revision rounds',
      '5 months support',
    ],
    href: '/start-a-project',
  },
  {
    name: 'Online Store',
    price: 'From R8,500',
    description:
      'For businesses that want to sell products online.',
    timeframe: '3\u20136 weeks',
    features: [
      'Custom e-commerce UI/UX',
      'Product catalogue + categories',
      'Cart + checkout',
      'Payment gateway integration',
      'Order management',
      'SEO + analytics setup',
      'FREE .co.za domain (1 year)',
      '2 revision rounds',
      '5 months support',
    ],
    href: '/services/online-stores',
  },
]

export const addons = [
  { name: 'Extra page', price: 'R500' },
  { name: 'Additional revision round', price: 'R300' },
  { name: 'Blog setup', price: 'From R1,000' },
  { name: 'Booking functionality', price: 'From R2,000' },
  { name: 'SEO enhancement', price: 'From R1,000' },
  { name: 'Google Business Profile setup', price: 'R500' },
  { name: 'Logo design', price: 'R500' },
  { name: 'Business email setup', price: 'From R500' },
  { name: 'Website redesign', price: 'From R2,500' },
  { name: 'E-commerce', price: 'From R8,500' },
  { name: 'Custom functionality', price: 'Quoted individually' },
]

export const maintenancePlans = [
  {
    name: 'Basic Care',
    price: 'R299',
    description: 'Suitable for small websites.',
    features: [
      'Basic website monitoring',
      'Minor content updates',
      'Minor bug fixes',
      'Basic technical checks',
      'Basic support',
    ],
  },
  {
    name: 'Business Care',
    price: 'R499',
    description: 'Suitable for active business websites.',
    features: [
      'Everything in Basic Care',
      'More minor content updates',
      'Performance checks',
      'Security checks',
      'More responsive support',
    ],
  },
  {
    name: 'Priority Care',
    price: 'R999',
    description: 'For businesses that rely heavily on their website.',
    features: [
      'Priority support',
      'More frequent website checks',
      'Minor content updates',
      'Performance checks',
      'Security checks',
      'Technical maintenance',
    ],
  },
]

export const faqs: [string, string][] = [
  [
    'How much does a website cost?',
    'Our websites start from R1,500 for a landing page and range up to R10,000+ for custom web applications. Final pricing depends on the number of pages, functionality, integrations and project requirements. A final quotation is always provided after reviewing your project.',
  ],
  [
    'How long does a website take?',
    'Most projects take between 5 days and 5 weeks, depending on the package, functionality and how quickly content is provided. We give you a clear estimate before work begins.',
  ],
  [
    'Do you provide the domain?',
    'Selected packages (Business, Professional, Booking and Online Store) include a free .co.za domain for the first year. The domain is registered in your name and belongs to you. Renewal fees apply from year two.',
  ],
  [
    'Do I own my website?',
    'Yes. Once the project is complete and final payment is received, you own your website and its content. The domain is also registered in your name.',
  ],
  [
    'Do I need hosting?',
    'Yes, websites need hosting to be accessible online. Depending on your package, initial hosting may be included. After the included period, hosting renewal fees apply. Third-party hosting costs are always disclosed upfront.',
  ],
  [
    'Can you redesign my existing website?',
    'Absolutely. We offer website redesign services starting from R2,500. We will assess your current site, identify improvements and build a modern, faster, more effective version.',
  ],
  [
    'Do you provide website maintenance?',
    'Yes, we offer optional monthly maintenance plans starting from R299/month. These cover minor updates, security checks, performance monitoring and support.',
  ],
  [
    'Can customers contact me through WhatsApp?',
    'Yes, WhatsApp integration is included in all our packages. We can add a WhatsApp button, link or floating widget so customers can reach you directly.',
  ],
  [
    'Can you set up online payments?',
    'Yes, we can integrate payment gateways for online stores and booking systems. Implementation costs depend on the payment provider and complexity.',
  ],
  [
    'Do you build online stores?',
    'Yes, we build custom e-commerce stores starting from R8,500. This includes product catalogues, shopping carts, checkout and payment gateway integration.',
  ],
  [
    'Can you build custom systems?',
    'Yes, we build custom web applications such as dashboards, client portals, booking management systems, inventory systems and internal business tools. Starting from R10,000, quoted individually.',
  ],
  [
    'What happens after I submit the form?',
    'We review your requirements, may contact you for clarification, then prepare a tailored quotation. Once approved and the deposit is paid, development begins. The typical flow is: Enquiry \u2192 Quote \u2192 Approval \u2192 Deposit \u2192 Development \u2192 Review \u2192 Launch.',
  ],
  [
    'How many revisions do I get?',
    'This depends on your package. Landing Page and Starter include 1 revision round, Business includes 2, and Professional includes 3. Additional rounds can be added at R300 each.',
  ],
  [
    'Do you write website content?',
    'Content is normally supplied by the client. We design and structure the content you provide. Content assistance may be available as an add-on service.',
  ],
]

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
      'Your website goes live. We handle deployment, DNS and final checks.',
  },
  {
    number: '08',
    title: 'Ongoing support',
    description:
      'Optional maintenance and support plans are available to keep your site running smoothly.',
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
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'roadwheels',
    title: 'RoadWheels',
    subtitle: 'A complete car rental platform with intuitive booking flows.',
    industry: 'Mobility',
    type: 'Full-stack web application',
    role: 'Full-stack developer · Solo project',
    description:
      'A complete car rental platform with intuitive booking flows, fleet management, and an admin dashboard. Built end to end with secure JWT authentication and a production-ready data layer.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT Auth'],
    liveUrl: 'https://roadwheelssa.vercel.app',
    codeUrl: 'https://github.com/MlungisiMahlangu/RoadWheels',
    cardBg: '#dce2ff',
    demo: false,
  },
  {
    slug: 'e-safetyrides',
    title: 'E-SafetyRides',
    subtitle: 'A safety-first platform helping riders check driver records.',
    industry: 'Safety',
    type: 'Team project',
    role: 'Full-stack developer',
    description:
      'A safety-first platform helping e-hailing riders check a driver\'s record history before getting in the car. Built collaboratively with a modular Route-Controller-Service architecture across auth, search, reports, and notifications.',
    technologies: ['React (Vite)', 'Node.js', 'Express', 'Firebase / Firestore'],
    liveUrl: 'https://e-safetyridessa.vercel.app',
    codeUrl: 'https://github.com/Ronzasa/E-SafetyRides',
    cardBg: '#16181d',
    demo: false,
  },
  {
    slug: 'grip-on',
    title: 'Grip On',
    subtitle: 'A gym-apparel concept storefront with clean product presentation.',
    industry: 'Retail',
    type: 'E-commerce frontend',
    role: 'Frontend developer · Solo project',
    description:
      'A gym-apparel concept storefront focused on clean product presentation and a smooth, responsive browsing experience from landing page to product discovery.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://mlungisimahlangu.github.io/grip-on-website',
    codeUrl: 'https://github.com/MlungisiMahlangu/grip-on-website',
    cardBg: '#f1e8d8',
    demo: false,
  },
  {
    slug: 'countryscope',
    title: 'CountryScope',
    subtitle: 'An interactive country explorer powered by REST API.',
    industry: 'Education',
    type: 'Web application',
    role: 'Frontend developer · Solo project',
    description:
      'An interactive country explorer that uses a REST API for filtering, searching and navigating between countries with a responsive, data-driven UI.',
    technologies: ['JavaScript', 'REST API', 'Responsive UI'],
    liveUrl: 'https://mlungisimahlangu.github.io/CountryScope',
    codeUrl: 'https://github.com/MlungisiMahlangu/CountryScope',
    cardBg: '#dce2ff',
    demo: false,
  },
]

export const comparisonFeatures = [
  { feature: 'Custom design', landing: true, portfolio: true, starter: true, business: true, professional: true },
  { feature: 'Responsive design', landing: true, portfolio: true, starter: true, business: true, professional: true },
  { feature: 'WhatsApp integration', landing: true, portfolio: true, starter: true, business: true, professional: true },
  { feature: 'Contact form', landing: true, portfolio: true, starter: true, business: true, professional: true },
  { feature: 'Basic SEO', landing: true, portfolio: true, starter: true, business: true, professional: true },
  { feature: 'Google Maps', landing: false, portfolio: false, starter: false, business: true, professional: true },
  { feature: 'Image gallery', landing: false, portfolio: true, starter: false, business: true, professional: true },
  { feature: 'Google Analytics', landing: false, portfolio: false, starter: false, business: true, professional: true },
  { feature: 'Google Search Console', landing: false, portfolio: false, starter: false, business: true, professional: true },
  { feature: 'Google Business Profile', landing: false, portfolio: false, starter: false, business: true, professional: true },
  { feature: 'Blog/CMS', landing: false, portfolio: false, starter: false, business: 'Optional', professional: true },
  { feature: 'Performance optimisation', landing: 'Basic', portfolio: 'Basic', starter: 'Basic', business: true, professional: 'Advanced' },
  { feature: '.co.za domain', landing: false, portfolio: false, starter: 'Optional', business: '1 Year Free', professional: '1 Year Free' },
  { feature: 'Revisions', landing: '1', portfolio: '1', starter: '1', business: '2', professional: '3' },
  { feature: 'Support', landing: '14 days', portfolio: '14 days', starter: '14 days', business: '3 months', professional: '5 months' },
]

export const enquiryServiceOptions = [
  'Business Website',
  'Portfolio Website',
  'Landing Page',
  'Online Store',
  'Booking Website',
  'Website Redesign',
  'Custom Web Application',
  'Not Sure Yet',
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
  'Under R2,500',
  'R2,500\u2013R5,000',
  'R5,000\u2013R10,000',
  'R10,000\u2013R20,000',
  'R20,000+',
  'Not sure',
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
