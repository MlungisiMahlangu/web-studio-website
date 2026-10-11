import { clsx } from 'clsx'

export function Section({
  children,
  className,
  dark,
  alt,
  tight,
  id,
}: {
  children: React.ReactNode
  className?: string
  dark?: boolean
  alt?: boolean
  tight?: boolean
  id?: string
}) {
  return (
    <section
      id={id}
      className={clsx(
        tight ? 'py-8 sm:py-12' : 'py-14 sm:py-16 lg:py-20',
        dark
          ? 'bg-dark-panel text-white'
          : alt
            ? 'bg-surface text-body'
            : 'bg-background text-body',
        className,
      )}
    >
      {children}
    </section>
  )
}
