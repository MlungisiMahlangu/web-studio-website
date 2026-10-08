'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react'
import { STUDIO_NAME, WHATSAPP_LINK } from '@/lib/constants'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="announcement">
        <span className="status-dot" /> Independent web development studio · Built in South Africa
      </div>
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <Link className="brand" href="/">
            <span className="brand-mark">/</span>
            {STUDIO_NAME}
          </Link>
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="nav-actions">
            <a className="whatsapp-link" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" /> WhatsApp
            </a>
            <Link className="button button-dark button-small" href="/start-a-project">
              Start your project <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <button
            className="menu-button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <div className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}>
        <div className="mobile-nav-header">
          <Link className="brand" href="/" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">/</span>
            {STUDIO_NAME}
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{ border: 0, background: 'transparent', padding: 8, cursor: 'pointer' }}
          >
            <X />
          </button>
        </div>
        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mobile-nav-cta">
          <Link className="button button-dark" href="/start-a-project" onClick={() => setMenuOpen(false)}>
            Start your project <ArrowUpRight aria-hidden="true" />
          </Link>
          <a
            className="button button-outline"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <MessageCircle aria-hidden="true" /> WhatsApp us
          </a>
        </div>
      </div>
    </>
  )
}
