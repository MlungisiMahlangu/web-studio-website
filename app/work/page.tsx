import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { portfolioProjects } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects and direction. Business websites, online stores, portfolios and booking websites built for South African businesses.',
}

const projectColors: Record<string, string> = {
  'roadwheels': 'linear-gradient(140deg, #1a2332, #2d4a5e)',
  'e-safetyrides': 'linear-gradient(140deg, #1f3631, #3a5a4a)',
  'grip-on': 'linear-gradient(160deg, #2c2c2c, #5a5a5a)',
  'countryscope': 'linear-gradient(140deg, #1b3a4b, #4a7c8f)',
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
        <ScrollReveal variant="stagger">
          <div className="portfolio-grid">
            {portfolioProjects.map((project) => (
              <Link className="portfolio-card" href={`/work/${project.slug}`} key={project.slug}>
                <div
                  className="portfolio-art"
                  style={{ background: projectColors[project.slug] || 'var(--accent)' }}
                >
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
        </ScrollReveal>
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
