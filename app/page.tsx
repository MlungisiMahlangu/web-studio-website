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
import { services, packages, faqs, STUDIO_NAME } from '@/lib/constants'
import { HomePageFAQ } from '@/components/sections/homepage-faq'
import { HomeContactForm } from '@/components/forms/home-contact-form'

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

      <section className="proof-strip">
        <div className="container proof-grid">
          <p>Designed around your business</p>
          <p>Mobile-first by default</p>
          <p>Built to convert</p>
          <p>Transparent pricing</p>
        </div>
      </section>

      <section className="section container" id="services">
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
      </section>

      <section className="work-section" id="work">
        <div className="container">
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
          <div className="work-feature">
            <div className="work-art art-one">
              <span className="art-label">Brand / Hospitality</span>
              <div className="art-type">
                SALT
                <br />
                <em>HOUSE</em>
              </div>
              <span className="art-caption">A softer place to land.</span>
            </div>
            <div className="work-art art-two">
              <span className="art-label">Commerce / Objects</span>
              <div className="art-type small">
                FORM
                <br />
                <em>FOLK</em>
              </div>
              <span className="art-caption">Objects with intention.</span>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link className="text-link" href="/work">
              View all work <MoveUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section container" id="pricing">
        <div className="section-intro centered">
          <p className="eyebrow">03 / Clear from the start</p>
          <h2>
            Premium work, <em>without the mystery.</em>
          </h2>
          <p>Clear packages and scope. No confusing agency pricing, no hidden surprises.</p>
        </div>
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
        <p className="pricing-note">
          Need something more specific?{' '}
          <Link href="/pricing">Explore all packages →</Link>
        </p>
      </section>

      <section className="process-section" id="process">
        <div className="container process-layout">
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
        </div>
      </section>

      <section className="section container" id="faq">
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
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-layout">
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
          <HomeContactForm />
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
