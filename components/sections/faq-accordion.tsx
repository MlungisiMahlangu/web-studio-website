'use client'

import { useState, useMemo } from 'react'
import { Search, ArrowUpRight, X } from 'lucide-react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import type { FaqCategory } from '@/lib/constants'

export function FaqPage({ categories }: { categories: FaqCategory[] }) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState('')

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories
    const q = searchQuery.toLowerCase()
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.question.toLowerCase().includes(q) ||
            item.answer.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.items.length > 0)
  }, [categories, searchQuery])

  return (
    <>
      {/* Search */}
      <Section className="py-12 sm:py-16">
        <Container narrow>
          <Reveal>
            <div className="relative">
              <Search
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search your question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-line bg-cream-light py-4 pl-13 pr-12 font-sans text-base text-ink placeholder:text-muted outline-none transition-colors focus:border-accent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-cream-dark text-muted hover:text-ink transition-colors"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* FAQ Sections */}
      {filteredCategories.map((category, idx) => (
        <Section key={category.id} className="py-12 sm:py-16">
          <Container>
            {/* Category header */}
            <Reveal>
              <div className="max-w-3xl mb-8 sm:mb-10">
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">
                  {category.number} / {category.label}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-ink">
                  {category.heading}
                </h2>
                <p className="mt-4 text-lg text-ink-light leading-relaxed">
                  {category.intro}
                </p>
              </div>
            </Reveal>

            {/* Accordion items */}
            <div className="border-t border-line">
              {category.items.map((item) => {
                const key = `${category.id}-${item.question}`
                const isOpen = openItems.has(key)
                return (
                  <div key={key} className="border-b border-line">
                    <button
                      onClick={() => toggleItem(key)}
                      className="flex items-center justify-between w-full py-6 sm:py-7 text-left group cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-lg sm:text-xl text-ink pr-8 group-hover:text-accent transition-colors">
                        {item.question}
                      </span>
                      <span
                        className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-line text-muted group-hover:border-accent group-hover:text-accent transition-colors"
                        aria-hidden="true"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-transform duration-300"
                          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                        >
                          <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="1.5" />
                          <line x1="0" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300 ease-out"
                      style={{
                        maxHeight: isOpen ? '600px' : '0px',
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="pb-7 sm:pb-8 pr-12 max-w-3xl">
                        {item.answer.split('\n\n').map((paragraph, i) => (
                          <p
                            key={i}
                            className="text-base sm:text-lg text-ink-light leading-relaxed mt-0 first:mt-0 [&+&]:mt-4"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Category CTA */}
            {category.cta && (
              <Reveal>
                <div className="mt-8 sm:mt-10">
                  <Link
                    href={category.cta.href}
                    className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent-dark transition-colors"
                  >
                    {category.cta.text}
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </Reveal>
            )}
          </Container>
        </Section>
      ))}

      {/* Still Not Sure */}
      <Section dark className="py-16 sm:py-20 md:py-24">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest uppercase text-cream/50 mb-4">
                Can&apos;t find your answer?
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-cream">
                Your project might be a little different.
              </h2>
              <p className="mt-6 text-lg text-cream/60 leading-relaxed max-w-2xl">
                Not every project fits neatly into a package. If you have a specific
                requirement, unusual idea or existing website you want to improve, tell
                us what you&apos;re working with. We&apos;ll help you understand what is
                possible and what the project would require.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 font-mono text-sm text-ink hover:bg-cream-light transition-colors"
                >
                  Get in touch
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
