import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { blogArticles, SITE_URL } from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Reveal, RevealStagger } from '@/components/ui/reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Web Development Insights South Africa | WEB-IN',
  description: 'Practical insights about website design, development costs, timelines and online presence for South African businesses.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
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
  ],
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <Section dark className="pb-20 sm:pb-28">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase text-brand mb-4" style={{ letterSpacing: '0.14em' }}>
              Insights & guides
            </p>
            <h1 className="text-display-lg leading-tight font-extrabold text-white">
              Web development
              <br />
              made clear.
            </h1>
            <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-white/60">
              Practical guides about website costs, timelines, and building an online
              presence that works for your South African business.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Articles */}
      <Section>
        <Container>
          <RevealStagger
            stagger={100}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-white shadow-card p-8 transition-all duration-300 hover:border-brand/20 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-muted">
                    {new Date(article.publishedAt).toLocaleDateString('en-ZA', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="text-muted/30">&middot;</span>
                  <span className="text-xs text-muted">
                    {article.readingTime}
                  </span>
                </div>

                <h2 className="text-2xl leading-snug font-bold text-navy mb-3 group-hover:text-brand transition-colors">
                  {article.title}
                </h2>

                <p className="text-sm text-body leading-relaxed mb-6 flex-1">
                  {article.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-medium text-navy group-hover:text-brand transition-colors">
                  Read article
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="!pt-0">
        <Container narrow>
          <Reveal>
            <div className="rounded-2xl bg-dark-panel text-white px-8 py-14 sm:px-14 text-center overflow-hidden relative">
              <div className="relative z-10">
                <h2 className="text-display-md leading-tight font-bold text-white mb-5">
                  Have a project in mind?
                </h2>
                <p className="text-white/60 text-lg leading-relaxed max-w-[520px] mx-auto mb-8">
                  Let us discuss your website and provide a clear quote with no
                  surprises.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-7 py-3.5 text-base font-medium transition-all duration-300 hover:bg-brand-hover"
                >
                  Get your quote
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
