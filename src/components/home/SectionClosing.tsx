import { useTranslations } from 'next-intl';
import { WarmSection, Button, FadeIn } from '@arianeguay/design-system';
import TextureGrid from '@/components/system/TextureGrid';
import { GITHUB_URL, NAV_HREFS } from '@/lib/nav';
import styles from './SectionClosing.module.css';

export default function SectionClosing() {
  const t = useTranslations('home.closing');

  return (
    <WarmSection bg="dark" py={62} renderTexture={<TextureGrid variant="strong" />}>
      <FadeIn>
        <div className={styles.inner}>
          <h2 className="t-h2" style={{ color: 'var(--color-dark-fg)', marginBottom: 28 }}>
            {t('title_start')}
            <strong>{t('title_bold')}</strong>
          </h2>
          <div className={styles.ctas}>
            <Button href={GITHUB_URL} variant="terra" external>
              {t('cta_github')}
            </Button>
            <Button href={NAV_HREFS.mission} variant="outline" onDark>
              {t('cta_mission')}
            </Button>
          </div>
        </div>
      </FadeIn>
    </WarmSection>
  );
}
