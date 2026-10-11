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
    // Scroll to top only on actual navigation (pathname change)
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
