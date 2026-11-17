import {
  ALTERNATE_NAMES,
  CONTENT_UPDATED,
  KNOWS_ABOUT,
  PRICE_VALID_UNTIL,
  SERVICE_AREAS,
  SITE_URL,
  SOCIAL_LINKS,
  STUDIO_BRAND_LINE,
  STUDIO_COUNTRY,
  STUDIO_DESCRIPTION,
  STUDIO_DESCRIPTION_LONG,
  STUDIO_EMAIL,
  STUDIO_LEGAL_NAME,
  STUDIO_LOCALITY,
  STUDIO_NAME,
  STUDIO_PHONE,
  STUDIO_REGION,
  STUDIO_TAGLINE,
  addons,
  services,
  type FaqItem,
} from './constants'
import { carePlans, carePriceRange } from './care-plans'
import type { Metadata } from 'next'

export const ORG_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`
export const LOCALBUSINESS_ID = `${SITE_URL}/#localbusiness`
export const LOGO_ID = `${SITE_URL}/#logo`
export const CATALOG_ID = `${SITE_URL}/#offer-catalog`

export const serviceId = (slug: string) => `${SITE_URL}/#service-${slug}`
export const offerId = (slug: string) => `${SITE_URL}/#offer-${slug}`
export const careServiceId = (id: string) => `${SITE_URL}/#care-${id}`
export const careOfferId = (id: string) => `${SITE_URL}/#care-offer-${id}`

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  if (!path || path === '/') return `${SITE_URL}/`
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}

export const alternatesFor = (path: string) => {
  const canonical = absoluteUrl(path)
  return {
    canonical,
    languages: {
      'en-ZA': canonical,
      'x-default': canonical,
    },
  }
}

export const OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: STUDIO_BRAND_LINE,
}

// Page-level openGraph objects replace the root one, so every field is repeated here.
export function openGraphFor(
  path: string,
  title: string,
  description: string,
  extra: Record<string, unknown> = {},
): NonNullable<Metadata['openGraph']> {
  return {
    type: 'website',
    siteName: STUDIO_NAME,
    locale: 'en_ZA',
    title,
    description,
    url: absoluteUrl(path),
    images: [OG_IMAGE],
    ...extra,
  } as NonNullable<Metadata['openGraph']>
}

export function twitterFor(title: string, description: string): NonNullable<Metadata['twitter']> {
  return {
    card: 'summary_large_image',
    title,
    description,
    images: ['/opengraph-image'],
  }
}

const postalAddress = {
  '@type': 'PostalAddress',
  addressLocality: STUDIO_LOCALITY,
  addressRegion: STUDIO_REGION,
  addressCountry: STUDIO_COUNTRY,
}

const areaServed = SERVICE_AREAS.map((name) => ({
  '@type': name === 'South Africa' ? 'Country' : name === 'Gauteng' ? 'AdministrativeArea' : 'City',
  name,
}))

const sameAs = SOCIAL_LINKS.length > 0 ? SOCIAL_LINKS.map((profile) => profile.url) : undefined

const offers = [
  ...services.map((service) => ({
    '@type': 'Offer',
    '@id': offerId(service.slug),
    name: service.name,
    price: service.priceValue,
    priceCurrency: 'ZAR',
    availability: 'https://schema.org/InStock',
    priceValidUntil: PRICE_VALID_UNTIL,
    url: `${SITE_URL}/pricing#${service.slug}`,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      ...(service.isFrom
        ? { minPrice: service.priceValue }
        : { price: service.priceValue }),
      priceCurrency: 'ZAR',
      valueAddedTaxIncluded: false,
    },
    itemOffered: { '@id': serviceId(service.slug) },
  })),
  ...addons
    .filter((addon) => addon.priceValue !== null)
    .map((addon, index) => ({
      '@type': 'Offer',
      '@id': `${SITE_URL}/#addon-${index + 1}`,
      name: addon.name,
      price: addon.priceValue,
      priceCurrency: 'ZAR',
      priceValidUntil: PRICE_VALID_UNTIL,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        ...(addon.isFrom ? { minPrice: addon.priceValue } : { price: addon.priceValue }),
        priceCurrency: 'ZAR',
        valueAddedTaxIncluded: false,
      },
      itemOffered: { '@type': 'Service', name: addon.name },
    })),
  ...carePlans.map((plan) => ({
    '@type': 'Offer',
    '@id': careOfferId(plan.id),
    name: `${plan.name} (monthly care plan)`,
    price: plan.priceMonthly,
    priceCurrency: 'ZAR',
    priceValidUntil: PRICE_VALID_UNTIL,
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}/pricing#${plan.id}`,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: plan.priceMonthly,
      priceCurrency: 'ZAR',
      unitText: 'per month',
      billingDuration: 'P1M',
      unitCode: 'MON',
      valueAddedTaxIncluded: false,
    },
    itemOffered: { '@id': careServiceId(plan.id) },
  })),
]

const serviceNodes = services.map((service) => ({
  '@type': 'Service',
  '@id': serviceId(service.slug),
  name: service.name,
  serviceType: service.name,
  description: service.summary,
  url: `${SITE_URL}/pricing#${service.slug}`,
  provider: { '@id': ORG_ID },
  areaServed,
  offers: { '@id': offerId(service.slug) },
}))

const careServiceNodes = carePlans.map((plan) => ({
  '@type': 'Service',
  '@id': careServiceId(plan.id),
  name: plan.name,
  serviceType: 'Website care and management',
  description: `${plan.description} ${plan.emailLabel}.`,
  url: `${SITE_URL}/website-care-management#${plan.id}`,
  provider: { '@id': ORG_ID },
  areaServed,
  offers: { '@id': careOfferId(plan.id) },
}))

export function buildSiteGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: STUDIO_LEGAL_NAME,
        alternateName: ALTERNATE_NAMES,
        url: `${SITE_URL}/`,
        logo: { '@id': LOGO_ID },
        image: { '@id': LOGO_ID },
        description: STUDIO_DESCRIPTION_LONG,
        slogan: STUDIO_TAGLINE,
        email: STUDIO_EMAIL,
        telephone: STUDIO_PHONE,
        address: postalAddress,
        foundingLocation: { '@type': 'Place', address: postalAddress },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: STUDIO_EMAIL,
            telephone: STUDIO_PHONE,
            areaServed: 'ZA',
            availableLanguage: ['en'],
          },
        ],
        areaServed,
        knowsAbout: KNOWS_ABOUT,
        hasOfferCatalog: { '@id': CATALOG_ID },
        ...(sameAs && { sameAs }),
      },
      {
        '@type': 'ImageObject',
        '@id': LOGO_ID,
        url: `${SITE_URL}/logo.png`,
        contentUrl: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
        caption: `${STUDIO_NAME} logo`,
      },
      {
        '@type': 'ProfessionalService',
        '@id': LOCALBUSINESS_ID,
        name: STUDIO_NAME,
        url: `${SITE_URL}/`,
        image: { '@id': LOGO_ID },
        logo: { '@id': LOGO_ID },
        description: STUDIO_DESCRIPTION,
        email: STUDIO_EMAIL,
        telephone: STUDIO_PHONE,
        priceRange: `R2,500 - R10,000+ once-off; care plans ${carePriceRange} per month`,
        currenciesAccepted: 'ZAR',
        paymentAccepted: 'Bank transfer, EFT',
        address: postalAddress,
        areaServed,
        parentOrganization: { '@id': ORG_ID },
        knowsAbout: KNOWS_ABOUT,
        ...(sameAs && { sameAs }),
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: STUDIO_NAME,
        alternateName: ALTERNATE_NAMES,
        description: STUDIO_DESCRIPTION,
        publisher: { '@id': ORG_ID },
        inLanguage: 'en-ZA',
      },
      {
        '@type': 'OfferCatalog',
        '@id': CATALOG_ID,
        name: 'WEB-IN services and prices',
        url: `${SITE_URL}/pricing`,
        numberOfItems: offers.length,
        itemListElement: offers,
      },
      ...serviceNodes,
      ...careServiceNodes,
    ],
  }
}

export function webPageSchema({
  path,
  name,
  description,
  dateModified = CONTENT_UPDATED,
  type = 'WebPage',
}: {
  path: string
  name: string
  description: string
  dateModified?: string
  type?: 'WebPage' | 'CollectionPage' | 'AboutPage' | 'ContactPage' | 'FAQPage'
}) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en-ZA',
    dateModified,
    primaryImageOfPage: { '@id': LOGO_ID },
  }
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(items[items.length - 1].href)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  }
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function servicePageSchema({
  path,
  name,
  description,
  serviceName,
  priceValue,
  isFrom,
}: {
  path: string
  name: string
  description: string
  serviceName: string
  priceValue: number
  isFrom: boolean
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(path)}#service`,
    name,
    description,
    serviceType: serviceName,
    url: absoluteUrl(path),
    provider: { '@id': ORG_ID },
    areaServed,
    offers: {
      '@type': 'Offer',
      price: priceValue,
      priceCurrency: 'ZAR',
      priceValidUntil: PRICE_VALID_UNTIL,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        ...(isFrom ? { minPrice: priceValue } : { price: priceValue }),
        priceCurrency: 'ZAR',
      },
    },
  }
}

export function articleSchema(article: {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SITE_URL}/blog/${article.slug}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    inLanguage: 'en-ZA',
    mainEntityOfPage: { '@id': `${SITE_URL}/blog/${article.slug}#webpage` },
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    image: `${SITE_URL}/opengraph-image`,
    isPartOf: { '@id': WEBSITE_ID },
  }
}

export const priceValidUntil = PRICE_VALID_UNTIL
