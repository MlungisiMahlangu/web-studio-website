import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { portfolioProjects } from '@/lib/constants'
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
      <section className="inner-hero container">
        <p className="eyebrow">
          Work / {String(projectIndex + 1).padStart(2, '0')} — {project.type}
        </p>
        <h1>{project.title}</h1>
        <p>{project.subtitle}</p>
      </section>
      <section className="inner-content container">
        <div
          className="project-hero-visual"
          style={{ background: project.cardBg }}
        >
          <div className="project-hero-browser-bar">
            <span /><span /><span />
            <span>{new URL(project.liveUrl).hostname}</span>
          </div>
          <div className="project-hero-content">
            <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 16 }}>
              {project.industry}
            </div>
            <div style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 500, letterSpacing: '-.06em', lineHeight: '.9', color: 'white' }}>
              {project.title}
            </div>
          </div>
        </div>

        <div className="project-detail-grid">
          <div>
            <p className="eyebrow">About this project</p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: 16 }}>
              {project.description}
            </p>
            <div className="project-detail-actions">
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link-primary">
                Live demo <ArrowUpRight size={15} />
              </a>
              {project.codeUrl && (
                <a href={project.codeUrl} target="_blank" rel="noreferrer" className="project-link-secondary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.05.78 2.13 0 1.54-.02 2.78-.02 3.16 0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
                  Code <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>
          <div>
            <p className="eyebrow">Details</p>
            <div className="project-detail-info">
              <div>
                <span className="project-detail-label">Type</span>
                <p style={{ margin: '4px 0 0', fontWeight: 500 }}>{project.type}</p>
              </div>
              <div>
                <span className="project-detail-label">Role</span>
                <p style={{ margin: '4px 0 0', fontWeight: 500 }}>{project.role}</p>
              </div>
              <div>
                <span className="project-detail-label">Industry</span>
                <p style={{ margin: '4px 0 0', fontWeight: 500 }}>{project.industry}</p>
              </div>
              <div>
                <span className="project-detail-label">Technologies</span>
                <div className="project-detail-tags">
                  {project.technologies.map((tech) => (
                    <span className="portfolio-tag" key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="offer-banner" style={{ marginTop: 80 }}>
          <h2>Like what you see?</h2>
          <p>
            We would love to build something similar for your business. Tell us about
            your project.
          </p>
          <Link className="button button-dark" href="/start-a-project" style={{ marginTop: 24 }}>
            Start your project <ArrowUpRight />
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
