import Link from 'next/link'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { portfolioProjects } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work',
  description: 'A selection of digital experiences we have designed and built — from full-stack platforms to polished interfaces.',
}

export default function WorkPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="work-hero container">
        <ScrollReveal>
          <p className="eyebrow">02 / Selected work</p>
          <h1>
            Work that speaks
            <br />
            <em>for itself.</em>
          </h1>
          <p className="work-hero-lede">
            A selection of digital experiences we have designed and built — from
            full-stack platforms to polished interfaces. Explore the live projects
            and see how WEB-IN approaches design, development and the details in
            between.
          </p>
        </ScrollReveal>
      </section>

      {/* Projects */}
      <section className="work-projects">
        {portfolioProjects.map((project, index) => {
          const isEven = index % 2 === 0
          return (
            <article
              key={project.slug}
              className={`work-project-entry ${isEven ? 'work-project-even' : 'work-project-odd'}`}
            >
              <div className="container">
                <div className={`work-project-layout ${isEven ? '' : 'work-project-reverse'}`}>
                  <div className="work-project-visual-wrap">
                    <Link href={`/work/${project.slug}`} className="work-project-visual" style={{ background: project.cardBg }}>
                      <div className="work-project-browser-bar">
                        <span /><span /><span />
                        <span className="work-project-browser-url">{new URL(project.liveUrl).hostname}</span>
                      </div>
                      <div className="work-project-browser-image">
                        <img
                          src={`/screenshots/${project.slug}.png`}
                          alt={`${project.title} website screenshot`}
                          className="work-project-screenshot"
                          loading={index === 0 ? 'eager' : 'lazy'}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="work-project-info">
                    <p className="work-project-number">
                      {String(index + 1).padStart(2, '0')} / {project.type}
                    </p>
                    <h2>{project.title}</h2>
                    <p className="work-project-role">{project.role}</p>
                    <p className="work-project-description">{project.description}</p>
                    <div className="work-project-tech">
                      {project.technologies.map((tech) => (
                        <span className="work-project-tag" key={tech}>{tech}</span>
                      ))}
                    </div>
                    <div className="work-project-actions">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="work-project-live"
                      >
                        View Live Site <ArrowUpRight size={16} />
                      </a>
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="work-project-code"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.05.78 2.13 0 1.54-.02 2.78-.02 3.16 0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
                          View Code <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </section>

      {/* Final CTA */}
      <section className="work-cta">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">Have something in mind?</p>
            <h2>
              Let&apos;s build
              <br />
              <em>what is next.</em>
            </h2>
            <p>
              Whether you are starting a business, improving an existing website or
              building something completely custom, we would love to hear what you
              are working on.
            </p>
            <div className="work-cta-actions">
              <Link className="button button-dark" href="/start-a-project">
                Start Your Project <ArrowUpRight />
              </Link>
              <Link className="text-link" href="/services">
                Explore Our Services <ArrowUpRight />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
