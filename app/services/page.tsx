import Link from 'next/link'
import { ArrowUpRight, CircleArrowOutUpRight } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { services } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Business websites, portfolio websites, landing pages, booking websites, online stores, custom web applications and website redesigns.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <section className="inner-hero container">
        <p className="eyebrow">What we build</p>
        <h1>
          Digital work with
          <br />
          <em>purpose.</em>
        </h1>
        <p>
          From a focused landing page to a feature-rich company website, we balance
          strong visual direction with a clear next step.
        </p>
        <Link className="button button-dark" href="/start-a-project">
          Start your project <ArrowUpRight />
        </Link>
      </section>
      <section className="inner-content container">
        <div className="services-grid" style={{ marginTop: 0 }}>
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
        <div className="offer-banner">
          <h2>Not sure which service fits?</h2>
          <p>
            Tell us about your project and we will recommend the right approach.
            Every project receives a tailored scope and transparent quote.
          </p>
          <Link className="button button-dark" href="/start-a-project" style={{ marginTop: 24 }}>
            Start a conversation <ArrowUpRight />
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
