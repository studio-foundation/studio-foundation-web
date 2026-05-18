import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'studio: — A kernel. An opinion.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background: '#2a2018',
          padding: '72px 80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Dot grid texture — simplified static version for ImageResponse */}
        <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="0.9" fill="#ead9d4" fillOpacity="0.14" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Wordmark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            marginBottom: '24px',
            fontSize: '84px',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          <span style={{ color: '#ead9d4' }}>studio</span>
          <span style={{ color: '#c96442' }}>:</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '28px',
            color: 'rgba(234, 217, 212, 0.6)',
            letterSpacing: '0.04em',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          A kernel. An opinion.
        </div>

        {/* URL */}
        <div
          style={{
            fontSize: '16px',
            color: 'rgba(234, 217, 212, 0.35)',
            letterSpacing: '0.08em',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
          }}
        >
          studio-foundation.org
        </div>
      </div>
    ),
    { ...size },
  );
}
