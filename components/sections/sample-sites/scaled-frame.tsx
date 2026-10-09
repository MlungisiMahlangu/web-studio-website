'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

export function ScaledFrame({
  children,
  virtualWidth,
  virtualHeight,
  className = '',
}: {
  children: ReactNode
  virtualWidth: number
  virtualHeight: number
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect
        const newScale = width / virtualWidth
        setScale(newScale)
      }
    })

    observer.observe(el)
    return () => observer.disconnect()
  }, [virtualWidth])

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      style={{ height: virtualHeight * scale }}
    >
      <div
        style={{
          width: virtualWidth,
          height: virtualHeight,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  )
}
