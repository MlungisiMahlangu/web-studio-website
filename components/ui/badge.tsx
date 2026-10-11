import { clsx } from 'clsx'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'brand'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variant === 'brand'
          ? 'bg-brand text-white'
          : 'bg-surface text-body',
        className,
      )}
    >
      {children}
    </span>
  )
}
