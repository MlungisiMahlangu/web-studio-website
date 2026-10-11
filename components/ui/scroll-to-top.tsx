'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollToTop() {
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  useEffect(() => {
    // Skip scroll-to-top on initial page load (let browser restore scroll position)
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    // Scroll to top on navigation - use instant scroll to avoid Lenis interference
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return null
}
