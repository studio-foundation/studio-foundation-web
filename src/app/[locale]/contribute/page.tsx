import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { PageHero, WarmSection, Button, FadeIn, CodeBlock } from '@arianeguay/design-system';
import TextureGrid from '@/components/system/TextureGrid';
import ContributeSection from '@/components/contribute/ContributeSection';
import themes from '@/styles/themes.module.css';
import { GITHUB_URL, NAV_HREFS } from '@/lib/nav';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contribute' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
    openGraph: {
      title: t('meta_title'),
      description: t('meta_description'),
    },
  };
}

const SETUP_COMMANDS = [
  'git clone https://github.com/studio-foundation/studio.git',
  'cd studio',
  'pnpm install',
  'pnpm build',
];

export default function ContributePage() {
  const t = useTranslations('contribute');

  return (
    <main>
      {/* 1 — Hero · dark */}
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        lead={t('lead')}
        renderTexture={<TextureGrid variant="base" />}
        py={[60, 54]}
        ctas={
          <Button href={GITHUB_URL} variant="terra" external>GitHub ↗</Button>
        }
      />

      {/* 2 — How to contribute · cream */}
      <div className={themes.light}>
        <WarmSection bg="cream" py={62}>
          <FadeIn>
            <section style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <p className="t-eyebrow">{t('how_tag')}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 26, maxWidth: 680 }}>
                <ContributeSection
                  title={t('how_issue_title')}
                  body={t('how_issue_body')}
                  link={t('how_issue_link')}
                  href={`${GITHUB_URL}/issues`}
                />
                <ContributeSection
                  title={t('how_pr_title')}
                  body={t('how_pr_body')}
                  link={t('how_pr_link')}
                  href={`${GITHUB_URL}/pulls`}
                />
                <ContributeSection
                  title={t('how_tool_title')}
                  body={t('how_tool_body')}
                  link={t('how_tool_link')}
                  href="https://github.com/studio-foundation/studio-community"
                />
              </div>
            </section>
          </FadeIn>
        </WarmSection>
      </div>

      {/* 3 — What to know · dark */}
      <WarmSection bg="dark" py={62} renderTexture={<TextureGrid variant="base" />}>
        <FadeIn>
          <section style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p className="t-eyebrow" style={{ color: 'var(--color-dark-fg-dim)' }}>{t('know_tag')}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 26, maxWidth: 680 }}>
              <ContributeSection
                title={t('know_invariants_title')}
                body={t('know_invariants_body')}
                link={t('know_invariants_link')}
                href={`${GITHUB_URL}/blob/main/INVARIANTS.md`}
              />
              <ContributeSection
                title={t('know_kernel_title')}
                body={t('know_kernel_body')}
                link={t('know_kernel_link')}
                href={`${GITHUB_URL}/blob/main/CONCEPTS.md`}
              />
              <ContributeSection
                title={t('know_license_title')}
                body={t('know_license_body')}
              />
            </div>
          </section>
        </FadeIn>
      </WarmSection>

      {/* 4 — Development setup · cream, code blocks stay dark */}
      <div className={themes.light}>
        <WarmSection bg="cream" py={62}>
          <FadeIn>
            <section style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <p className="t-eyebrow" style={{ marginBottom: 8 }}>{t('setup_tag')}</p>
                <h2 className="t-h3" style={{ margin: 0 }}>{t('setup_title')}</h2>
              </div>
              <div style={{ maxWidth: 680, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {SETUP_COMMANDS.map((cmd) => (
                  <CodeBlock key={cmd} lang="bash">
                    <span style={{ color: 'var(--color-dark-fg-dim)', userSelect: 'none' }}>$ </span>
                    {cmd}
                  </CodeBlock>
                ))}
              </div>
            </section>
          </FadeIn>
        </WarmSection>
      </div>

      {/* 5 — Current priorities · dark */}
      <WarmSection bg="dark" py={62} renderTexture={<TextureGrid variant="base" />}>
        <FadeIn>
          <section style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <p className="t-eyebrow" style={{ marginBottom: 8, color: 'var(--color-dark-fg-dim)' }}>{t('priorities_tag')}</p>
              <h2 className="t-h3" style={{ margin: 0, color: 'var(--color-dark-fg)' }}>{t('priorities_title')}</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 680 }}>
              {([
                { title: t('priority1_title'), status: t('priority1_status'), body: t('priority1_body'), link: null },
                { title: t('priority2_title'), status: t('priority2_status'), body: t('priority2_body'), link: null },
                { title: t('priority3_title'), status: t('priority3_status'), body: t('priority3_body'), link: t('priority3_link') },
              ] as const).map(({ title, status, body, link }) => (
                <div key={title} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                    <h3 className="t-h4" style={{ margin: 0, color: 'var(--color-dark-fg)' }}>{title}</h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.06em', color: 'var(--color-dark-fg-dim)', textTransform: 'uppercase' }}>
                      {status}
                    </span>
                  </div>
                  <p className="t-body" style={{ color: 'var(--color-dark-fg-dim)', margin: 0 }}>{body}</p>
                  {link && (
                    <a
                      href="https://github.com/studio-foundation/studio-community"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-terra)', textDecoration: 'none' }}
                    >
                      {link}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      </WarmSection>

      {/* 6 — Closing · cream */}
      <div className={themes.light}>
        <WarmSection bg="paperWarm" py={48}>
          <FadeIn>
            <div style={{ maxWidth: 680 }}>
              <p className="t-body" style={{ color: 'var(--color-ink-mute)', marginBottom: 16 }}>{t('closing_body')}</p>
              <Button href={NAV_HREFS.charter} variant="ghost">{t('closing_cta')}</Button>
            </div>
          </FadeIn>
        </WarmSection>
      </div>
    </main>
  );
}
