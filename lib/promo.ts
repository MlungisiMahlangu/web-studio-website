import { services, type FaqItem } from './constants'
import { BLACK_FRIDAY, formatZAR, isBlackFridayActive } from './promo-config'

export {
  BLACK_FRIDAY,
  BLACK_FRIDAY_END_MS,
  formatZAR,
  isBlackFridayActive,
  isBlackFridayOver,
} from './promo-config'

export type PromoPackageSlug =
  | 'starter-website'
  | 'business-website'
  | 'online-store'
  | 'custom-web-application'

interface DealDefinition {
  slug: PromoPackageSlug
  price: number
  isFrom: boolean
}

// Normal prices are read from lib/constants.ts. Only the campaign price lives here.
const DEAL_DEFINITIONS: DealDefinition[] = [
  { slug: 'starter-website', price: 1999, isFrom: false },
  { slug: 'business-website', price: 3499, isFrom: false },
  { slug: 'online-store', price: 6399, isFrom: false },
  { slug: 'custom-web-application', price: 9299, isFrom: true },
]

export function normalPriceLabel(priceValue: number, isFrom: boolean): string {
  return `${isFrom ? 'From ' : ''}${formatZAR(priceValue)}`
}

export interface PromoDeal {
  slug: PromoPackageSlug
  name: string
  tagline: string
  summary: string
  price: number
  priceLabel: string
  isFrom: boolean
  normalPrice: number
  normalLabel: string
  normalFrom: boolean
  savingLabel: string
  priceAriaLabel: string
  includes: string[]
  contactHref: string
  pricingHref: string
}

function buildDeal(definition: DealDefinition): PromoDeal {
  const service = services.find((item) => item.slug === definition.slug)
  if (!service) {
    throw new Error(`Unknown promo package: ${definition.slug}`)
  }

  const normalLabel = normalPriceLabel(service.priceValue, service.isFrom)
  const priceLabel = formatZAR(definition.price)
  const saving = service.priceValue - definition.price
  const savingLabel = `${service.isFrom ? 'Save from ' : 'Save '}${formatZAR(saving)}`
  const priceAriaLabel = `Normal price ${service.isFrom ? 'from ' : ''}${formatZAR(service.priceValue)}. Black Friday price ${definition.isFrom ? 'from ' : ''}${priceLabel}, once-off.`

  return {
    slug: definition.slug,
    name: service.name,
    tagline: service.tagline,
    summary: service.summary,
    price: definition.price,
    priceLabel,
    isFrom: definition.isFrom,
    normalPrice: service.priceValue,
    normalLabel,
    normalFrom: service.isFrom,
    savingLabel,
    priceAriaLabel,
    includes: service.included.filter((item) => !item.endsWith(':')).slice(0, 4),
    contactHref: `/contact?build=${definition.slug}&deal=${BLACK_FRIDAY.anchorId}`,
    pricingHref: `/pricing#${BLACK_FRIDAY.anchorId}`,
  }
}

export const promoDeals: PromoDeal[] = DEAL_DEFINITIONS.map(buildDeal)

export function getPromoDeal(slug: string | null | undefined): PromoDeal | undefined {
  if (!slug) return undefined
  return promoDeals.find((deal) => deal.slug === slug)
}

const dealPricePhrase = promoDeals
  .map(
    (deal) =>
      `${deal.name} ${deal.isFrom ? 'from ' : ''}${deal.priceLabel} (normal price ${deal.isFrom ? 'from ' : ''}${formatZAR(deal.normalPrice)})`,
  )
  .join(', ')

export const blackFridayFaq: FaqItem = {
  question: 'How does the Black Friday offer work?',
  answer: `Four once-off packages are reduced until ${BLACK_FRIDAY.endDateLabel}, limited to ${BLACK_FRIDAY.slotsTotal} projects: ${dealPricePhrase}. Website Redesign, add-ons, domains and monthly care plans are not included. Scope, timelines, revisions and support stay as listed for each package, and normal prices apply again after the offer ends.`,
}

export function withBlackFridayFaq(faqs: FaqItem[]): FaqItem[] {
  return isBlackFridayActive() ? [blackFridayFaq, ...faqs] : faqs
}

export function promoDealForBuild(build: string | null | undefined): PromoDeal | undefined {
  if (!build) return undefined
  const key = build.trim().toLowerCase().replace(/[^a-z0-9]+/g, ' ')
  const aliases: Record<string, PromoPackageSlug> = {
    'starter website': 'starter-website',
    'business website': 'business-website',
    'online store': 'online-store',
    'custom web application': 'custom-web-application',
  }
  const slug = aliases[key]
  return slug ? getPromoDeal(slug) : undefined
}
