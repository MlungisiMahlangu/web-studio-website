import Link from 'next/link'
import { clsx } from 'clsx'
import type { LucideIcon } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  icon?: LucideIcon
  external?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-dark',
  secondary: 'bg-ink text-cream hover:bg-ink-light',
  outline: 'border border-ink/15 text-ink hover:bg-ink/5',
  ghost: 'text-ink hover:bg-ink/5',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  icon: Icon,
  external,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 ease-out-expo',
    'focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2',
    'active:scale-[0.97]',
    variant === 'outline' && 'border-line-dark border',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noreferrer" className={classes}>
          {children}
          {Icon && <Icon size={size === 'sm' ? 14 : 16} className="shrink-0" />}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
        {Icon && <Icon size={size === 'sm' ? 14 : 16} className="shrink-0" />}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
      {Icon && <Icon size={size === 'sm' ? 14 : 16} className="shrink-0" />}
    </button>
  )
}
