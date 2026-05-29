import { fullMarkdown } from '@/lib/llms-content';

// Expanded companion to /llms.txt — full page text for both locales inline.
export function GET() {
  const body = [
    '<!-- English -->',
    fullMarkdown('en'),
    '<!-- Français -->',
    fullMarkdown('fr'),
  ].join('\n\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
