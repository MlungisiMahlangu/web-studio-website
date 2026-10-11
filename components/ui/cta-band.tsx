import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Container } from './container'
import { Section } from './section'
import { Reveal } from './reveal'

interface CTABandProps {
  eyebrow?: string
  title: string
  description: string
  primaryHref: string
  primaryLabel: string
  secondaryHref?: string
  secondaryLabel?: string
}

export function CTABand({
  eyebrow = 'Ready to begin?',
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTABandProps) {
  return (
    <Section dark>
      <Container className="relative z-10">
        <Reveal>
          <div className="max-w-[700px] mx-auto text-center">
            {eyebrow && (
              <p
                className="text-xs font-semibold uppercase text-brand mb-6"
                style={{ letterSpacing: '0.14em' }}
              >
                {eyebrow}
              </p>
            )}
            <h2 className="text-display-lg leading-tight font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              {description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={primaryHref}
                className="group inline-flex items-center gap-2 rounded-full bg-brand text-white h-12 px-8 text-base font-medium transition-all duration-300 hover:bg-brand-hover"
              >
                {primaryLabel}
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              {secondaryHref && secondaryLabel && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 text-white/70 h-12 px-6 text-sm font-medium transition-all duration-300 hover:border-white/30 hover:text-white"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
