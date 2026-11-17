import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowUpRight,
  Globe2,
  PenTool,
  Sparkles,
  Layers3,
  Code2,
  Paintbrush,
  LifeBuoy,
} from 'lucide-react'
import {
  services,
  portfolioProjects,
  STUDIO_BRAND_LINE,
  STUDIO_DESCRIPTION_LONG,
  homepageFaqs,
  STUDIO_WHATSAPP,
} from '@/lib/constants'
import { carePlans } from '@/lib/care-plans'
import { alternatesFor, faqSchema, webPageSchema, openGraphFor, twitterFor } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal, RevealStagger } from '@/components/ui/reveal'
import { HomePageFAQ } from '@/components/sections/homepage-faq'

export const revalidate = 3600

const homepageProjects = portfolioProjects.slice(0, 2)

export const metadata = {
  title: 'Website Design & Development Johannesburg',
  description:
    'WEB-IN designs and builds fast, mobile-first business websites, online stores and web apps in Johannesburg, South Africa. Websites from R2,500.',
  alternates: alternatesFor('/'),
  openGraph: openGraphFor('/', 'Website Design & Development Johannesburg', 'WEB-IN designs and builds fast, mobile-first business websites, online stores and web apps in Johannesburg, South Africa. Websites from R2,500.'),
  twitter: twitterFor('Website Design & Development Johannesburg', 'WEB-IN designs and builds fast, mobile-first business websites, online stores and web apps in Johannesburg, South Africa. Websites from R2,500.'),
}

const jsonLd = [
  webPageSchema({
    path: '/',
    name: 'Website design and development in Johannesburg',
    description: STUDIO_DESCRIPTION_LONG,
  }),
  faqSchema(homepageFaqs),
]

const serviceIcons: Record<string, React.ElementType> = {
  'Starter Website': PenTool,
  'Business Website': Sparkles,
  'Website Redesign': Paintbrush,
  'Online Store': Layers3,
  'Custom Web Application': Code2,
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      {/* ─── HERO ─── */}
      <section className="relative bg-background overflow-hidden">
        <Container className="pt-36 pb-20 sm:pt-40 sm:pb-24 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-6 items-center">
            {/* Left: Copy */}
            <div className="max-w-[600px] order-1">
              {/* Eyebrow */}
              <Reveal immediate>
                <p
                  className="text-xs font-semibold uppercase text-brand mb-6"
                  style={{ letterSpacing: '0.14em' }}
                >
                  Independent Web Development Studio
                </p>
              </Reveal>

              {/* H1 */}
              <Reveal immediate>
                <h1
                  className="text-hero font-extrabold leading-tight text-navy mb-5"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  <span className="block">Built for your business.</span>
                  <span className="block">Designed for the web.</span>
                </h1>
              </Reveal>

              {/* Sub copy */}
              <Reveal immediate>
                <p className="text-base sm:text-lg text-body leading-relaxed max-w-[500px] mb-8">
                  Modern, high-performance websites designed to help South African
                  businesses build credibility, reach more customers, and grow online.
                </p>
              </Reveal>

              {/* CTAs */}
              <Reveal immediate>
                <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand text-white h-12 px-7 text-sm font-medium transition-all duration-300 hover:bg-brand-hover"
                  >
                    Start Your Project
                    <ArrowUpRight size={16} className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 rounded-full bg-white border border-line text-navy h-12 px-7 text-sm font-medium transition-all duration-300 hover:border-brand/30"
                  >
                    About Us
                    <ArrowUpRight size={16} className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: Hero Image */}
            <div className="order-2 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[560px] lg:max-w-[680px]">
                <Reveal immediate variant="scale">
                  <div className="relative">
                    <Image
                      src="/images/hero-devices.webp"
                      width={1397}
                      height={715}
                      alt="WEB-IN website shown on desktop, tablet and mobile"
                      priority
                      sizes="(min-width:1024px) 640px, 100vw"
                      className="relative z-10 w-full h-auto hero-image-float"
                      style={{ animationDelay: '0.8s' }}
                    />
                    {/* Blurred ellipse shadow */}
                    <div
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-[40px] z-0"
                      style={{
                        background: 'radial-gradient(ellipse at center, rgba(10,20,50,0.10) 0%, transparent 70%)',
                        filter: 'blur(12px)',
                      }}
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── WHO IS WEB-IN ─── */}
      <Section>
        <Container>
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <p
                className="text-xs font-semibold uppercase text-brand mb-4"
                style={{ letterSpacing: '0.14em' }}
              >
                Who is WEB-IN?
              </p>
              <h2 className="text-display-sm leading-snug font-bold text-navy mb-5">
                {STUDIO_BRAND_LINE}
              </h2>
              <p className="text-body leading-relaxed">
                WEB-IN is a small independent website design and development studio
                based in Johannesburg, South Africa, working remotely with businesses
                across the country. We build business websites, online stores and
                custom web applications, and you deal directly with the person
                building your site. Websites start at R2,500, every project is quoted
                in rand with a defined scope before work begins, and the full price
                list is published at web-in.co.za/pricing.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ─── SERVICES ─── */}
      <Section alt>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="OUR SERVICES"
              title="Digital solutions for every business."
              description="From starter websites and online stores to custom web applications, plus ongoing care after launch."
            />
          </Reveal>

          <RevealStagger stagger={80} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              ...services.map((service) => {
              const Icon = serviceIcons[service.name] || Globe2
              return (
                <article
                  key={service.slug}
                  className="group rounded-2xl bg-white border border-line p-6 shadow-card transition-all duration-300 hover:shadow-lg hover:border-brand/20 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-tint flex items-center justify-center mb-4">
                    <Icon size={20} className="text-brand" />
                  </div>
                  <h3 className="text-base font-bold text-navy mb-1">{service.name}</h3>
                  <p className="text-sm text-body leading-relaxed mb-3">{service.tagline}</p>
                  <p className="text-sm font-semibold text-navy mb-4">
                    {service.priceLabel}
                    <span className="ml-2 text-xs font-medium text-muted">Once-off</span>
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block rounded-full bg-surface px-2.5 py-1 text-[11px] font-medium text-navy">
                      {service.facts.pages}
                    </span>
                    <span className="inline-block rounded-full bg-surface px-2.5 py-1 text-[11px] font-medium text-navy">
                      {service.facts.timeline}
                    </span>
                    <span className="inline-block rounded-full bg-surface px-2.5 py-1 text-[11px] font-medium text-navy">
                      {service.facts.support}
                    </span>
                  </div>
                  <Link
                    href={`/pricing#${service.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-hover transition-colors"
                  >
                    View service
                    <ArrowUpRight size={14} />
                  </Link>
                </article>
              )
            }),
            <article key="care-management" className="group rounded-2xl bg-white border border-line p-6 shadow-card transition-all duration-300 hover:shadow-lg hover:border-brand/20 hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-blue-tint flex items-center justify-center mb-4">
                <LifeBuoy size={20} className="text-brand" />
              </div>
              <h3 className="text-base font-bold text-navy mb-1">Care & Management</h3>
              <p className="text-sm text-body leading-relaxed mb-3">
                Monthly care that keeps your site running smoothly.
              </p>
              <p className="text-sm font-semibold text-navy mb-4">
                {carePlans[0].priceLabel}–{carePlans[carePlans.length - 1].priceLabel}
                <span className="ml-2 text-xs font-medium text-muted">/month</span>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block rounded-full bg-surface px-2.5 py-1 text-[11px] font-medium text-navy">
                  Managed hosting
                </span>
                <span className="inline-block rounded-full bg-surface px-2.5 py-1 text-[11px] font-medium text-navy">
                  Business email included
                </span>
                <span className="inline-block rounded-full bg-surface px-2.5 py-1 text-[11px] font-medium text-navy">
                  Month to month
                </span>
              </div>
              <Link
                href="/website-care-management"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-hover transition-colors"
              >
                View care plans
                <ArrowUpRight size={14} />
              </Link>
            </article>,
            ]}
          </RevealStagger>
        </Container>
      </Section>

      {/* ─── WORK ─── */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="SELECTED WORK"
              title="Work that speaks for itself."
              description="A selection of digital experiences we have designed and built. Explore the live projects and see how WEB-IN approaches design, development and the details in between."
            />
          </Reveal>

          <RevealStagger stagger={120} className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {homepageProjects.map((project) => (
              <article
                key={project.slug}
                className="rounded-xl bg-white border border-line overflow-hidden shadow-card"
              >
                <div className="overflow-hidden">
                  <Image
                    src={`/screenshots/${project.slug}.png`}
                    alt={`${project.title} website screenshot`}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase text-brand mb-1.5" style={{ letterSpacing: '0.14em' }}>
                    {project.type}
                  </p>
                  <h3 className="text-base font-bold text-navy mb-1">{project.title}</h3>
                  <p className="text-sm text-body leading-relaxed mb-3">{project.subtitle}</p>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover transition-colors"
                    >
                      Visit live site <ArrowUpRight size={14} />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </RevealStagger>

          <Reveal delay={300}>
            <div className="mt-10 text-center">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-full bg-navy text-white h-12 px-7 text-sm font-medium transition-all duration-300 hover:bg-navy/90"
              >
                View all work
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ─── WHY WEB-IN ─── */}
      <Section alt>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="left">
              <p
                className="text-xs font-semibold uppercase text-brand mb-4"
                style={{ letterSpacing: '0.14em' }}
              >
                Why WEB-IN
              </p>
              <h2 className="text-display-md leading-tight font-bold text-navy mb-6">
                A studio that treats your project like our own.
              </h2>
              <p className="text-body text-lg leading-relaxed mb-8">
                We are not a template factory or a faceless agency. Every website we
                build gets our full attention — from the first conversation to the
                final launch and beyond.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-brand text-white h-12 px-7 text-sm font-medium transition-all duration-300 hover:bg-brand-hover"
              >
                About our studio
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>

            <RevealStagger stagger={100} className="flex flex-col gap-4">
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
                  text: 'We do not disappear after launch. Post-launch support and optional care plans keep your site running, with business email included.',
                },
              ].map(({ title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white border border-line p-6 shadow-card transition-all duration-300 hover:border-brand/20"
                >
                  <h4 className="font-bold text-navy mb-2">{title}</h4>
                  <p className="text-sm text-body leading-relaxed">{text}</p>
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
              <p
                className="text-xs font-semibold uppercase text-brand mb-4"
                style={{ letterSpacing: '0.14em' }}
              >
                How it works
              </p>
              <h2 className="text-display-md leading-tight font-bold text-navy mb-6">
                From first conversation to live website.
              </h2>
              <p className="text-body text-lg leading-relaxed mb-8">
                A clear process makes better projects. We keep every stage focused,
                transparent and easy to understand.
              </p>
              <Link
                href="/process"
                className="group inline-flex items-center gap-2 rounded-full bg-white border border-line text-navy h-12 px-7 text-sm font-medium transition-all duration-300 hover:border-brand/30"
              >
                Explore our process
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>

            <div className="relative">
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-line hidden sm:block" />
              <RevealStagger stagger={120} className="flex flex-col gap-8">
                {[
                  ['01', 'Discover', 'We learn about your business, goals, audience and requirements.'],
                  ['02', 'Design', 'We shape the structure, content and look around the agreed direction.'],
                  ['03', 'Develop', 'We build, test and refine the website against the approved scope.'],
                  ['04', 'Launch', 'We complete final checks, connect the domain and take the site live.'],
                  ['05', 'Manage', 'If you choose a care plan, we keep hosting, email, updates and security running.'],
                  ['06', 'Grow', 'New pages, features and improvements are scoped as the business needs them.'],
                ].map(([num, title, desc]) => (
                  <div key={num} className="relative flex gap-5 sm:gap-6">
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center text-sm font-bold">
                      {num}
                    </div>
                    <div className="pt-1.5">
                      <h3 className="text-lg font-bold text-navy mb-1.5">{title}</h3>
                      <p className="text-sm text-body leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </RevealStagger>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── FAQ PREVIEW ─── */}
      <Section alt>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
            <Reveal variant="left">
              <p
                className="text-xs font-semibold uppercase text-brand mb-4"
                style={{ letterSpacing: '0.14em' }}
              >
                FAQ
              </p>
              <h2 className="text-display-sm leading-snug font-bold text-navy mb-6">
                Good questions
                <br />
                deserve clear answers.
              </h2>
              <p className="text-body leading-relaxed mb-6">
                Before you start, here are a few of the questions we hear most often.
              </p>
              <Link
                href="/faq"
                className="group inline-flex items-center gap-2 rounded-full bg-white border border-line text-navy h-12 px-7 text-sm font-medium transition-all duration-300 hover:border-brand/30"
              >
                View all FAQs
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <HomePageFAQ />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ─── FINAL CTA ─── */}
      <Section dark>
        <Container className="relative z-10">
          <Reveal>
            <div className="max-w-[700px] mx-auto text-center">
              <p
                className="text-xs font-semibold uppercase text-brand-on-dark mb-6"
                style={{ letterSpacing: '0.14em' }}
              >
                Ready to begin?
              </p>
              <h2 className="text-display-lg leading-tight font-bold text-white mb-6">
                Let&apos;s build something worth visiting.
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-10">
                Tell us about your project and we will get back to you within 1–2
                business days with a tailored recommendation and quote.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand text-white h-12 px-8 text-base font-medium transition-all duration-300 hover:bg-brand-hover"
                >
                  Start Your Project
                  <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href={`https://wa.me/${STUDIO_WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 text-white/70 h-12 px-6 text-sm font-medium transition-all duration-300 hover:border-white/30 hover:text-white"
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
