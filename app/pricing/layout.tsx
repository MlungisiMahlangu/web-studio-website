import type { Metadata } from 'next'
import { alternatesFor, openGraphFor, twitterFor } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Website Design Prices South Africa',
  description:
    'Once-off website design prices, optional monthly care, and clear answers on hosting, domains and business email.',
  alternates: alternatesFor('/pricing'),
  openGraph: openGraphFor(
    '/pricing',
    'Website Design Prices South Africa',
    'Once-off website design prices, optional monthly care, and clear answers on hosting, domains and business email.',
  ),
  twitter: twitterFor(
    'Website Design Prices South Africa',
    'Once-off website prices, optional monthly care and a clear explanation of hosting, domains and business email.',
  ),
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
