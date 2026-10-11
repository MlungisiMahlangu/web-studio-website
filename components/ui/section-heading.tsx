import { clsx } from 'clsx'
import type { ReactNode } from 'react'

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  center,
  light,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  className?: string
  center?: boolean
  light?: boolean
}) {
  return (
    <div className={clsx('max-w-[680px]', center && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className={clsx(
          'mb-4 text-xs font-semibold uppercase',
          light ? 'text-brand' : 'text-brand',
        )} style={{ letterSpacing: '0.14em' }}>
          {eyebrow}
        </p>
      )}
      <h2 className={clsx(
        'text-display-md leading-tight font-bold',
        light ? 'text-white' : 'text-navy',
      )}>
        {title}
      </h2>
      {description && (
        <p className={clsx(
          'mt-5 text-lg leading-relaxed',
          light ? 'text-white/60' : 'text-body',
        )}>
          {description}
        </p>
      )}
    </div>
  )
}
