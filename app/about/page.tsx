import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Independent web development studio based in South Africa. We build thoughtful websites for ambitious businesses.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="inner-hero container">
        <p className="eyebrow">About the studio</p>
        <h1>
          Small studio.
          <br />
          <em>Serious standards.</em>
        </h1>
        <p>
          Independent, personal and committed to doing the work properly. We build
          websites that help businesses grow.
        </p>
      </section>
      <section className="inner-content container">
        <div className="editorial-list">
          <article>
            <span>01</span>
            <div>
              <h2>A considered partner</h2>
              <p>
                We work closely with ambitious people and growing businesses that want
                a website they can feel proud to share. Every project gets our full
                attention, from the first conversation to launch day and beyond.
              </p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h2>No inflated promises</h2>
              <p>
                We are building something real, so we keep our claims honest, our
                communication clear and our work focused. You will always know what is
                happening with your project and what comes next.
              </p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h2>Built for South Africa</h2>
              <p>
                We understand the local market. From WhatsApp integration to payment
                gateways, .co.za domains to mobile-first design for South African
                users, we build websites that work for the businesses and people who
                use them.
              </p>
            </div>
          </article>
          <article>
            <span>04</span>
            <div>
              <h2>Quality over quantity</h2>
              <p>
                We take on a limited number of projects at a time so that every
                website receives the care it deserves. No templates, no shortcuts, no
                rushed launches.
              </p>
            </div>
          </article>
          <article>
            <span>05</span>
            <div>
              <h2>From idea to production</h2>
              <p>
                Whether you are launching something new or improving what already
                exists, we handle the full journey. Strategy, design, development,
                deployment and ongoing support, all under one roof.
              </p>
            </div>
          </article>
        </div>
        <div className="offer-banner" style={{ marginTop: 80 }}>
          <h2>Let&apos;s build something good together.</h2>
          <p>
            We are always open to hearing about new projects. Tell us what you are
            working on.
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
