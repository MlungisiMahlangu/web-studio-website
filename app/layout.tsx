import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { STUDIO_NAME, STUDIO_TAGLINE, STUDIO_DESCRIPTION } from '@/lib/constants'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import MobileBar from '@/components/layout/mobile-bar'
import { SmoothScroll } from '@/components/ui/smooth-scroll'
import CookieBanner from '@/components/ui/cookie-banner'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${STUDIO_NAME} — ${STUDIO_TAGLINE}`,
    template: `%s | ${STUDIO_NAME}`,
  },
  description: STUDIO_DESCRIPTION,
  metadataBase: new URL('https://web-in.co.za'),
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    siteName: STUDIO_NAME,
    title: `${STUDIO_NAME} — ${STUDIO_TAGLINE}`,
    description: STUDIO_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F0E8' },
    { media: '(prefers-color-scheme: dark)', color: '#0C0C0E' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased bg-cream text-ink`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <MobileBar />
          <CookieBanner />
        </SmoothScroll>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
