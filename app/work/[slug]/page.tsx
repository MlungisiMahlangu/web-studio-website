import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
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

const projectColors: Record<string, string> = {
  'luxe-cuts': 'linear-gradient(140deg, #1f3631, #3a5a4a)',
  'mkhize-construction': 'linear-gradient(140deg, #2c3e50, #5d7a94)',
  'urbanwear': 'linear-gradient(160deg, #e8b99d, #efddc1)',
  'thando-photography': 'linear-gradient(140deg, #3a3a3a, #6a6a6a)',
  'johannesburg-fitness': 'linear-gradient(140deg, #c0392b, #e67e22)',
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = portfolioProjects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <>
      <Navbar />
      <section className="inner-hero container">
        <p className="eyebrow">
          Work / {project.type}
          {project.demo && ' · Demo project'}
        </p>
        <h1>
          {project.title}
        </h1>
        <p>{project.subtitle}</p>
      </section>
      <section className="inner-content container">
        <div
          style={{
            background: projectColors[project.slug] || 'var(--accent)',
            minHeight: 400,
            borderRadius: 4,
            display: 'grid',
            placeItems: 'center',
            color: 'white',
            marginBottom: 60,
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 16 }}>
              {project.industry}
            </div>
            <div style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 500, letterSpacing: '-.06em', lineHeight: '.9' }}>
              {project.title}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12%', maxWidth: 900 }}>
          <div>
            <p className="eyebrow">About this project</p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: 16 }}>
              {project.description}
            </p>
            {project.demo && (
              <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 16, fontStyle: 'italic' }}>
                This is a demo project created to showcase design direction and
                capability. It is not a real client project.
              </p>
            )}
          </div>
          <div>
            <p className="eyebrow">Details</p>
            <div style={{ display: 'grid', gap: 16 }}>
              <div>
                <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)' }}>
                  Type
                </span>
                <p style={{ margin: '4px 0 0', fontWeight: 500 }}>{project.type}</p>
              </div>
              <div>
                <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)' }}>
                  Industry
                </span>
                <p style={{ margin: '4px 0 0', fontWeight: 500 }}>{project.industry}</p>
              </div>
              <div>
                <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)' }}>
                  Technologies
                </span>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 6 }}>
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
