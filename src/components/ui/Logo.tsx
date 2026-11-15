import React, { useState } from 'react';
import { siteConfig } from '../../config/siteConfig';
import styles from './Logo.module.css';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'header' | 'footer';
}

/**
 * Componente de Logo da ADM Construções e Reformas em Geral.
 * Exibe o arquivo original fornecido pelo cliente (`siteConfig.assets.logoPath`) acompanhado
 * da identificação da marca para perfeita leitura tanto em barras horizontais (Header) quanto no Footer.
 */
export const Logo: React.FC<LogoProps> = ({ variant = 'dark', size = 'header' }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <a
      href="#inicio"
      className={`${styles.logoLink} ${styles[variant]} ${styles[size]}`}
      aria-label={`${siteConfig.business.name} - Ir para o início`}
    >
      {!imageError && (
        <img
          src={siteConfig.assets.logoPath}
          alt={`Logotipo ${siteConfig.business.name}`}
          className={styles.logoImage}
          width={size === 'footer' ? 88 : 56}
          height={size === 'footer' ? 88 : 56}
          onError={() => setImageError(true)}
        />
      )}
      <div className={styles.brandTextGroup}>
        <span className={styles.brandTitle}>ADM CONSTRUÇÕES</span>
        <span className={styles.brandSub}>REFORMAS EM GERAL</span>
      </div>
    </a>
  );
};
