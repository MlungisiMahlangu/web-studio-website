'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import {
  SOCIAL_LINKS,
  STUDIO_EMAIL,
  STUDIO_NAME,
  STUDIO_PHONE,
  STUDIO_SERVICE_AREA,
} from '@/lib/constants'

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Refund Policy', href: '/refund-cancellation-policy' },
]

const serviceLinks = [
  { label: 'Website design Johannesburg', href: '/website-design-johannesburg' },
  { label: 'Web development South Africa', href: '/web-development-south-africa' },
  { label: 'Ecommerce websites', href: '/ecommerce-website-south-africa' },
  { label: 'Affordable website design', href: '/affordable-website-design-south-africa' },
  { label: 'Website redesign', href: '/website-redesign-south-africa' },
  { label: 'What a website costs', href: '/website-cost-south-africa' },
  { label: 'All services and prices', href: '/pricing' },
]

const studioLinks = [
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Work', href: '/work' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-panel text-white">
      <div className="mx-auto max-w-[1280px] px-8 sm:px-10">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 sm:py-20 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-5">
              <span className="text-lg font-extrabold tracking-tight text-white leading-none">WEB-IN</span>
              <span className="text-[9px] font-semibold uppercase text-white/40 leading-none mt-0.5" style={{ letterSpacing: '0.18em' }}>Digital Studio</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-[280px] mb-6">
              Independent web development studio building thoughtful digital
              experiences for businesses in South Africa and beyond.
            </p>
            {SOCIAL_LINKS.length > 0 && (
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {SOCIAL_LINKS.map((profile) => (
                  <li key={profile.url}>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {profile.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-white/40 mb-5" style={{ letterSpacing: '0.14em' }}>What we offer</h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-white/40 mb-5" style={{ letterSpacing: '0.14em' }}>Studio</h4>
            <ul className="flex flex-col gap-3">
              {studioLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NAP block: keep identical to the contact page and the schema. */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-white/40 mb-5" style={{ letterSpacing: '0.14em' }}>Get in touch</h4>
            <address className="not-italic flex flex-col gap-3">
              <span className="text-sm font-medium text-white/80">{STUDIO_NAME}</span>
              <span className="text-sm text-white/50">{STUDIO_SERVICE_AREA}</span>
              <a href={`mailto:${STUDIO_EMAIL}`} className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                {STUDIO_EMAIL}
              </a>
              <a href={`tel:${STUDIO_PHONE.replace(/\s/g, '')}`} className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                {STUDIO_PHONE}
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} WEB-IN. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white/60 transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-white/30 hover:text-white/60 transition-colors duration-200"
            aria-label="Back to top"
          >
            Back to top <ArrowUpRight size={12} />
          </button>
        </div>
      </div>
    </footer>
  )
}
