import React, { useState } from 'react';
import { siteConfig } from '../../config/siteConfig';
import { heroContent } from '../../data/content';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { ServiceIcon } from '../ui/ServiceIcon';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const [heroImgError, setHeroImgError] = useState(false);
  const hasRealHeroPhoto = Boolean(siteConfig.assets.heroImagePath) && !heroImgError;

  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.blueprintGrid} aria-hidden="true" />

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>{heroContent.badge}</span>
          </div>

          <h1 id="hero-heading" className={styles.title}>
            Construção e reformas com{' '}
            <span className={styles.highlight}>experiência e compromisso.</span>
          </h1>

          <p className={styles.subtitle}>{heroContent.subtitle}</p>

          <div className={styles.ctaGroup}>
            <WhatsAppButton
              label={heroContent.primaryCta}
              sectionOrigin="hero"
              variant="primary"
              size="lg"
            />
            <a href="#servicos" className={styles.secondaryCta}>
              <span>{heroContent.secondaryCta}</span>
              <ServiceIcon name="arrow-right" size={18} />
            </a>
          </div>

          <ul className={styles.highlightsList} aria-label="Diferenciais principais">
            {heroContent.highlights.map((item) => (
              <li key={item} className={styles.highlightItem}>
                <span className={styles.checkIcon}>
                  <ServiceIcon name="check" size={14} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.heroVisual}>
          {hasRealHeroPhoto ? (
            <div className={styles.photoFrame}>
              <img
                src={siteConfig.assets.heroImagePath}
                alt="Serviço de construção e reforma realizado pela ADM na Zona Leste de São Paulo"
                className={styles.heroPhoto}
                onError={() => setHeroImgError(true)}
              />
              <div className={styles.photoCaptionBadge}>
                <ServiceIcon name="location" size={16} />
                <span>Obra na Zona Leste de São Paulo</span>
              </div>
            </div>
          ) : (
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseTop}>
                <div className={styles.logoFrame}>
                  <img
                    src={siteConfig.assets.logoPath}
                    alt={`Marca ${siteConfig.business.name}`}
                    className={styles.showcaseLogo}
                    width={112}
                    height={112}
                  />
                </div>
                <div className={styles.experienceBox}>
                  <span className={styles.expTag}>Experiência Comprovada</span>
                  <div className={styles.expMetric}>
                    <span className={styles.expNumber}>~10</span>
                    <span className={styles.expUnit}>anos</span>
                  </div>
                  <p className={styles.expDesc}>
                    de atuação prática em obras, reformas e manutenção na construção civil
                  </p>
                </div>
              </div>

              <div className={styles.showcaseDivider} />

              <div className={styles.bentoTiles}>
                <div className={styles.bentoTile}>
                  <div className={styles.tileIcon}>
                    <ServiceIcon name="user" size={18} />
                  </div>
                  <div>
                    <strong>Atendimento Direto com Ademir</strong>
                    <span>
                      Acompanhamento pessoal do início ao fim, com ajudantes conforme a obra exige.
                    </span>
                  </div>
                </div>

                <div className={styles.bentoTile}>
                  <div className={styles.tileIcon}>
                    <ServiceIcon name="camera" size={18} />
                  </div>
                  <div>
                    <strong>Orçamento Prático e Gratuito</strong>
                    <span>
                      Envie fotos e vídeos pelo WhatsApp ou agende uma visita presencial no local.
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.showcaseFooter}>
                <span className={styles.footerPill}>Residencial e Comercial</span>
                <span className={styles.footerPill}>Pix ou Dinheiro</span>
                <span className={styles.footerPill}>Com Agendamento</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
