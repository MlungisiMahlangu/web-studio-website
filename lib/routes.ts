import { CONTENT_UPDATED, LAST_UPDATED } from './constants'

export interface PublicRoute {
  path: string
  priority: number
  changeFrequency: 'weekly' | 'monthly' | 'yearly'
  lastModified: string
  title: string
  description: string
}

// Every indexable page. Used by the sitemap, llms.txt and the consistency check.
// Never add /contact/thank-you: it is noindex by design.
export const publicRoutes: PublicRoute[] = [
  {
    path: '/',
    priority: 1.0,
    changeFrequency: 'weekly',
    lastModified: LAST_UPDATED,
    title: 'Website design and development in Johannesburg',
    description:
      'WEB-IN builds business websites, online stores and web applications for South African businesses, with prices from R2,500.',
  },
  {
    path: '/pricing',
    priority: 0.9,
    changeFrequency: 'weekly',
    lastModified: LAST_UPDATED,
    title: 'Services and pricing',
    description:
      'The full WEB-IN price list: Starter Website R2,500, Business Website from R4,000, Online Store from R7,000, Website Redesign from R2,500, Custom Web Application from R10,000, plus add-ons and monthly maintenance.',
  },
  {
    path: '/work',
    priority: 0.8,
    changeFrequency: 'monthly',
    lastModified: CONTENT_UPDATED,
    title: 'Selected work',
    description: 'Live websites and web applications designed and built by WEB-IN.',
  },
  {
    path: '/website-design-johannesburg',
    priority: 0.75,
    changeFrequency: 'monthly',
    lastModified: CONTENT_UPDATED,
    title: 'Website design in Johannesburg',
    description:
      'Website design and development for Johannesburg businesses, from starter sites to online stores and custom applications.',
  },
  {
    path: '/web-development-south-africa',
    priority: 0.75,
    changeFrequency: 'monthly',
    lastModified: CONTENT_UPDATED,
    title: 'Web development in South Africa',
    description:
      'Custom web development for South African businesses: business websites, online stores and web applications built to last.',
  },
  {
    path: '/ecommerce-website-south-africa',
    priority: 0.75,
    changeFrequency: 'monthly',
    lastModified: CONTENT_UPDATED,
    title: 'Ecommerce websites in South Africa',
    description:
      'Online store development for South African businesses, with local payment gateways and mobile-first checkout.',
  },
  {
    path: '/affordable-website-design-south-africa',
    priority: 0.7,
    changeFrequency: 'monthly',
    lastModified: CONTENT_UPDATED,
    title: 'Affordable website design in South Africa',
    description:
      'Affordable website design with clear scope and honest pricing, starting at R2,500.',
  },
  {
    path: '/website-redesign-south-africa',
    priority: 0.75,
    changeFrequency: 'monthly',
    lastModified: CONTENT_UPDATED,
    title: 'Website redesign in South Africa',
    description:
      'Website redesign for South African businesses: keep working content, rebuild the design, speed and mobile experience.',
  },
  {
    path: '/website-cost-south-africa',
    priority: 0.75,
    changeFrequency: 'monthly',
    lastModified: LAST_UPDATED,
    title: 'What a website costs in South Africa',
    description:
      'Website prices in South Africa, what each package includes and the factors that change the final cost.',
  },
  {
    path: '/about',
    priority: 0.7,
    changeFrequency: 'monthly',
    lastModified: CONTENT_UPDATED,
    title: 'About WEB-IN',
    description:
      'Who WEB-IN is, where the studio is based, what it builds and how it works.',
  },
  {
    path: '/process',
    priority: 0.6,
    changeFrequency: 'monthly',
    lastModified: CONTENT_UPDATED,
    title: 'How the process works',
    description:
      'The four WEB-IN project phases: discover, define, create and launch.',
  },
  {
    path: '/faq',
    priority: 0.6,
    changeFrequency: 'monthly',
    lastModified: CONTENT_UPDATED,
    title: 'Frequently asked questions',
    description:
      'Answers about website costs, timelines, ownership, payments and maintenance in South Africa.',
  },
  {
    path: '/blog',
    priority: 0.7,
    changeFrequency: 'weekly',
    lastModified: CONTENT_UPDATED,
    title: 'Blog',
    description:
      'Practical guides about website design, development costs and online presence for South African businesses.',
  },
  {
    path: '/contact',
    priority: 0.8,
    changeFrequency: 'monthly',
    lastModified: CONTENT_UPDATED,
    title: 'Contact',
    description:
      'Request a website quote from WEB-IN in Johannesburg, South Africa.',
  },
  {
    path: '/privacy-policy',
    priority: 0.3,
    changeFrequency: 'yearly',
    lastModified: CONTENT_UPDATED,
    title: 'Privacy policy',
    description: 'How WEB-IN collects, uses and protects personal information.',
  },
  {
    path: '/terms-and-conditions',
    priority: 0.3,
    changeFrequency: 'yearly',
    lastModified: CONTENT_UPDATED,
    title: 'Terms and conditions',
    description: 'The terms that apply when working with WEB-IN.',
  },
  {
    path: '/cookie-policy',
    priority: 0.3,
    changeFrequency: 'yearly',
    lastModified: CONTENT_UPDATED,
    title: 'Cookie policy',
    description: 'How WEB-IN uses cookies on its website.',
  },
  {
    path: '/refund-cancellation-policy',
    priority: 0.3,
    changeFrequency: 'yearly',
    lastModified: CONTENT_UPDATED,
    title: 'Refund and cancellation policy',
    description: 'WEB-IN refund and cancellation terms.',
  },
]

export function routeFor(path: string): PublicRoute | undefined {
  return publicRoutes.find((route) => route.path === path)
}
