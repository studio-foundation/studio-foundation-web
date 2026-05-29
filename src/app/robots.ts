import type { MetadataRoute } from 'next';

const SITE_URL = process.env.WEBSITE_SITE_URL ?? 'https://studio-foundation.org';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
