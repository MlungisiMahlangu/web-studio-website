import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal, RevealStagger } from '@/components/ui/reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Independent web development studio based in South Africa. We build thoughtful digital experiences for businesses, professionals and ambitious ideas.',
}

const philosophyPillars = [
  {
    number: '01',
    title: 'Strategy',
    text: 'Understand the business, audience, goals and requirements before building.',
  },
  {
    number: '02',
    title: 'Design',
    text: 'Create a clear, modern and purposeful digital experience.',
  },
  {
    number: '03',
    title: 'Development',
    text: 'Turn the experience into a responsive, performant and maintainable website.',
  },
]

const approachPrinciples = [
  {
    number: '01',
    title: 'Thoughtful by default',
    text: 'Every section, interaction and design decision should have a reason behind it.',
  },
  {
    number: '02',
    title: 'Clear over complicated',
    text: 'We simplify information, remove unnecessary friction and make websites easier to understand and use.',
  },
  {
    number: '03',
    title: 'Honest from the start',
    text: 'We believe good business starts with clear communication. We keep our process, packages and expectations understandable and avoid inflated promises.',
  },
  {
    number: '04',
    title: 'Built to last',
    text: 'A website should not only look good on launch day. We care about responsiveness, performance, accessibility, maintainability and a clean technical foundation.',
  },
]

const saHighlights = [
  { title: 'Mobile-first', text: 'Designed around the way people actually browse today.' },
  { title: 'WhatsApp', text: 'Simple, accessible communication where it makes sense.' },
  { title: 'Local discovery', text: 'Considered foundations for Google Search and local visibility.' },
  { title: 'Built for growth', text: 'Websites structured so businesses can evolve beyond the first version.' },
]

const differencePoints = [
  { title: 'Direct communication', text: 'Clear conversations throughout the project.' },
  { title: 'Personal attention', text: 'Projects are approached with care rather than treated like tickets in a queue.' },
  { title: 'Design + development', text: 'The visual experience and technical implementation are considered together.' },
  { title: 'Long-term thinking', text: 'We build with the future of the website in mind.' },
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

const audienceTypes = [
  { title: 'Small Businesses', text: 'Professional websites that help establish credibility and generate enquiries.' },
  { title: 'Entrepreneurs', text: 'Digital foundations for new ideas, ventures and businesses.' },
  { title: 'Professionals', text: 'Portfolio and personal-brand websites designed to communicate expertise.' },
  { title: 'Growing Brands', text: 'Web experiences that evolve alongside the business.' },
  { title: 'Creators', text: 'Distinct digital spaces for showcasing work, services and ideas.' },
  { title: 'Organisations', text: 'Clear, accessible websites built around their audiences and goals.' },
]

const processSteps = [
  { number: '01', title: 'Discover', text: 'We understand the business, goals, audience and requirements.' },
  { number: '02', title: 'Plan', text: 'We define the structure, content and direction.' },
  { number: '03', title: 'Design', text: 'We create the visual experience and user journey.' },
  { number: '04', title: 'Build', text: 'We turn the approved design into a responsive website.' },
  { number: '05', title: 'Refine', text: 'We review, test and improve the experience.' },
  { number: '06', title: 'Launch', text: 'We deploy the website and make sure everything is ready.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section dark className="!pb-24 sm:!pb-32">
        <Container>
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">About WEB-IN</p>
              <span className="h-px w-10 bg-cream/20" />
              <span className="text-sm text-cream/50">Independent web development studio &middot; South Africa</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-display-xl leading-tight tracking-tight text-cream">
              Independent by choice.
              <br />
              <span className="italic text-accent">Serious about the work.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-[640px] text-lg leading-relaxed text-cream/60">
              WEB-IN is an independent web development studio creating thoughtful
              digital experiences for businesses, professionals and ambitious ideas.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Philosophy */}
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <h2 className="font-display text-display-md leading-tight tracking-tight">
                Good websites are not just designed.
                <br />
                <span className="italic text-accent">They are considered.</span>
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
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
            <RevealStagger stagger={100} className="grid gap-6">
              {philosophyPillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="rounded-2xl border border-line bg-cream-light p-8"
                >
                  <span className="font-mono text-xs text-accent">{pillar.number}</span>
                  <h3 className="mt-3 font-display text-xl tracking-tight">{pillar.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{pillar.text}</p>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section className="bg-cream-dark">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Our approach" title="The way we work matters." />
          </Reveal>
          <RevealStagger stagger={80} className="mt-14 divide-y divide-line">
            {approachPrinciples.map((p) => (
              <div key={p.number} className="grid gap-4 py-8 sm:grid-cols-[80px_1fr] sm:gap-8">
                <span className="font-mono text-sm text-accent">{p.number}</span>
                <div>
                  <h3 className="font-display text-xl tracking-tight">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
                </div>
              </div>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* South African Context */}
      <Section dark>
        <Container>
          <Reveal>
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-accent mb-4">Local context</p>
                <h2 className="font-display text-display-md leading-tight tracking-tight text-cream">
                  Built in South Africa.
                  <br />
                  <span className="italic text-accent">Ready for the wider web.</span>
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-cream/60">
                  We build with the realities of modern South African businesses in
                  mind. That means creating experiences that work beautifully across
                  mobile devices, make it easy for customers to get in touch, support
                  the tools businesses already use and provide a strong foundation for
                  future growth.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {saHighlights.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-2xl border border-cream/10 bg-cream/5 p-7"
                  >
                    <h3 className="font-display text-lg tracking-tight text-cream">{h.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream/50">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* WEB-IN Difference */}
      <Section className="bg-cream-dark">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-wider text-muted mb-4">The WEB-IN difference</p>
              <h2 className="font-display text-display-md leading-tight tracking-tight">
                You will not be passed
                <br />
                <span className="italic text-accent">from person to person.</span>
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  WEB-IN is intentionally independent. That means projects receive direct
                  attention from the people building them. Communication stays clear,
                  decisions move faster and the process remains personal without
                  sacrificing professionalism.
                </p>
                <p>
                  We believe clients should understand what is happening with their
                  project, what comes next and why decisions are being made.
                </p>
              </div>
            </Reveal>
            <RevealStagger stagger={80} className="grid gap-5 content-start">
              {differencePoints.map((d) => (
                <div
                  key={d.title}
                  className="rounded-2xl border border-line bg-cream p-6"
                >
                  <h3 className="font-display text-lg tracking-tight">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d.text}</p>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </Section>

      {/* Details Matter */}
      <Section>
        <Container>
          <Reveal>
            <div className="max-w-[680px]">
              <p className="font-mono text-xs uppercase tracking-wider text-muted mb-4">Quality standards</p>
              <h2 className="font-display text-display-md leading-tight tracking-tight">
                We care about the details people notice
                <br />
                <span className="italic text-accent">and the ones they do not.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                From the spacing between elements to the speed at which a page loads,
                quality lives in the details.
              </p>
            </div>
          </Reveal>
          <RevealStagger stagger={60} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {qualityDetails.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-line bg-cream-light px-5 py-4">
                <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* Who We Build For */}
      <Section className="bg-cream-dark">
        <Container>
          <Reveal>
            <div className="max-w-[680px]">
              <p className="font-mono text-xs uppercase tracking-wider text-muted mb-4">Who we build for</p>
              <h2 className="font-display text-display-md leading-tight tracking-tight">
                Built for people
                <br />
                <span className="italic text-accent">building something.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                WEB-IN works with people and organisations that need more than a website
                that simply exists.
              </p>
            </div>
          </Reveal>
          <RevealStagger stagger={80} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {audienceTypes.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-line bg-cream p-7"
              >
                <h3 className="font-display text-lg tracking-tight">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{a.text}</p>
              </div>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Our process" title="From first conversation to launch." />
          </Reveal>
          <RevealStagger stagger={80} className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.number} className="flex gap-5">
                <span className="font-mono text-sm text-accent shrink-0 pt-1">{step.number}</span>
                <div>
                  <h3 className="font-display text-lg tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </div>
            ))}
          </RevealStagger>
          <Reveal delay={100}>
            <div className="mt-14">
              <Link
                href="/process"
                className="inline-flex items-center gap-2 font-mono text-sm text-accent transition-colors hover:text-accent-dark"
              >
                Explore our process <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section dark>
        <Container>
          <Reveal>
            <div className="max-w-[680px]">
              <h2 className="font-display text-display-md leading-tight tracking-tight text-cream">
                Your next website should feel
                <br />
                <span className="italic text-accent">like your business.</span>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-cream/60">
                Tell us where you are going. We will help you build the digital
                experience to get there.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
                >
                  Let's talk <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-7 py-3 text-sm font-medium text-cream transition-colors hover:border-cream/40 hover:bg-cream/5"
                >
                  View Our Work <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
