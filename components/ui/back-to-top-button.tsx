'use client'

import { ArrowUpRight } from 'lucide-react'

export function BackToTopButton() {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        // Some environments disable smooth scrolling; make sure we still land at the top.
        window.setTimeout(() => {
          if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: 'instant' })
        }, 600)
      }}
      className="flex items-center gap-1.5 text-white/30 hover:text-white/60 transition-colors duration-200"
      aria-label="Back to top"
    >
      Back to top <ArrowUpRight size={12} />
    </button>
  )
}
