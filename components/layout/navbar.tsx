'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { STUDIO_NAME } from '@/lib/constants'
import { useScrollDirection } from '@/components/ui/hooks'
import { clsx } from 'clsx'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isScrolled = scrollY > 50
  const isHidden = scrollDirection === 'down' && scrollY > 400 && !menuOpen

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo',
          mounted && isHidden && '-translate-y-full',
        )}
      >
        <div
          className={clsx(
            'transition-all duration-300 ease-out-expo',
            isScrolled
              ? 'bg-cream/80 backdrop-blur-xl border-b border-line'
              : 'bg-transparent',
          )}
        >
          <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-8 py-4 sm:px-10" aria-label="Main navigation">
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="WEB-IN home">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink text-cream text-sm font-display transition-transform duration-300 group-hover:scale-105">
                W
              </span>
              <span className="font-mono text-xs uppercase tracking-wider hidden sm:inline">{STUDIO_NAME}</span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-ink transition-colors duration-200"
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

      {/* Mobile menu */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-cream transition-all duration-500 ease-out-expo lg:hidden',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-8">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={clsx(
                  'text-3xl font-display py-3 border-b border-line transition-all duration-500 ease-out-expo',
                  menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                )}
                style={{ transitionDelay: menuOpen ? `${100 + i * 60}ms` : '0ms' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div
            className={clsx(
              'mt-auto flex flex-col gap-3 transition-all duration-500 ease-out-expo',
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            )}
            style={{ transitionDelay: menuOpen ? '400ms' : '0ms' }}
          >
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-accent text-white px-6 py-4 text-base font-medium"
            >
              Get a quote <ArrowUpRight size={18} />
            </Link>
            <a
              href={`https://wa.me/${'27649531145'}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-ink/10 px-6 py-4 text-base font-medium"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
