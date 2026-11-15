import React from 'react';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  titleId?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  titleId,
  subtitle,
  align = 'left',
  theme = 'light',
}) => {
  return (
    <div className={`${styles.header} ${styles[align]} ${styles[theme]}`}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 id={titleId} className={styles.title}>
        {title}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};
