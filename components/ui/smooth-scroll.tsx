'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<import('lenis').default | null>(null)
  const pathname = usePathname()

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

  // Disable browser scroll restoration — every page starts from top
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  // Scroll to top on every pathname change (including initial load, back, forward)
  useEffect(() => {
    // Double rAF ensures scroll fires after page content has rendered
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true })
        }
        window.scrollTo(0, 0)
      })
    })
    return () => cancelAnimationFrame(id)
  }, [pathname])

  return <>{children}</>
}
