import { Analytics } from '@vercel/analytics/next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { STUDIO_NAME, STUDIO_TAGLINE, STUDIO_DESCRIPTION } from '@/lib/constants'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { SmoothScroll } from '@/components/ui/smooth-scroll'
import CookieBanner from '@/components/ui/cookie-banner'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${STUDIO_NAME} — ${STUDIO_TAGLINE}`,
    template: `%s | ${STUDIO_NAME}`,
  },
  description: STUDIO_DESCRIPTION,
  metadataBase: new URL('https://www.web-in.co.za'),
  alternates: {
    canonical: 'https://www.web-in.co.za',
  },
  keywords: [
    'website design south africa',
    'web development south africa',
    'website developer johannesburg',
    'affordable websites south africa',
    'professional web design',
    'business website design',
    'ecommerce website south africa',
    'custom web applications',
    'website redesign south africa',
    'landing page design',
    'web studio south africa',
    'mobile-first websites',
    'responsive web design',
    'small business websites',
    'online stores south africa',
  ],
  authors: [{ name: STUDIO_NAME, url: 'https://www.web-in.co.za' }],
  creator: STUDIO_NAME,
  publisher: STUDIO_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    siteName: STUDIO_NAME,
    title: `${STUDIO_NAME} — ${STUDIO_TAGLINE}`,
    description: STUDIO_DESCRIPTION,
    url: 'https://www.web-in.co.za',
    images: [
      {
        url: 'https://www.web-in.co.za/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${STUDIO_NAME} — ${STUDIO_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${STUDIO_NAME} — ${STUDIO_TAGLINE}`,
    description: STUDIO_DESCRIPTION,
    images: ['https://www.web-in.co.za/opengraph-image'],
    creator: '@webin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  category: 'technology',
  other: {
    'geo.region': 'ZA-GP',
    'geo.placename': 'Johannesburg',
    'geo.position': '-26.2041;28.0473',
    'ICBM': '-26.2041, 28.0473',
  },
}

export const viewport: Viewport = {
  themeColor: '#FDFCFC',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} antialiased bg-background text-body`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-brand focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <CookieBanner />
        </SmoothScroll>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
