import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { NAV_HREFS, GITHUB_URL } from '@/lib/nav';
import Wordmark from './Wordmark';
import LangSwitch from './LangSwitch';
import s from './Header.module.css';

export default function Header() {
  const t = useTranslations('nav');

  return (
    <header className={s.header}>
      <div className={s.inner}>
        <Link href="/" className={s.wordmarkLink} aria-label="Studio Foundation — Home">
          <Wordmark size={20} onDark />
        </Link>

        <nav className={s.nav} aria-label="Primary navigation">
          <Link href={NAV_HREFS.mission} className={s.navLink}>{t('mission')}</Link>
          <Link href={NAV_HREFS.install} className={s.navLink}>{t('install')}</Link>
          <Link href={NAV_HREFS.contribute} className={s.navLink}>{t('contribute')}</Link>
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
