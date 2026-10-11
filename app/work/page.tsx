import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { portfolioProjects } from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work | Website Portfolio South Africa',
  description: 'View our portfolio of websites and web applications. Business sites, e-commerce, portfolios, and custom solutions built for South African clients.',
  alternates: {
    canonical: 'https://web-in.co.za/work',
  },
}

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <Section dark className="relative overflow-hidden">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase text-brand mb-6" style={{ letterSpacing: '0.14em' }}>02 / Selected work</p>
            <h1 className="text-display-lg leading-tight font-extrabold text-white">
              Work that speaks
              <br />
              for itself.
            </h1>
            <p className="mt-8 text-lg text-white/70 max-w-2xl leading-relaxed">
              A selection of digital experiences we have designed and built — from
              full-stack platforms to polished interfaces. Explore the live projects
              and see how WEB-IN approaches design, development and the details in
              between.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Projects */}
      {portfolioProjects.map((project, index) => {
        const isEven = index % 2 === 0
        return (
          <Section key={project.slug} alt={index % 2 !== 0}>
            <Container>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
                {/* Image side */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <Reveal>
                    <Link
                      href={`/work/${project.slug}`}
                      className="block rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300 border border-line"
                      style={{ background: project.cardBg }}
                    >
                      {/* Browser bar */}
                      <div className="flex items-center gap-2 px-4 py-3 border-b border-black/10">
                        <span className="w-3 h-3 rounded-full bg-red-400/60" />
                        <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                        <span className="w-3 h-3 rounded-full bg-blue-400/60" />
                        <span className="ml-3 text-xs text-body truncate">
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
                          loading={index === 0 ? 'eager' : 'lazy'}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        />
                      </div>
                    </Link>
                  </Reveal>
                </div>

                {/* Info side */}
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <Reveal>
                    <p className="text-xs font-semibold uppercase text-brand mb-4" style={{ letterSpacing: '0.14em' }}>
                      {String(index + 1).padStart(2, '0')} / {project.type}
                    </p>
                    <h2 className="text-display-sm leading-tight font-bold text-navy mb-3">
                      {project.title}
                    </h2>
                    <p className="text-body leading-relaxed mb-6 max-w-lg">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-surface text-body text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action links */}
                    <div className="flex items-center gap-6">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:text-brand transition-colors"
                      >
                        View Live Site <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </Reveal>
                </div>
              </div>
            </Container>
          </Section>
        )
      })}

      {/* Final CTA */}
      <Section dark>
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase text-brand mb-6" style={{ letterSpacing: '0.14em' }}>Have something in mind?</p>
            <h2 className="text-display-lg leading-tight font-bold text-white">
              Let&apos;s build
              <br />
              what is next.
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              Whether you are starting a business, improving an existing website or
              building something completely custom, we would love to hear what you
              are working on.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-white font-medium text-sm hover:bg-brand-hover transition-colors"
                href="/contact"
              >
                Let&apos;s talk <ArrowUpRight size={16} />
              </Link>
              <Link
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors"
                href="/pricing"
              >
                Explore Our Services <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
