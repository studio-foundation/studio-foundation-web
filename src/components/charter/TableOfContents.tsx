'use client';

import { useEffect, useState } from 'react';
import styles from './TableOfContents.module.css';

export interface TocItem {
  id: string;
  label: string;
}

interface Props {
  items: TocItem[];
  tocLabel?: string;
}

// TODO: implement this hook — see README below
// Design choice: rootMargin controls when a section becomes "active" in the TOC.
// '-10% 0% -80% 0%' means a section activates when its top enters the top 10% of the viewport.
// Adjust these values based on the reading experience you want.
function useScrollspy(ids: string[]): string {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActiveId(hit.target.id);
      },
      { rootMargin: '-10% 0% -80% 0%', threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

export default function TableOfContents({ items, tocLabel = 'Contents' }: Props) {
  const ids = items.map((item) => item.id);
  const activeId = useScrollspy(ids);
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.toc} aria-label={tocLabel}>
      <button
        className={styles.mobileToggle}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className="t-eyebrow">{tocLabel}</span>
        <span className={styles.arrow} aria-hidden>
          {isOpen ? '↑' : '↓'}
        </span>
      </button>

      <p className={styles.desktopLabel}>{tocLabel}</p>

      <ol className={`${styles.list} ${isOpen ? styles.open : ''}`}>
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`${styles.link} ${activeId === id ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(id);
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
