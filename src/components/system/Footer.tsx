import { GITHUB_URL } from '@/lib/nav';
import s from './Footer.module.css';

const LICENSE_URL = `${GITHUB_URL}/blob/main/LICENSE`;
const CONTACT_EMAIL = 'hello@studio-foundation.org';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.top}>
          <p className={s.tagline}>
            Studio is a project of the Ariane Guay Foundation.
          </p>
          <div className={s.links}>
            <a href={LICENSE_URL} className={s.link} target="_blank" rel="noopener noreferrer">
              AGPL-3.0
            </a>
            <a href={GITHUB_URL} className={s.link} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className={s.link}>
              Contact
            </a>
          </div>
        </div>

        <hr className={s.rule} />

        <p className={s.credit}>Initiated by Ariane Guay · 2025</p>
      </div>
    </footer>
  );
}
