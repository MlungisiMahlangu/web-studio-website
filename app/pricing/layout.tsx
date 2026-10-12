import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services & Pricing | Web Development Packages | WEB-IN',
  description: 'Transparent pricing for web development in South Africa. Landing pages, starter sites, business websites, online stores and custom applications.',
  alternates: {
    canonical: `${SITE_URL}/pricing`,
  },
  openGraph: {
    title: 'Services & Pricing | WEB-IN',
    description: 'Websites, online stores and web applications for South African businesses. Clear pricing, no hidden costs.',
    type: 'website',
    url: `${SITE_URL}/pricing`,
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
