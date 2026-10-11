import Link from 'next/link'
import { ArrowUpRight, Check, Target, Palette, Code, Heart, Users, Globe, Smartphone, MessageCircle, Search, TrendingUp } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { PageHero } from '@/components/ui/page-hero'
import { CTABand } from '@/components/ui/cta-band'
import { IconBox } from '@/components/ui/icon-box'
import { Reveal, RevealStagger } from '@/components/ui/reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About WEB-IN | Web Developers South Africa',
  description: 'Independent web development studio based in South Africa. We build modern, fast websites for businesses, professionals and growing brands. Strategy, design, development.',
  alternates: {
    canonical: 'https://web-in.co.za/about',
  },
}

const philosophyPillars = [
  {
    icon: Target,
    title: 'Strategy',
    text: 'Understand the business, audience, goals and requirements before building.',
  },
  {
    icon: Palette,
    title: 'Design',
    text: 'Create a clear, modern and purposeful digital experience.',
  },
  {
    icon: Code,
    title: 'Development',
    text: 'Turn the experience into a responsive, performant and maintainable website.',
  },
]

const principles = [
  {
    icon: Heart,
    title: 'Thoughtful by default',
    text: 'Every section, interaction and design decision should have a reason behind it.',
  },
  {
    icon: Users,
    title: 'Clear over complicated',
    text: 'We simplify information, remove unnecessary friction and make websites easier to understand and use.',
  },
  {
    icon: Globe,
    title: 'Honest from the start',
    text: 'We believe good business starts with clear communication. We keep our process, packages and expectations understandable.',
  },
  {
    icon: TrendingUp,
    title: 'Built to last',
    text: 'A website should not only look good on launch day. We care about responsiveness, performance, accessibility and a clean technical foundation.',
  },
]

const saHighlights = [
  { icon: Smartphone, title: 'Mobile-first', text: 'Designed around the way people actually browse today — on their phones.' },
  { icon: MessageCircle, title: 'WhatsApp-first', text: 'Simple, accessible communication where South Africans already are.' },
  { icon: Search, title: 'Local discovery', text: 'Considered foundations for Google Search and local visibility in South Africa.' },
  { icon: TrendingUp, title: 'Built for growth', text: 'Websites structured so businesses can evolve beyond the first version.' },
]

const audienceTypes = [
  { title: 'Small Businesses', text: 'Professional websites that help establish credibility and generate enquiries.' },
  { title: 'Entrepreneurs', text: 'Digital foundations for new ideas, ventures and businesses.' },
  { title: 'Professionals', text: 'Portfolio and personal-brand websites designed to communicate expertise.' },
  { title: 'Growing Brands', text: 'Web experiences that evolve alongside the business.' },
  { title: 'Creators', text: 'Distinct digital spaces for showcasing work, services and ideas.' },
  { title: 'Organisations', text: 'Clear, accessible websites built around their audiences and goals.' },
]

const qualityDetails = [
  'Responsive layouts',
  'Clear navigation',
  'Strong typography',
  'Fast-loading pages',
  'Accessible interfaces',
  'Optimised imagery',
  'Clean implementation',
  'Secure deployment',
  'Search-friendly foundations',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        dark
        eyebrow="About WEB-IN"
        title={<>Independent by choice.<br />Serious about the work.</>}
        description="WEB-IN is an independent web development studio creating thoughtful digital experiences for businesses, professionals and ambitious ideas. Based in South Africa, working with clients across the country."
      />

      {/* Who We Are */}
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
            <Reveal>
              <h2 className="text-display-md leading-tight font-bold text-navy">
                Good websites are not just designed.<br />They are considered.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-5 text-lg leading-relaxed text-body">
                <p>
                  We believe a great website starts with understanding. Understanding
                  the business behind it, the people it needs to reach, and the
                  experience those people should have when they arrive.
                </p>
                <p>
                  That means thinking beyond how a website looks. We consider
                  structure, content, usability, performance, responsiveness and the
                  small details that make a digital experience feel effortless.
                </p>
                <p>
                  Then we bring those decisions together through thoughtful design and
                  development.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Philosophy */}
      <Section alt>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our philosophy"
              title="How we approach every project"
              description="Three pillars that guide our work from start to finish."
              className="mb-12"
            />
          </Reveal>
          <RevealStagger className="grid gap-6 sm:grid-cols-3" stagger={100}>
            {philosophyPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-line bg-white shadow-card p-8"
              >
                <IconBox icon={pillar.icon} size="lg" className="mb-6" />
                <h3 className="text-xl font-bold text-navy">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-body">{pillar.text}</p>
              </div>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* Principles */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our principles"
              title="The way we work matters"
              description="Four principles that shape every decision we make."
              className="mb-12"
            />
          </Reveal>
          <RevealStagger className="grid gap-6 sm:grid-cols-2" stagger={80}>
            {principles.map((p) => (
              <div key={p.title} className="flex items-start gap-5 rounded-2xl border border-line bg-white shadow-card p-8">
                <IconBox icon={p.icon} size="lg" className="shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-navy">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-body">{p.text}</p>
                </div>
              </div>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* Who We Build For */}
      <Section alt>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Who we build for"
              title="Built for people building something"
              description="WEB-IN works with people and organisations that need more than a website that simply exists."
              className="mb-12"
            />
          </Reveal>
          <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={80}>
            {audienceTypes.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-line bg-white shadow-card p-7"
              >
                <h3 className="text-lg font-bold text-navy">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{a.text}</p>
              </div>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* Why South Africa */}
      <Section dark>
        <Container>
          <Reveal>
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase text-brand mb-4" style={{ letterSpacing: '0.14em' }}>Local context</p>
                <h2 className="text-display-md leading-tight font-bold text-white">
                  Built in South Africa.<br />Ready for the wider web.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-white/60">
                  We build with the realities of modern South African businesses in
                  mind. That means creating experiences that work beautifully across
                  mobile devices, make it easy for customers to get in touch, support
                  the tools businesses already use and provide a strong foundation for
                  future growth.
                </p>
                <div className="mt-8 space-y-3 text-white/70">
                  <p className="flex items-center gap-2"><Check size={16} className="text-brand shrink-0" /> Pricing in Rands — no hidden currency surprises</p>
                  <p className="flex items-center gap-2"><Check size={16} className="text-brand shrink-0" /> POPIA-aware privacy practices</p>
                  <p className="flex items-center gap-2"><Check size={16} className="text-brand shrink-0" /> .co.za domain knowledge</p>
                  <p className="flex items-center gap-2"><Check size={16} className="text-brand shrink-0" /> WhatsApp-first market understanding</p>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {saHighlights.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-7"
                  >
                    <IconBox icon={h.icon} size="md" className="mb-4" />
                    <h3 className="text-lg font-bold text-white">{h.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/50">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Quality Standards */}
      <Section>
        <Container>
          <Reveal>
            <div className="max-w-[680px]">
              <p className="text-xs font-semibold uppercase text-brand mb-4" style={{ letterSpacing: '0.14em' }}>Quality standards</p>
              <h2 className="text-display-md leading-tight font-bold text-navy">
                We care about the details people notice<br />and the ones they do not.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-body">
                From the spacing between elements to the speed at which a page loads,
                quality lives in the details.
              </p>
            </div>
          </Reveal>
          <RevealStagger stagger={60} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {qualityDetails.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-line bg-white shadow-card px-5 py-4">
                <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-sm font-medium text-navy">{item}</span>
              </div>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* CTA */}
      <CTABand
        eyebrow="Ready to work together?"
        title="Your next website should feel like your business."
        description="Tell us where you're going. We'll help you build the digital experience to get there."
        primaryHref="/contact"
        primaryLabel="Let's talk"
        secondaryHref="/work"
        secondaryLabel="View our work"
      />
    </>
  )
}
