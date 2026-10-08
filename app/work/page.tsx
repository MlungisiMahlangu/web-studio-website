import Link from 'next/link'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { portfolioProjects } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects and direction. Business websites, online stores, portfolios and booking websites built for South African businesses.',
}

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <section className="inner-hero container">
        <p className="eyebrow">02 / Selected work</p>
        <h1>
          Things I&apos;ve
          <br />
          <em>built.</em>
        </h1>
        <p>
          From full-stack platforms to polished frontends. Each project is a real
          piece of work — built, shipped, and ready to explore.
        </p>
      </section>
      <section className="inner-content container">
        <div className="portfolio-grid">
          {portfolioProjects.map((project, index) => (
            <article className="portfolio-card" key={project.slug}>
              <div className="portfolio-card-visual" style={{ background: project.cardBg }}>
                <div className="portfolio-browser-bar">
                  <span /><span /><span />
                  <span className="portfolio-browser-url">{new URL(project.liveUrl).hostname}</span>
                </div>
                <div className="portfolio-browser-image">
                  <img src={`/screenshots/${project.slug}.png`} alt={`${project.title} screenshot`} className="portfolio-screenshot" />
                </div>
              </div>
              <div className="portfolio-card-body">
                <div className="portfolio-card-header">
                  <div>
                    <p className="portfolio-card-number">{String(index + 1).padStart(2, '0')} / {project.type}</p>
                    <h3>{project.title}</h3>
                    <p className="portfolio-card-role">{project.role}</p>
                  </div>
                  <a
                    className="portfolio-card-external"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${project.title} live site`}
                  >
                    <ExternalLink size={17} />
                  </a>
                </div>
                <p className="portfolio-card-description">{project.description}</p>
                <div className="portfolio-card-tags">
                  {project.technologies.map((tech) => (
                    <span className="portfolio-tag" key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="portfolio-card-links">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="portfolio-link-primary">
                    Live demo <ArrowUpRight size={15} />
                  </a>
                  {project.codeUrl && (
                    <a href={project.codeUrl} target="_blank" rel="noreferrer" className="portfolio-link-secondary">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.05.78 2.13 0 1.54-.02 2.78-.02 3.16 0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
                      Code <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
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
