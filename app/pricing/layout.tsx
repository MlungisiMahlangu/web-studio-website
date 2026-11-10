import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Website Design Prices South Africa',
  description:
    "WEB-IN's website prices in South Africa: Starter Website R2,500, Business Website from R4,000 and Online Store from R7,000. See the full price list.",
  alternates: alternatesFor('/pricing'),
  openGraph: {
    title: 'Website design prices in South Africa | WEB-IN',
    description:
      'Clear starting prices for business websites, online stores and web applications in South Africa.',
    type: 'website',
    locale: 'en_ZA',
    url: '/pricing',
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
