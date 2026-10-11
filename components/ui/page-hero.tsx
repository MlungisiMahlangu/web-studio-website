import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Container } from './container'
import { Reveal } from './reveal'

interface PageHeroProps {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  buttons?: React.ReactNode
  dark?: boolean
  breadcrumb?: { label: string; href: string }
  compact?: boolean
}

export function PageHero({
  eyebrow,
  title,
  description,
  buttons,
  dark = false,
  breadcrumb,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={
        dark
          ? 'bg-dark-panel text-white relative overflow-hidden'
          : 'bg-surface relative overflow-hidden'
      }
    >
      {/* Subtle blue radial tint */}
      {!dark && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,97,253,0.04) 0%, transparent 70%)',
          }}
        />
      )}
      <Container className={`relative z-10 ${compact ? 'py-10 sm:py-14' : 'py-12 sm:py-16 lg:py-20'}`}>
        {breadcrumb && (
          <Reveal>
            <Link
              href={breadcrumb.href}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest mb-6 transition-colors ${
                dark ? 'text-white/50 hover:text-white/80' : 'text-muted hover:text-navy'
              }`}
            >
              <ArrowLeft className="h-3 w-3" />
              {breadcrumb.label}
            </Link>
          </Reveal>
        )}

        {eyebrow && (
          <Reveal>
            <p
              className="text-xs font-semibold uppercase text-brand mb-4"
              style={{ letterSpacing: '0.14em' }}
            >
              {eyebrow}
            </p>
          </Reveal>
        )}

        <Reveal delay={50}>
          <h1
            className={`font-extrabold leading-tight ${
              dark ? 'text-white' : 'text-navy'
            } ${
              typeof title === 'string'
                ? 'text-hero'
                : ''
            }`}
          >
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal delay={100}>
            <p
              className={`mt-5 max-w-[640px] text-lg leading-relaxed ${
                dark ? 'text-white/60' : 'text-body'
              }`}
            >
              {description}
            </p>
          </Reveal>
        )}

        {buttons && <Reveal delay={150}>{buttons}</Reveal>}
      </Container>
    </section>
  )
}
