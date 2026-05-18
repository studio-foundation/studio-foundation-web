import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { PageHero, Button } from '@arianeguay/design-system';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <main>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        lead={t('lead')}
        ctas={
          <>
            <Button href="/install" variant="primary">{t('cta_install')}</Button>
            <Button href="/mission" variant="outline">{t('cta_docs')}</Button>
          </>
        }
      />
    </main>
  );
}
