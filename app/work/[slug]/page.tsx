import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Check } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { portfolioProjects } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
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

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="detail-hero container">
        <ScrollReveal>
          <p className="eyebrow">
            Work / {String(projectIndex + 1).padStart(2, '0')} — {project.type}
          </p>
          <h1>{project.title}</h1>
          <p className="detail-hero-lede">{project.subtitle}</p>
          <div className="detail-hero-actions">
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button button-dark">
              Visit {project.title} <ArrowUpRight />
            </a>
            {project.codeUrl && (
              <a href={project.codeUrl} target="_blank" rel="noreferrer" className="text-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.05.78 2.13 0 1.54-.02 2.78-.02 3.16 0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
                View Code <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </ScrollReveal>
      </section>

      {/* Screenshot */}
      <section className="detail-visual container">
        <ScrollReveal variant="scale">
          <div className="detail-visual-frame" style={{ background: project.cardBg }}>
            <div className="detail-visual-browser-bar">
              <span /><span /><span />
              <span>{new URL(project.liveUrl).hostname}</span>
            </div>
            <div className="detail-visual-image">
              <img
                src={`/screenshots/${project.slug}.png`}
                alt={`${project.title} website screenshot`}
                className="detail-visual-screenshot"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Overview + Details */}
      <section className="detail-body container">
        <div className="detail-body-grid">
          <div className="detail-body-main">
            <ScrollReveal>
              <p className="eyebrow">Overview</p>
              <p className="detail-body-copy">{project.description}</p>
            </ScrollReveal>

            {project.challenge && (
              <ScrollReveal>
                <div className="detail-case-study">
                  <p className="eyebrow">The challenge</p>
                  <p className="detail-case-study-copy">{project.challenge}</p>
                </div>
              </ScrollReveal>
            )}

            {project.approach && (
              <ScrollReveal>
                <div className="detail-case-study">
                  <p className="eyebrow">The approach</p>
                  <p className="detail-case-study-copy">{project.approach}</p>
                </div>
              </ScrollReveal>
            )}

            {project.features && project.features.length > 0 && (
              <ScrollReveal>
                <div className="detail-features">
                  <p className="eyebrow">Key features</p>
                  <ul className="detail-features-list">
                    {project.features.map((feature) => (
                      <li key={feature}>
                        <Check size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            )}
          </div>

          <aside className="detail-body-sidebar">
            <ScrollReveal variant="right">
              <div className="detail-sidebar-card">
                <div className="detail-sidebar-item">
                  <span className="detail-sidebar-label">Type</span>
                  <p>{project.type}</p>
                </div>
                <div className="detail-sidebar-item">
                  <span className="detail-sidebar-label">Role</span>
                  <p>{project.role}</p>
                </div>
                <div className="detail-sidebar-item">
                  <span className="detail-sidebar-label">Industry</span>
                  <p>{project.industry}</p>
                </div>
                <div className="detail-sidebar-item">
                  <span className="detail-sidebar-label">Technologies</span>
                  <div className="detail-sidebar-tags">
                    {project.technologies.map((tech) => (
                      <span className="detail-sidebar-tag" key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="detail-cta">
        <div className="container">
          <ScrollReveal>
            <h2>Like what you see?</h2>
            <p>
              We would love to build something similar for your business. Tell us
              about your project.
            </p>
            <div className="detail-cta-actions">
              <Link className="button button-dark" href="/contact">
                Start Your Project <ArrowUpRight />
              </Link>
              <Link className="text-link" href="/work">
                View All Work <ArrowUpRight />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
