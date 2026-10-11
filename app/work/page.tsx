'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { portfolioProjects } from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { PageHero } from '@/components/ui/page-hero'
import { CTABand } from '@/components/ui/cta-band'
import { BrowserFrame } from '@/components/ui/browser-frame'
import { Badge } from '@/components/ui/badge'
import { Reveal, RevealStagger } from '@/components/ui/reveal'

export default function WorkPage() {
  // Get unique project types for filter
  const projectTypes = Array.from(new Set(portfolioProjects.map((p) => p.type)))
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const filteredProjects = activeFilter
    ? portfolioProjects.filter((p) => p.type === activeFilter)
    : portfolioProjects

  return (
    <>
      {/* Hero */}
      <PageHero
        dark
        eyebrow="Selected Work"
        title="Work that speaks for itself."
        description="A selection of digital experiences we have designed and built — from full-stack platforms to polished interfaces. Explore the live projects and see how WEB-IN approaches design, development and the details in between."
      />

      {/* Filter pills */}
      {projectTypes.length >= 3 && (
        <Section tight>
          <Container>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter(null)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === null
                    ? 'bg-brand text-white'
                    : 'bg-blue-tint text-brand hover:bg-brand/10'
                }`}
              >
                All
              </button>
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeFilter === type
                      ? 'bg-brand text-white'
                      : 'bg-blue-tint text-brand hover:bg-brand/10'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Projects grid */}
      <Section alt>
        <Container>
          <RevealStagger className="grid gap-8 sm:grid-cols-2" stagger={100}>
            {filteredProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block"
              >
                <article className="rounded-2xl bg-white border border-line shadow-card transition-all duration-300 hover:shadow-lg hover:border-brand/20 hover:-translate-y-1 overflow-hidden">
                  <BrowserFrame
                    url={project.liveUrl}
                    screenshot={`/screenshots/${project.slug}.png`}
                    screenshotAlt={`${project.title} website screenshot`}
                    bg={project.cardBg}
                    priority={index === 0}
                  />
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="brand">{project.type}</Badge>
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold text-navy mb-2 group-hover:text-brand transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-sm text-body leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-brand">
                      <span>View project</span>
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* CTA */}
      <CTABand
        eyebrow="Have a project like this?"
        title="Let's build something real."
        description="Whether you're starting a business, improving an existing website or building something completely custom, we'd love to hear what you're working on."
        primaryHref="/contact"
        primaryLabel="Start your project"
        secondaryHref="/pricing"
        secondaryLabel="See pricing"
      />
    </>
  )
}
