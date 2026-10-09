import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowUpRight,
  Check,
  MoveUpRight,
  MessageCircle,
} from 'lucide-react'
import {
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
import { AuroraBackground } from '@/components/sections/aurora-background'
import { FloatingChip } from '@/components/ui/floating-chip'
import { WordRotator } from '@/components/ui/word-rotator'
import { HeroShowcase } from '@/components/sections/hero-showcase'
import { ScrollCue } from '@/components/ui/scroll-cue'

const homepageProjects = portfolioProjects.slice(0, 2)

export const metadata = {
  title: 'Website Design & Development in South Africa | WEB-IN',
  description: 'Independent web design and development studio in South Africa. Business websites, portfolios, landing pages and online stores that are fast, mobile-first and SEO-ready.',
  alternates: {
    canonical: 'https://web-in.co.za',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'WebSite', 'LocalBusiness', 'ProfessionalService'],
    name: STUDIO_NAME,
    alternateName: 'WEB-IN Web Studio',
    url: 'https://web-in.co.za',
    logo: 'https://web-in.co.za/icon.svg',
    description: 'Independent web development studio building modern websites for businesses in South Africa.',
    email: STUDIO_EMAIL,
    telephone: STUDIO_PHONE,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ZA',
      addressRegion: 'Gauteng',
      addressLocality: 'Johannesburg',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'South Africa',
      },
      {
        '@type': 'State',
        name: 'Gauteng',
      },
      {
        '@type': 'City',
        name: 'Johannesburg',
      },
    ],
    priceRange: 'R1,500 - R10,000+',
    sameAs: [],
    knowsAbout: [
      'Web Development',
      'Website Design',
      'Business Websites',
      'E-commerce',
      'Landing Pages',
      'Portfolio Websites',
      'Custom Web Applications',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a website cost in South Africa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Website costs in South Africa vary based on complexity. Landing pages start from R1,500, business websites from R4,500, and online stores from R8,500. Every project gets a custom quote based on your specific requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to build a website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most projects take 2-4 weeks from start to launch. Landing pages can be completed in 1-2 weeks, while complex business websites or online stores may take 4-6 weeks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I own my website after it is built?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, absolutely. Once your website is complete and paid for, you own everything - the design, code, content and domain. Full ownership, no lock-in.',
        },
      },
    ],
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ─── HERO ─── */}
      <section className="relative min-h-[100svh] flex flex-col justify-center bg-ink text-cream overflow-hidden">
        <AuroraBackground />

        <Container className="relative z-10 pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-6 items-center">
            {/* Left: Copy */}
            <div className="max-w-[600px] order-2 lg:order-1">
              {/* Badge */}
              <Reveal>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-xs font-medium text-cream/70">Taking on new projects</span>
                </div>
              </Reveal>

              {/* H1 */}
              <Reveal delay={100}>
                <h1 className="font-display text-display-xl leading-tight tracking-tight mb-3">
                  <span className="block overflow-hidden">
                    <span className="block animate-[fade-up_0.8s_ease-out_both]">Built for your</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="block animate-[fade-up_0.8s_ease-out_0.15s_both]">
                      <em className="text-accent relative">
                        business.
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-[shimmer_3s_ease-in-out_infinite]" />
                      </em>
                    </span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="block animate-[fade-up_0.8s_ease-out_0.3s_both]">Designed for the web.</span>
                  </span>
                </h1>
                <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-cream/40 mt-4 animate-[fade-up_0.8s_ease-out_0.45s_both]">
                  Website design & development for South African businesses
                </p>
              </Reveal>

              {/* Rotating line */}
              <Reveal delay={200}>
                <p className="text-lg sm:text-xl text-cream/50 mb-8">
                  Websites that <WordRotator />
                </p>
              </Reveal>

              {/* Sub copy */}
              <Reveal delay={300}>
                <p className="text-base text-cream/50 leading-relaxed max-w-[500px] mb-10">
                  Modern, high-performance websites designed to help South African
                  businesses build credibility, reach more customers, and grow online.
                </p>
              </Reveal>

              {/* CTAs */}
              <Reveal delay={400}>
                <div className="flex flex-wrap items-center gap-5">
                  {/* Primary button with gradient border */}
                  <a
                    href="/contact"
                    className="group relative inline-flex items-center gap-2 rounded-full p-[1px] bg-gradient-to-r from-accent via-blue-400 to-accent text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(67,97,238,0.3)]"
                  >
                    <span className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium transition-all duration-300 group-hover:bg-ink-light">
                      <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">Get a quote</span>
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>

                  {/* Secondary link with underline draw */}
                  <a
                    href="/about"
                    className="group relative inline-flex items-center gap-2 text-cream/60 hover:text-cream transition-colors duration-200 text-sm"
                  >
                    <span className="relative">
                      About us
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-cream/40 transition-all duration-300 group-hover:w-full" />
                    </span>
                    <MoveUpRight size={14} />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${STUDIO_WHATSAPP}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400/70 hover:text-emerald-400 transition-colors duration-200 text-sm"
                  >
                    <MessageCircle size={14} />
                    <span>or WhatsApp us</span>
                  </a>
                </div>
              </Reveal>

              {/* Proof chips */}
              <Reveal delay={500}>
                <div className="mt-12 flex flex-wrap items-center gap-3">
                  <FloatingChip label="Mobile-first" index={0} />
                  <FloatingChip label="SEO-ready" index={1} />
                  <FloatingChip label="Built in South Africa" index={2} />
                </div>
              </Reveal>
            </div>

            {/* Right: Showcase */}
            <div className="order-1 lg:order-2 relative">
              <Reveal variant="scale" delay={300}>
                <HeroShowcase />
              </Reveal>

              {/* Floating chips around showcase (desktop only) */}
              <div className="hidden lg:block absolute -top-4 -left-8">
                <FloatingChip label="Fast loading" index={3} />
              </div>
              <div className="hidden lg:block absolute -bottom-4 -right-4">
                <FloatingChip label="Online booking" index={4} />
              </div>
            </div>
          </div>
        </Container>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <ScrollCue />
        </div>

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

      {/* ─── PRICING TEASER ─── */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we offer"
              title="Services built around your project."
              description="From a simple landing page to a full business website or custom application — pick a starting point or let us scope something tailored to exactly what you need."
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
        </Container>
      </Section>

      {homepageProjects.map((project, index) => {
        const isEven = index % 2 === 0
        return (
          <Section key={project.slug} className="bg-cream">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                          loading="lazy"
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
                      {project.technologies.slice(0, 4).map((tech) => (
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
                        className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-7 py-3 text-sm font-medium transition-all duration-300 hover:bg-ink-light"
                      >
                        View Live Site
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </Reveal>
                </div>
              </div>
            </Container>
          </Section>
        )
      })}

      <Section className="bg-cream-dark">
        <Container>
          <Reveal>
            <div className="text-center">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-7 py-3 text-sm font-medium transition-all duration-300 hover:bg-ink-light"
              >
                View all work
                <ArrowUpRight size={16} />
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
                  title: 'Clear packages',
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
                className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-7 py-3 text-sm font-medium transition-all duration-300 hover:bg-ink-light"
              >
                View all FAQs
                <ArrowUpRight size={16} />
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
