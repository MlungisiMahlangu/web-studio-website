import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services & Pricing | Web Development Packages | WEB-IN',
  description: 'Transparent pricing for professional websites in South Africa. Starter sites from R4,500, professional sites, online stores, landing pages and custom web applications.',
  alternates: {
    canonical: `${SITE_URL}/pricing`,
  },
  openGraph: {
    title: 'Services & Pricing | WEB-IN',
    description: 'Transparent pricing for professional websites. Starter sites from R4,500. Business sites, portfolios, e-commerce and custom apps.',
    type: 'website',
    url: `${SITE_URL}/pricing`,
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
