'use client';

import { useState } from 'react';

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        position: 'absolute',
        top: 10,
        right: 12,
        background: copied ? 'var(--color-terra)' : 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 4,
        color: copied ? '#fff' : 'var(--color-dark-fg-dim)',
        cursor: 'pointer',
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        letterSpacing: '0.06em',
        padding: '4px 10px',
        transition: 'background 0.15s, color 0.15s',
      }}
    >
      {copied ? 'COPIED' : 'COPY'}
    </button>
  );
}
