'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import {
  STUDIO_NAME,
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
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1280px] px-8 sm:px-10">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 sm:py-20 border-b border-line-dark">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-white text-sm font-display">
                W
              </span>
              <span className="font-mono text-xs uppercase tracking-wider">{STUDIO_NAME}</span>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed max-w-[280px] mb-6">
              Independent web development studio building thoughtful digital
              experiences for businesses in South Africa and beyond.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-accent/70">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
              Taking on new projects
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-cream/40 mb-5">What we offer</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-cream/60 hover:text-cream transition-colors duration-200"
                >
                  View all services
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-cream/40 mb-5">Studio</h4>
            <ul className="flex flex-col gap-3">
              {studioLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-cream/60 hover:text-cream transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-cream/40 mb-5">Get in touch</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={`mailto:${STUDIO_EMAIL}`} className="text-sm text-cream/60 hover:text-cream transition-colors duration-200">
                  {STUDIO_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${STUDIO_PHONE}`} className="text-sm text-cream/60 hover:text-cream transition-colors duration-200">
                  {STUDIO_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${STUDIO_WHATSAPP}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-dark transition-colors duration-200"
                >
                  WhatsApp <ArrowUpRight size={12} />
                </a>
              </li>
              <li className="text-sm text-cream/40 mt-1">
                {STUDIO_LOCATION}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs text-cream/30">
          <p>&copy; {new Date().getFullYear()} {STUDIO_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-cream/60 transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-cream/30 hover:text-cream/60 transition-colors duration-200"
            aria-label="Back to top"
          >
            Back to top <ArrowUpRight size={12} />
          </button>
        </div>
      </div>
    </footer>
  )
}
