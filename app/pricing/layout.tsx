import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services & Pricing | Website Design Costs South Africa | WEB-IN',
  description: 'Transparent pricing for website design and development in South Africa. Landing pages from R1,500, business websites from R6,500, online stores from R8,500. Get a free quote.',
  keywords: [
    'website pricing south africa',
    'website design cost',
    'affordable website design',
    'website development pricing',
    'landing page cost',
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
