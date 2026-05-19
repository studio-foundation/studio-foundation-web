import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { PageHero, WarmSection, Button, FadeIn } from '@arianeguay/design-system';
import TextureGrid from '@/components/system/TextureGrid';
import InstallStep from '@/components/install/InstallStep';
import InstallYamlPreview from '@/components/install/InstallYamlPreview';
import themes from '@/styles/themes.module.css';
import { GITHUB_URL } from '@/lib/nav';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'install' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
    openGraph: {
      title: t('meta_title'),
      description: t('meta_description'),
    },
  };
}

const STEP4_CMD = `studio run software/feature-builder --input "Add user authentication with email and password"`;

export default function InstallPage() {
  const t = useTranslations('install');

  return (
    <main>
      {/* 1 — Hero · dark */}
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        lead={t('lead')}
        renderTexture={<TextureGrid variant="base" />}
        py={[36, 28]}
        titleProps={{ style: { fontSize: 'var(--fs-h2)', lineHeight: 1.05 } }}
        ctas={
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: -12 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', color: 'var(--color-terra)', fontWeight: 700 }}>BETA</span>
            <span className="t-small" style={{ color: 'var(--color-dark-fg-dim)', opacity: 0.7 }}>{t('beta_banner')}</span>
          </div>
        }
      />

      {/* 2 — Four steps + expected output · cream */}
      <div className={themes.light}>
        <WarmSection bg="cream" py={48}>
          <FadeIn>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 680 }}>
              <InstallStep label={t('step1_label')} desc={t('step1_desc')} command="npm install -g @studio-foundation/cli@beta" />
              <InstallStep label={t('step2_label')} desc={t('step2_desc')} command="studio init --template software-full --name my-builder" />
              <InstallStep label={t('step3_label')} desc={t('step3_desc')} command="studio config set provider anthropic --api-key $ANTHROPIC_API_KEY" />
              <InstallStep label={t('step4_label')} desc={t('step4_desc')} command={STEP4_CMD} />
              <div style={{ maxWidth: 680 }}>
                <InstallYamlPreview title={t('step4_yaml_title')} />
              </div>
            </div>
          </FadeIn>
        </WarmSection>
      </div>

      {/* 3 — Next steps · cream */}
      <div className={themes.light}>
        <WarmSection bg="paperWarm" py={48}>
          <FadeIn>
            <p className="t-eyebrow" style={{ marginBottom: 8 }}>{t('next_tag')}</p>
            <h2 className="t-h2" style={{ margin: '0 0 12px' }}>{"What's next?"}</h2>
            <p className="t-body" style={{ margin: '0 0 28px', color: 'var(--color-ink-mute)', maxWidth: 480 }}>{"You have a pipeline running. Three directions to take it further."}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, maxWidth: 860 }}>
              {([
                { title: t('next1_title'), body: t('next1_body'), link: t('next1_link'), href: `${GITHUB_URL}/blob/main/docs/pipelines.md` },
                { title: t('next2_title'), body: t('next2_body'), link: t('next2_link'), href: `${GITHUB_URL}/blob/main/docs/tools.md` },
                { title: t('next3_title'), body: t('next3_body'), link: t('next3_link'), href: `${GITHUB_URL}/blob/main/INVARIANTS.md` },
              ] as const).map(({ title, body, link, href }) => (
                <div key={title} style={{ padding: '20px 18px', background: 'var(--color-cream)', border: '1px solid var(--color-ink-rule)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <h3 className="t-h4" style={{ margin: 0 }}>{title}</h3>
                  <p className="t-body" style={{ margin: 0, color: 'var(--color-ink-mute)', flexGrow: 1 }}>{body}</p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-terra)', textDecoration: 'none' }}
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </FadeIn>
        </WarmSection>
      </div>

      {/* 5 — Closing · dark */}
      <WarmSection bg="dark" py={62} renderTexture={<TextureGrid variant="base" />}>
        <FadeIn>
          <div style={{ maxWidth: 560 }}>
            <p className="t-eyebrow" style={{ marginBottom: 16, color: 'var(--color-dark-fg-dim)' }}>{t('more_title')}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
              <span className="t-body" style={{ color: 'var(--color-dark-fg-dim)' }}>
                {t('more_docs')} <span style={{ opacity: 0.55 }}>{t('more_docs_note')}</span>
              </span>
              <span style={{ color: 'var(--color-dark-rule)' }}>·</span>
              <Button href={`${GITHUB_URL}#readme`} variant="ghost" external onDark>{t('more_github')}</Button>
            </div>
          </div>
        </FadeIn>
      </WarmSection>
    </main>
  );
}
