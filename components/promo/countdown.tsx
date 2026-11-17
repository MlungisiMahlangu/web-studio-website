'use client'

import { useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { BLACK_FRIDAY, BLACK_FRIDAY_END_MS } from '@/lib/promo-config'

interface CountdownProps {
  className?: string
  tone?: 'light' | 'dark'
}

interface TimeParts {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function splitRemaining(remainingMs: number): TimeParts {
  const total = Math.max(0, Math.floor(remainingMs / 1000))
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  }
}

function twoDigits(value: number) {
  return value.toString().padStart(2, '0')
}

export function PromoCountdown({ className, tone = 'light' }: CountdownProps) {
  const [now, setNow] = useState<number | null>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setReducedMotion(reduced)
    const tick = () => setNow(Date.now())
    tick()
    const interval = window.setInterval(tick, reduced ? 60_000 : 1_000)
    return () => window.clearInterval(interval)
  }, [])

  const remaining = now === null ? null : BLACK_FRIDAY_END_MS - now
  const ended = remaining !== null && remaining <= 0

  if (remaining === null || ended) {
    return (
      <p
        className={clsx(
          'text-sm font-medium',
          tone === 'dark' ? 'text-white/80' : 'text-muted',
          className,
        )}
      >
        {ended ? 'The Black Friday offer has ended.' : `Ends ${BLACK_FRIDAY.endDateLabel}`}
      </p>
    )
  }

  const parts = splitRemaining(remaining)
  const units = [
    { label: 'Days', value: parts.days.toString() },
    { label: 'Hours', value: twoDigits(parts.hours) },
    { label: 'Mins', value: twoDigits(parts.minutes) },
    ...(reducedMotion ? [] : [{ label: 'Secs', value: twoDigits(parts.seconds) }]),
  ]
  const spoken = [
    `${parts.days} days`,
    `${parts.hours} hours`,
    `${parts.minutes} minutes`,
    ...(reducedMotion ? [] : [`${parts.seconds} seconds`]),
  ].join(', ')

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label={`Black Friday ends ${BLACK_FRIDAY.endDateLabel}. ${spoken} remaining.`}
      className={clsx('flex items-end gap-2', className)}
    >
      {units.map((unit) => (
        <div
          key={unit.label}
          className={clsx(
            'flex min-w-[52px] flex-col items-center rounded-lg border px-2 py-1.5',
            tone === 'dark'
              ? 'border-white/15 bg-white/5 text-white'
              : 'border-promo-line bg-white text-navy',
          )}
        >
          <span className="text-base font-bold leading-none tabular-nums">{unit.value}</span>
          <span
            className={clsx(
              'mt-1 text-[10px] font-semibold uppercase leading-none',
              tone === 'dark' ? 'text-white/60' : 'text-muted',
            )}
            style={{ letterSpacing: '0.08em' }}
          >
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}
