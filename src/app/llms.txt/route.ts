import { NAV_HREFS, NAV_KEYS, GITHUB_URL, type NavKey } from '@/lib/nav';
import { localeUrl, mdUrl, type Locale } from '@/lib/llms-content';
import en from '../../../messages/en.json';
import fr from '../../../messages/fr.json';
import { SITE_URL } from '@/lib/site';

type Messages = typeof en;

// Page label + one-line description, sourced from the same messages the
// pages use for their <title>/<meta description> (cf. generateMetadata).
function pageLine(messages: Messages, locale: Locale, key: NavKey): string {
  const label = messages.nav[key];
  const ns = messages[key as keyof Messages] as Record<string, string> | undefined;
  const description =
    key === 'home'
      ? messages.home.hero.lead
      : (ns?.meta_description ?? '');
  return `- [${label}](${localeUrl(locale, NAV_HREFS[key])}): ${description}`;
}

function buildSection(messages: Messages, locale: Locale, heading: string): string {
  const lines = NAV_KEYS.map((key) => pageLine(messages, locale, key));
  return `## ${heading}\n\n${lines.join('\n')}`;
}

export function GET() {
  const mdLinks = NAV_KEYS.map((key) => `- [${en.nav[key]} (Markdown)](${mdUrl('en', key)})`);

  const body = [
    '# studio:',
    '',
    '> Domain-agnostic agentic pipeline runtime with structural validation — strict output contracts, automatic retry, no vendor lock-in.',
    '',
    'Studio runs AI agent pipelines from YAML configuration: declarative stages, contract-based validation, and a retry-driven execution loop (RALPH). Open source under AGPL-3.0, provider-agnostic, designed as a commons rather than a startup.',
    '',
    buildSection(en, 'en', 'Pages (English)'),
    '',
    buildSection(fr, 'fr', 'Pages (Français)'),
    '',
    '## Full text',
    '',
    `- [Full site content](${SITE_URL}/llms-full.txt)`,
    ...mdLinks,
    '',
    '## Resources',
    '',
    `- [Source code](${GITHUB_URL})`,
    `- [Sitemap](${SITE_URL}/sitemap.xml)`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
