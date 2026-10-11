import { clsx } from 'clsx'

export function Marquee({
  items,
  className,
  reverse,
}: {
  items: string[]
  className?: string
  reverse?: boolean
}) {
  const doubled = [...items, ...items]

  return (
    <div className={clsx('overflow-hidden whitespace-nowrap', className)}>
      <div
        className={clsx(
          'inline-flex gap-8 animate-marquee',
          reverse && 'animate-marquee-reverse',
        )}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-sm font-medium uppercase tracking-wider text-muted shrink-0"
          >
            {item}
            <span className="ml-8 text-brand">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
