import { useTranslations } from 'next-intl';
import { WarmSection, SectionHeader, FadeIn } from '@arianeguay/design-system';
import styles from './SectionTradeoffs.module.css';
import themes from '@/styles/themes.module.css';

export default function SectionTradeoffs() {
  const t = useTranslations('home.tradeoffs');

  const rows = [
    {
      name: 'LangGraph',
      surface: t('row_langgraph_surface'),
      validation: t('row_langgraph_validation'),
      parallelism: t('row_langgraph_parallelism'),
      license: t('row_langgraph_license'),
      isStudio: false,
    },
    {
      name: 'CrewAI',
      surface: t('row_crewai_surface'),
      validation: t('row_crewai_validation'),
      parallelism: t('row_crewai_parallelism'),
      license: t('row_crewai_license'),
      isStudio: false,
    },
    {
      name: 'Autogen',
      surface: t('row_autogen_surface'),
      validation: t('row_autogen_validation'),
      parallelism: t('row_autogen_parallelism'),
      license: t('row_autogen_license'),
      isStudio: false,
    },
    {
      name: 'studio:',
      surface: t('row_studio_surface'),
      validation: t('row_studio_validation'),
      parallelism: t('row_studio_parallelism'),
      license: t('row_studio_license'),
      isStudio: true,
    },
  ];

  return (
    <div className={themes.light}>
      <WarmSection bg="cream" py={62}>
        <SectionHeader
          tag={t('tag')}
          title={
            <>
              {t('title_line1')}<br />
              {t('title_line2')}
            </>
          }
          lead={t('lead')}
          size="lg"
        />
        <FadeIn>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>{t('col_framework')}</th>
                  <th className={styles.th}>{t('col_surface')}</th>
                  <th className={styles.th}>{t('col_validation')}</th>
                  <th className={styles.th}>{t('col_parallelism')}</th>
                  <th className={styles.th}>{t('col_license')}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.name} className={row.isStudio ? styles.studioRow : styles.row}>
                    <td className={styles.td}>
                      {row.isStudio ? (
                        <span className="t-mono-label">
                          studio<span style={{ color: 'var(--color-terra)' }}>:</span>
                        </span>
                      ) : (
                        <span className="t-mono-label">{row.name}</span>
                      )}
                    </td>
                    <td className={styles.td}>{row.surface}</td>
                    <td className={styles.td}>{row.validation}</td>
                    <td className={styles.td}>{row.parallelism}</td>
                    <td className={styles.td}>{row.license}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.note}><em>{t('note')}</em></p>
        </FadeIn>
      </WarmSection>
    </div>
  );
}
