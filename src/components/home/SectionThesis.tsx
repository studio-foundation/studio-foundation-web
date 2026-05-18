import { useTranslations } from 'next-intl';
import { WarmSection, SectionHeader, FadeIn } from '@arianeguay/design-system';
import styles from './SectionThesis.module.css';
import themes from '@/styles/themes.module.css';

export default function SectionThesis() {
  const t = useTranslations('home.thesis');

  return (
    <div className={themes.light}>
    <WarmSection bg="cream">
      <SectionHeader
        tag={t('tag')}
        title={t('title')}
        lead={t('lead')}
        size="lg"
      />
      <div className={styles.grid}>
        {([
          { title: t('card1_title'), body: t('card1_body') },
          { title: t('card2_title'), body: t('card2_body') },
          { title: t('card3_title'), body: t('card3_body') },
        ] as const).map((card, i) => (
          <FadeIn key={i} delay={i * 100} style={{ height: '100%' }}>
            <div className={styles.card}>
              <p className="t-eyebrow" style={{ marginBottom: 12 }}>0{i + 1}</p>
              <h3 className="t-h3" style={{ marginBottom: 12 }}>{card.title}</h3>
              <p className="t-body">{card.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </WarmSection>
    </div>
  );
}
