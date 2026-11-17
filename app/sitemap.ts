import type { MetadataRoute } from 'next'
import { SITE_URL, blogArticles } from '@/lib/constants'
import { publicRoutes } from '@/lib/routes'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = publicRoutes.map((route) => ({
    url: `${SITE_URL}${route.path === '/' ? '/' : route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const blogPages = blogArticles.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt ?? article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...pages, ...blogPages]
}
