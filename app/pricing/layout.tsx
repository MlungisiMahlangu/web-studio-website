import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Website Design Prices South Africa',
  description:
    "WEB-IN's once-off website prices in South Africa: Starter R2,500, Business from R4,000 and stores from R7,000, plus optional monthly care plans with hosting, business email and support.",
  alternates: alternatesFor('/pricing'),
  openGraph: {
    title: 'Website design prices in South Africa | WEB-IN',
    description:
      'Once-off website development prices, optional monthly website care and a clear explanation of hosting, domains and business email.',
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
