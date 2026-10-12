'use client'

import { useState, useMemo } from 'react'
import { Search, ArrowUpRight, X, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { STUDIO_WHATSAPP } from '@/lib/constants'
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
    // Split query into individual words for broader matching
    const words = searchQuery.toLowerCase().split(/\s+/).filter(w => w.length > 1)
    if (words.length === 0) return categories

    // Synonym map — catches common variations users might type
    const synonyms: Record<string, string[]> = {
      'price': ['price', 'pricing', 'cost', 'costs', 'expensive', 'cheap', 'quote', 'rates', 'fee', 'fees', 'how much', 'afford', 'payment', 'pay'],
      'cost': ['price', 'pricing', 'cost', 'costs', 'expensive', 'cheap', 'quote', 'rates', 'fee', 'fees', 'how much', 'afford', 'payment', 'pay'],
      'pay': ['price', 'pricing', 'cost', 'costs', 'payment', 'pay', 'deposit', 'instalment', 'installment'],
      'time': ['time', 'timeline', 'how long', 'duration', 'days', 'weeks', 'turnaround', 'fast', 'quick', 'when'],
      'long': ['time', 'timeline', 'how long', 'duration', 'days', 'weeks', 'turnaround'],
      'domain': ['domain', 'domain name', '.co.za', '.com', 'url', 'web address'],
      'host': ['server', 'domain', 'ssl', 'deploy', 'deployment', 'live', 'online'],
      'logo': ['logo', 'branding', 'brand', 'design'],
      'design': ['design', 'look', 'style', 'layout', 'template', 'theme', 'custom', 'branding', 'logo'],
      'content': ['content', 'text', 'copy', 'writing', 'images', 'photos', 'pictures'],
      'change': ['change', 'edit', 'update', 'modify', 'revision', 'revisions', 'amend'],
      'edit': ['change', 'edit', 'update', 'modify', 'revision', 'revisions'],
      'mobile': ['mobile', 'phone', 'responsive', 'tablet', 'device', 'devices', 'screen'],
      'phone': ['mobile', 'phone', 'responsive', 'tablet', 'cellphone', 'smartphone'],
      'seo': ['seo', 'google', 'search', 'ranking', 'rank', 'found', 'index', 'organic'],
      'google': ['seo', 'google', 'search', 'ranking', 'rank', 'found', 'index'],
      'support': ['support', 'help', 'after', 'maintenance', 'fix', 'bug', 'issue', 'problem'],
      'fix': ['fix', 'bug', 'issue', 'problem', 'broken', 'error', 'support', 'maintenance'],
      'own': ['own', 'ownership', 'code', 'source', 'intellectual property'],
      'code': ['code', 'source code', 'ownership', 'own', 'github', 'repository'],
      'ecommerce': ['ecommerce', 'e-commerce', 'shop', 'store', 'online store', 'sell', 'selling', 'woocommerce', 'payment gateway'],
      'shop': ['ecommerce', 'e-commerce', 'shop', 'store', 'online store', 'sell', 'selling'],
      'store': ['ecommerce', 'e-commerce', 'shop', 'store', 'online store', 'sell', 'selling'],
      'whatsapp': ['whatsapp', 'chat', 'message', 'contact', 'form', 'enquiry'],
      'contact': ['contact', 'whatsapp', 'email', 'form', 'enquiry', 'reach', 'call', 'phone'],
      'start': ['start', 'begin', 'start a project', 'get started', 'kick off', 'commence'],
      'blog': ['blog', 'cms', 'content management', 'article', 'articles', 'posts', 'news'],
      'social': ['social', 'social media', 'facebook', 'instagram', 'twitter', 'linkedin', 'tiktok'],
      'email': ['email', 'e-mail', 'mail', 'inbox', 'contact form'],
      'security': ['security', 'secure', 'ssl', 'https', 'safe', 'po pia', 'po pia', 'privacy', 'data'],
      'po pia': ['po pia', 'po pia', 'privacy', 'protection', 'data', 'gdpr', 'security'],
      'revision': ['revision', 'revisions', 'change', 'changes', 'edit', 'edits', 'round', 'feedback'],
      'website': ['website', 'web site', 'site', 'web', 'page', 'pages'],
      'app': ['app', 'application', 'web app', 'web application', 'platform', 'system'],
      'landing': ['landing', 'landing page', 'one page', 'single page', 'squeeze page'],
      'portfolio': ['portfolio', 'cv', 'resume', 'personal', 'freelancer'],
      'booking': ['booking', 'appointment', 'reservation', 'schedule', 'calendar'],
      'redesign': ['redesign', 'rebuild', 'revamp', 'refresh', 'update', 'new look', 'modernise', 'modernize'],
      'quote': ['quote', 'estimate', 'pricing', 'cost', 'how much', 'price'],
      'deploy': ['deploy', 'deployment', 'launch', 'live', 'publish', 'go live'],
      'launch': ['launch', 'deploy', 'deployment', 'live', 'publish', 'go live'],
      'image': ['image', 'images', 'photo', 'photos', 'picture', 'pictures', 'img'],
      'photo': ['image', 'images', 'photo', 'photos', 'picture', 'pictures'],
      'font': ['font', 'typography', 'text style'],
      'color': ['color', 'colour', 'colors', 'colours', 'palette', 'theme'],
      'colour': ['color', 'colour', 'colors', 'colours', 'palette', 'theme'],
      'money': ['money', 'price', 'cost', 'payment', 'pay', 'afford', 'budget'],
      'budget': ['budget', 'price', 'cost', 'afford', 'cheap', 'expensive', 'money'],
      'package': ['package', 'plan', 'tier', 'option', 'deal', 'bundle'],
      'cancel': ['cancel', 'cancellation', 'refund', 'money back', 'stop'],
      'refund': ['refund', 'money back', 'cancel', 'cancellation', 'return'],
    }

    // Expand search words with synonyms
    const expandedWords = new Set<string>(words)
    for (const word of words) {
      for (const [key, syns] of Object.entries(synonyms)) {
        if (key.includes(word) || syns.some(s => s.includes(word))) {
          syns.forEach(s => expandedWords.add(s))
          expandedWords.add(key)
        }
      }
    }

    const searchFields = (cat: typeof categories[0], item: typeof categories[0]['items'][0]) => {
      const text = [
        item.question,
        item.answer,
        cat.label,
        cat.heading,
        cat.intro,
      ].join(' ').toLowerCase()
      // Match if ANY expanded word is found in any field
      return Array.from(expandedWords).some(word => text.includes(word))
    }

    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) => searchFields(cat, item)),
      }))
      .filter((cat) => cat.items.length > 0)
  }, [categories, searchQuery])

  return (
    <>
      {/* Search + Category Pills */}
      <Section tight>
        <Container narrow>
          <Reveal>
            <div className="space-y-6">
              {/* Search */}
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
                  className="w-full rounded-full border border-line bg-surface py-4 pl-13 pr-12 font-sans text-base text-navy placeholder:text-muted outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-surface text-muted hover:text-navy transition-colors"
                    aria-label="Clear search"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

            </div>
          </Reveal>
        </Container>
      </Section>

      {/* FAQ Sections */}
      {filteredCategories.map((category, idx) => (
        <Section key={category.id} alt={idx % 2 === 1} className="py-12 sm:py-16">
          <Container>
            {/* Category header */}
            <Reveal>
              <div className="max-w-3xl mx-auto mb-8 sm:mb-10 text-center">
                <p className="text-xs font-semibold uppercase text-brand mb-4" style={{ letterSpacing: '0.14em' }}>
                  {category.label}
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-navy">
                  {category.heading}
                </h2>
                <p className="mt-4 text-lg text-body leading-relaxed">
                  {category.intro}
                </p>
              </div>
            </Reveal>

            {/* Accordion items */}
            <div className="max-w-3xl mx-auto space-y-3">
              {category.items.map((item) => {
                const key = `${category.id}-${item.question}`
                const isOpen = openItems.has(key)
                return (
                  <details
                    key={key}
                    open={isOpen}
                    className="group rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 open:shadow-lg open:border-brand/20"
                    onToggle={(e) => {
                      const details = e.currentTarget
                      if (details.open && !isOpen) {
                        toggleItem(key)
                      } else if (!details.open && isOpen) {
                        toggleItem(key)
                      }
                    }}
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-navy list-none">
                      {item.question}
                      <span className="shrink-0 rounded-full bg-surface p-1.5 transition-transform duration-300 group-open:rotate-45">
                        <X size={16} className="text-navy" />
                      </span>
                    </summary>
                    <div className="mt-4 max-w-3xl">
                      {item.answer.split('\n\n').map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-base sm:text-lg text-body leading-relaxed mt-0 first:mt-0 [&+&]:mt-4"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </details>
                )
              })}
            </div>

            {/* Category CTA */}
            {category.cta && (
              <Reveal>
                <div className="mt-8 sm:mt-10 text-center">
                  <Link
                    href={category.cta.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover transition-colors"
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

      {/* Still Have a Question? */}
      <Section>
        <Container>
          <Reveal>
            <div className="max-w-3xl mx-auto rounded-2xl border border-line bg-white shadow-card p-8 sm:p-12 text-center">
              <p className="text-xs font-semibold uppercase text-brand mb-4" style={{ letterSpacing: '0.14em' }}>
                Still have a question?
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-navy mb-6">
                Your project might be a little different.
              </h2>
              <p className="text-lg text-body leading-relaxed max-w-2xl mx-auto mb-8">
                Not every project fits neatly into a package. If you have a specific
                requirement, unusual idea or existing website you want to improve, tell
                us what you're working with.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`https://wa.me/${STUDIO_WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand text-white h-12 px-7 text-sm font-medium transition-all duration-300 hover:bg-brand-hover"
                >
                  <MessageCircle size={16} className="shrink-0" />
                  WhatsApp us
                </a>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-line bg-white text-navy h-12 px-7 text-sm font-medium transition-all duration-300 hover:border-brand/20 hover:shadow-lg"
                >
                  Get a quote
                  <ArrowUpRight size={16} className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
