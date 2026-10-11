import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Container } from './container'
import { Reveal } from './reveal'
import { SITE_URL } from '@/lib/constants'

interface BreadcrumbItem {
  label: string
  href: string
}

interface PageHeroProps {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  buttons?: React.ReactNode
  breadcrumb?: BreadcrumbItem[]
  variant?: 'split' | 'centered'
  aside?: React.ReactNode
  accent?: string
  compact?: boolean
  children?: React.ReactNode
}

function SwooshUnderline({ text }: { text: string }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10 text-brand">{text}</span>
      <svg
        className="absolute left-0 bottom-[-4px] w-full h-[8px] overflow-visible"
        viewBox="0 0 200 8"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 6 C40 2, 80 1, 120 3 C160 5, 180 6, 200 4"
          stroke="#0061FD"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="swoosh-draw"
        />
      </svg>
    </span>
  )
}

function renderTitle(title: React.ReactNode, accent?: string): React.ReactNode {
  if (typeof title !== 'string' || !accent) return title

  const idx = title.indexOf(accent)
  if (idx === -1) return title

  const before = title.slice(0, idx)
  const after = title.slice(idx + accent.length)

  return (
    <>
      {before}
      <SwooshUnderline text={accent} />
      {after}
    </>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  buttons,
  breadcrumb,
  variant = 'centered',
  aside,
  accent,
  compact = false,
  children,
}: PageHeroProps) {
  const isSplit = variant === 'split' && aside

  const breadcrumbJsonLd = breadcrumb
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumb.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.label,
          item: item.href.startsWith('http') ? item.href : `${SITE_URL}${item.href}`,
        })),
      }
    : null

  return (
    <section className="relative overflow-hidden bg-background">
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      {/* Background layers */}
      {/* Vertical gradient: white at top to surface by 240px */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #FFFFFF 0%, #F5F7FB 240px)',
        }}
      />

      {/* Soft blue radial glow - top right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 520px 400px at 85% 0%, rgba(0,97,253,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Faint blue radial glow - bottom left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 400px 300px at 10% 90%, rgba(0,97,253,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(10,20,50,0.06) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          maskImage:
            'radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 70%)',
        }}
      />

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-line pointer-events-none" />

      {/* Content */}
      <Container
        className={`relative z-10 ${
          compact
            ? 'pt-14 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14'
            : 'pt-14 pb-10 sm:pt-18 sm:pb-14 lg:pt-22 lg:pb-20'
        }`}
      >
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <Reveal>
            <nav className="flex items-center gap-1.5 mb-6 text-[13px]" aria-label="Breadcrumb">
              {breadcrumb.map((item, i) => (
                <span key={item.href} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight size={12} className="text-muted shrink-0" />}
                  {i === breadcrumb.length - 1 ? (
                    <span className="font-medium text-navy">{item.label}</span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-muted hover:text-navy transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}

        {isSplit ? (
          /* Split layout */
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
            <div className="max-w-[600px]">
              {eyebrow && (
                <Reveal>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white border border-blue-tint px-3 py-1.5 mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                    <span
                      className="text-xs font-semibold uppercase text-brand"
                      style={{ letterSpacing: '0.14em' }}
                    >
                      {eyebrow}
                    </span>
                  </div>
                </Reveal>
              )}

              <Reveal delay={50}>
                <h1 className="text-hero font-extrabold leading-tight text-navy" style={{ letterSpacing: '-0.02em' }}>
                  {renderTitle(title, accent)}
                </h1>
              </Reveal>

              {description && (
                <Reveal delay={100}>
                  <p className="mt-5 max-w-[540px] text-lg leading-relaxed text-body" style={{ fontSize: '18px' }}>
                    {description}
                  </p>
                </Reveal>
              )}

              {children && <Reveal delay={120}>{children}</Reveal>}

              {buttons && <Reveal delay={150}>{buttons}</Reveal>}
            </div>

            <Reveal variant="right" delay={200}>
              <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
                {aside}
              </div>
            </Reveal>
          </div>
        ) : (
          /* Centered layout */
          <div className="max-w-[760px] mx-auto text-center">
            {eyebrow && (
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-white border border-blue-tint px-3 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  <span
                    className="text-xs font-semibold uppercase text-brand"
                    style={{ letterSpacing: '0.14em' }}
                  >
                    {eyebrow}
                  </span>
                </div>
              </Reveal>
            )}

            <Reveal delay={50}>
              <h1 className="text-hero font-extrabold leading-tight text-navy" style={{ letterSpacing: '-0.02em' }}>
                {renderTitle(title, accent)}
              </h1>
            </Reveal>

            {description && (
              <Reveal delay={100}>
                <p className="mt-5 mx-auto max-w-[640px] text-lg leading-relaxed text-body" style={{ fontSize: '18px' }}>
                  {description}
                </p>
              </Reveal>
            )}

            {children && <Reveal delay={120}>{children}</Reveal>}

            {buttons && <Reveal delay={150}>{buttons}</Reveal>}
          </div>
        )}
      </Container>
    </section>
  )
}
