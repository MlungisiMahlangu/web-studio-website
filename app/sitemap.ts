import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: '', lastMod: '2026-01-09', priority: 1.0 },
    { url: '/services', lastMod: '2026-01-09', priority: 0.9 },
    { url: '/services/business-websites', lastMod: '2026-01-09', priority: 0.8 },
    { url: '/services/portfolio-websites', lastMod: '2026-01-09', priority: 0.8 },
    { url: '/services/landing-pages', lastMod: '2026-01-09', priority: 0.8 },
    { url: '/services/booking-websites', lastMod: '2026-01-09', priority: 0.8 },
    { url: '/services/online-stores', lastMod: '2026-01-09', priority: 0.8 },
    { url: '/services/custom-web-applications', lastMod: '2026-01-09', priority: 0.8 },
    { url: '/services/website-redesigns', lastMod: '2026-01-09', priority: 0.8 },
    { url: '/pricing', lastMod: '2026-01-09', priority: 0.9 },
    { url: '/work', lastMod: '2026-01-09', priority: 0.8 },
    { url: '/work/roadwheels', lastMod: '2026-01-09', priority: 0.6 },
    { url: '/work/e-safetyrides', lastMod: '2026-01-09', priority: 0.6 },
    { url: '/work/grip-on', lastMod: '2026-01-09', priority: 0.6 },
    { url: '/work/countryscope', lastMod: '2026-01-09', priority: 0.6 },
    { url: '/about', lastMod: '2026-01-09', priority: 0.7 },
    { url: '/process', lastMod: '2026-01-09', priority: 0.7 },
    { url: '/faq', lastMod: '2026-01-09', priority: 0.6 },
    { url: '/contact', lastMod: '2026-01-09', priority: 0.8 },
    { url: '/privacy-policy', lastMod: '2026-01-09', priority: 0.3 },
    { url: '/terms-and-conditions', lastMod: '2026-01-09', priority: 0.3 },
    { url: '/cookie-policy', lastMod: '2026-01-09', priority: 0.3 },
    { url: '/refund-cancellation-policy', lastMod: '2026-01-09', priority: 0.3 },
  ]

  return staticPages.map((page) => ({
    url: `${SITE_URL}${page.url}`,
    lastModified: new Date(page.lastMod),
    changeFrequency: 'monthly',
    priority: page.priority,
  }))
}
