'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function LangSwitch() {
  const locale = useLocale();
  const pathname = usePathname();

  function altHref(): string {
    if (locale === 'en') {
      return `/fr${pathname === '/' ? '' : pathname}`;
    }
    return pathname.replace(/^\/fr/, '') || '/';
  }

  return (
    <Link href={altHref()} className="t-mono-label" style={{ opacity: 0.7 }}>
      {locale === 'en' ? 'FR' : 'EN'}
    </Link>
  );
}
