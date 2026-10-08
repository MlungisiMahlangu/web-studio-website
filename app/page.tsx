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
import FloatingContact from '@/components/layout/floating-contact'
import { services, packages, faqs, STUDIO_NAME, portfolioProjects } from '@/lib/constants'
import { HomePageFAQ } from '@/components/sections/homepage-faq'
import { HomeContactForm } from '@/components/forms/home-contact-form'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

const homepageProjects = portfolioProjects.slice(0, 2)

export const metadata = {
  title: undefined,
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Independent web development studio</p>
          <h1>
            Built for your business.
            <br />
            <em>Designed for the web.</em>
          </h1>
          <p className="hero-lede">
            Modern, high-performance websites designed to help South African
            businesses build credibility, reach more customers, and grow online.
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
            <span>From first idea to final launch — a considered process.</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Abstract preview of a premium website interface">
          <div className="visual-glow" />
          <div className="browser-card">
            <div className="browser-bar">
              <span /><span /><span />
              <small>{STUDIO_NAME} <b>Work</b> About</small>
              <i>Let&apos;s talk </i>
            </div>
            <div className="browser-content">
              <div className="mini-label">WEB-IN DIGITAL STUDIO</div>
              <strong>
                Built for business.
                <br />
                <em>Designed to convert.</em>
              </strong>
              <div className="mini-line" />
              <div className="browser-footer">
                <span>Web design / development</span>
                <span>01 — 04</span>
              </div>
            </div>
          </div>
          <div className="floating-tag tag-one">Strategy <span></span></div>
          <div className="floating-tag tag-two">
            Built to convert <span></span>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="positioning-strip">
          <div className="container">
            <p className="positioning-lede">
              From the first conversation to the final launch, we keep the work focused, thoughtful and clear.
            </p>
            <div className="positioning-principles">
              <div>
                <h4>Strategy</h4>
                <p>Built around your business and what you need the website to achieve.</p>
              </div>
              <div>
                <h4>Design</h4>
                <p>Clear, considered interfaces that make your business easier to understand.</p>
              </div>
              <div>
                <h4>Development</h4>
                <p>Responsive, reliable websites built for the real world.</p>
              </div>
            </div>
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
              From a focused one-page launch to a custom web application, we create
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
        <ScrollReveal delay={200}>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link className="text-link" href="/services">
              Explore our services <MoveUpRight aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <section className="work-section" id="work">
        <div className="container">
          <ScrollReveal>
            <div className="section-intro">
              <p className="eyebrow">02 / Selected work</p>
              <h2>
                Work that speaks
                <br />
                <em>for itself.</em>
              </h2>
              <p>
                A selection of digital experiences we've designed and built — from
                full-stack platforms to polished interfaces. Explore the live projects
                and see how WEB-IN approaches design, development and the details in between.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="stagger" delay={150}>
            <div className="home-work-grid">
              {homepageProjects.map((project, index) => (
                <Link className="home-work-card" href={`/work/${project.slug}`} key={project.slug}>
                  <div className="home-work-visual" style={{ background: project.cardBg }}>
                    <div className="portfolio-browser-bar">
                      <span /><span /><span />
                      <span className="portfolio-browser-url">{new URL(project.liveUrl).hostname}</span>
                    </div>
                    <div className="portfolio-browser-image">
                      <img src={`/screenshots/${project.slug}.png`} alt={`${project.title} screenshot`} className="portfolio-screenshot" />
                    </div>
                  </div>
                  <div className="home-work-body">
                    <p className="portfolio-card-number">{String(index + 1).padStart(2, '0')} / {project.type}</p>
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                    <div className="home-work-meta">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span className="portfolio-tag" key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
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
            <p>Clear services, defined scope and straightforward pricing. Every project receives a tailored quotation based on what you actually need.</p>
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
                  href={pack.href}
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
            <Link href="/pricing">Explore all services →</Link>
          </p>
        </ScrollReveal>
      </section>

      <section className="process-section" id="process">
        <div className="container process-layout">
          <ScrollReveal variant="left">
            <div className="process-copy">
              <p className="eyebrow">04 / How it works</p>
              <h2>
                From first conversation <em>to live website.</em>
              </h2>
              <p>
                A clear process makes better projects. We keep every stage focused,
                transparent and easy to understand.
              </p>
              <Link className="button button-light" href="/process">
                Explore our process <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right" delay={150}>
            <div className="steps">
              {[
                ['01', 'Discover', 'We learn about your business, goals, audience and requirements.'],
                ['02', 'Define', 'We establish the scope, direction, timeline and quotation before development begins.'],
                ['03', 'Create', 'We design, build and refine the website around the agreed scope.'],
                ['04', 'Launch', 'We complete final checks, deploy the website and get it ready for the real world.'],
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
              <p>Before you start, here are a few of the questions we hear most often.</p>
            </div>
            <HomePageFAQ />
            <div style={{ marginTop: 32 }}>
              <Link className="text-link" href="/faq">
                View all FAQs <MoveUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-layout">
          <ScrollReveal variant="left">
            <div>
              <p className="eyebrow">06 / Your next project</p>
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
      <FloatingContact />
    </>
  )
}
