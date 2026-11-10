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
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
    ],
  }
}
