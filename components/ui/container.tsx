import { clsx } from 'clsx'

export function Container({
  children,
  className,
  narrow,
  text,
  style,
}: {
  children: React.ReactNode
  className?: string
  narrow?: boolean
  text?: boolean
  style?: React.CSSProperties
}) {
  return (
    <div
      className={clsx(
        'mx-auto w-full px-8 sm:px-10',
        text ? 'max-w-[680px]' : narrow ? 'max-w-[900px]' : 'max-w-[1280px]',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  )
}
