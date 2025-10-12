import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'CRWD - Descoperă cele mai tari locuri din oraș'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Brand */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            background: 'linear-gradient(90deg, #a855f7 0%, #ec4899 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: 20,
          }}
        >
          CRWD
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 40,
            color: '#d1d5db',
            textAlign: 'center',
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          Descoperă cele mai tari locuri din oraș
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: 24,
            color: '#9ca3af',
            marginTop: 20,
          }}
        >
          Alătură-te waitlist-ului pentru early access
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

