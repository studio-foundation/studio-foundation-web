import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { PageHero, Button } from '@arianeguay/design-system';
import TextureGrid from '@/components/system/TextureGrid';
import HeroYamlPreview from '@/components/home/HeroYamlPreview';
import SectionThesis from '@/components/home/SectionThesis';
import SectionTradeoffs from '@/components/home/SectionTradeoffs';
import SectionPatterns from '@/components/home/SectionPatterns';
import SectionArchitecture from '@/components/home/SectionArchitecture';
import SectionProducts from '@/components/home/SectionProducts';
import SectionCommons from '@/components/home/SectionCommons';
import SectionClosing from '@/components/home/SectionClosing';
import { GITHUB_URL } from '@/lib/nav';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function HomePage() {
  const t = useTranslations('home.hero');

  return (
    <>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        lead={t('lead')}
        renderTexture={<><TextureGrid variant="strong" /><div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at top right, rgba(201, 100, 66, 0.22), transparent 55%)', pointerEvents: 'none' }} /></>}
        py={[60, 54]}
        ctas={
          <>
            <Button href="#thesis" variant="terra">{t('cta_read')}</Button>
            <Button href={GITHUB_URL} variant="ghost" external>{t('cta_github')}</Button>
          </>
        }
        right={<HeroYamlPreview />}
      />
      <div id="thesis">
        <SectionThesis />
      </div>
      <SectionTradeoffs />
      <SectionPatterns />
      <SectionArchitecture />
      <SectionProducts />
      <SectionCommons />
      <SectionClosing />
    </>
  );
}
