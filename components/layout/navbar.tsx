'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
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
  const isScrolled = mounted && scrollY > 10

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo',
          mounted && isHidden && '-translate-y-full',
        )}
      >
        <div className={clsx(
          'bg-white/95 backdrop-blur-xl transition-all duration-300',
          isScrolled ? 'border-b border-line' : 'border-b border-transparent',  
        )}>
          <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-8 py-4 sm:px-10" aria-label="Main navigation">
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="WEB-IN home">
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-navy leading-none">WEB-IN</span>
                <span className="text-[9px] font-semibold uppercase text-muted leading-none mt-0.5" style={{ letterSpacing: '0.18em' }}>Digital Studio</span>   
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-body hover:text-navy transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-brand after:transition-all after:duration-200 after:w-0 hover:after:w-full"
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
                  'bg-brand text-white hover:bg-brand-hover',
                  'focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2',
                )}
              >
                Start Your Project
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-line transition-colors hover:bg-surface"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu slide-over */}
      <div
        className={clsx(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-out-expo',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      >
        {/* Backdrop */}
        <div
          className={clsx(
            'absolute inset-0 bg-black/20 transition-opacity duration-300',     
            menuOpen ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel */}
        <div
          className={clsx(
            'absolute top-0 right-0 w-[85%] max-w-[360px] h-full bg-white shadow-xl transition-transform duration-300 ease-out-expo',
            menuOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-line">
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-navy leading-none">WEB-IN</span>
              <span className="text-[9px] font-semibold uppercase text-muted leading-none mt-0.5" style={{ letterSpacing: '0.18em' }}>Digital Studio</span>     
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-line"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-body hover:text-navy hover:bg-surface rounded-xl px-4 py-3 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-0 left-0 right-0 border-t border-line p-6 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-brand text-white px-6 py-3.5 text-sm font-medium transition-colors hover:bg-brand-hover"
            >
              Start Your Project <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
