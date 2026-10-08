import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
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
    text: 'We believe good business starts with clear communication. We keep our process, pricing and expectations understandable and avoid inflated promises.',
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
      <Navbar />

      {/* Hero */}
      <section className="about-hero container">
        <ScrollReveal>
          <div className="about-hero-top">
            <p className="eyebrow">About WEB-IN</p>
            <span className="about-hero-label">Independent web development studio &middot; South Africa</span>
          </div>
          <h1>
            Independent by choice.
            <br />
            <em>Serious about the work.</em>
          </h1>
          <p className="about-hero-lede">
            WEB-IN is an independent web development studio creating thoughtful
            digital experiences for businesses, professionals and ambitious ideas.
          </p>
          <div className="about-hero-actions">
            <Link className="button button-dark" href="/start-a-project">
              Start Your Project <ArrowUpRight />
            </Link>
            <Link className="text-link" href="/work">
              View Our Work <ArrowUpRight />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Philosophy */}
      <section className="about-philosophy">
        <div className="container">
          <ScrollReveal>
            <div className="about-philosophy-copy">
              <h2>
                Good websites are not just designed.
                <br />
                <em>They are considered.</em>
              </h2>
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
          </ScrollReveal>
          <ScrollReveal variant="stagger" delay={100}>
            <div className="about-pillars">
              {philosophyPillars.map((pillar) => (
                <div className="about-pillar" key={pillar.number}>
                  <span className="about-pillar-number">{pillar.number}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Approach */}
      <section className="about-approach container">
        <ScrollReveal>
          <p className="eyebrow">Our approach</p>
          <h2>The way we work matters.</h2>
        </ScrollReveal>
        <ScrollReveal variant="stagger" delay={80}>
          <div className="about-principles">
            {approachPrinciples.map((p, i) => (
              <div className="about-principle" key={p.number}>
                <div className="about-principle-top">
                  <span className="about-principle-number">{p.number}</span>
                  <h3>{p.title}</h3>
                </div>
                <p>{p.text}</p>
                {i < approachPrinciples.length - 1 && <div className="about-principle-divider" />}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* South African Context */}
      <section className="about-sa">
        <div className="container">
          <ScrollReveal>
            <div className="about-sa-inner">
              <div>
                <p className="eyebrow">Local context</p>
                <h2>
                  Built in South Africa.
                  <br />
                  <em>Ready for the wider web.</em>
                </h2>
                <p>
                  We build with the realities of modern South African businesses in
                  mind. That means creating experiences that work beautifully across
                  mobile devices, make it easy for customers to get in touch, support
                  the tools businesses already use and provide a strong foundation for
                  future growth.
                </p>
              </div>
              <div className="about-sa-highlights">
                {saHighlights.map((h) => (
                  <div className="about-sa-highlight" key={h.title}>
                    <h3>{h.title}</h3>
                    <p>{h.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WEB-IN Difference */}
      <section className="about-difference container">
        <ScrollReveal>
          <div className="about-difference-top">
            <p className="eyebrow">The WEB-IN difference</p>
            <h2>
              You will not be passed
              <br />
              <em>from person to person.</em>
            </h2>
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
        </ScrollReveal>
        <ScrollReveal variant="stagger" delay={80}>
          <div className="about-difference-grid">
            {differencePoints.map((d) => (
              <div className="about-difference-item" key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Details Matter */}
      <section className="about-details">
        <div className="container">
          <ScrollReveal>
            <div className="about-details-top">
              <p className="eyebrow">Quality standards</p>
              <h2>
                We care about the details people notice
                <br />
                <em>and the ones they do not.</em>
              </h2>
              <p>
                From the spacing between elements to the speed at which a page loads,
                quality lives in the details.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="stagger" delay={60}>
            <div className="about-details-list">
              {qualityDetails.map((item) => (
                <div className="about-detail-row" key={item}>
                  <Check aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Build For */}
      <section className="about-audience container">
        <ScrollReveal>
          <p className="eyebrow">Who we build for</p>
          <h2>
            Built for people
            <br />
            <em>building something.</em>
          </h2>
          <p className="about-audience-lede">
            WEB-IN works with people and organisations that need more than a website
            that simply exists.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="stagger" delay={80}>
          <div className="about-audience-grid">
            {audienceTypes.map((a) => (
              <div className="about-audience-item" key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Process */}
      <section className="about-process">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">Our process</p>
            <h2>From first conversation to launch.</h2>
          </ScrollReveal>
          <ScrollReveal variant="stagger" delay={80}>
            <div className="about-process-steps">
              {processSteps.map((step) => (
                <div className="about-process-step" key={step.number}>
                  <span className="about-process-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Link className="about-process-link" href="/process">
              Explore our process <ArrowUpRight />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="about-cta">
        <div className="container">
          <ScrollReveal>
            <h2>
              Your next website should feel
              <br />
              <em>like your business.</em>
            </h2>
            <p>
              Tell us where you are going. We will help you build the digital
              experience to get there.
            </p>
            <div className="about-cta-actions">
              <Link className="button button-dark" href="/start-a-project">
                Start Your Project <ArrowUpRight />
              </Link>
              <Link className="text-link" href="/work">
                View Our Work <ArrowUpRight />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
