import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'WEB-IN — Professional Web Development Studio',
    short_name: 'WEB-IN',
    description: 'Professional website design and development studio in South Africa. We build modern, fast, mobile-first websites, online stores and web applications.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FDFCFC',
    theme_color: '#4361EE',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/icon-dark-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
