/**
 * Component sandbox — delete before merging to main.
 * Visit /_dev to test all ported system components.
 */
import { Button, Tag, WarmSection, PageHero, SectionHeader, YamlPreviewDark, Y, RichText, FadeIn } from '@arianeguay/design-system';

export default function DevSandbox() {
  return (
    <main>
      <PageHero
        eyebrow="Dev Sandbox"
        title={<>System <span className="t-accent">components</span></>}
        lead="All ported design system components rendered below for visual verification."
        ctas={
          <>
            <Button href="/" variant="primary">Primary →</Button>
            <Button href="/" variant="mustard">Mustard →</Button>
            <Button href="/" variant="terra">Terra →</Button>
            <Button href="/" variant="outline">Outline</Button>
            <Button href="/" variant="ghost">Ghost</Button>
          </>
        }
      />

      <WarmSection bg="paper" py={80}>
        <SectionHeader
          tag="Tags"
          title={<>Tag <span className="t-accent-serif">component</span></>}
          lead="Used for labels, badges, and technology chips."
        />
        <div className="flex-row flex-wrap" style={{ gap: 8 }}>
          <Tag>default</Tag>
          <Tag accent>accent</Tag>
        </div>
      </WarmSection>

      <WarmSection bg="dark" py={80}>
        <SectionHeader
          tag="YAML Preview"
          title="Dark code preview"
        />
        <YamlPreviewDark filename="pipeline.yaml">
          {Y.key('name')}{': '}{Y.val('my-pipeline')}{'\n'}
          {Y.key('stages')}{':'}{'\n'}
          {'  - '}{Y.key('agent')}{': '}{Y.val('reviewer')}{'\n'}
          {'    '}{Y.mute('# validation contract')}{'\n'}
        </YamlPreviewDark>
      </WarmSection>

      <WarmSection bg="paperWarm" py={80}>
        <FadeIn>
          <SectionHeader tag="FadeIn" title="Scroll animation" />
        </FadeIn>
        <FadeIn delay={200}>
          <RichText as="p" className="t-body">
            {'This paragraph uses <strong>RichText</strong> — the only allowed location for <code>dangerouslySetInnerHTML</code>.'}
          </RichText>
        </FadeIn>
      </WarmSection>
    </main>
  );
}
