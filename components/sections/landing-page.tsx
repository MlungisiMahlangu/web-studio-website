import { Check, ChevronDown } from 'lucide-react'
import type { FaqItem } from '@/lib/constants'
import { faqSchema, servicePageSchema, webPageSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { PageHero } from '@/components/ui/page-hero'
import { CTABand } from '@/components/ui/cta-band'
import { Reveal, RevealStagger } from '@/components/ui/reveal'
import { CostPageCallout } from '@/components/promo/cost-page-callout'
import { isBlackFridayActive } from '@/lib/promo'

export interface LandingSection {
  eyebrow?: string
  heading: string
  paragraphs?: string[]
  points?: string[]
  cards?: { title: string; text: string }[]
  alt?: boolean
}

export interface LandingPageProps {
  path: string
  eyebrow: string
  title: string
  accent?: string
  description: string
  breadcrumbLabel: string
  serviceName: string
  priceValue: number
  isFrom: boolean
  intro: {
    heading: string
    paragraphs: string[]
    points?: string[]
  }
  sections: LandingSection[]
  faqs: FaqItem[]
  cta: {
    eyebrow: string
    title: string
    description: string
    primaryLabel: string
  }
  promoCallout?: boolean
}

export function LandingPage({
  path,
  eyebrow,
  title,
  accent,
  description,
  breadcrumbLabel,
  serviceName,
  priceValue,
  isFrom,
  intro,
  sections,
  faqs,
  cta,
  promoCallout = false,
}: LandingPageProps) {
  const structuredData = [
    webPageSchema({ path, name: title, description }),
    servicePageSchema({ path, name: title, description, serviceName, priceValue, isFrom }),
    faqSchema(faqs),
  ]

  return (
    <>
      <JsonLd data={structuredData} />

      <PageHero
        eyebrow={eyebrow}
        title={title}
        accent={accent}
        description={description}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: breadcrumbLabel, href: path },
        ]}
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20 items-start">
            <Reveal>
              <h2 className="text-display-md leading-tight font-bold text-navy">
                {intro.heading}
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-5 text-lg leading-relaxed text-body">
                {intro.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {intro.points && (
                  <ul className="space-y-3 pt-2">
                    {intro.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-base">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {promoCallout && isBlackFridayActive() && <CostPageCallout />}

      {sections.map((section, index) => (
        <Section key={section.heading} alt={section.alt ?? index % 2 === 0}>
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow={section.eyebrow}
                title={section.heading}
                className="mb-10"
              />
            </Reveal>
            {section.paragraphs && (
              <Reveal delay={60}>
                <div className="max-w-[720px] space-y-5 text-base leading-relaxed text-body sm:text-lg">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            )}
            {section.points && (
              <RevealStagger className="mt-8 grid gap-3 sm:grid-cols-2" stagger={60}>
                {section.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-line bg-white px-5 py-4 shadow-card"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span className="text-sm font-medium text-navy">{point}</span>
                  </div>
                ))}
              </RevealStagger>
            )}
            {section.cards && (
              <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={70}>
                {section.cards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-line bg-white p-7 shadow-card"
                  >
                    <h3 className="text-lg font-bold text-navy">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-body">{card.text}</p>
                  </div>
                ))}
              </RevealStagger>
            )}
          </Container>
        </Section>
      ))}

      <Section alt>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Common questions"
              title="What clients ask before starting"
              className="mb-10"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="max-w-3xl divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
              {faqs.map((faq) => (
                <details key={faq.question} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-navy">
                    {faq.question}
                    <ChevronDown
                      size={18}
                      className="shrink-0 text-muted transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-3 pr-8 text-sm leading-relaxed text-body sm:text-base">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTABand
        eyebrow={cta.eyebrow}
        title={cta.title}
        description={cta.description}
        primaryHref="/contact"
        primaryLabel={cta.primaryLabel}
        secondaryHref="/pricing"
        secondaryLabel="See all prices"
      />
    </>
  )
}
