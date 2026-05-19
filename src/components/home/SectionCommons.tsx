import { useTranslations } from 'next-intl';
import { WarmSection, SectionHeader, Button, FadeIn } from '@arianeguay/design-system';
import { NAV_HREFS } from '@/lib/nav';
import styles from './SectionCommons.module.css';
import themes from '@/styles/themes.module.css';

export default function SectionCommons() {
  const t = useTranslations('home.commons');

  const mechanisms = [
    { title: t('mech1_title'), body: t('mech1_body') },
    { title: t('mech2_title'), body: t('mech2_body') },
    { title: t('mech3_title'), body: t('mech3_body') },
  ];

  return (
    <div className={themes.light}>
    <WarmSection bg="cream" py={62}>
      <SectionHeader
        tag={t('tag')}
        title={
          <>
            {t('title_start')}
            <em>{t('title_commons')}</em>
            {t('title_mid')}
            <em>{t('title_startup')}</em>
            {t('title_end')}
          </>
        }
        size="lg"
      />
      <div className={styles.layout}>
        <FadeIn>
          <div className={styles.left}>
            <p className="t-lead-sm" style={{ marginBottom: 32 }}>{t('left_body')}</p>
            <Button href={NAV_HREFS.charter} variant="terra">{t('left_cta')}</Button>
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <div className={styles.right}>
            <p className="t-eyebrow" style={{ marginBottom: 24 }}>{t('right_tag')}</p>
            <div className={styles.mechanisms}>
              {mechanisms.map((m, i) => (
                <div key={i} className={styles.mechanism}>
                  <h4 className={styles.mechTitle}>{m.title}</h4>
                  <p className="t-body">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
      <FadeIn delay={200}>
        <blockquote className={styles.quote}>
          <p className="t-quote">
            {t('quote_before')}
            <em className="t-accent-serif">{t('quote_accent')}</em>
            {t('quote_after')}
          </p>
        </blockquote>
      </FadeIn>
    </WarmSection>
    </div>
  );
}
