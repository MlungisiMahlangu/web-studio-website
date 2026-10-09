import Link from 'next/link'
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
      <Section className="bg-ink text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-40 pointer-events-none" />
        <Container>
          <Reveal>
            <p className="font-mono text-sm text-cream/60 uppercase tracking-widest mb-6">
              Work / {String(projectIndex + 1).padStart(2, '0')} — {project.type}
            </p>
            <h1 className="text-display-xl font-display text-cream leading-tight">
              {project.title}
            </h1>
            <p className="mt-6 text-lg text-cream/70 max-w-2xl leading-relaxed">
              {project.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream text-ink font-medium text-sm hover:bg-cream-dark transition-colors"
              >
                Visit {project.title} <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── Browser mockup ── */}
      <Section className="bg-cream py-16 sm:py-20">
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
                <span className="ml-3 font-mono text-xs text-ink/50 truncate">
                  {new URL(project.liveUrl).hostname}
                </span>
              </div>
              {/* Screenshot */}
              <div className="p-4">
                <img
                  src={`/screenshots/${project.slug}.png`}
                  alt={`${project.title} website screenshot`}
                  className="w-full rounded-lg shadow-sm"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── Description + Sidebar ── */}
      <Section className="bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <Reveal>
                <p className="font-mono text-xs text-muted uppercase tracking-wider mb-4">Overview</p>
                <p className="text-lg text-ink-light leading-relaxed">{project.description}</p>
              </Reveal>

              {/* Challenge */}
              {project.challenge && (
                <Reveal>
                  <div className="border-l-2 border-accent pl-6">
                    <p className="font-mono text-xs text-muted uppercase tracking-wider mb-4">The challenge</p>
                    <p className="text-lg text-ink-light leading-relaxed">{project.challenge}</p>
                  </div>
                </Reveal>
              )}

              {/* Approach */}
              {project.approach && (
                <Reveal>
                  <div className="border-l-2 border-accent pl-6">
                    <p className="font-mono text-xs text-muted uppercase tracking-wider mb-4">The approach</p>
                    <p className="text-lg text-ink-light leading-relaxed">{project.approach}</p>
                  </div>
                </Reveal>
              )}

              {/* Key features */}
              {project.features && project.features.length > 0 && (
                <Reveal>
                  <p className="font-mono text-xs text-muted uppercase tracking-wider mb-6">Key features</p>
                  <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check size={16} className="text-accent mt-0.5 shrink-0" />
                        <span className="text-ink-light text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </RevealStagger>
                </Reveal>
              )}
            </div>

            {/* Sidebar */}
            <aside>
              <Reveal variant="right">
                <div className="rounded-2xl border border-line bg-cream-light p-6 space-y-6 sticky top-28">
                  <div>
                    <span className="font-mono text-xs text-muted uppercase tracking-wider">Type</span>
                    <p className="mt-1 text-ink text-sm">{project.type}</p>
                  </div>
                  <div className="border-t border-line">
                    <span className="font-mono text-xs text-muted uppercase tracking-wider">Industry</span>
                    <p className="mt-1 text-ink text-sm">{project.industry}</p>
                  </div>
                  <div className="border-t border-line">
                    <span className="font-mono text-xs text-muted uppercase tracking-wider">Technologies</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-cream-dark text-ink-light font-mono text-xs"
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
      <Section className="bg-cream-dark border-t border-line">
        <Container>
          <Reveal>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center justify-between gap-6"
            >
              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-wider mb-2">Next project</p>
                <p className="text-display-sm font-display text-ink group-hover:text-accent-dark transition-colors">
                  {nextProject.title}
                </p>
                <p className="mt-1 text-sm text-ink-light">{nextProject.subtitle}</p>
              </div>
              <ArrowUpRight size={24} className="shrink-0 text-ink group-hover:text-accent-dark transition-colors" />
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* ── Final CTA ── */}
      <Section className="bg-ink text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-40 pointer-events-none" />
        <Container>
          <Reveal>
            <p className="font-mono text-sm text-cream/60 uppercase tracking-widest mb-6">Have something in mind?</p>
            <h2 className="text-display-xl font-display text-cream leading-tight">
              Like what you see?
            </h2>
            <p className="mt-6 text-lg text-cream/70 max-w-xl leading-relaxed">
              We would love to build something similar for your business. Tell us
              about your project.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream text-ink font-medium text-sm hover:bg-cream-dark transition-colors"
                href="/contact"
              >
                Let&apos;s talk <ArrowUpRight size={16} />
              </Link>
              <Link
                className="inline-flex items-center gap-1.5 text-sm font-medium text-cream/70 hover:text-cream transition-colors"
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
