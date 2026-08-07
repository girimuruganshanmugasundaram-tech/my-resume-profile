import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Girimurugan — Graphic Designer & UI Designer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
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
          background: 'linear-gradient(135deg, #e8f1ff 0%, #ffffff 45%, #dce9ff 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: 12,
              background: '#0066ff',
              color: '#ffffff',
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            G
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              fontWeight: 800,
              color: '#1a1a2e',
              letterSpacing: '-0.02em',
            }}
          >
            GIRI<span style={{ color: '#0066ff' }}>.</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 56,
              fontWeight: 800,
              color: '#1a1a2e',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              maxWidth: 900,
            }}
          >
            Girimurugan Shanmugasundaram
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 32,
              fontWeight: 600,
              color: '#0066ff',
            }}
          >
            Graphic Designer & UI Designer
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              color: '#5a6577',
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            Adobe Suite · Motion Graphics · Branding · UI Design
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 18,
            color: '#5a6577',
          }}
        >
          <span>Salem, Tamil Nadu</span>
          <span style={{ color: '#0066ff', fontWeight: 600 }}>Portfolio</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
