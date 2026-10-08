'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { Search, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import type { FaqCategory } from '@/lib/constants'

export function FaqPage({ categories }: { categories: FaqCategory[] }) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? '')
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const scrollToCategory = (id: string) => {
    setActiveCategory(id)
    const el = sectionRefs.current[id]
    if (el) {
      const offset = 100
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id)
          }
        })
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 }
    )

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [categories])

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
      {/* Category Navigation */}
      <nav className="faq-category-nav container">
        <div className="faq-category-scroll">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={`faq-category-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Search */}
      <div className="faq-search container">
        <div className="faq-search-inner">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search your question..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="faq-search-clear">
              Clear
            </button>
          )}
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="faq-sections container">
        {filteredCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            ref={(el) => { sectionRefs.current[category.id] = el }}
            className="faq-section"
          >
            <div className="faq-section-header">
              <p className="faq-section-label">
                {category.number} / {category.label}
              </p>
              <h2>{category.heading}</h2>
              <p className="faq-section-intro">{category.intro}</p>
            </div>
            <div className="faq-section-accordion">
              {category.items.map((item) => {
                const key = `${category.id}-${item.question}`
                const isOpen = openItems.has(key)
                return (
                  <div key={key} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
                    <button
                      onClick={() => toggleItem(key)}
                      className="faq-accordion-trigger"
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <span className="faq-accordion-icon" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    <div className="faq-accordion-content">
                      <div className="faq-accordion-answer">
                        {item.answer.split('\n\n').map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
              {category.cta && (
                <div className="faq-section-cta">
                  <Link href={category.cta.href}>
                    {category.cta.text} <ArrowUpRight size={16} />
                  </Link>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Still Not Sure */}
      <section className="faq-not-sure container">
        <div className="faq-not-sure-inner">
          <p className="eyebrow">Can&apos;t find your answer?</p>
          <h2>Your project might be a little different.</h2>
          <p>
            Not every project fits neatly into a package. If you have a specific
            requirement, unusual idea or existing website you want to improve, tell
            us what you&apos;re working with. We&apos;ll help you understand what is
            possible and what the project would require.
          </p>
          <Link className="button button-dark" href="/contact">
            Talk to WEB-IN <ArrowUpRight />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="faq-cta container">
        <p className="eyebrow">Ready when you are</p>
        <h2>
          Have a question?
          <br />
          <em>Let&apos;s talk.</em>
        </h2>
        <p>
          If you didn&apos;t find what you were looking for, we&apos;re happy to
          help. Reach out through the contact form or WhatsApp and we&apos;ll get
          back to you.
        </p>
        <div className="faq-cta-actions">
          <Link className="button button-dark" href="/contact">
            Contact WEB-IN <ArrowUpRight />
          </Link>
          <Link className="button button-outline" href="/start-a-project">
            Start Your Project <ArrowUpRight />
          </Link>
        </div>
      </section>
    </>
  )
}
