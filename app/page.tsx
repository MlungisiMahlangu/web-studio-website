import Link from 'next/link'
import {
  ArrowUpRight,
  Check,
  MoveUpRight,
  CircleArrowOutUpRight,
} from 'lucide-react'
import {
  services,
  packages,
  portfolioProjects,
  STUDIO_NAME,
  STUDIO_EMAIL,
  STUDIO_PHONE,
  STUDIO_WHATSAPP,
} from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal, RevealStagger } from '@/components/ui/reveal'
import { Marquee } from '@/components/ui/marquee'
import { HomePageFAQ } from '@/components/sections/homepage-faq'
import { HeroShowcase } from '@/components/sections/hero-showcase'

const homepageProjects = portfolioProjects.slice(0, 2)

export const metadata = {
  title: undefined,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: STUDIO_NAME,
  description: 'Independent web development studio building modern websites for businesses in South Africa and beyond.',
  url: 'https://web-in.co.za',
  email: STUDIO_EMAIL,
  telephone: STUDIO_PHONE,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ZA',
  },
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  priceRange: 'R1,500 - R10,000+',
  sameAs: [],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ─── HERO ─── */}
      <section className="relative min-h-[100svh] flex items-center bg-ink text-cream overflow-hidden">
        <div className="absolute inset-0 grain grain-dark" />
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-[#0a0e1a]" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <Container className="relative z-10 pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center">
            {/* Left: Copy */}
            <div className="max-w-[640px]">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-wider text-accent mb-6">
                  Independent web development studio
                </p>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="font-display text-display-xl leading-tight tracking-tight mb-8">
                  Built for your <em className="text-accent">business.</em>
                  <br />
                  Designed for the web.
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-lg sm:text-xl text-cream/60 leading-relaxed max-w-[540px] mb-10">
                  Modern, high-performance websites designed to help South African
                  businesses build credibility, reach more customers, and grow online.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-7 py-3.5 text-base font-medium transition-all duration-300 ease-out-expo hover:bg-accent-dark hover:shadow-[0_0_24px_rgba(67,97,238,0.25)]"
                  >
                    Get a quote
                    <ArrowUpRight size={18} />
                  </Link>
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 text-cream/60 hover:text-cream transition-colors duration-200 text-sm"
                  >
                    Explore our work
                    <MoveUpRight size={16} />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="mt-14 flex items-center gap-3 text-sm text-cream/40">
                  <span className="flex -space-x-2">
                    <i className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30" />
                    <i className="w-6 h-6 rounded-full bg-accent/15 border border-accent/20" />
                    <i className="w-6 h-6 rounded-full bg-accent/10 border border-accent/15" />
                  </span>
                  From first idea to final launch — a considered process.
                </div>
              </Reveal>
            </div>

            {/* Right: Showcase */}
            <div className="hidden lg:flex h-[480px] items-center justify-center">
              <Reveal variant="scale" delay={400}>
                <HeroShowcase />
              </Reveal>
            </div>
          </div>
        </Container>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ink to-transparent" />
      </section>

      {/* ─── CAPABILITIES STRIP ─── */}
      <Section dark className="py-12 sm:py-16 border-t border-line-dark">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: 'Service types', value: '7' },
              { label: 'Mobile-first', value: 'Always' },
              { label: 'Based in', value: 'South Africa' },
              { label: 'Tailored quotes', value: 'Every time' },
            ].map(({ label, value }, i) => (
              <Reveal key={label} delay={i * 100}>
                <div className="text-center">
                  <p className="font-display text-3xl sm:text-4xl text-accent">{value}</p>
                  <p className="mt-2 text-sm text-cream/40 font-mono uppercase tracking-wider">
                    {label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── MARQUEE ─── */}
      <div className="bg-ink border-t border-line-dark py-5 overflow-hidden">
        <Marquee
          items={[
            'Business Websites',
            'Portfolio Sites',
            'Landing Pages',
            'Online Stores',
            'Booking Systems',
            'Custom Applications',
            'Website Redesigns',
          ]}
        />
      </div>

      {/* ─── SERVICES ─── */}
      <Section id="services">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we build"
              title="Digital work with purpose."
              description="From a focused one-page launch to a custom web application, we create considered digital experiences that help good businesses move forward."
              className="mx-auto"
              center
            />
          </Reveal>

          <RevealStagger stagger={100} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
            {services.slice(0, 3).map(({ icon: Icon, number, title, text, price, href }) => (
              <Link
                key={title}
                href={href}
                className="group relative rounded-2xl border border-line bg-cream-light p-7 h-full flex flex-col transition-all duration-300 ease-out-expo hover:border-accent/30 hover:shadow-lg"
              >
                <div className="w-11 h-11 rounded-xl bg-ink/5 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-accent/10">
                  <Icon size={20} className="text-ink/50 transition-colors duration-300 group-hover:text-accent" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted mb-2">{number}</p>
                <h3 className="font-display text-2xl leading-snug mb-3">{title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">{text}</p>
                <div className="flex items-center justify-between pt-5 border-t border-line">
                  <span className="text-sm font-medium">{price}</span>
                  <CircleArrowOutUpRight size={16} className="text-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </RevealStagger>

          <Reveal delay={200}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 text-ink px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-ink/5"
              >
                View all services
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ─── WORK ─── */}
      <Section className="bg-cream-dark">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title="Work that speaks for itself."
              description="A selection of digital experiences we've designed and built — from full-stack platforms to polished interfaces. Explore the live projects and see how WEB-IN approaches design, development and the details in between."
              className="mx-auto"
              center
            />
          </Reveal>

          <RevealStagger stagger={150} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {homepageProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group rounded-3xl overflow-hidden border border-line bg-cream-light transition-all duration-300 ease-out-expo hover:shadow-xl"
              >
                <div
                  className="relative overflow-hidden"
                  style={{ background: project.cardBg }}
                >
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-black/10">
                    <span className="w-3 h-3 rounded-full bg-red-400/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <span className="w-3 h-3 rounded-full bg-blue-400/60" />
                    <span className="ml-3 font-mono text-xs text-ink/50 truncate">
                      {new URL(project.liveUrl).hostname}
                    </span>
                  </div>
                  <img
                    src={`/screenshots/${project.slug}.png`}
                    alt={`${project.title} website screenshot`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="font-mono text-xs text-muted mb-1">
                        {String(index + 1).padStart(2, '0')} / {project.type}
                      </p>
                      <h3 className="font-display text-2xl">{project.title}</h3>
                    </div>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-line flex items-center justify-center group-hover:bg-ink group-hover:text-cream group-hover:border-ink transition-all duration-300">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">{project.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-full bg-cream-dark text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </RevealStagger>

          <Reveal delay={200}>
            <div className="text-center mt-12">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors duration-200"
              >
                View all work
                <MoveUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ─── WHY WEB-IN ─── */}
      <Section dark>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="left">
              <p className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
                Why WEB-IN
              </p>
              <h2 className="font-display text-display-md leading-tight tracking-tight text-cream mb-6">
                A studio that treats your project <em className="text-accent">like our own.</em>
              </h2>
              <p className="text-cream/60 text-lg leading-relaxed mb-8">
                We are not a template factory or a faceless agency. Every website we
                build gets our full attention — from the first conversation to the
                final launch and beyond.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-accent-dark"
              >
                About our studio
                <ArrowUpRight size={16} />
              </Link>
            </Reveal>

            <RevealStagger stagger={120} className="flex flex-col gap-5">
              {[
                {
                  title: 'Strategy-first approach',
                  text: 'Every project starts with understanding your business, audience and goals — not a blank Figma file.',
                },
                {
                  title: 'Transparent pricing',
                  text: 'Clear quotations, defined scope and no surprises. You know exactly what you are getting and what it costs.',
                },
                {
                  title: 'Built for the real world',
                  text: 'Fast, mobile-first, accessible websites that work across devices and browsers — not just on our screens.',
                },
                {
                  title: 'Ongoing support',
                  text: 'We do not disappear after launch. Maintenance plans and post-launch support keep your site running smoothly.',
                },
              ].map(({ title, text }) => (
                <div
                  key={title}
                  className="rounded-xl border border-line-dark p-6 transition-colors duration-300 hover:border-accent/30"
                >
                  <h4 className="font-medium text-cream mb-2">{title}</h4>
                  <p className="text-sm text-cream/50 leading-relaxed">{text}</p>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </Section>

      {/* ─── PROCESS ─── */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            <Reveal variant="left">
              <p className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
                How it works
              </p>
              <h2 className="font-display text-display-md leading-tight tracking-tight mb-6">
                From first conversation <em>to live website.</em>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                A clear process makes better projects. We keep every stage focused,
                transparent and easy to understand.
              </p>
              <Link
                href="/process"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-ink-light"
              >
                Explore our process
                <ArrowUpRight size={16} />
              </Link>
            </Reveal>

            <div className="relative">
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-line hidden sm:block" />
              <RevealStagger stagger={150} className="flex flex-col gap-8">
                {[
                  ['01', 'Discover', 'We learn about your business, goals, audience and requirements.'],
                  ['02', 'Define', 'We establish the scope, direction, timeline and quotation before development begins.'],
                  ['03', 'Create', 'We design, build and refine the website around the agreed scope.'],
                  ['04', 'Launch', 'We complete final checks, deploy the website and get it ready for the real world.'],
                ].map(([num, title, desc]) => (
                  <div key={num} className="relative flex gap-5 sm:gap-6">
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-ink text-cream flex items-center justify-center text-sm font-mono">
                      {num}
                    </div>
                    <div className="pt-1.5">
                      <h3 className="font-display text-xl mb-1.5">{title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </RevealStagger>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── PRICING TEASER ─── */}
      <Section className="bg-cream-dark">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Clear from the start"
              title="Premium work, without the mystery."
              description="Clear services, defined scope and straightforward pricing. Every project receives a tailored quotation based on what you actually need."
              className="mx-auto"
              center
            />
          </Reveal>

          <RevealStagger stagger={100} className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
            {packages.slice(0, 3).map((pack) => (
              <article
                key={pack.name}
                className={`relative rounded-2xl p-7 transition-all duration-300 ${
                  pack.popular
                    ? 'bg-ink text-cream shadow-xl'
                    : 'bg-cream-light border border-line hover:border-ink/20'
                }`}
              >
                {pack.popular && (
                  <span className="absolute top-5 right-5 font-mono text-[10px] uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    Most popular
                  </span>
                )}
                <div className="mb-6">
                  <p className={`font-mono text-xs uppercase tracking-wider mb-2 ${pack.popular ? 'text-cream/40' : 'text-muted'}`}>
                    {pack.name}
                  </p>
                  <p className="font-display text-4xl">{pack.price}</p>
                  <p className={`text-sm mt-2 leading-relaxed ${pack.popular ? 'text-cream/60' : 'text-muted'}`}>
                    {pack.description}
                  </p>
                </div>
                <ul className="flex flex-col gap-3 mb-8">
                  {pack.features.slice(0, 5).map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check size={15} className={`mt-0.5 flex-shrink-0 ${pack.popular ? 'text-accent' : 'text-ink'}`} />
                      <span className={pack.popular ? 'text-cream/70' : 'text-muted'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={pack.href}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-medium transition-all duration-300 ${
                    pack.popular
                      ? 'bg-accent text-white hover:bg-accent-dark'
                      : 'border border-ink/15 text-ink hover:bg-ink/5'
                  }`}
                >
                  Choose {pack.name}
                  <ArrowUpRight size={15} />
                </Link>
              </article>
            ))}
          </RevealStagger>

          <Reveal delay={200}>
            <div className="mt-12 rounded-2xl border border-line bg-cream-light p-8 text-center">
              <p className="font-display text-2xl mb-2">Need something more specific?</p>
              <p className="text-sm text-muted mb-5">We build custom solutions for unique requirements. Let us scope it properly.</p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-7 py-3 text-sm font-medium transition-all duration-300 hover:bg-ink-light"
              >
                View pricing
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ─── FAQ PREVIEW ─── */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
            <Reveal variant="left">
              <p className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
                FAQ
              </p>
              <h2 className="font-display text-display-sm leading-snug tracking-tight mb-6">
                Good questions
                <br />
                <em>deserve clear answers.</em>
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Before you start, here are a few of the questions we hear most often.
              </p>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors duration-200"
              >
                View all FAQs
                <MoveUpRight size={16} />
              </Link>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <HomePageFAQ />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ─── FINAL CTA ─── */}
      <Section dark className="relative overflow-hidden">
        <div className="absolute inset-0 grain grain-dark" />
        <Container className="relative z-10">
          <Reveal>
            <div className="max-w-[700px] mx-auto text-center">
              <p className="font-mono text-xs uppercase tracking-wider text-accent mb-6">
                Ready to begin?
              </p>
              <h2 className="font-display text-display-lg leading-tight tracking-tight text-cream mb-6">
                Let&apos;s build something <em className="text-accent">worth visiting.</em>
              </h2>
              <p className="text-cream/50 text-lg leading-relaxed mb-10">
                Tell us about your project and we will get back to you within 1–2
                business days with a tailored recommendation and quote.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-8 py-4 text-base font-medium transition-all duration-300 hover:bg-accent-dark"
                >
                  Get a quote
                  <ArrowUpRight size={18} />
                </Link>
                <Link
                  href={`https://wa.me/27649531145`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/15 text-cream/70 px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:border-cream/30 hover:text-cream"
                >
                  WhatsApp us
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
