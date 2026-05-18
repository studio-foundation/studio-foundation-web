import { CodeBlock } from '@arianeguay/design-system';
import CopyButton from '@/components/system/CopyButton';

interface InstallStepProps {
  label: string;
  desc: string;
  command: string;
}

export default function InstallStep({ label, desc, command }: InstallStepProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div>
        <p className="t-eyebrow" style={{ marginBottom: 6 }}>{label}</p>
        <p className="t-body" style={{ color: 'var(--color-ink-mute)', margin: 0 }}>{desc}</p>
      </div>
      <div style={{ position: 'relative' }}>
        <CodeBlock lang="bash">
          <span style={{ color: 'var(--color-dark-fg-dim)', userSelect: 'none' }}>$ </span>
          {command}
        </CodeBlock>
        <CopyButton text={command} />
      </div>
    </div>
  );
}
