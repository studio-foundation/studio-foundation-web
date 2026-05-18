import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono, Ubuntu } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import '@arianeguay/design-system/styles';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  style: ['italic'],
  display: 'swap',
  axes: ['opsz'],
});

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ubuntu',
  display: 'swap',
});

const SITE_URL = process.env.WEBSITE_SITE_URL ?? 'https://studio-foundation.org';

export const metadata: Metadata = {
  title: {
    default: 'studio: — Agentic pipeline runtime',
    template: '%s · studio:',
  },
  description: 'A kernel. An opinion. Studio is a domain-agnostic agentic pipeline runtime with structural validation — strict output contracts, automatic retry, no vendor lock-in.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    siteName: 'studio:',
    title: 'studio: — A kernel. An opinion.',
    description: 'Domain-agnostic agentic pipeline runtime with structural validation.',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'studio: — A kernel. An opinion.',
    description: 'Domain-agnostic agentic pipeline runtime with structural validation.',
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      fr: `${SITE_URL}/fr`,
      'x-default': SITE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable} ${fraunces.variable} ${ubuntu.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
