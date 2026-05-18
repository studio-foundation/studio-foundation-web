import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono, Ubuntu } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import '@arianeguay/design-system/styles';

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

export const metadata: Metadata = {
  title: {
    default: 'Studio Foundation — Agentic pipeline orchestrator',
    template: '%s · Studio Foundation',
  },
  description: 'Studio is a domain-agnostic agentic pipeline orchestrator. Execute multi-stage LLM workflows with strict output validation and automatic retry.',
  metadataBase: new URL(process.env.WEBSITE_SITE_URL ?? 'https://studio-foundation.org'),
  openGraph: {
    type: 'website',
    siteName: 'Studio Foundation',
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
      className={`${inter.variable} ${jetbrainsMono.variable} ${fraunces.variable} ${ubuntu.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
