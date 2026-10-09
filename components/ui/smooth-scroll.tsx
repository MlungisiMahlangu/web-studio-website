'use client'

import { useEffect, useRef } from 'react'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<import('lenis').default | null>(null)

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

  return <>{children}</>
}
