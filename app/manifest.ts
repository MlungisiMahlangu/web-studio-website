import { MetadataRoute } from 'next'
import { SITE_URL, STUDIO_NAME, STUDIO_TAGLINE } from '@/lib/constants'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${STUDIO_NAME} — Website Design & Development, Johannesburg`,
    short_name: 'WEB-IN',
    description: STUDIO_TAGLINE,
    start_url: '/',
    display: 'standalone',
    background_color: '#FDFCFC',
    theme_color: '#0061FD',
    icons: [
      {
        src: '/icon-48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
    ],
  }
}
