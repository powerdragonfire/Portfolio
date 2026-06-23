import { ImageResponse } from 'next/og'

import { headline, introduction, name } from '@/config/infoConfig'

export const alt = 'Mihir Gandecha — Co-Founder CTO & Full-Stack Engineer'
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
          display: 'flex',
          width: '100%',
          height: '100%',
          padding: 48,
          background:
            'linear-gradient(135deg, #050505 0%, #101010 45%, #171717 100%)',
          color: '#fafafa',
          fontFamily: 'Inter, Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            borderRadius: 36,
            border: '1px solid rgba(255,255,255,0.12)',
            background:
              'radial-gradient(circle at top left, rgba(255,255,255,0.16), transparent 36%), linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
            padding: 56,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div
              style={{
                fontSize: 26,
                letterSpacing: 5,
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.68)',
              }}
            >
              {name}
            </div>
            <div
              style={{
                maxWidth: 980,
                fontSize: 74,
                lineHeight: 1,
                fontWeight: 700,
                letterSpacing: -3,
              }}
            >
              {headline}
            </div>
            <div
              style={{
                maxWidth: 960,
                fontSize: 32,
                lineHeight: 1.35,
                color: 'rgba(255,255,255,0.78)',
              }}
            >
              {introduction}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 24,
              color: 'rgba(255,255,255,0.72)',
            }}
          >
            <span>Spontai</span>
            <span>mihirgandecha.com</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}