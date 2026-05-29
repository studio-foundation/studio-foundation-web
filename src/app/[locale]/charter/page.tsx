import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { PageHero, WarmSection, Button, FadeIn, CodeBlock } from '@arianeguay/design-system';
import TextureGrid from '@/components/system/TextureGrid';
import TableOfContents from '@/components/charter/TableOfContents';
import themes from '@/styles/themes.module.css';
import { NAV_HREFS } from '@/lib/nav';
import styles from './charter.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'charter' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
    openGraph: {
      title: t('meta_title'),
      description: t('meta_description'),
    },
  };
}

const CHARTER_SECTIONS = [
  { id: 'what-studio-is', titleKey: 's1_title' },
  { id: 'what-studio-is-not', titleKey: 's2_title' },
  { id: 'political-position', titleKey: 's3_title' },
  { id: 'why-a-commons', titleKey: 's4_title' },
  { id: 'technical-architecture', titleKey: 's5_title' },
  { id: 'templates', titleKey: 's6_title' },
  { id: 'revenue-model', titleKey: 's7_title' },
  { id: 'governance', titleKey: 's8_title' },
  { id: 'cadence', titleKey: 's9_title' },
  { id: 'definition-of-success', titleKey: 's10_title' },
  { id: 'how-to-contribute', titleKey: 's11_title' },
  { id: 'status', titleKey: 's12_title' },
] as const;

const GIT_ANALOGY = `git init    →  studio init
.git/       →  .studio/
git commit  →  studio run
GitHub      →  Studio Cloud (future)`;

const PACKAGE_TREE = `@studio/cli          Terminal interface
    │
@studio/engine       Orchestration, state machine, persistence
    │
    ├── @studio/ralph    Execute → validate → retry
    │
    └── @studio/runner   LLM calls, tool plugins, multi-provider
    │
@studio/contracts    Shared types (zero deps)
Templates/           Architectural patterns`;

const TEMPLATE_INIT = `studio init --template document-analysis --name wiki-creator
cd wiki-creator
npm install
studio run document-analysis/analyzer --input "..."`;

const COMMUNITY_REGISTRY = `studio init --template @user/legal-analysis --name my-tool`;

function Rule() {
  return <hr className={styles.rule} />;
}

export default function CharterPage() {
  const t = useTranslations('charter');

  const tocItems = CHARTER_SECTIONS.map(({ id, titleKey }) => ({
    id,
    label: t(titleKey),
  }));

  return (
    <main>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('hero_title')}
        lead={t('hero_lead')}
        renderTexture={<><TextureGrid variant="base" /><div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at top right, rgba(201, 100, 66, 0.22), transparent 55%)', pointerEvents: 'none' }} /></>}
        py={[64, 63]}
      />

      <div className={themes.light}>
        <WarmSection bg="paper" py={0}>
          <div className={styles.layout}>

            <aside className={styles.sidebar}>
              <TableOfContents items={tocItems} tocLabel={t('toc_label')} />
            </aside>

            <div className={styles.content}>

              {/* 1 — What Studio is */}
              <section id="what-studio-is" className={styles.section}>
                <FadeIn>
                  <h2 className={`t-h3 ${styles.sectionTitle}`}>{t('s1_title')}</h2>
                  <p className={`t-lead ${styles.lead}`}>{t('s1_p1')}</p>
                  <p className={`t-body ${styles.body}`}>{t('s1_p2')}</p>
                  <CodeBlock lang="bash">{GIT_ANALOGY}</CodeBlock>
                </FadeIn>
              </section>

              <Rule />

              {/* 2 — What Studio is not */}
              <section id="what-studio-is-not" className={styles.section}>
                <FadeIn>
                  <h2 className={`t-h3 ${styles.sectionTitle}`}>{t('s2_title')}</h2>
                  <ul className={styles.notList}>
                    <li className={styles.notItem}><p className="t-body" style={{ margin: 0 }}>{t('s2_not1')}</p></li>
                    <li className={styles.notItem}><p className="t-body" style={{ margin: 0 }}>{t('s2_not2')}</p></li>
                    <li className={styles.notItem}><p className="t-body" style={{ margin: 0 }}>{t('s2_not3')}</p></li>
                    <li className={styles.notItem}><p className="t-body" style={{ margin: 0 }}>{t('s2_not4')}</p></li>
                  </ul>
                </FadeIn>
              </section>

              <Rule />

              {/* 3 — Political position */}
              <section id="political-position" className={styles.section}>
                <FadeIn>
                  <h2 className={`t-h3 ${styles.sectionTitle}`}>{t('s3_title')}</h2>
                  <p className={`t-lead ${styles.lead}`}>{t('s3_intro')}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 24 }}>
                    <div>
                      <p className={styles.principleTitle}><strong>{t('s3_p1_title')}</strong></p>
                      <p className={`t-body ${styles.principleBody}`}>{t('s3_p1_body')}</p>
                    </div>
                    <div>
                      <p className={styles.principleTitle}><strong>{t('s3_p2_title')}</strong></p>
                      <p className={`t-body ${styles.principleBody}`}>{t('s3_p2_body')}</p>
                    </div>
                    <div>
                      <p className={styles.principleTitle}><strong>{t('s3_p3_title')}</strong></p>
                      <p className={`t-body ${styles.principleBody}`}>{t('s3_p3_body')}</p>
                    </div>
                  </div>
                  <p className={`t-body ${styles.body}`} style={{ marginTop: 24 }}>{t('s3_close')}</p>
                </FadeIn>
              </section>

              <Rule />

              {/* 4 — Why a commons */}
              <section id="why-a-commons" className={styles.section}>
                <FadeIn>
                  <h2 className={`t-h3 ${styles.sectionTitle}`}>{t('s4_title')}</h2>
                  <p className={`t-lead ${styles.lead}`}>{t('s4_intro')}</p>
                  <p className={`t-body ${styles.body}`}>{t('s4_sub')}</p>

                  <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 0 }}>
                    <div className={styles.mechBlock}>
                      <p className={styles.mechTitle}>{t('s4_mech1_title')}</p>
                      <p className="t-body" style={{ margin: 0, color: 'var(--color-ink-mute)' }}>{t('s4_mech1_body')}</p>
                    </div>
                    <div className={styles.mechBlock}>
                      <p className={styles.mechTitle}>{t('s4_mech2_title')}</p>
                      <p className="t-body" style={{ margin: '0 0 12px', color: 'var(--color-ink-mute)' }}>{t('s4_mech2_body')}</p>
                      <p className="t-body" style={{ margin: 0, color: 'var(--color-ink-mute)' }}>{t('s4_mech2_body2')}</p>
                    </div>
                    <div className={styles.mechBlock}>
                      <p className={styles.mechTitle}>{t('s4_mech3_title')}</p>
                      <p className="t-body" style={{ margin: '0 0 16px', color: 'var(--color-ink-mute)' }}>{t('s4_mech3_intro')}</p>
                      <ul className={styles.layerList}>
                        <li className={styles.layerItem}>
                          <p style={{ margin: '0 0 4px', fontWeight: 600, color: 'var(--color-ink)' }}>{t('s4_layer1_title')}</p>
                          <p className="t-body" style={{ margin: 0, color: 'var(--color-ink-mute)' }}>{t('s4_layer1_body')}</p>
                        </li>
                        <li className={styles.layerItem}>
                          <p style={{ margin: '0 0 4px', fontWeight: 600, color: 'var(--color-ink)' }}>{t('s4_layer2_title')}</p>
                          <p className="t-body" style={{ margin: 0, color: 'var(--color-ink-mute)' }}>{t('s4_layer2_body')}</p>
                        </li>
                        <li className={styles.layerItem}>
                          <p style={{ margin: '0 0 4px', fontWeight: 600, color: 'var(--color-ink)' }}>{t('s4_layer3_title')}</p>
                          <p className="t-body" style={{ margin: 0, color: 'var(--color-ink-mute)' }}>{t('s4_layer3_body')}</p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className={`t-body ${styles.body}`} style={{ marginTop: 16 }}>{t('s4_close')}</p>
                </FadeIn>
              </section>

              <Rule />

              {/* 5 — Technical architecture */}
              <section id="technical-architecture" className={styles.section}>
                <FadeIn>
                  <h2 className={`t-h3 ${styles.sectionTitle}`}>{t('s5_title')}</h2>
                  <p className={`t-body ${styles.body}`}>{t('s5_intro')}</p>
                  <CodeBlock lang="bash">{PACKAGE_TREE}</CodeBlock>

                  <p className={`t-body ${styles.body}`} style={{ marginTop: 24 }}>{t('s5_concepts')}</p>
                  <ul className={styles.conceptList}>
                    <li><strong style={{ color: 'var(--color-ink)' }}>{t('s5_c1_title')}</strong>{' '}<span className="t-body" style={{ color: 'var(--color-ink-mute)' }}>{t('s5_c1_body')}</span></li>
                    <li><strong style={{ color: 'var(--color-ink)' }}>{t('s5_c2_title')}</strong>{' '}<span className="t-body" style={{ color: 'var(--color-ink-mute)' }}>{t('s5_c2_body')}</span></li>
                    <li><strong style={{ color: 'var(--color-ink)' }}>{t('s5_c3_title')}</strong>{' '}<span className="t-body" style={{ color: 'var(--color-ink-mute)' }}>{t('s5_c3_body')}</span></li>
                    <li><strong style={{ color: 'var(--color-ink)' }}>{t('s5_c4_title')}</strong>{' '}<span className="t-body" style={{ color: 'var(--color-ink-mute)' }}>{t('s5_c4_body')}</span></li>
                    <li><strong style={{ color: 'var(--color-ink)' }}>{t('s5_c5_title')}</strong>{' '}<span className="t-body" style={{ color: 'var(--color-ink-mute)' }}>{t('s5_c5_body')}</span></li>
                  </ul>

                  <p className={`t-body ${styles.body}`} style={{ marginTop: 24 }}>{t('s5_invariants')}</p>
                  <ol className={styles.invariantList}>
                    {(['s5_inv1', 's5_inv2', 's5_inv3', 's5_inv4', 's5_inv5', 's5_inv6'] as const).map((key, i) => (
                      <li key={key} className={styles.invariantItem}>
                        <span className={styles.invariantNum}>{String(i + 1).padStart(2, '0')}</span>
                        <span className="t-body" style={{ color: 'var(--color-ink-mute)' }}>{t(key)}</span>
                      </li>
                    ))}
                  </ol>

                  <p className={`t-body ${styles.body}`} style={{ marginTop: 24 }}>{t('s5_close')}</p>
                </FadeIn>
              </section>

              <Rule />

              {/* 6 — Templates */}
              <section id="templates" className={styles.section}>
                <FadeIn>
                  <h2 className={`t-h3 ${styles.sectionTitle}`}>{t('s6_title')}</h2>
                  <p className={`t-lead ${styles.lead}`}>{t('s6_p1')}</p>
                  <p className={`t-body ${styles.body}`}>{t('s6_p2')}</p>

                  <table className={styles.table}>
                    <thead>
                      <tr><th>{t('col_template')}</th><th>{t('col_description')}</th></tr>
                    </thead>
                    <tbody>
                      {Object.values(t.raw('s6_templates') as Record<string, string>).map((entry) => {
                        const [name, ...rest] = entry.split(' — ');
                        return (
                          <tr key={name}>
                            <td><code>{name}</code></td>
                            <td>{rest.join(' — ')}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                  <p className={`t-body ${styles.body}`}>{t('s6_p3')}</p>
                  <CodeBlock lang="bash">{TEMPLATE_INIT}</CodeBlock>
                  <p className={`t-body ${styles.body}`} style={{ marginTop: 16 }}>{t('s6_p4')}</p>
                  <p className={`t-body ${styles.body}`}>{t('s6_registry')}</p>
                  <CodeBlock lang="bash">{COMMUNITY_REGISTRY}</CodeBlock>
                </FadeIn>
              </section>

              <Rule />

              {/* 7 — Revenue model */}
              <section id="revenue-model" className={styles.section}>
                <FadeIn>
                  <h2 className={`t-h3 ${styles.sectionTitle}`}>{t('s7_title')}</h2>
                  <p className={`t-lead ${styles.lead}`}>{t('s7_intro')}</p>
                  <ul className={styles.revenueList}>
                    {(['s7_item1', 's7_item2', 's7_item3', 's7_item4', 's7_item5'] as const).map((key) => (
                      <li key={key} className={styles.revenueItem}><span className="t-body">{t(key)}</span></li>
                    ))}
                  </ul>
                  <p className={`t-body ${styles.body}`} style={{ marginTop: 20 }}>{t('s7_close')}</p>
                </FadeIn>
              </section>

              <Rule />

              {/* 8 — Governance */}
              <section id="governance" className={styles.section}>
                <FadeIn>
                  <h2 className={`t-h3 ${styles.sectionTitle}`}>{t('s8_title')}</h2>
                  <p className={`t-lead ${styles.lead}`}>{t('s8_intro')}</p>
                  <p className={`t-body ${styles.body}`}>{t('s8_sub')}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
                    <div>
                      <p className={styles.principleTitle}><strong>{t('s8_p1_title')}</strong></p>
                      <p className={`t-body ${styles.principleBody}`}>{t('s8_p1_body')}</p>
                    </div>
                    <div>
                      <p className={styles.principleTitle}><strong>{t('s8_p2_title')}</strong></p>
                      <p className={`t-body ${styles.principleBody}`}>{t('s8_p2_body')}</p>
                    </div>
                    <div>
                      <p className={styles.principleTitle}><strong>{t('s8_p3_title')}</strong></p>
                      <p className={`t-body ${styles.principleBody}`}>{t('s8_p3_body')}</p>
                    </div>
                    <div>
                      <p className={styles.principleTitle}><strong>{t('s8_p4_title')}</strong></p>
                      <p className={`t-body ${styles.principleBody}`}>{t('s8_p4_body')}</p>
                    </div>
                    <div>
                      <p className={styles.principleTitle}><strong>{t('s8_p5_title')}</strong></p>
                      <p className={`t-body ${styles.principleBody}`}>{t('s8_p5_body')}</p>
                    </div>
                  </div>
                </FadeIn>
              </section>

              <Rule />

              {/* 9 — Cadence */}
              <section id="cadence" className={styles.section}>
                <FadeIn>
                  <h2 className={`t-h3 ${styles.sectionTitle}`}>{t('s9_title')}</h2>
                  <ul className={styles.bulletList}>
                    {(['s9_item1', 's9_item2', 's9_item3', 's9_item4', 's9_item5'] as const).map((key) => (
                      <li key={key} className={styles.bulletItem}>
                        <span className="t-body" style={{ color: 'var(--color-ink-mute)' }}>{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={`t-body ${styles.body}`} style={{ marginTop: 20 }}>{t('s9_close')}</p>
                </FadeIn>
              </section>

              <Rule />

              {/* 10 — Definition of success */}
              <section id="definition-of-success" className={styles.section}>
                <FadeIn>
                  <h2 className={`t-h3 ${styles.sectionTitle}`}>{t('s10_title')}</h2>
                  <p className={`t-lead ${styles.lead}`}>{t('s10_intro')}</p>
                  <ul className={styles.bulletList}>
                    {(['s10_item1', 's10_item2', 's10_item3', 's10_item4', 's10_item5', 's10_item6', 's10_item7', 's10_item8'] as const).map((key) => (
                      <li key={key} className={styles.bulletItem}>
                        <span className="t-body" style={{ color: 'var(--color-ink-mute)' }}>{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={`t-body ${styles.body}`} style={{ marginTop: 20 }}>{t('s10_close')}</p>
                </FadeIn>
              </section>

              <Rule />

              {/* 11 — How to contribute */}
              <section id="how-to-contribute" className={styles.section}>
                <FadeIn>
                  <h2 className={`t-h3 ${styles.sectionTitle}`}>{t('s11_title')}</h2>
                  <p className={`t-lead ${styles.lead}`}>{t('s11_intro')}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 16 }}>
                    <div>
                      <p className={styles.principleTitle}><strong>{t('s11_c1_title')}</strong></p>
                      <p className={`t-body ${styles.principleBody}`}>{t('s11_c1_body')}</p>
                    </div>
                    <div>
                      <p className={styles.principleTitle}><strong>{t('s11_c2_title')}</strong></p>
                      <p className={`t-body ${styles.principleBody}`}>{t('s11_c2_body')}</p>
                    </div>
                    <div>
                      <p className={styles.principleTitle}><strong>{t('s11_c3_title')}</strong></p>
                      <p className={`t-body ${styles.principleBody}`}>{t('s11_c3_body')}</p>
                    </div>
                  </div>
                  <div style={{ marginTop: 32 }}>
                    <Button href={NAV_HREFS.contribute} variant="ghost">{t('s11_link')}</Button>
                  </div>
                </FadeIn>
              </section>

              <Rule />

              {/* 12 — Status */}
              <section id="status" className={styles.section}>
                <FadeIn>
                  <h2 className={`t-h3 ${styles.sectionTitle}`}>{t('s12_title')}</h2>
                  <p className={`t-lead ${styles.lead}`}>{t('s12_p1')}</p>
                  <p className={`t-body ${styles.body}`}>{t('s12_p2')}</p>
                </FadeIn>
              </section>

              {/* Final quote */}
              <FadeIn>
                <div className={styles.quoteBlock}>
                  <span className={styles.quoteMark}>Final arbitration principle</span>
                  <p className={styles.quoteText}>{t('quote_final')}</p>
                </div>
              </FadeIn>

              {/* Back to mission */}
              <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--color-rule)' }}>
                <Button href={NAV_HREFS.mission} variant="ghost">{t('link_mission')}</Button>
              </div>

            </div>
          </div>
        </WarmSection>
      </div>
    </main>
  );
}
