import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { PageHero, WarmSection, Button, FadeIn } from '@arianeguay/design-system';
import TextureGrid from '@/components/system/TextureGrid';
import themes from '@/styles/themes.module.css';
import { NAV_HREFS } from '@/lib/nav';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'mission' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
    openGraph: {
      title: t('meta_title'),
      description: t('meta_description'),
    },
  };
}

const SECTIONS = [
  { eyebrow: 's1_eyebrow', title: 's1_title', paragraphs: ['s1_p1', 's1_p2'] as const, bg: 'paper' as const },
  { eyebrow: 's2_eyebrow', title: 's2_title', paragraphs: ['s2_p1', 's2_p2', 's2_p3'] as const, bg: 'paperWarm' as const },
  { eyebrow: 's3_eyebrow', title: 's3_title', paragraphs: ['s3_p1', 's3_p2'] as const, bg: 'paper' as const },
  { eyebrow: 's4_eyebrow', title: 's4_title', paragraphs: ['s4_p1', 's4_p2'] as const, bg: 'paperWarm' as const },
  { eyebrow: 's5_eyebrow', title: 's5_title', paragraphs: ['s5_p1', 's5_p2'] as const, bg: 'paper' as const },
  { eyebrow: 's6_eyebrow', title: 's6_title', paragraphs: ['s6_p1', 's6_p2'] as const, bg: 'paperWarm' as const },
  { eyebrow: 's7_eyebrow', title: 's7_title', paragraphs: ['s7_p1'] as const, bg: 'paper' as const, quote: 's7_quote' as const },
] as const;

export default function MissionPage() {
  const t = useTranslations('mission');

  return (
    <main>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('hero_title')}
        lead={t('hero_lead')}
        renderTexture={<><TextureGrid variant="base" /><div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at top right, rgba(201, 100, 66, 0.22), transparent 55%)', pointerEvents: 'none' }} /></>}
        py={[60, 54]}
      />

      <div className={themes.light}>
        {SECTIONS.map((section) => (
          <WarmSection key={section.title} bg={section.bg} py={62}>
            <div style={{ maxWidth: 720 }}>
              <FadeIn>
                <p className="t-eyebrow" style={{ marginBottom: 16 }}>{t(section.eyebrow)}</p>
                <h2 className="t-h2" style={{ margin: '0 0 20px 0' }}>{t(section.title)}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {section.paragraphs.map((key, i) => (
                    <p
                      key={key}
                      className={i === 0 ? 't-lead' : 't-body'}
                      style={{ margin: 0, color: i === 0 ? 'var(--color-ink)' : 'var(--color-ink-mute)' }}
                    >
                      {t(key)}
                    </p>
                  ))}
                </div>
                {'quote' in section && (
                  <blockquote style={{
                    margin: '24px 0 0 0',
                    paddingLeft: 24,
                    borderLeft: '3px solid var(--color-terra)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.125rem',
                    lineHeight: 1.6,
                    color: 'var(--color-ink)',
                    fontStyle: 'italic',
                  }}>
                    {t(section.quote)}
                  </blockquote>
                )}
              </FadeIn>
            </div>
          </WarmSection>
        ))}

        <WarmSection bg="paperWarm" py={48}>
          <FadeIn>
            <div style={{
              paddingTop: 0,
              borderTop: '1px solid var(--color-rule)',
              paddingBottom: 0,
              maxWidth: 720,
            }}>
              <Button href={NAV_HREFS.charter} variant="ghost">
                {t('link_charter')}
              </Button>
            </div>
          </FadeIn>
        </WarmSection>
      </div>
    </main>
  );
}
