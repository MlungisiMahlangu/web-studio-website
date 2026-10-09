import type { MetadataRoute } from 'next'
import { SITE_URL, LAST_UPDATED, blogArticles } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: '', priority: 1.0 },
    { url: '/services', priority: 0.9 },
    { url: '/services/business-websites', priority: 0.8 },
    { url: '/services/portfolio-websites', priority: 0.8 },
    { url: '/services/landing-pages', priority: 0.8 },
    { url: '/services/booking-websites', priority: 0.8 },
    { url: '/services/online-stores', priority: 0.8 },
    { url: '/services/custom-web-applications', priority: 0.8 },
    { url: '/services/website-redesigns', priority: 0.8 },
    { url: '/pricing', priority: 0.9 },
    { url: '/work', priority: 0.8 },
    { url: '/work/roadwheels', priority: 0.6 },
    { url: '/work/e-safetyrides', priority: 0.6 },
    { url: '/work/grip-on', priority: 0.6 },
    { url: '/work/countryscope', priority: 0.6 },
    { url: '/about', priority: 0.7 },
    { url: '/process', priority: 0.7 },
    { url: '/faq', priority: 0.6 },
    { url: '/contact', priority: 0.8 },
    { url: '/privacy-policy', priority: 0.3 },
    { url: '/terms-and-conditions', priority: 0.3 },
    { url: '/cookie-policy', priority: 0.3 },
    { url: '/refund-cancellation-policy', priority: 0.3 },
    { url: '/blog', priority: 0.7 },
  ]

  const blogPages = blogArticles.map((article) => ({
    url: `/blog/${article.slug}`,
    lastMod: article.updatedAt ?? article.publishedAt,
    priority: 0.6,
  }))

  return [
    ...staticPages.map((page) => ({
      url: `${SITE_URL}${page.url}`,
      lastModified: new Date(LAST_UPDATED),
      changeFrequency: 'monthly' as const,
      priority: page.priority,
    })),
    ...blogPages.map((page) => ({
      url: `${SITE_URL}${page.url}`,
      lastModified: new Date(page.lastMod),
      changeFrequency: 'monthly' as const,
      priority: page.priority,
    })),
  ]
}
