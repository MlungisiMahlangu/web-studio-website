import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { packages, addons, maintenancePlans, comparisonFeatures } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for websites starting from R1,500. Clear packages, no hidden costs. Landing pages, business websites, online stores and more.',
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <section className="inner-hero container">
        <p className="eyebrow">Clear from the start</p>
        <h1>
          Premium work,
          <br />
          <em>without the mystery.</em>
        </h1>
        <p>
          Transparent starting points for thoughtful digital experiences. Every
          project receives a tailored scope and quotation.
        </p>
      </section>
      <section className="inner-content container">
        <div className="page-grid">
          {packages.map((pack, i) => (
            <article
              className={`pricing-card ${pack.popular ? 'is-popular' : ''}`}
              key={pack.name}
            >
              {pack.popular && <span className="popular-label">Most popular</span>}
              <div>
                <p className="package-name">{pack.name}</p>
                <h3>{pack.price}</h3>
                <p className="package-description">{pack.description}</p>
                <p style={{ fontSize: 12, color: pack.popular ? '#b7c4bd' : 'var(--muted)', margin: '8px 0 0' }}>
                  {pack.timeframe}
                </p>
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

        <div className="offer-banner">
          <h2>Selected packages include a free .co.za domain for the first year.</h2>
          <p>
            Domain availability is checked before registration. Renewal fees apply
            from year two; hosting and third-party services are always disclosed.
          </p>
        </div>

        <div style={{ marginTop: 100 }}>
          <p className="eyebrow">Add-ons</p>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: 8 }}>
            Extend your project
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: 500, lineHeight: 1.7 }}>
            Add extra features to any package. All add-ons are quoted before work begins.
          </p>
          <div className="addons-grid">
            {addons.map((addon) => (
              <div className="addon-item" key={addon.name}>
                <span>{addon.name}</span>
                <span>{addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 100 }}>
          <p className="eyebrow">Maintenance</p>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: 8 }}>
            Ongoing care
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: 500, lineHeight: 1.7 }}>
            Optional monthly plans to keep your website running smoothly after launch.
          </p>
          <div className="maintenance-grid">
            {maintenancePlans.map((plan) => (
              <div className="maintenance-card" key={plan.name}>
                <h3>{plan.name}</h3>
                <div className="price">
                  {plan.price}
                  <small>/month</small>
                </div>
                <p>{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 100 }}>
          <p className="eyebrow">Compare packages</p>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: 8 }}>
            Side by side
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Landing</th>
                  <th>Portfolio</th>
                  <th>Starter</th>
                  <th>Business</th>
                  <th>Professional</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    {(['landing', 'portfolio', 'starter', 'business', 'professional'] as const).map((col) => {
                      const val = row[col]
                      if (val === true) return <td key={col}><Check style={{ display: 'inline' }} /></td>
                      if (val === false) return <td key={col}>—</td>
                      return <td key={col}>{val}</td>
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="offer-banner" style={{ marginTop: 60 }}>
          <h2>Ready to get started?</h2>
          <p>
            Tell us about your project and we will send a tailored quote with clear
            deliverables and timeline.
          </p>
          <Link className="button button-dark" href="/start-a-project" style={{ marginTop: 24 }}>
            Start your project <ArrowUpRight />
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
