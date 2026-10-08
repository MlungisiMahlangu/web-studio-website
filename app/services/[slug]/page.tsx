import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Check, Clock, Banknote, Globe } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
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

  const serviceHref = `/contact?service=${encodeURIComponent(detail.name)}`

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="service-hero container">
        <ScrollReveal>
          <p className="eyebrow">{detail.name}</p>
          <h1>
            {detail.intro}
          </h1>
          <p className="service-hero-lede">{detail.description}</p>
          <div className="service-hero-actions">
            <Link className="button button-light" href={serviceHref}>
              {detail.cta} <ArrowUpRight />
            </Link>
            <div className="service-hero-meta">
              <span>
                <Banknote aria-hidden="true" />
                From <strong>{detail.price}</strong>
              </span>
              <span>
                <Clock aria-hidden="true" />
                <strong>{detail.timeframe}</strong>
              </span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* What's included — grouped features */}
      <section className="service-features container">
        <ScrollReveal>
          <div className="section-intro centered">
            <p className="eyebrow">What you get</p>
            <h2>
              All the essentials,
              <br />
              <em>ready to go.</em>
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="stagger" delay={100}>
          <div className="feature-group-grid">
            {detail.featureGroups.map((group) => {
              const Icon = group.icon
              return (
                <div className="feature-group-card" key={group.title}>
                  <div className="feature-group-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <Check aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* Ideal for */}
      <section className="service-ideal container">
        <ScrollReveal>
          <div className="service-ideal-inner">
            <div>
              <p className="eyebrow">Built for</p>
              <h2>
                Is this
                <br />
                <em>right for you?</em>
              </h2>
            </div>
            <ul className="service-ideal-list">
              {detail.idealFor.map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </section>

      {/* Investment */}
      <section className="service-investment container">
        <ScrollReveal>
          <div className="service-investment-card">
            <div>
              <p className="eyebrow" style={{ color: '#9CA3AF' }}>Investment</p>
              <h2 style={{ color: 'white', fontSize: 'clamp(32px, 4vw, 52px)', margin: '12px 0 0' }}>
                {detail.price}
              </h2>
              <p style={{ color: '#9CA3AF', marginTop: 8, fontSize: 15 }}>
                Final scope is confirmed before work begins.
              </p>
            </div>
            <div className="service-investment-details">
              <div>
                <Clock aria-hidden="true" />
                <div>
                  <p style={{ color: '#9CA3AF', fontSize: 12, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Timeline</p>
                  <p style={{ color: 'white', fontSize: 16, margin: '4px 0 0', fontWeight: 600 }}>{detail.timeframe}</p>
                </div>
              </div>
              <div>
                <Globe aria-hidden="true" />
                <div>
                  <p style={{ color: '#9CA3AF', fontSize: 12, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Domain</p>
                  <p style={{ color: 'white', fontSize: 14, margin: '4px 0 0' }}>{detail.domain}</p>
                </div>
              </div>
            </div>
            <Link className="button button-light" href={serviceHref}>
              {detail.cta} <ArrowUpRight />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </>
  )
}
