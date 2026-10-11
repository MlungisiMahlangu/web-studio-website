import type { MetadataRoute } from 'next'
import { SITE_URL, LAST_UPDATED, blogArticles } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: '', priority: 1.0 },
    { url: '/pricing', priority: 0.9 },
    { url: '/work', priority: 0.8 },
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
