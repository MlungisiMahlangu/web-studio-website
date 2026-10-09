'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { clsx } from 'clsx'

type RevealVariant = 'up' | 'fade' | 'scale' | 'left' | 'right'

export function Reveal({
  children,
  variant = 'up',
  delay = 0,
  className,
  once = true,
}: {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  className?: string
  once?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  const variantClasses: Record<RevealVariant, string> = {
    up: 'translate-y-6',
    fade: '',
    scale: 'scale-[0.97]',
    left: 'translate-x-6',
    right: '-translate-x-6',
  }

  return (
    <div
      ref={ref}
      className={clsx(
        'transition-all duration-700 ease-out-expo',
        isVisible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : `opacity-0 ${variantClasses[variant]}`,
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
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
        <Reveal key={i} delay={i * stagger}>
          {child}
        </Reveal>
      ))}
    </div>
  )
}
