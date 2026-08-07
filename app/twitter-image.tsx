import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Girimurugan — Graphic Designer & UI Designer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: 'linear-gradient(135deg, #0066ff 0%, #0052cc 55%, #003a99 100%)',
          fontFamily: 'system-ui, sans-serif',
          color: '#ffffff',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}
        >
          GIRI.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 52,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              maxWidth: 900,
            }}
          >
            Girimurugan Shanmugasundaram
          </div>
          <div style={{ display: 'flex', fontSize: 30, fontWeight: 600, opacity: 0.95 }}>
            Graphic Designer & UI Designer
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 18, opacity: 0.85 }}>
          Photoshop · Illustrator · After Effects · Figma · Branding
        </div>
      </div>
    ),
    { ...size }
  )
}
