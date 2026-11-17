'use client'

import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { clsx } from 'clsx'

type RevealVariant = 'up' | 'fade' | 'scale' | 'left' | 'right'

const MAX_DELAY = 400

function isInOrAboveViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  return rect.top < window.innerHeight && rect.bottom >= 0
}

export function Reveal({
  children,
  variant = 'up',
  delay = 0,
  className,
  once = true,
  immediate = false,
}: {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  className?: string
  once?: boolean
  immediate?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(immediate)
  const delayMs = Math.min(delay, MAX_DELAY)

  // useLayoutEffect runs before paint, so above-the-fold content never flashes hidden.
  useLayoutEffect(() => {
    if (immediate) return
    const el = ref.current
    if (!el) return

    setIsVisible((visible) => visible || isInOrAboveViewport(el))

    let observer: IntersectionObserver | null = null
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setIsVisible(true)
              if (once) observer?.unobserve(el)
            } else if (!once) {
              setIsVisible(false)
            }
          }
        },
        // Threshold 0: tall sections and short screens still trigger. No negative
        // margin so content at the very bottom edge becomes visible immediately.
        { threshold: 0.01 },
      )
      observer.observe(el)
    }

    const recheck = () => setIsVisible((visible) => visible || isInOrAboveViewport(el))

    // A missed observer event must never leave content hidden.
    const failsafe = window.setTimeout(() => setIsVisible(true), 1200)

    const onVisibilityChange = () => {
      if (!document.hidden) recheck()
    }
    window.addEventListener('webin:recheck-reveals', recheck)
    window.addEventListener('pageshow', recheck)
    window.addEventListener('hashchange', recheck)
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      observer?.disconnect()
      window.clearTimeout(failsafe)
      window.removeEventListener('webin:recheck-reveals', recheck)
      window.removeEventListener('pageshow', recheck)
      window.removeEventListener('hashchange', recheck)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [immediate, once])

  return (
    <div
      ref={ref}
      data-reveal={variant}
      data-visible={isVisible ? 'true' : undefined}
      className={clsx(
        'transition-[opacity,transform] duration-700 ease-out-expo motion-reduce:transition-none',
        isVisible && 'opacity-100 translate-x-0 translate-y-0 scale-100',
        className,
      )}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  )
}

export function RevealStagger({
  children,
  className,
  stagger = 100,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  const items = Array.isArray(children) ? children : [children]

  return (
    <div className={className}>
      {items.map((child, i) => (
        <Reveal key={i} delay={Math.min(i * stagger, MAX_DELAY)}>
          {child}
        </Reveal>
      ))}
    </div>
  )
}
