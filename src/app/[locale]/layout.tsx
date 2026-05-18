import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/system/Header';
import Footer from '@/components/system/Footer';

const SITE_URL = process.env.WEBSITE_SITE_URL ?? 'https://studio-foundation.org';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === 'fr';
  const canonical = isFr ? `${SITE_URL}/fr` : SITE_URL;

  return {
    alternates: {
      canonical,
      languages: {
        en: SITE_URL,
        fr: `${SITE_URL}/fr`,
        'x-default': SITE_URL,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'fr')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div data-theme="dark" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
