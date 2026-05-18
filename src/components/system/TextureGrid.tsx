import React from 'react';

interface TextureGridProps {
  variant?: 'base' | 'strong';
}

const VARIANTS = {
  base: { r: 0.8, opacity: 0.18 },
  strong: { r: 1.3, opacity: 0.25 },
};

// Unique IDs to avoid pattern collisions when rendered multiple times on a page
let idCounter = 0;

export default function TextureGrid({ variant = 'base' }: TextureGridProps) {
  const id = React.useId();
  const patternId = `grid-${variant}-${id.replace(/:/g, '')}`;
  const { r, opacity } = VARIANTS[variant];

  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <defs>
        <pattern id={patternId} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r={r} fill="var(--color-dark-fg)" fillOpacity={opacity} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
