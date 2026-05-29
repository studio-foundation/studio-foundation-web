import type { MetadataRoute } from 'next';
import { NAV_HREFS, NAV_KEYS } from '@/lib/nav';
import { SITE_URL } from '@/lib/site';

// EN sans préfixe, FR avec /fr — cf. routing `localePrefix: 'as-needed'`
const enUrl = (href: string) => (href === '/' ? SITE_URL : `${SITE_URL}${href}`);
const frUrl = (href: string) => (href === '/' ? `${SITE_URL}/fr` : `${SITE_URL}/fr${href}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return NAV_KEYS.map((key) => {
    const href = NAV_HREFS[key];

    return {
      url: enUrl(href),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: key === 'home' ? 1 : 0.8,
      alternates: {
        languages: {
          en: enUrl(href),
          fr: frUrl(href),
          'x-default': enUrl(href),
        },
      },
    };
  });
}
