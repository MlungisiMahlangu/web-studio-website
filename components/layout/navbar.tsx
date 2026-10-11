'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Phone, MessageCircle, Mail, X } from 'lucide-react'
import { useScrollDirection } from '@/components/ui/hooks'
import { clsx } from 'clsx'
import { STUDIO_PHONE, STUDIO_WHATSAPP, STUDIO_EMAIL } from '@/lib/constants'

const navLinks = [
  { label: 'Services', href: '/pricing' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const { hidden, scrolled } = useScrollDirection()
  const [mounted, setMounted] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const headerRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  // Mount check
  useEffect(() => {
    setMounted(true)
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  // Close menu on route change
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false)
    }
  }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  // Close menu on Escape
  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        hamburgerRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  // Focus trap in mobile menu
  useEffect(() => {
    if (!menuOpen || !menuRef.current) return

    const menu = menuRef.current
    const focusableElements = menu.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener('keydown', trapFocus)
    firstElement?.focus()

    return () => document.removeEventListener('keydown', trapFocus)
  }, [menuOpen])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [menuOpen])

  // Check if link is active
  const isActive = useCallback(
    (href: string) => {
      if (href === '/pricing') return pathname === '/pricing'
      if (href === '/work') return pathname.startsWith('/work')
      return pathname === href
    },
    [pathname]
  )

  return (
    <>
      <header
        ref={headerRef}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl',
          reducedMotion ? '' : 'transition-transform duration-300 ease-out',
          mounted && hidden && !menuOpen && '-translate-y-full'
        )}
        style={{ height: 'var(--header-h)' }}
      >
        <div
          className="h-full transition-shadow duration-300"
          style={{
            boxShadow: scrolled
              ? '0 1px 0 #E2E8F0, 0 8px 24px rgba(10,20,50,0.06)'
              : '0 1px 0 transparent',
          }}
        >
          <nav
            className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-8 sm:px-10"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="WEB-IN home">
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-navy leading-none">WEB-IN</span>
                <span
                  className="text-[9px] font-semibold uppercase text-muted leading-none mt-0.5"
                  style={{ letterSpacing: '0.18em' }}
                >
                  Digital Studio
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'relative whitespace-nowrap text-[15px] font-medium transition-colors duration-200',
                    isActive(link.href) ? 'text-navy' : 'text-body hover:text-navy'
                  )}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                  <span
                    className={clsx(
                      'absolute bottom-[-4px] left-0 h-[2px] bg-brand transition-transform duration-200 origin-left',
                      isActive(link.href) ? 'scale-x-100' : 'scale-x-0'
                    )}
                    style={{ width: '100%' }}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className={clsx(
                  'group inline-flex items-center gap-2 rounded-full px-5 xl:px-6 h-11 text-[15px] font-medium transition-all duration-300',
                  'bg-brand text-white hover:bg-brand-hover hover:-translate-y-px',
                  'focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2'
                )}
              >
                Start Your Project
                <ArrowUpRight
                  size={16}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              ref={hamburgerRef}
              className="flex lg:hidden items-center justify-center w-11 h-11 rounded-full border border-line transition-colors hover:bg-surface"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="relative w-5 h-5">
                <span
                  className={clsx(
                    'absolute left-0 top-0 w-full h-[2px] bg-navy transition-all duration-300',
                    menuOpen && 'top-[9px] rotate-45'
                  )}
                />
                <span
                  className={clsx(
                    'absolute left-0 top-[9px] w-full h-[2px] bg-navy transition-opacity duration-300',
                    menuOpen && 'opacity-0'
                  )}
                />
                <span
                  className={clsx(
                    'absolute left-0 bottom-0 w-full h-[2px] bg-navy transition-all duration-300',
                    menuOpen && 'bottom-[9px] -rotate-45'
                  )}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu slide-over */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={clsx(
          'fixed inset-0 z-[60] lg:hidden transition-all duration-300 ease-out',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className={clsx(
            'absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300',
            menuOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          className={clsx(
            'absolute top-0 right-0 w-[85%] max-w-[380px] h-full bg-white shadow-xl transition-transform duration-300 ease-out flex flex-col',
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-line">
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-navy leading-none">WEB-IN</span>
              <span
                className="text-[9px] font-semibold uppercase text-muted leading-none mt-0.5"
                style={{ letterSpacing: '0.18em' }}
              >
                Digital Studio
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-line transition-colors hover:bg-surface"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-6 py-4">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    'flex items-center text-[20px] font-medium rounded-xl px-4 py-4 transition-all duration-200 border-b border-line/50',
                    isActive(link.href)
                      ? 'text-brand bg-blue-tint'
                      : 'text-body hover:text-navy hover:bg-surface'
                  )}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  style={{ minHeight: '56px' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t border-line p-6 flex flex-col gap-4">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-center gap-2 rounded-full bg-brand text-white px-6 py-4 text-base font-medium transition-colors hover:bg-brand-hover"
              style={{ minHeight: '56px' }}
            >
              Start Your Project
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <div className="flex items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/${STUDIO_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-line text-body hover:text-brand hover:border-brand/30 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`tel:${STUDIO_PHONE.replace(/\s/g, '')}`}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-line text-body hover:text-brand hover:border-brand/30 transition-colors"
                aria-label="Call"
              >
                <Phone size={18} />
              </a>
              <a
                href={`mailto:${STUDIO_EMAIL}`}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-line text-body hover:text-brand hover:border-brand/30 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
