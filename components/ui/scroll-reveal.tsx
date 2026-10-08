'use client'

import { useEffect, useRef } from 'react'

export function ScrollReveal({
  children,
  className = '',
  variant = 'default',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'left' | 'right' | 'scale' | 'stagger'
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const classMap = {
      default: 'reveal',
      left: 'reveal-left',
      right: 'reveal-right',
      scale: 'reveal-scale',
      stagger: 'stagger',
    }

    const revealClass = classMap[variant]
    el.classList.add(revealClass)

    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [variant, delay])

  return <div ref={ref} className={className}>{children}</div>
}
