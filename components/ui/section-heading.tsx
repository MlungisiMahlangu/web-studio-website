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
          'mb-4 font-mono text-xs uppercase tracking-wider',
          light ? 'text-accent' : 'text-muted',
        )}>
          {eyebrow}
        </p>
      )}
      <h2 className={clsx(
        'font-display text-display-md leading-tight tracking-tight',
        light && 'text-cream',
      )}>
        {title}
      </h2>
      {description && (
        <p className={clsx(
          'mt-5 text-lg leading-relaxed',
          light ? 'text-cream/60' : 'text-muted',
        )}>
          {description}
        </p>
      )}
    </div>
  )
}
