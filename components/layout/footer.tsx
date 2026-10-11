'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import {
  STUDIO_EMAIL,
  STUDIO_PHONE,
  STUDIO_WHATSAPP,
  STUDIO_LOCATION,
} from '@/lib/constants'

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Refund Policy', href: '/refund-cancellation-policy' },
]

const studioLinks = [
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
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
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-white/40 mb-5" style={{ letterSpacing: '0.14em' }}>What we offer</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  View all services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
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

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-white/40 mb-5" style={{ letterSpacing: '0.14em' }}>Get in touch</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={`mailto:${STUDIO_EMAIL}`} className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                  {STUDIO_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${STUDIO_PHONE}`} className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                  {STUDIO_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${STUDIO_WHATSAPP}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-brand hover:text-white transition-colors duration-200"
                >
                  WhatsApp <ArrowUpRight size={12} />
                </a>
              </li>
              <li className="text-sm text-white/40 mt-1">
                {STUDIO_LOCATION}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} WEB-IN. All rights reserved.</p>
          <div className="flex items-center gap-4">
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
