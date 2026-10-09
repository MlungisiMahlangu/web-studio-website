import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { blogArticles, SITE_URL, STUDIO_NAME } from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
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
        <ul key={key++} className="list-disc list-inside space-y-2 text-cream/70 mb-6">
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
        return <strong key={i} className="text-cream font-semibold">{part.slice(2, -2)}</strong>
      }
      return part
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
        <h2 key={key++} className="font-display text-2xl sm:text-3xl leading-tight tracking-tight text-cream mt-10 mb-4">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('- ')) {
      currentList.push(line.slice(2))
    } else {
      flushList()
      elements.push(
        <p key={key++} className="text-cream/70 leading-relaxed mb-6">
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

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `${SITE_URL}/blog/${slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <Section dark className="pb-12 sm:pb-16">
        <Container text>
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-cream/50 hover:text-cream transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-cream/40">
                {new Date(article.publishedAt).toLocaleDateString('en-ZA', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="text-cream/20">·</span>
              <span className="font-mono text-xs text-cream/40">
                {article.readingTime}
              </span>
            </div>

            <h1 className="font-display text-display-lg sm:text-display-xl leading-tight tracking-tight mb-6">
              {article.title}
            </h1>

            <p className="text-lg text-cream/60 leading-relaxed">
              {article.description}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Content */}
      <Section dark tight>
        <Container text>
          <div className="prose-custom">
            {renderContent(article.content)}
          </div>

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-line-dark">
            <div className="rounded-2xl bg-cream/5 border border-cream/10 p-8 sm:p-10">
              <h2 className="font-display text-2xl leading-tight tracking-tight text-cream mb-3">
                Ready to build your website?
              </h2>
              <p className="text-cream/60 leading-relaxed mb-6">
                Let us discuss your project and provide a clear quote with no surprises.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-accent-dark"
              >
                Get your quote
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
