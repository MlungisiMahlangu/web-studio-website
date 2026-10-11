'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<import('lenis').default | null>(null)
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let frameId: number

    const init = async () => {
      const Lenis = (await import('lenis')).default
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 1.5,
      })

      lenisRef.current = lenis

      const raf = (time: number) => {
        lenis.raf(time)
        frameId = requestAnimationFrame(raf)
      }
      frameId = requestAnimationFrame(raf)
    }

    init()

    return () => {
      cancelAnimationFrame(frameId)
      lenisRef.current?.destroy()
    }
  }, [])

  // Disable browser's native scroll restoration so all navigations start from top
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  // Scroll to top on any navigation (skip initial render to preserve refresh position)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    // Use Lenis scrollTo if available, otherwise fall back to native
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return <>{children}</>
}
