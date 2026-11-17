/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== 'production'
const isVercelPreview = process.env.VERCEL_ENV === 'preview'

// Next.js injects inline bootstrap scripts, so 'unsafe-inline' is required without
// nonce plumbing. 'unsafe-eval' is only needed by the dev toolchain; vercel.live is
// only used by the Vercel preview toolbar.
const scriptSrc = ["'self'", "'unsafe-inline'", 'https://va.vercel-scripts.com']
if (isDev) scriptSrc.push("'unsafe-eval'")
if (isVercelPreview) scriptSrc.push('https://vercel.live')

const connectSrc = [
  "'self'",
  'https://formspree.io',
  'https://formspree.com',
  'https://vitals.vercel-insights.com/v1/vitals',
  'https://*.vercel-analytics.com',
]
if (isVercelPreview) connectSrc.push('https://vercel.live')

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src ${scriptSrc.join(' ')}`,
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self'",
  "img-src 'self' data: blob:",
  `connect-src ${connectSrc.join(' ')}`,
  `frame-src ${isVercelPreview ? 'https://vercel.live' : "'none'"}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' https://formspree.io",
  "object-src 'none'",
].join('; ')

const nextConfig = {
  reactStrictMode: true,

  // The local QA browser reaches the dev server on 127.0.0.1.
  allowedDevOrigins: ['127.0.0.1'],

  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  experimental: {
    // Keep client router cache warm so back/forward navigation is instant.
    staleTimes: {
      dynamic: 30,
      static: 300,
    },
    optimizePackageImports: ['lucide-react'],
  },

  async redirects() {
    return [
      // Retired deployment host: one permanent hop to the canonical www domain.
      // Exact host match only, so preview URLs and localhost are untouched.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'web-in-jet.vercel.app' }],
        destination: 'https://www.web-in.co.za/:path*',
        permanent: true,
      },
      // Canonical host: web-in.co.za -> www.web-in.co.za (308).
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'web-in.co.za' }],
        destination: 'https://www.web-in.co.za/:path*',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/services/:slug',
        destination: '/pricing#pricing-:slug',
        permanent: true,
      },
    ]
  },

  // Security headers live here only. middleware.ts and vercel.json must not duplicate them.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: contentSecurityPolicy,
          },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Timing-Allow-Origin', value: '*' },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'CDN-Cache-Control', value: 'public, s-maxage=31536000, immutable' },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/:file(favicon\\.ico|icon\\.png|icon-48\\.png|icon-192\\.png|apple-icon\\.png|logo\\.png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/screenshots/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ]
  },
}

export default nextConfig
