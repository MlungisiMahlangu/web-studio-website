import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Check } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { serviceDetails } from '@/lib/constants'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const detail = serviceDetails[slug]
  if (!detail) return {}
  return {
    title: detail.name,
    description: detail.intro,
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const detail = serviceDetails[slug]
  if (!detail) notFound()

  return (
    <>
      <Navbar />
      <section className="inner-hero container">
        <p className="eyebrow">Services / {detail.name}</p>
        <h1>
          {detail.name}
          <br />
          <em>made properly.</em>
        </h1>
        <p>{detail.intro}</p>
        <Link className="button button-dark" href="/start-a-project">
          {detail.cta} <ArrowUpRight />
        </Link>
      </section>
      <section className="inner-content container detail-layout">
        <div>
          <p className="eyebrow">What&apos;s included</p>
          <h2>
            Everything you need
            <br />
            <em>to launch with confidence.</em>
          </h2>
          <p className="muted-copy" style={{ marginTop: 20 }}>
            {detail.description}
          </p>
          <div style={{ marginTop: 30, display: 'grid', gap: 12 }}>
            <div style={{ fontSize: 13 }}>
              <span style={{ color: 'var(--muted)' }}>Starting from </span>
              <strong style={{ fontSize: 20 }}>{detail.price}</strong>
            </div>
            <div style={{ fontSize: 13 }}>
              <span style={{ color: 'var(--muted)' }}>Typical timeframe </span>
              <strong>{detail.timeframe}</strong>
            </div>
            <div style={{ fontSize: 13, color: 'var(--muted)' }}>
              {detail.domain}
            </div>
          </div>
        </div>
        <div>
          <div className="feature-list">
            {detail.features.map((feature) => (
              <div key={feature}>
                <Check />
                {feature}
              </div>
            ))}
            <div className="price-callout">
              <span>Starting from</span>
              <strong>{detail.price}</strong>
              <small>Final scope is confirmed before work begins.</small>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--accent)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: 16 }}>
            Ready to get started?
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: 500, margin: '0 auto 24px', lineHeight: 1.7 }}>
            Tell us about your project and we will send a tailored quote with clear
            deliverables and timeline.
          </p>
          <Link className="button button-dark" href="/start-a-project">
            {detail.cta} <ArrowUpRight />
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
