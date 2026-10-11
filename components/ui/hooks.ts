'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const update = () => {
      const currentY = window.scrollY
      setScrollY(currentY)

      if (Math.abs(currentY - lastScrollY) > 5) {
        setScrollDir(currentY > lastScrollY ? 'down' : 'up')
        lastScrollY = currentY
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { scrollDirection: scrollDir, scrollY }
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(query)
    setMatches(mql.matches)

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [query])

  return matches
}
