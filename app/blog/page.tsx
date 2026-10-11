import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { blogArticles, SITE_URL } from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { PageHero } from '@/components/ui/page-hero'
import { CTABand } from '@/components/ui/cta-band'
import { Reveal, RevealStagger } from '@/components/ui/reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Web Development Insights South Africa | WEB-IN',
  description: 'Practical insights about website design, development costs, timelines and online presence for South African businesses.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
}

export default function BlogPage() {
  return (
    <>

      {/* Hero */}
      <PageHero
        eyebrow="Insights & Guides"
        title={<>Web development<br />made clear.</>}
        description="Practical guides about website costs, timelines, and building an online presence that works for your South African business."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
        ]}
        accent="clear"
      />

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

                <div className="flex items-center gap-2 text-sm font-medium text-brand">
                  Read article
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* CTA */}
      <CTABand
        eyebrow="Have a project in mind?"
        title="Let's discuss your website."
        description="Get a clear quote with no surprises. Tell us about your project and we'll help you understand the best way forward."
        primaryHref="/contact"
        primaryLabel="Get your quote"
        secondaryHref="/pricing"
        secondaryLabel="See pricing"
      />
    </>
  )
}
