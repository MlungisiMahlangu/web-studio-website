import { clsx } from 'clsx'

export function Section({
  children,
  className,
  dark,
  tight,
  id,
}: {
  children: React.ReactNode
  className?: string
  dark?: boolean
  tight?: boolean
  id?: string
}) {
  return (
    <section
      id={id}
      className={clsx(
        tight ? 'py-8 sm:py-12' : 'py-12 sm:py-16 lg:py-20',
        dark ? 'bg-ink text-cream' : 'bg-cream text-ink',
        className,
      )}
    >
      {children}
    </section>
  )
}
