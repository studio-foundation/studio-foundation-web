import { NAV_HREFS, NAV_KEYS, GITHUB_URL, type NavKey } from '@/lib/nav';
import en from '../../../messages/en.json';
import fr from '../../../messages/fr.json';

const SITE_URL = process.env.WEBSITE_SITE_URL ?? 'https://studio-foundation.org';

type Messages = typeof en;

const localeUrl = (locale: 'en' | 'fr', href: string) => {
  const prefix = locale === 'fr' ? `${SITE_URL}/fr` : SITE_URL;
  return href === '/' ? prefix : `${prefix}${href}`;
};

// Page label + one-line description, sourced from the same messages the
// pages use for their <title>/<meta description> (cf. generateMetadata).
function pageLine(messages: Messages, locale: 'en' | 'fr', key: NavKey): string {
  const label = messages.nav[key];
  const ns = messages[key as keyof Messages] as Record<string, string> | undefined;
  const description =
    key === 'home'
      ? messages.home.hero.lead
      : (ns?.meta_description ?? '');
  return `- [${label}](${localeUrl(locale, NAV_HREFS[key])}): ${description}`;
}

function buildSection(messages: Messages, locale: 'en' | 'fr', heading: string): string {
  const lines = NAV_KEYS.map((key) => pageLine(messages, locale, key));
  return `## ${heading}\n\n${lines.join('\n')}`;
}

export function GET() {
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
