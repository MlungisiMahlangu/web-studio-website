import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services & Pricing | Website Design Costs South Africa | WEB-IN',
  description: 'Transparent pricing for website design and development in South Africa. Starter websites from R2,500, business websites from R4,000, online stores from R7,000. Get a free quote.',
  keywords: [
    'website pricing south africa',
    'website design cost',
    'affordable website design',
    'website development pricing',
    'starter website cost',
    'business website price',
    'ecommerce website cost',
    'website quote south africa',
  ],
  alternates: {
    canonical: `${SITE_URL}/pricing`,
  },
  openGraph: {
    title: 'Services & Pricing | WEB-IN',
    description: 'Transparent pricing for website design and development in South Africa. Get a free quote today.',
    type: 'website',
    url: `${SITE_URL}/pricing`,
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
