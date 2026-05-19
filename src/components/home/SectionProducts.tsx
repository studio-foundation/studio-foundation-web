import { useTranslations } from 'next-intl';
import { WarmSection, SectionHeader, Tag, Button, FadeIn } from '@arianeguay/design-system';
import styles from './SectionProducts.module.css';
import themes from '@/styles/themes.module.css';

export default function SectionProducts() {
  const t = useTranslations('home.products');

  const products = [
    {
      title: t('wiki_title'),
      desc: t('wiki_desc'),
      url: t('wiki_url'),
      tags: t.raw('wiki_tags') as string[],
    },
    {
      title: t('chef_title'),
      desc: t('chef_desc'),
      url: t('chef_url'),
      tags: t.raw('chef_tags') as string[],
    },
  ];

  return (
    <div className={themes.light}>
    <WarmSection bg="cream" py={62}>
      <SectionHeader
        tag={t('tag')}
        title={t('title')}
        size="lg"
      />
      <div className={styles.grid}>
        {products.map((p, i) => (
          <FadeIn key={i} delay={i * 120}>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <h3 className="t-h3" style={{ marginBottom: 12 }}>{p.title}</h3>
                <p className="t-body" style={{ marginBottom: 24 }}>{p.desc}</p>
                <div className={styles.tags}>
                  {p.tags.map((tag) => (
                    <Tag key={tag} accent>{tag}</Tag>
                  ))}
                </div>
              </div>
              <div className={styles.cardBottom}>
                <Button href={p.url} variant="ghost" external>
                  {p.url.replace('https://github.com/studio-foundation/', 'github.com/…/')} ↗
                </Button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </WarmSection>
    </div>
  );
}
