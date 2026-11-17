'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

function recheckReveals() {
  window.dispatchEvent(new Event('webin:recheck-reveals'))
}

// Native hash jumps are smooth-scrolled by CSS, and hydration can interrupt that
// scroll before it lands. Scroll explicitly and instantly instead.
function scrollToHash() {
  const { hash } = window.location
  if (!hash) return false

  let id = hash.slice(1)
  try {
    id = decodeURIComponent(id)
  } catch {
    // Keep the raw hash if it is not valid percent-encoding.
  }

  const target = document.getElementById(id)
  if (!target) return false

  target.scrollIntoView({ behavior: 'instant', block: 'start' })
  recheckReveals()
  return true
}

export function ScrollManager({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  useEffect(() => {
    const onPageShow = () => {
      if (!scrollToHash()) recheckReveals()
    }
    const onHashChange = () => scrollToHash()
    const onVisibilityChange = () => {
      if (!document.hidden) recheckReveals()
    }

    window.addEventListener('pageshow', onPageShow)
    window.addEventListener('hashchange', onHashChange)
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => {
      window.removeEventListener('pageshow', onPageShow)
      window.removeEventListener('hashchange', onHashChange)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  // Reset scroll on navigation, or land on the anchor once the new page has laid out.
  useEffect(() => {
    let timeout: number | undefined

    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!scrollToHash()) {
          window.scrollTo({ top: 0, behavior: 'instant' })
        }
        recheckReveals()

        // Re-run once more after fonts/images settle the layout.
        timeout = window.setTimeout(() => {
          if (!scrollToHash()) recheckReveals()
        }, 250)
      })
    })

    return () => {
      cancelAnimationFrame(id)
      if (timeout) window.clearTimeout(timeout)
    }
  }, [pathname])

  return <>{children}</>
}
