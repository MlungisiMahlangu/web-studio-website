import { Analytics } from '@vercel/analytics/next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import {
  SITE_URL,
  STUDIO_BRAND_LINE,
  STUDIO_DESCRIPTION,
  STUDIO_NAME,
  STUDIO_TAGLINE,
} from '@/lib/constants'
import { buildSiteGraph } from '@/lib/seo'
import { isBlackFridayActive } from '@/lib/promo'
import { JsonLd } from '@/components/seo/json-ld'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { ScrollManager } from '@/components/ui/scroll-manager'
import CookieBanner from '@/components/ui/cookie-banner'
import { PromoExpiryGuard } from '@/components/promo/expiry-guard'
import './globals.css'

// Lets the site-wide announcement bar and promo surfaces switch off on their own.
export const revalidate = 900

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: STUDIO_BRAND_LINE,
    template: `%s | ${STUDIO_NAME}`,
  },
  description: STUDIO_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
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
  ],
  authors: [{ name: STUDIO_NAME, url: SITE_URL }],
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
    title: STUDIO_BRAND_LINE,
    description: STUDIO_DESCRIPTION,
    url: '/',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: STUDIO_BRAND_LINE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: STUDIO_BRAND_LINE,
    description: STUDIO_DESCRIPTION,
    images: ['/opengraph-image'],
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
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/icon-48.png', type: 'image/png', sizes: '48x48' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  category: 'technology',
  other: {
    'geo.region': 'ZA-GP',
    'geo.placename': 'Johannesburg',
    'msvalidate.01': 'D3FCF712105D0A2B18B0442E26B47386',
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
  const promoActive = isBlackFridayActive()

  // The inline script below adds the `js` class before hydration; the mismatch is expected.
  return (
    <html
      lang="en-ZA"
      suppressHydrationWarning
      className={promoActive ? 'promo-active' : undefined}
    >
      <head>
        {/* Progressive enhancement flag: reveal animations only hide content when JS runs. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <JsonLd data={buildSiteGraph()} />

        {/* Fonts are self-hosted by next/font, so no Google Fonts connections are needed. */}
        <link rel="preconnect" href="https://formspree.io" />
        <link rel="dns-prefetch" href="//formspree.io" />
        {process.env.NODE_ENV === 'production' && (
          <link rel="preconnect" href="https://va.vercel-scripts.com" />
        )}

        {/* Resource hints */}
        <meta name="theme-color" content="#FDFCFC" />
      </head>
      <body className={`${jakarta.variable} antialiased bg-background text-body`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-brand focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <ScrollManager>
          {promoActive && <PromoExpiryGuard />}
          <Navbar promoActive={promoActive} />
          <main id="main-content">{children}</main>
          <Footer />
          <CookieBanner />
        </ScrollManager>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
