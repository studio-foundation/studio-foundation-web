interface ContributeSectionProps {
  title: string;
  body: string;
  link?: string;
  href?: string;
}

export default function ContributeSection({ title, body, link, href }: ContributeSectionProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <h3 className="t-h4" style={{ margin: 0 }}>{title}</h3>
      <p className="t-body" style={{ color: 'var(--color-ink-mute)', margin: 0 }}>{body}</p>
      {link && href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-terra)', textDecoration: 'none' }}
        >
          {link}
        </a>
      )}
    </div>
  );
}
