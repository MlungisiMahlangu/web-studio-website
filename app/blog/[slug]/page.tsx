import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { blogArticles, SITE_URL, STUDIO_NAME } from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { PageHero } from '@/components/ui/page-hero'
import { CTABand } from '@/components/ui/cta-band'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/ui/reveal'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

function getArticle(slug: string) {
  return blogArticles.find((a) => a.slug === slug)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: 'Not Found' }

  return {
    title: `${article.title} | ${STUDIO_NAME} Blog`,
    description: article.description,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      url: `${SITE_URL}/blog/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }))
}

function renderContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let currentList: string[] = []
  let key = 0

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-2 text-body mb-6">
          {currentList.map((item, i) => (
            <li key={i}>{formatInline(item)}</li>
          ))}
        </ul>
      )
      currentList = []
    }
  }

  const formatInline = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-navy font-semibold">{part.slice(2, -2)}</strong>
      }
      const linkParts = part.split(/(\[[^\]]+\]\([^)]+\))/g)
      return linkParts.map((segment, j) => {
        const match = segment.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (match) {
          return <Link key={`${i}-${j}`} href={match[2]} className="text-brand hover:underline">{match[1]}</Link>
        }
        return segment
      })
    })
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) {
      flushList()
      continue
    }

    if (line.startsWith('## ')) {
      flushList()
      elements.push(
        <h2 key={key++} className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-navy mt-10 mb-4">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('> ')) {
      flushList()
      elements.push(
        <blockquote key={key++} className="border-l-2 border-brand pl-5 py-3 mb-6 text-body text-base leading-relaxed italic">
          {formatInline(line.slice(2))}
        </blockquote>
      )
    } else if (line.startsWith('- ')) {
      currentList.push(line.slice(2))
    } else {
      flushList()
      elements.push(
        <p key={key++} className="text-body leading-relaxed mb-6 text-base">
          {formatInline(line)}
        </p>
      )
    }
  }

  flushList()
  return elements
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      '@type': 'Organization',
      name: STUDIO_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: STUDIO_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${slug}`,
    },
  }

  const publishedDate = new Date(article.publishedAt).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero */}
      <PageHero
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: article.title, href: `/blog/${slug}` },
        ]}
        title={article.title}
        description={article.description}
        buttons={
          <div className="flex items-center gap-3 mt-6">
            <Badge>{publishedDate}</Badge>
            <Badge>{article.readingTime}</Badge>
          </div>
        }
        compact
      />

      {/* Content */}
      <Section>
        <Container text>
          <Reveal>
            <div className="max-w-[720px] mx-auto">
              {renderContent(article.content)}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* CTA */}
      <CTABand
        eyebrow="Ready to build your website?"
        title="Let's discuss your project."
        description="Get a clear quote with no surprises. Tell us about your project and we'll help you understand the best way forward."
        primaryHref="/contact"
        primaryLabel="Get your quote"
        secondaryHref="/blog"
        secondaryLabel="More articles"
      />
    </>
  )
}
