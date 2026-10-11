import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowUpRight, ArrowLeft, Check, ExternalLink, Code2 } from 'lucide-react'
import { portfolioProjects } from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { PageHero } from '@/components/ui/page-hero'
import { CTABand } from '@/components/ui/cta-band'
import { BrowserFrame } from '@/components/ui/browser-frame'
import { Badge } from '@/components/ui/badge'
import { Reveal, RevealStagger } from '@/components/ui/reveal'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = portfolioProjects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} — ${project.type}`,
    description: project.subtitle,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = portfolioProjects.find((p) => p.slug === slug)
  if (!project) notFound()

  const projectIndex = portfolioProjects.findIndex((p) => p.slug === slug)
  const prevProject = portfolioProjects[(projectIndex - 1 + portfolioProjects.length) % portfolioProjects.length]
  const nextProject = portfolioProjects[(projectIndex + 1) % portfolioProjects.length]

  return (
    <>
      {/* Hero */}
      <PageHero
        dark
        breadcrumb={{ label: 'All Work', href: '/work' }}
        eyebrow={project.type}
        title={project.title}
        description={project.subtitle}
        buttons={
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-brand text-white h-12 px-7 text-sm font-medium transition-all duration-300 hover:bg-brand-hover"
            >
              Visit Live Site
              <ExternalLink size={16} className="shrink-0" />
            </a>
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 text-white/70 h-12 px-6 text-sm font-medium transition-all duration-300 hover:border-white/30 hover:text-white"
              >
                <Code2 size={16} className="shrink-0" />
                View Code
              </a>
            )}
          </div>
        }
      />

      {/* Browser screenshot */}
      <Section alt>
        <Container narrow>
          <Reveal variant="scale">
            <BrowserFrame
              url={project.liveUrl}
              screenshot={`/screenshots/${project.slug}.png`}
              screenshotAlt={`${project.title} website screenshot`}
              bg={project.cardBg}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
            />
          </Reveal>
        </Container>
      </Section>

      {/* Content + Sidebar */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <Reveal>
                <p className="text-xs font-semibold uppercase text-muted mb-4" style={{ letterSpacing: '0.14em' }}>Overview</p>
                <p className="text-lg text-body leading-relaxed">{project.description}</p>
              </Reveal>

              {/* Challenge */}
              {project.challenge && (
                <Reveal>
                  <div className="border-l-2 border-brand pl-6">
                    <p className="text-xs font-semibold uppercase text-muted mb-4" style={{ letterSpacing: '0.14em' }}>The challenge</p>
                    <p className="text-lg text-body leading-relaxed">{project.challenge}</p>
                  </div>
                </Reveal>
              )}

              {/* Approach */}
              {project.approach && (
                <Reveal>
                  <div className="border-l-2 border-brand pl-6">
                    <p className="text-xs font-semibold uppercase text-muted mb-4" style={{ letterSpacing: '0.14em' }}>The approach</p>
                    <p className="text-lg text-body leading-relaxed">{project.approach}</p>
                  </div>
                </Reveal>
              )}

              {/* Key features */}
              {project.features && project.features.length > 0 && (
                <Reveal>
                  <p className="text-xs font-semibold uppercase text-muted mb-6" style={{ letterSpacing: '0.14em' }}>Key features</p>
                  <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check size={16} className="text-brand mt-0.5 shrink-0" />
                        <span className="text-body text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </RevealStagger>
                </Reveal>
              )}

              {/* Tech stack */}
              <Reveal>
                <p className="text-xs font-semibold uppercase text-muted mb-4" style={{ letterSpacing: '0.14em' }}>Tech stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="brand">{tech}</Badge>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <aside>
              <Reveal variant="right">
                <div className="rounded-2xl border border-line bg-white p-6 shadow-card space-y-6 sticky" style={{ top: 'var(--sticky-top)' }}>
                  <div>
                    <span className="text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Type</span>
                    <p className="mt-1 text-navy text-sm font-medium">{project.type}</p>
                  </div>
                  <div className="border-t border-line pt-6">
                    <span className="text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Industry</span>
                    <p className="mt-1 text-navy text-sm font-medium">{project.industry}</p>
                  </div>
                  <div className="border-t border-line pt-6">
                    <span className="text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Technologies</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-line pt-6">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-2 w-full rounded-full bg-brand text-white h-12 px-6 text-sm font-medium transition-all duration-300 hover:bg-brand-hover"
                    >
                      Start Your Project
                      <ArrowUpRight size={16} className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Prev/Next navigation */}
      <Section alt>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href={`/work/${prevProject.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:border-brand/20 hover:shadow-lg"
            >
              <ArrowLeft size={20} className="shrink-0 text-navy group-hover:text-brand transition-colors" />
              <div>
                <p className="text-xs font-semibold uppercase text-muted mb-1" style={{ letterSpacing: '0.14em' }}>Previous</p>
                <p className="text-base font-bold text-navy group-hover:text-brand transition-colors">
                  {prevProject.title}
                </p>
              </div>
            </Link>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center justify-end gap-4 rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:border-brand/20 hover:shadow-lg text-right"
            >
              <div>
                <p className="text-xs font-semibold uppercase text-muted mb-1" style={{ letterSpacing: '0.14em' }}>Next</p>
                <p className="text-base font-bold text-navy group-hover:text-brand transition-colors">
                  {nextProject.title}
                </p>
              </div>
              <ArrowUpRight size={20} className="shrink-0 text-navy group-hover:text-brand transition-colors" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTABand
        eyebrow="Like what you see?"
        title="Let's build something similar."
        description="Tell us about your project and we'll send a tailored quote with clear deliverables and timeline."
        primaryHref="/contact"
        primaryLabel="Start your project"
        secondaryHref="/work"
        secondaryLabel="View all work"
      />
    </>
  )
}
