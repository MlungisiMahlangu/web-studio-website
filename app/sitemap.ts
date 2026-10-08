import type { MetadataRoute } from 'next'
import { STUDIO_NAME } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://studiowebsite.co.za'

  const staticPages = [
    '',
    '/services',
    '/services/business-websites',
    '/services/portfolio-websites',
    '/services/landing-pages',
    '/services/booking-websites',
    '/services/online-stores',
    '/services/custom-web-applications',
    '/services/website-redesigns',
    '/pricing',
    '/work',
    '/work/luxe-cuts',
    '/work/mkhize-construction',
    '/work/urbanwear',
    '/work/thando-photography',
    '/work/johannesburg-fitness',
    '/about',
    '/process',
    '/faq',
    '/contact',
    '/start-a-project',
    '/privacy-policy',
    '/terms-and-conditions',
    '/cookie-policy',
    '/refund-cancellation-policy',
  ]

  return staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page === '' ? 1 : page.startsWith('/services') ? 0.8 : 0.5,
  }))
}
