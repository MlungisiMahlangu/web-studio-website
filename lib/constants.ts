import {
  Globe2,
  PenTool,
  Sparkles,
  Compass,
  Layers3,
  Code2,
  Paintbrush,
  Palette,
  Briefcase,
  BarChart3,
  Rocket,
  Layout,
  MessageSquare,
  Calendar,
  ShoppingCart,
  Search,
  Users,
  type LucideIcon,
} from 'lucide-react'

export const STUDIO_NAME = 'WEB-IN'
export const STUDIO_TAGLINE = 'Built for your business. Designed for the web.'
export const STUDIO_DESCRIPTION =
  'WEB-IN is an independent web development studio based in South Africa, creating modern websites and web solutions for small businesses, professionals, entrepreneurs and growing brands.'
export const STUDIO_EMAIL = 'shaunmlungisi4@gmail.com'
export const STUDIO_PHONE = '+27 64 953 1145'
export const STUDIO_WHATSAPP = '27649531145'
export const STUDIO_LOCATION = 'South Africa'
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id'

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
    price: 'From R4,500',
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
    price: 'From R10,000',
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

export interface FeatureGroup {
  title: string
  icon: LucideIcon
  items: string[]
}

export interface ServiceDetail {
  slug: string
  name: string
  intro: string
  price: string
  timeframe: string
  description: string
  whyUs: string
  featureGroups: FeatureGroup[]
  idealFor: string[]
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
    whyUs:
      'A great business website does more than look good \u2014 it earns trust in the first few seconds, answers the questions your customers actually have, and guides them toward calling, emailing or booking you. We design every page with that outcome in mind.',
    featureGroups: [
      {
        title: 'Design & Experience',
        icon: Palette,
        items: [
          'Up to 7 pages',
          'Custom UI/UX design',
          'Mobile-first responsive design',
          'Professional navigation',
          'Custom branded sections',
        ],
      },
      {
        title: 'Business Essentials',
        icon: Briefcase,
        items: [
          'WhatsApp integration',
          'Contact form',
          'Google Maps integration',
          'Image gallery',
          'Testimonials section',
          'Social media integration',
        ],
      },
      {
        title: 'Visibility & Performance',
        icon: BarChart3,
        items: [
          'Basic SEO setup',
          'Google Analytics setup',
          'Google Search Console setup',
          'Google Business Profile setup assistance',
          'Image optimisation',
          'Performance optimisation',
        ],
      },
      {
        title: 'Launch & Support',
        icon: Rocket,
        items: [
          'SSL',
          'Website deployment',
          '2 revision rounds',
          '3 months minor post-launch support',
        ],
      },
    ],
    idealFor: [
      'Small and medium businesses ready for a credible online presence',
      'Service providers who want customers to find and contact them easily',
      'Companies outgrowing a social-media-only presence',
      'Brands that need a professional home for testimonials, galleries and case studies',
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
    whyUs:
      'Your portfolio is often the first thing a recruiter, client or collaborator sees. We make sure it loads fast, reads clearly and leaves a strong impression \u2014 so the work speaks for itself and opportunities come to you.',
    featureGroups: [
      {
        title: 'Portfolio Structure',
        icon: Layout,
        items: [
          'Home, About, Skills/Services, Projects, Contact',
          'CV/Resume download',
          'Custom page layout',
        ],
      },
      {
        title: 'Online Presence',
        icon: Users,
        items: [
          'GitHub integration',
          'LinkedIn integration',
          'Social media links',
          'Contact form',
          'WhatsApp integration',
        ],
      },
      {
        title: 'Design & Performance',
        icon: Palette,
        items: [
          'Custom UI design',
          'Mobile-first responsive design',
          'Basic SEO setup',
          'Image optimisation',
          'Basic performance optimisation',
        ],
      },
      {
        title: 'Launch & Support',
        icon: Rocket,
        items: [
          'SSL',
          'Deployment',
          '1 revision round',
          '14 days minor post-launch support',
        ],
      },
    ],
    idealFor: [
      'Students and graduates entering the job market',
      'Developers, designers and creatives showcasing their work',
      'Freelancers and consultants building a personal brand',
      'Professionals who want a polished alternative to LinkedIn alone',
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
    whyUs:
      'A well-built landing page removes every distraction between your visitor and the action you want them to take. We design each section to build momentum \u2014 from the first headline to the final call-to-action \u2014 so visitors convert instead of bounce.',
    featureGroups: [
      {
        title: 'Page Structure',
        icon: Layout,
        items: [
          '1 professionally designed page',
          'Hero section',
          'About/service section',
          'Benefits/features section',
          'Call-to-action sections',
        ],
      },
      {
        title: 'Engagement',
        icon: MessageSquare,
        items: [
          'WhatsApp integration',
          'Contact form',
          'Social media links',
        ],
      },
      {
        title: 'Design & Performance',
        icon: Palette,
        items: [
          'Custom UI design',
          'Mobile-first responsive design',
          'Basic SEO setup',
          'Image optimisation',
          'Basic performance optimisation',
        ],
      },
      {
        title: 'Launch & Support',
        icon: Rocket,
        items: [
          'SSL',
          'Website deployment',
          '1 revision round',
          '14 days minor post-launch support',
        ],
      },
    ],
    idealFor: [
      'Businesses running a specific campaign or promotion',
      'Product launches that need a focused, high-converting page',
      'Single-service providers who want a fast online presence',
      'Event pages, waitlists and lead-capture campaigns',
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
    whyUs:
      'Every missed booking is lost revenue. We build scheduling experiences that remove friction \u2014 clear service pages, intuitive date selection, instant confirmations \u2014 so customers can go from discovery to booked in under a minute.',
    featureGroups: [
      {
        title: 'Design & Experience',
        icon: Palette,
        items: [
          'Custom UI/UX design',
          'Service pages',
          'Staff/service information',
          'Mobile-first responsive design',
        ],
      },
      {
        title: 'Booking System',
        icon: Calendar,
        items: [
          'Booking/enquiry system',
          'Date and time selection',
          'Booking form',
          'Email notifications',
          'Basic admin/booking management',
        ],
      },
      {
        title: 'Business Essentials',
        icon: Briefcase,
        items: [
          'WhatsApp integration',
          'Contact form',
          'Google Maps where applicable',
        ],
      },
      {
        title: 'Visibility & Performance',
        icon: BarChart3,
        items: [
          'Basic SEO',
          'Google Analytics setup',
          'Performance optimisation',
        ],
      },
      {
        title: 'Launch & Support',
        icon: Rocket,
        items: [
          'SSL',
          'Website deployment',
          '2 revision rounds',
          '3 months minor post-launch support',
        ],
      },
    ],
    idealFor: [
      'Salons, barbershops and beauty studios',
      'Consultants, coaches and therapists',
      'Tutors, trainers and class providers',
      'Any business that runs on appointments and needs online scheduling',
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
    whyUs:
      'An online store lives or dies by how easily customers can find products and complete a purchase. We build stores that feel premium, load fast and make checkout frictionless \u2014 so you can focus on your products while your store handles the selling.',
    featureGroups: [
      {
        title: 'Storefront Design',
        icon: Layout,
        items: [
          'Custom e-commerce UI/UX',
          'Homepage',
          'Product catalogue',
          'Product categories',
          'Product pages',
        ],
      },
      {
        title: 'Shopping Experience',
        icon: ShoppingCart,
        items: [
          'Shopping cart',
          'Checkout',
          'Payment gateway integration',
          'Order management',
        ],
      },
      {
        title: 'Business Essentials',
        icon: Briefcase,
        items: [
          'WhatsApp integration',
          'Contact form',
          'Mobile-first responsive design',
        ],
      },
      {
        title: 'Visibility & Performance',
        icon: BarChart3,
        items: [
          'Basic SEO',
          'Google Analytics setup',
          'Google Search Console setup',
          'Image optimisation',
          'Performance optimisation',
        ],
      },
      {
        title: 'Launch & Support',
        icon: Rocket,
        items: [
          'SSL',
          'Website deployment',
          '2 revision rounds',
          '5 months minor post-launch support',
        ],
      },
    ],
    idealFor: [
      'Brands ready to sell products directly online',
      'Businesses moving from WhatsApp or Instagram orders to a proper store',
      'Artisans and makers expanding their reach beyond physical markets',
      'Companies that want full control over their product catalogue and checkout',
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
    whyUs:
      'Off-the-shelf tools rarely fit perfectly. We build applications around your actual workflow \u2014 not the other way around. Every screen, every interaction is designed for the people who use it daily, so your team works faster and with fewer workarounds.',
    featureGroups: [
      {
        title: 'Discovery & Design',
        icon: Search,
        items: [
          'Requirements analysis',
          'Custom UI/UX design',
          'Responsive interface',
        ],
      },
      {
        title: 'Development',
        icon: Code2,
        items: [
          'Custom functionality',
          'Database architecture',
          'Authentication where required',
          'Admin functionality',
          'API integration',
        ],
      },
      {
        title: 'Delivery',
        icon: Rocket,
        items: [
          'Testing',
          'Deployment',
          'Basic documentation',
          'Project-specific support period',
        ],
      },
    ],
    idealFor: [
      'Businesses that have outgrown spreadsheets and manual processes',
      'Teams that need internal dashboards, portals or management tools',
      'Companies with specific workflows that off-the-shelf software cannot handle',
      'Founders building a product or platform that needs custom development',
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
    whyUs:
      'A redesign is not just a fresh coat of paint. We look at what is working, what is not and where your visitors are dropping off \u2014 then rebuild with better design, cleaner code and a structure that actually moves people toward taking action.',
    featureGroups: [
      {
        title: 'Assessment',
        icon: Search,
        items: [
          'Existing website assessment',
          'UX/UI review',
        ],
      },
      {
        title: 'Visual Design',
        icon: Paintbrush,
        items: [
          'Modern visual redesign',
          'Modernised branding implementation',
          'Improved typography',
          'Improved spacing and layout',
        ],
      },
      {
        title: 'Technical Improvements',
        icon: Code2,
        items: [
          'Mobile responsiveness improvements',
          'Performance improvements',
          'Improved navigation',
          'Image optimisation',
        ],
      },
      {
        title: 'Business Essentials',
        icon: Briefcase,
        items: [
          'Basic SEO preservation/setup',
          'WhatsApp integration',
          'Contact form improvements',
        ],
      },
      {
        title: 'Launch & Support',
        icon: Rocket,
        items: [
          'SSL configuration',
          'Website deployment',
          '1\u20132 revision rounds',
          'Minor post-launch support',
        ],
      },
    ],
    idealFor: [
      'Businesses with an outdated website that no longer reflects their brand',
      'Websites that are slow, not mobile-friendly or hard to navigate',
      'Companies rebranding and needing their digital presence to catch up',
      'Anyone who is embarrassed to share their current website URL',
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
    href: '/contact?service=Landing%20Page',
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
    href: '/contact?service=Business%20Website',
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
    href: '/contact?service=Starter%20Website',
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
    href: '/contact?service=Portfolio%20Website',
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
    href: '/contact?service=Professional%20Website',
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
    href: '/contact?service=Online%20Store',
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
      'Once the website has been reviewed and approved, we prepare everything for launch. We handle the agreed deployment, domain/DNS configuration and final production checks before taking the website live.',
    items: [
      { title: 'Final checks', description: 'Everything is reviewed before launch.' },
      { title: 'Deployment', description: 'The website is moved into its production environment.' },
      { title: 'Launch', description: 'The website goes live.' },
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
    'Will you handle the domain and hosting?',
    'Where included in the selected package or agreed scope, WEB-IN can assist with the relevant setup. Third-party renewal and subscription costs are separate unless explicitly included.',
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
    id: 'getting-started',
    number: '01',
    label: 'GETTING STARTED',
    heading: 'Starting a project',
    intro: 'Everything you need to know before your first enquiry.',
    items: [
      {
        question: 'What happens after I submit the project enquiry?',
        answer: 'Once you submit the enquiry, we review the information you\'ve provided to understand your goals, requirements, budget and timeline. If we need clarification, we\'ll get in touch. From there, we can determine the appropriate scope and discuss the best way forward.',
      },
      {
        question: 'Do I need to know exactly what I want before contacting you?',
        answer: 'No. You can give us as much or as little information as you currently have. The initial conversation is an opportunity to explain what you\'re trying to achieve. We can help clarify the website type, functionality and direction based on your requirements.',
      },
      {
        question: 'How do I get a quote?',
        answer: 'Start by submitting the project enquiry. We review your requirements and use the information provided to determine the appropriate project scope and quotation. The final price depends on the scope, functionality, content, integrations and other project requirements.',
      },
      {
        question: 'Can I contact WEB-IN before submitting the form?',
        answer: 'Yes. If you have questions before starting, you can contact us through the contact page or WhatsApp.',
      },
    ],
  },
  {
    id: 'pricing-payments',
    number: '02',
    label: 'PRICING & PAYMENTS',
    heading: 'Understanding the investment',
    intro: 'Transparent pricing with no hidden surprises.',
    items: [
      {
        question: 'How much does a website cost?',
        answer: 'Our website packages start from R1,500, depending on the type and scope of the project.\n\nLanding Page — R1,500\nPortfolio Website — from R2,000\nStarter Website — R2,500\nBusiness Website — R4,500\nProfessional Website — R7,500\nBooking Website — from R6,500\nOnline Store — from R8,500\nCustom Web Application — from R10,000\nWebsite Redesign — from R2,500\n\nPrices are based on the described package scope. Projects requiring additional functionality, integrations, pages, content, payment systems or custom development may have a different final price.',
      },
      {
        question: 'Is the price fixed?',
        answer: 'Package prices are based on the scope described on the pricing page. If your project requires additional functionality, pages, integrations or custom requirements, the final quotation may differ. We confirm the agreed scope before development begins.',
      },
      {
        question: 'When do I pay?',
        answer: 'The required deposit is paid after the project scope and quotation have been approved and before development begins. The exact payment arrangement is communicated as part of the project quotation.',
      },
      {
        question: 'Are there any additional costs?',
        answer: 'Some third-party services may have separate costs. Examples include domain renewals, hosting renewals, payment processing fees, business email subscriptions, premium plugins or services, and external software subscriptions. Any relevant third-party costs are communicated as part of the project scope where applicable.',
      },
    ],
    cta: { text: 'View Full Pricing', href: '/pricing' },
  },
  {
    id: 'website-hosting',
    number: '03',
    label: 'WEBSITE & INFRASTRUCTURE',
    heading: 'The things behind the website',
    intro: 'Domains, hosting, ownership and the technical foundations.',
    items: [
      {
        question: 'Do you provide the domain?',
        answer: 'For selected packages, WEB-IN includes a .co.za domain for the first year. This currently applies to Business Website, Professional Website, Booking Website and Online Store.\n\nThe domain is owned by the client. Domain availability is required, and premium or previously registered domains may have additional costs. From the second year, domain renewal fees apply.',
      },
      {
        question: 'Do I own my website?',
        answer: 'Yes. The website belongs to the client once the project has been completed and paid for according to the agreed terms. Where WEB-IN manages domain or hosting services, the client remains the owner of their website and domain.',
      },
      {
        question: 'Do I need hosting?',
        answer: 'Yes, a website needs somewhere to run. Hosting requirements depend on the type of website and technology used. Where hosting is included or arranged as part of a package, the relevant terms will be communicated clearly. Third-party hosting renewal costs may apply after any included period.',
      },
      {
        question: 'Can I use a domain I already own?',
        answer: 'Yes. If you already have a domain, we can work with the existing domain and assist with the relevant configuration.',
      },
      {
        question: 'Can you help me set up business email?',
        answer: 'Yes. WEB-IN can assist with setting up professional email such as hello@yourbusiness.co.za. Business email setup is available as an optional service. The email provider\'s subscription costs are separate.',
      },
    ],
  },
  {
    id: 'design-development',
    number: '04',
    label: 'DESIGN & DEVELOPMENT',
    heading: 'What we can build',
    intro: 'From landing pages to custom systems.',
    items: [
      {
        question: 'Can you redesign my existing website?',
        answer: 'Yes. WEB-IN offers website redesign services. We can review the existing website and improve areas such as visual design, layout, navigation, mobile responsiveness, typography, user experience, performance and content structure. The final price depends on the size of the existing website and the scope of the redesign.',
      },
      {
        question: 'Do you build online stores?',
        answer: 'Yes. WEB-IN offers online store development from R8,500. Depending on the project, an online store can include a product catalogue, product pages, categories, shopping cart, checkout, payment gateway integration, order management and mobile-responsive design.\n\nThe final price depends on the number of products, variations, payment provider, shipping requirements and other functionality. Third-party payment processing fees are separate.',
      },
      {
        question: 'Can you set up online payments?',
        answer: 'Yes. Where appropriate, we can integrate online payment functionality into websites and online stores. The specific payment provider depends on the project and requirements. Payment providers may charge their own transaction or subscription fees, which are separate from WEB-IN\'s development fee.',
      },
      {
        question: 'Can customers contact me through WhatsApp?',
        answer: 'Yes. WhatsApp integration can be included where appropriate. This can allow visitors to contact a business directly from the website.',
      },
      {
        question: 'Can you build booking websites?',
        answer: 'Yes. WEB-IN offers booking websites from R6,500. Depending on the requirements, booking functionality can include services, staff/service information, date and time selection, booking forms, notifications and booking management.\n\nMore advanced requirements such as automated reminders, payments, customer accounts, recurring bookings or staff calendars may increase the project cost.',
      },
      {
        question: 'Can you build custom systems?',
        answer: 'Yes. WEB-IN offers custom web applications from R10,000. Examples include dashboards, client portals, inventory systems, school systems, employee portals, membership platforms, booking management, customer management, internal tools, reporting dashboards, custom databases and automation.\n\nCustom application pricing depends heavily on the required features, users, database architecture, authentication, APIs, integrations, administration and security requirements.',
      },
    ],
    cta: { text: 'Explore Booking Websites', href: '/services/booking-websites' },
  },
  {
    id: 'content-collaboration',
    number: '05',
    label: 'CONTENT & COLLABORATION',
    heading: 'What we need from you',
    intro: 'How we work together to build your website.',
    items: [
      {
        question: 'Do you write website content?',
        answer: 'Content requirements depend on the project. WEB-IN can structure and present the content on the website, but full professional copywriting or content creation is not automatically included unless specifically agreed. If you need help with content, we can discuss the requirements and scope it appropriately.',
      },
      {
        question: 'Do I need to provide images?',
        answer: 'Where the project requires business-specific images, logos, product photography or other brand assets, the client may need to provide them. We can optimise website imagery for performance. If additional design assets or image creation are required, they can be discussed separately.',
      },
      {
        question: 'Can you help if I don\'t have a logo?',
        answer: 'Yes. Logo design is available as an optional add-on.',
      },
    ],
  },
  {
    id: 'review-revisions',
    number: '06',
    label: 'REVIEW & REVISIONS',
    heading: 'Your feedback matters',
    intro: 'How we refine the website together.',
    items: [
      {
        question: 'How many revisions do I get?',
        answer: 'Revision rounds depend on the package selected.\n\nLanding Page — 1 revision round\nPortfolio Website — 1 revision round\nStarter Website — 1 revision round\nBusiness Website — 2 revision rounds\nProfessional Website — 3 revision rounds\nBooking Website — 2 revision rounds\nOnline Store — 2 revision rounds\nWebsite Redesign — 1–2 revision rounds depending on scope\n\nThe exact revision allowance is shown on the relevant package.',
      },
      {
        question: 'What counts as a revision?',
        answer: 'A revision is feedback or changes to the agreed website scope and design during the review stage. New pages, major new functionality, redesigning an approved direction or significant changes outside the agreed scope may require additional work. This is communicated clearly rather than making the client feel restricted.',
      },
    ],
  },
  {
    id: 'after-launch',
    number: '07',
    label: 'AFTER LAUNCH',
    heading: 'What happens after the website goes live?',
    intro: 'Support and maintenance options for the long run.',
    items: [
      {
        question: 'Do you provide website maintenance?',
        answer: 'Yes. WEB-IN offers optional maintenance plans for businesses that want ongoing support.\n\nBasic Care — R299/month\nBusiness Care — R499/month\nPriority Care — R999/month\n\nMaintenance can include things such as minor content updates, minor fixes, technical checks, performance and security checks, and ongoing support.\n\nMaintenance does not automatically include new pages, major redesigns, new systems, payment integrations or substantial new functionality. Those requirements can be quoted separately.',
      },
      {
        question: 'Do I get support after launch?',
        answer: 'Selected packages include a defined period of minor post-launch support. The duration depends on the package. For longer-term support, optional maintenance plans are available.',
      },
    ],
    cta: { text: 'View Maintenance Plans', href: '/pricing' },
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
  'Starter Website',
  'Professional Website',
  'Online Store',
  'Booking Website',
  'Website Redesign',
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
