import Link from 'next/link'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleArrowOutUpRight,
  MoveUpRight,
} from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import FloatingWhatsApp from '@/components/layout/floating-whatsapp'
import { services, packages, faqs, STUDIO_NAME, portfolioProjects } from '@/lib/constants'
import { HomePageFAQ } from '@/components/sections/homepage-faq'
import { HomeContactForm } from '@/components/forms/home-contact-form'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

const homepageProjects = portfolioProjects.slice(0, 2)

const projectColors: Record<string, string> = {
  'roadwheels': 'linear-gradient(140deg, #1a2332, #2d4a5e)',
  'e-safetyrides': 'linear-gradient(140deg, #1f3631, #3a5a4a)',
  'grip-on': 'linear-gradient(160deg, #2c2c2c, #5a5a5a)',
  'countryscope': 'linear-gradient(140deg, #1b3a4b, #4a7c8f)',
}

export const metadata = {
  title: undefined,
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Digital experiences for ambitious businesses</p>
          <h1>
            Websites that make your business look{' '}
            <em>as good</em> as it actually is.
          </h1>
          <p className="hero-lede">
            Modern websites, online stores and digital experiences designed and
            built for ambitious South African businesses.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/start-a-project">
              Start your project <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link className="text-link" href="/work">
              Explore our work <MoveUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-note">
            <span className="note-avatars">
              <i /><i /><i />
            </span>
            <span>A considered process, from first idea to final launch.</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Abstract preview of a premium website interface">
          <div className="visual-glow" />
          <div className="browser-card">
            <div className="browser-bar">
              <span /><span /><span />
              <small>{STUDIO_NAME} <b>Work</b> About</small>
              <i>Let&apos;s talk ↗</i>
            </div>
            <div className="browser-content">
              <div className="mini-label">INDEPENDENT DIGITAL STUDIO</div>
              <strong>
                Good work
                <br />
                <em>speaks louder.</em>
              </strong>
              <div className="mini-line" />
              <div className="browser-footer">
                <span>Web design / development</span>
                <span>01 — 04</span>
              </div>
            </div>
          </div>
          <div className="floating-tag tag-one">Strategy <span>↗</span></div>
          <div className="floating-tag tag-two">
            Built to convert <span>✦</span>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="proof-strip">
          <div className="container proof-grid">
            <p>Designed around your business</p>
            <p>Mobile-first by default</p>
            <p>Built to convert</p>
            <p>Transparent pricing</p>
          </div>
        </section>
      </ScrollReveal>

      <section className="section container" id="services">
        <ScrollReveal>
          <div className="section-intro">
            <p className="eyebrow">01 / What we build</p>
            <h2>
              Digital work with <em>purpose.</em>
            </h2>
            <p>
              From a sharp one-page launch to a custom web application, we create
              considered digital experiences that help good businesses move forward.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="stagger" delay={100}>
          <div className="services-grid">
            {services.map(({ icon: Icon, number, title, text, price, href }) => (
              <Link className="service-card" href={href} key={title}>
                <div>
                  <div className="service-top">
                    <span className="service-number">{number}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <div className="service-bottom">
                  <span>{price}</span>
                  <CircleArrowOutUpRight aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="work-section" id="work">
        <div className="container">
          <ScrollReveal>
            <div className="section-intro work-intro">
              <p className="eyebrow">02 / Selected direction</p>
              <h2>
                Make an impression
                <br />
                <em>before you meet.</em>
              </h2>
              <p>
                A website should do more than exist. It should make the right people
                stop, understand and take the next step.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="stagger" delay={150}>
            <div className="work-feature">
              {homepageProjects.map((project) => (
                <Link className="work-art work-project" href={`/work/${project.slug}`} key={project.slug} style={{ background: projectColors[project.slug] || 'var(--accent)', color: 'white' }}>
                  <span className="art-label">{project.industry} / {project.type}</span>
                  <div className="art-type">
                    {project.title.split(' ').map((word, i) => (
                      i === 0 ? <span key={word}>{word}<br /></span> : <em key={word}>{word}</em>
                    ))}
                  </div>
                  <span className="art-caption">{project.subtitle}</span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <Link className="text-link" href="/work">
                View all work <MoveUpRight aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section container" id="pricing">
        <ScrollReveal>
          <div className="section-intro centered">
            <p className="eyebrow">03 / Clear from the start</p>
            <h2>
              Premium work, <em>without the mystery.</em>
            </h2>
            <p>Clear packages and scope. No confusing agency pricing, no hidden surprises.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="stagger" delay={100}>
          <div className="pricing-grid">
            {packages.slice(0, 3).map((pack) => (
              <article
                className={`pricing-card ${pack.popular ? 'is-popular' : ''}`}
                key={pack.name}
              >
                {pack.popular && <span className="popular-label">Most popular</span>}
                <div>
                  <p className="package-name">{pack.name}</p>
                  <h3>{pack.price}</h3>
                  <p className="package-description">{pack.description}</p>
                </div>
                <ul>
                  {pack.features.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  className={pack.popular ? 'button button-light' : 'button button-outline'}
                  href="/start-a-project"
                >
                  Choose {pack.name} <ArrowUpRight aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="pricing-note">
            Need something more specific?{' '}
            <Link href="/pricing">Explore all packages →</Link>
          </p>
        </ScrollReveal>
      </section>

      <section className="process-section" id="process">
        <div className="container process-layout">
          <ScrollReveal variant="left">
            <div className="process-copy">
              <p className="eyebrow">04 / How it works</p>
              <h2>
                A clear path from <em>idea to live.</em>
              </h2>
              <p>
                Good projects feel collaborative, not complicated. We keep the process
                focused, transparent and personal.
              </p>
              <Link className="button button-light" href="/start-a-project">
                Start a conversation <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right" delay={150}>
            <div className="steps">
              {[
                ['01', 'Discover', 'We learn about your business, your audience and what success should look like.'],
                ['02', 'Define', 'You receive a clear recommendation, scope and quote before we begin.'],
                ['03', 'Design & build', 'We shape the experience, refine the details and turn it into a fast, responsive website.'],
                ['04', 'Launch', 'After a final review, we get you live and stay close for the support period included.'],
              ].map(([num, title, desc]) => (
                <div className="step" key={num}>
                  <b>{num}</b>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section container" id="faq">
        <ScrollReveal>
          <div className="faq-section">
            <div>
              <p className="eyebrow">05 / FAQ</p>
              <h2>
                Good questions
                <br />
                <em>deserve clear answers.</em>
              </h2>
            </div>
            <HomePageFAQ />
          </div>
        </ScrollReveal>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-layout">
          <ScrollReveal variant="left">
            <div>
              <p className="eyebrow">06 / Your next chapter</p>
              <h2>
                Have a good idea?
                <br />
                <em>Let&apos;s make it real.</em>
              </h2>
              <p>
                Tell us a little about what you&apos;re building. We&apos;ll get back
                to you with a thoughtful next step.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right" delay={150}>
            <HomeContactForm />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
