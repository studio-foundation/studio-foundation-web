import { useTranslations } from 'next-intl';
import { WarmSection, SectionHeader, FadeIn } from '@arianeguay/design-system';
import TextureGrid from '@/components/system/TextureGrid';
import { PatternYaml1, PatternYaml2, PatternYaml3 } from './PatternYamlPreviews';
import styles from './SectionPatterns.module.css';

const YAML_COMPONENTS = [PatternYaml1, PatternYaml2, PatternYaml3];

export default function SectionPatterns() {
  const t = useTranslations('home.patterns');

  const patterns = [
    { label: t('p1_label'), title: t('p1_title'), body: t('p1_body') },
    { label: t('p2_label'), title: t('p2_title'), body: t('p2_body') },
    { label: t('p3_label'), title: t('p3_title'), body: t('p3_body') },
  ];

  return (
    <WarmSection bg="dark" renderTexture={<TextureGrid variant="base" />}>
      <SectionHeader
        tag={t('tag')}
        title={t('title')}
        lead={t('lead')}
        size="lg"
      />
      <div className={styles.stack}>
        {patterns.map((p, i) => {
          const YamlComponent = YAML_COMPONENTS[i];
          return (
            <FadeIn key={i} delay={i * 80}>
              <div className={styles.pattern}>
                <div className={styles.left}>
                  <p className="t-eyebrow" style={{ marginBottom: 12 }}>{p.label}</p>
                  <h3 className="t-h3" style={{ marginBottom: 16, color: 'var(--color-dark-fg)' }}>{p.title}</h3>
                  <p className="t-body" style={{ color: 'var(--color-dark-fg)' }}>{p.body}</p>
                </div>
                <div className={styles.right}>
                  <YamlComponent />
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </WarmSection>
  );
}
