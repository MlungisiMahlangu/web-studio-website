'use client'

import { useEffect, useRef, useCallback, useState } from 'react'

interface ScrollState {
  hidden: boolean
  scrolled: boolean
}

export function useScrollDirection() {
  const [state, setState] = useState<ScrollState>({ hidden: false, scrolled: false })
  const lastScrollY = useRef(0)
  const ticking = useRef(false)
  const hiddenRef = useRef(false)
  const scrolledRef = useRef(false)

  const update = useCallback(() => {
    const currentY = window.scrollY
    const delta = currentY - lastScrollY.current
    const absDelta = Math.abs(delta)

    // Always visible within first 80px
    if (currentY <= 80) {
      if (hiddenRef.current) {
        hiddenRef.current = false
        setState((s) => ({ ...s, hidden: false }))
      }
    }
    // Hide on scroll down past 120px (ignore movements under 8px)
    else if (delta > 8 && currentY > 120 && !hiddenRef.current) {
      hiddenRef.current = true
      setState((s) => ({ ...s, hidden: true }))
    }
    // Show on scroll up (any amount over 8px)
    else if (delta < -8 && hiddenRef.current) {
      hiddenRef.current = false
      setState((s) => ({ ...s, hidden: false }))
    }

    // Track scrolled state (after 8px)
    const isScrolled = currentY > 8
    if (isScrolled !== scrolledRef.current) {
      scrolledRef.current = isScrolled
      setState((s) => ({ ...s, scrolled: isScrolled }))
    }

    lastScrollY.current = currentY
    ticking.current = false
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(update)
        ticking.current = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [update])

  return state
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
