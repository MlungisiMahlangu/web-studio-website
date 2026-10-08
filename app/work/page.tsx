import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { portfolioProjects } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects and direction. Business websites, online stores, portfolios and booking websites built for South African businesses.',
}

const projectColors: Record<string, string> = {
  'luxe-cuts': 'linear-gradient(140deg, #1f3631, #3a5a4a)',
  'mkhize-construction': 'linear-gradient(140deg, #2c3e50, #5d7a94)',
  'urbanwear': 'linear-gradient(160deg, #e8b99d, #efddc1)',
  'thando-photography': 'linear-gradient(140deg, #3a3a3a, #6a6a6a)',
  'johannesburg-fitness': 'linear-gradient(140deg, #c0392b, #e67e22)',
}

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <section className="inner-hero container">
        <p className="eyebrow">Selected work</p>
        <h1>
          Work with
          <br />
          <em>intention.</em>
        </h1>
        <p>
          A website should make the right people stop, understand and take the next
          step. Here is a selection of project directions.
        </p>
      </section>
      <section className="inner-content container">
        <div className="portfolio-grid">
          {portfolioProjects.map((project) => (
            <Link className="portfolio-card" href={`/work/${project.slug}`} key={project.slug}>
              <div
                className="portfolio-art"
                style={{ background: projectColors[project.slug] || 'var(--accent)' }}
              >
                {project.demo && <span className="demo-badge">Demo project</span>}
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 12 }}>
                    {project.industry}
                  </div>
                  <div style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 500, letterSpacing: '-.06em', lineHeight: '.9' }}>
                    {project.title}
                  </div>
                </div>
              </div>
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <div className="portfolio-meta">
                  <span className="portfolio-tag">{project.type}</span>
                  {project.technologies.map((tech) => (
                    <span className="portfolio-tag" key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="offer-banner">
          <h2>Have a project in mind?</h2>
          <p>
            We build websites for businesses across South Africa. Tell us about your
            project and we will show you what is possible.
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
