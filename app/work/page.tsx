import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { portfolioProjects } from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { PageHero } from '@/components/ui/page-hero'
import { CTABand } from '@/components/ui/cta-band'
import { BrowserFrame } from '@/components/ui/browser-frame'
import { Badge } from '@/components/ui/badge'
import { RevealStagger } from '@/components/ui/reveal'

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Selected Work"
        title="Work that speaks for itself."
        description="A selection of digital experiences we have designed and built — from full-stack platforms to polished interfaces. Explore the live projects and see how WEB-IN approaches design, development and the details in between."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Work', href: '/work' },
        ]}
        accent="speaks"
        variant="split"
        aside={
          <div className="relative h-[320px] lg:h-[400px]">
            {portfolioProjects.slice(0, 3).map((project, i) => (
              <div
                key={project.slug}
                className="absolute rounded-xl overflow-hidden shadow-lg border border-line transition-transform duration-500 hover:scale-[1.02] hover:-translate-y-1"
                style={{
                  width: i === 0 ? '85%' : i === 1 ? '70%' : '60%',
                  height: i === 0 ? '100%' : i === 1 ? '75%' : '55%',
                  left: i === 0 ? '0' : i === 1 ? '15%' : '30%',
                  top: i === 0 ? '0' : i === 1 ? '10%' : '25%',
                  zIndex: 3 - i,
                  transform: `rotate(${i === 0 ? -2 : i === 1 ? 1 : 3}deg)`,
                }}
              >
                <Image
                  src={`/screenshots/${project.slug}.png`}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        }
      />

      {/* Projects grid */}
      <Section alt>
        <Container>
          <RevealStagger className="grid gap-5 sm:grid-cols-2" stagger={100}>
            {portfolioProjects.map((project, index) => (
              <article key={project.slug} className="rounded-xl bg-white border border-line shadow-card overflow-hidden">
                <BrowserFrame
                  url={project.liveUrl}
                  screenshot={`/screenshots/${project.slug}.png`}
                  screenshotAlt={`${project.title} website screenshot`}
                  bg={project.cardBg}
                  priority={index === 0}
                />
                <div className="p-4">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    <Badge variant="brand">{project.type}</Badge>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                  <h2 className="text-base font-bold text-navy mb-1.5">
                    {project.title}
                  </h2>
                  <p className="text-sm text-body leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover transition-colors"
                  >
                    <span>View project</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
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
