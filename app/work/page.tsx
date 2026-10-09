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
      <Section className="bg-ink text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-40 pointer-events-none" />
        <Container>
          <Reveal>
            <p className="font-mono text-sm text-cream/60 uppercase tracking-widest mb-6">02 / Selected work</p>
            <h1 className="text-display-xl font-display text-cream leading-tight">
              Work that speaks
              <br />
              <em className="italic text-accent">for itself.</em>
            </h1>
            <p className="mt-8 text-lg text-cream/70 max-w-2xl leading-relaxed">
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
          <Section key={project.slug} className="bg-cream">
            <Container>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
                {/* Image side */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <Reveal>
                    <Link
                      href={`/work/${project.slug}`}
                      className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                    <p className="font-mono text-sm text-muted uppercase tracking-widest mb-4">
                      {String(index + 1).padStart(2, '0')} / {project.type}
                    </p>
                    <h2 className="text-display-lg font-display text-ink leading-tight mb-3">
                      {project.title}
                    </h2>
                    <p className="text-ink-light leading-relaxed mb-6 max-w-lg">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-cream-dark text-ink-light font-mono text-xs"
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
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent-dark transition-colors"
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
      <Section className="bg-ink text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-40 pointer-events-none" />
        <Container>
          <Reveal>
            <p className="font-mono text-sm text-cream/60 uppercase tracking-widest mb-6">Have something in mind?</p>
            <h2 className="text-display-xl font-display text-cream leading-tight">
              Let&apos;s build
              <br />
              <em className="italic text-accent">what is next.</em>
            </h2>
            <p className="mt-6 text-lg text-cream/70 max-w-xl leading-relaxed">
              Whether you are starting a business, improving an existing website or
              building something completely custom, we would love to hear what you
              are working on.
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
                href="/services"
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
