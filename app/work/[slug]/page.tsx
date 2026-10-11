import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Check } from 'lucide-react'
import { portfolioProjects } from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
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
  const nextProject = portfolioProjects[(projectIndex + 1) % portfolioProjects.length]

  return (
    <>
      {/* ── Hero ── */}
      <Section dark className="relative overflow-hidden">
        <Container>
          <Reveal>
            <p className="text-sm text-white/60 uppercase tracking-widest mb-6" style={{ letterSpacing: '0.14em' }}>
              Work / {String(projectIndex + 1).padStart(2, '0')} — {project.type}
            </p>
            <h1 className="text-hero font-extrabold leading-tight tracking-tight text-white">
              {project.title}
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
              {project.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-navy font-semibold text-sm hover:bg-surface transition-colors"
              >
                Visit {project.title} <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── Browser mockup ── */}
      <Section alt className="py-16 sm:py-20">
        <Container narrow>
          <Reveal variant="scale">
            <div
              className="rounded-2xl overflow-hidden shadow-lg"
              style={{ background: project.cardBg }}
            >
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-black/10">
                <span className="w-3 h-3 rounded-full bg-red-400/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <span className="w-3 h-3 rounded-full bg-blue-400/60" />
                <span className="ml-3 text-xs text-navy/50 truncate">
                  {new URL(project.liveUrl).hostname}
                </span>
              </div>
              {/* Screenshot */}
              <div className="p-4">
                <Image
                  src={`/screenshots/${project.slug}.png`}
                  alt={`${project.title} website screenshot`}
                  width={1200}
                  height={800}
                  className="w-full rounded-lg shadow-sm"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── Description + Sidebar ── */}
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
            </div>

            {/* Sidebar */}
            <aside>
              <Reveal variant="right">
                <div className="rounded-2xl border border-line bg-white p-6 shadow-card space-y-6 sticky top-28">
                  <div>
                    <span className="text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Type</span>
                    <p className="mt-1 text-navy text-sm font-medium">{project.type}</p>
                  </div>
                  <div className="border-t border-line">
                    <span className="text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Industry</span>
                    <p className="mt-1 text-navy text-sm font-medium">{project.industry}</p>
                  </div>
                  <div className="border-t border-line">
                    <span className="text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>Technologies</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-blue-tint/60 text-navy text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>

      {/* ── Next project ── */}
      <Section alt className="border-t border-line">
        <Container>
          <Reveal>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center justify-between gap-6"
            >
              <div>
                <p className="text-xs font-semibold uppercase text-muted mb-2" style={{ letterSpacing: '0.14em' }}>Next project</p>
                <p className="text-2xl font-bold text-navy group-hover:text-brand transition-colors">
                  {nextProject.title}
                </p>
                <p className="mt-1 text-sm text-body">{nextProject.subtitle}</p>
              </div>
              <ArrowUpRight size={24} className="shrink-0 text-navy group-hover:text-brand transition-colors" />
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* ── Final CTA ── */}
      <Section dark className="relative overflow-hidden">
        <Container>
          <Reveal>
            <p className="text-sm text-white/60 uppercase tracking-widest mb-6" style={{ letterSpacing: '0.14em' }}>Have something in mind?</p>
            <h2 className="text-hero font-extrabold leading-tight tracking-tight text-white">
              Like what you see?
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              We would love to build something similar for your business. Tell us
              about your project.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-navy font-semibold text-sm hover:bg-surface transition-colors"
                href="/contact"
              >
                Let&apos;s talk <ArrowUpRight size={16} />
              </Link>
              <Link
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors"
                href="/work"
              >
                View All Work <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
