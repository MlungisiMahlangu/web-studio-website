import { clsx } from 'clsx'

export function Section({
  children,
  className,
  dark,
  id,
}: {
  children: React.ReactNode
  className?: string
  dark?: boolean
  id?: string
}) {
  return (
    <section
      id={id}
      className={clsx(
        'py-20 sm:py-28 md:py-32',
        dark ? 'bg-ink text-cream' : 'bg-cream text-ink',
        className,
      )}
    >
      {children}
    </section>
  )
}
