'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { NAV_HREFS, GITHUB_URL, type NavKey } from '@/lib/nav';
import { StudioWordmark } from '@arianeguay/design-system';
import LangSwitch from './LangSwitch';
import s from './Header.module.css';

function useIsActive(href: string): boolean {
  const pathname = usePathname();
  // Strip locale prefix (/fr/...) before comparing
  const normalized = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');
  return href === '/' ? normalized === '/' : normalized.startsWith(href);
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const active = useIsActive(href);
  return (
    <Link
      href={href}
      className={`${s.navLink} ${active ? s.navLinkActive : ''}`}
      aria-current={active ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const t = useTranslations('nav');

  return (
    <header className={s.header}>
      <div className={s.inner}>
        <Link href="/" className={s.wordmarkLink} aria-label="Studio Foundation — Home">
          <StudioWordmark size={20} onDark />
        </Link>

        <nav className={s.nav} aria-label="Primary navigation">
          <NavLink href={NAV_HREFS.mission}>{t('mission')}</NavLink>
          <NavLink href={NAV_HREFS.install}>{t('install')}</NavLink>
          <NavLink href={NAV_HREFS.contribute}>{t('contribute')}</NavLink>
          <a
            href={GITHUB_URL}
            className={`${s.navLink} ${s.navLinkExternal}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('github')}
          </a>
        </nav>

        <div className={s.right}>
          <LangSwitch />
        </div>
      </div>
    </header>
  );
}
