'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { STUDIO_NAME } from '@/lib/constants'
import { useScrollDirection } from '@/components/ui/hooks'
import { clsx } from 'clsx'

const navLinks = [
  { label: 'Services', href: '/pricing' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollDirection, scrollY } = useScrollDirection()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isHidden = scrollDirection === 'down' && scrollY > 400 && !menuOpen

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo',
          mounted && isHidden && '-translate-y-full',
        )}
      >
        <div className="bg-cream/80 backdrop-blur-xl border-b border-line">
          <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-8 py-4 sm:px-10" aria-label="Main navigation">
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="WEB-IN home">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink text-cream text-sm font-display transition-transform duration-300 group-hover:scale-105">
                W
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-ink hidden sm:inline">{STUDIO_NAME}</span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-ink/70 hover:text-ink transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className={clsx(
                  'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-out-expo',
                  'bg-accent text-white hover:bg-accent-dark',
                  'focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2',
                )}
              >
                Get a quote
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-ink/10 transition-colors hover:bg-ink/5"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu dropdown */}
      <div
        className={clsx(
          'fixed top-[73px] left-4 right-4 z-40 lg:hidden transition-all duration-300 ease-out-expo',
          menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none',
        )}
      >
        <div className="rounded-2xl bg-cream/95 backdrop-blur-xl border border-line shadow-lg overflow-hidden">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-ink/80 hover:text-ink hover:bg-ink/5 rounded-xl px-4 py-3 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-line p-4 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-accent text-white px-6 py-3 text-sm font-medium transition-colors hover:bg-accent-dark"
            >
              Get a quote <ArrowUpRight size={15} />
            </Link>
            <a
              href={`https://wa.me/${'27649531145'}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-ink/10 px-6 py-3 text-sm font-medium text-ink/70 hover:text-ink hover:bg-ink/5 transition-colors"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
