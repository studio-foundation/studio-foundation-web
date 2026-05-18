import { useTranslations } from 'next-intl';
import { WarmSection, SectionHeader, FadeIn } from '@arianeguay/design-system';
import TextureGrid from '@/components/system/TextureGrid';
import styles from './SectionArchitecture.module.css';

export default function SectionArchitecture() {
  const t = useTranslations('home.architecture');

  const packages = [
    { name: t('contracts_name'), desc: t('contracts_desc') },
    { name: t('anonymizer_name'), desc: t('anonymizer_desc') },
    { name: t('ralph_name'), desc: t('ralph_desc') },
    { name: t('runner_name'), desc: t('runner_desc') },
    { name: t('engine_name'), desc: t('engine_desc') },
    { name: t('api_name'), desc: t('api_desc') },
    { name: t('cli_name'), desc: t('cli_desc') },
  ];

  return (
    <WarmSection bg="dark" style={{ position: 'relative', overflow: 'hidden' }}>
      <TextureGrid variant="base" />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader
          tag={t('tag')}
          title={
            <>
              {t('title')}{' '}
              <span className="t-accent">{t('title_accent')}</span>
            </>
          }
          lead={t('lead')}
          size="lg"
        />
        <div className={styles.layout}>
          <div className={styles.grid}>
            {packages.map((pkg, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className={styles.card}>
                  <p className="t-mono-label" style={{ color: 'var(--color-terra)', marginBottom: 8 }}>{pkg.name}</p>
                  <p className="t-body" style={{ color: 'var(--color-dark-fg)', margin: 0 }}>{pkg.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={200}>
            <aside className={styles.aside}>
              <div className={styles.asideBlock}>
                <p className="t-eyebrow" style={{ marginBottom: 8 }}>{t('aside_ralph_title')}</p>
                <p className="t-body" style={{ color: 'var(--color-dark-fg-dim)' }}>{t('aside_ralph_body')}</p>
              </div>
              <div className={styles.asideBlock}>
                <p className="t-body" style={{ color: 'var(--color-dark-fg)', fontStyle: 'italic' }}>{t('aside_kernel_body')}</p>
              </div>
            </aside>
          </FadeIn>
        </div>
      </div>
    </WarmSection>
  );
}
