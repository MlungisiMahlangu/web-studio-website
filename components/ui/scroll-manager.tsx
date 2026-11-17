'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollManager({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Disable browser scroll restoration — every page starts from top
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  // Scroll to top on pathname change, unless the URL targets an anchor.
  useEffect(() => {
    if (window.location.hash) return

    // Double rAF ensures scroll fires after page content has rendered
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
      })
    })
    return () => cancelAnimationFrame(id)
  }, [pathname])

  return <>{children}</>
}
