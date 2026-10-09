import { ImageResponse } from 'next/og'
import { STUDIO_NAME, STUDIO_TAGLINE } from '@/lib/constants'

export const alt = `${STUDIO_NAME} — ${STUDIO_TAGLINE}`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0C0C0E',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(67, 97, 238, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(67, 97, 238, 0.1) 0%, transparent 50%)',
          color: '#F5F0E8',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100px',
              height: '100px',
              borderRadius: '20px',
              backgroundColor: '#F5F0E8',
              color: '#0C0C0E',
              fontSize: '60px',
              fontWeight: '700',
            }}
          >
            W
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <h1
              style={{
                fontSize: '72px',
                fontWeight: '700',
                letterSpacing: '-0.02em',
                margin: 0,
                textAlign: 'center',
              }}
            >
              {STUDIO_NAME}
            </h1>
            <p
              style={{
                fontSize: '32px',
                fontWeight: '400',
                opacity: 0.7,
                margin: 0,
                textAlign: 'center',
                maxWidth: '800px',
              }}
            >
              {STUDIO_TAGLINE}
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              fontSize: '24px',
              opacity: 0.5,
              marginTop: '20px',
            }}
          >
            <span>Web Development</span>
            <span>•</span>
            <span>South Africa</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
