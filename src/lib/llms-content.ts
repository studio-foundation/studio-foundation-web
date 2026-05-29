import { NAV_HREFS, NAV_KEYS, type NavKey } from './nav';
import en from '../../messages/en.json';
import fr from '../../messages/fr.json';

const SITE_URL = process.env.WEBSITE_SITE_URL ?? 'https://studio-foundation.org';

export type Locale = 'en' | 'fr';
const MESSAGES = { en, fr } as const;

// Slug used for the per-page Markdown surface (`/mission.md`, `/index.md`, …).
export const MD_SLUG: Record<NavKey, string> = {
  home: 'index',
  mission: 'mission',
  charter: 'charter',
  install: 'install',
  contribute: 'contribute',
};

// EN at root, FR under /fr — cf. routing `localePrefix: 'as-needed'`.
export function localeUrl(locale: Locale, href: string): string {
  const prefix = locale === 'fr' ? `${SITE_URL}/fr` : SITE_URL;
  return href === '/' ? prefix : `${prefix}${href}`;
}

// FR per-page Markdown lives at `/mission.fr.md` to avoid shadowing the
// dynamic `[locale]` route tree with a literal `fr/` segment.
export function mdUrl(locale: Locale, key: NavKey): string {
  const suffix = locale === 'fr' ? '.fr.md' : '.md';
  return `${SITE_URL}/${MD_SLUG[key]}${suffix}`;
}

type Json = string | string[] | { [k: string]: Json };
type JsonObject = { [k: string]: Json };

// Pure UI chrome (buttons, table headers, link labels, eyebrows, kicker tags,
// meta keys) — dropped so the dump reads as content, not interface strings.
const SKIP_KEY = /(^cta_|_cta$|^col_|^row_|_label$|^link_|^lang$|eyebrow|^tag$|_tag$|^meta_)/;

const cleanup = (s: string) => s.replace(/\s+/g, ' ').replace(/\s+([,.;:!?])/g, '$1').trim();

// The comparison table is the only tabular content; reconstruct it as a real
// Markdown table instead of dumping disconnected cell values.
function renderTradeoffs(t: JsonObject): string {
  const out: string[] = [];
  const title = [t.title_line1, t.title_line2].filter((s): s is string => typeof s === 'string').join(' ');
  if (title) out.push(`## ${cleanup(title)}`);
  if (typeof t.lead === 'string') out.push(t.lead);

  const dims = ['surface', 'validation', 'parallelism', 'license'] as const;
  const frameworks: Array<[string, string]> = [
    ['langgraph', 'LangGraph'],
    ['crewai', 'CrewAI'],
    ['autogen', 'Autogen'],
    ['studio', 'Studio'],
  ];
  const cell = (k: string) => (typeof t[k] === 'string' ? (t[k] as string) : '');
  const header = `| ${[cell('col_framework'), ...dims.map((d) => cell(`col_${d}`))].join(' | ')} |`;
  const separator = `| ${Array(dims.length + 1).fill('---').join(' | ')} |`;
  const rows = frameworks.map(
    ([id, label]) => `| ${[label, ...dims.map((d) => cell(`row_${id}_${d}`))].join(' | ')} |`,
  );
  out.push([header, separator, ...rows].join('\n'));

  if (typeof t.note === 'string') out.push(t.note);
  return out.join('\n\n');
}

function renderObject(obj: JsonObject, blocks: string[]): void {
  // Split-HTML titles (`title_start`, `title_accent`, …) are reassembled.
  const titleParts = Object.entries(obj)
    .filter(([k, v]) => typeof v === 'string' && /^title/.test(k))
    .map(([, v]) => v as string);
  if (titleParts.length) blocks.push(`## ${cleanup(titleParts.join(' '))}`);

  for (const [k, v] of Object.entries(obj)) {
    if (/^title/.test(k)) continue;
    if (typeof v === 'string') {
      if (SKIP_KEY.test(k)) continue;
      if (/(_title|_name)$/.test(k)) blocks.push(`## ${v}`);
      else if (/(^|_)quote$/.test(k)) blocks.push(`> ${v.replace(/\n/g, '\n> ')}`);
      else blocks.push(v);
    } else if (Array.isArray(v)) {
      if (v.length) blocks.push(v.join(' · '));
    } else if ('row_studio_license' in v) {
      blocks.push(renderTradeoffs(v));
    } else {
      renderObject(v, blocks);
    }
  }
}

function pageMeta(messages: typeof en, key: NavKey): { title: string; description: string } {
  if (key === 'home') return { title: messages.meta.title, description: messages.meta.description };
  const ns = messages[key] as unknown as { meta_title: string; meta_description: string };
  return { title: ns.meta_title, description: ns.meta_description };
}

/** Full Markdown for a single page, sourced from the i18n messages. */
export function pageMarkdown(locale: Locale, key: NavKey): string {
  const messages = MESSAGES[locale];
  const { title, description } = pageMeta(messages, key);
  const blocks: string[] = [];
  renderObject(messages[key] as unknown as JsonObject, blocks);

  return (
    [`# ${title}`, `> ${description}`, `Source: ${localeUrl(locale, NAV_HREFS[key])}`, ...blocks].join('\n\n') + '\n'
  );
}

/** Every page concatenated — the expanded companion to /llms.txt. */
export function fullMarkdown(locale: Locale): string {
  const intro = locale === 'fr' ? 'Contenu intégral du site studio:.' : 'Full text of the studio: website.';
  const pages = NAV_KEYS.map((key) => pageMarkdown(locale, key)).join('\n\n---\n\n');
  return [`# studio:`, `> ${intro}`, pages].join('\n\n') + '\n';
}

export function markdownResponse(body: string): Response {
  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
