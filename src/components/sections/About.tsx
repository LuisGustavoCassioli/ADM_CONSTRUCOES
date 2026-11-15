import React from 'react';
import { aboutContent } from '../../data/content';
import { siteConfig } from '../../config/siteConfig';
import { SectionHeader } from '../ui/SectionHeader';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { ServiceIcon } from '../ui/ServiceIcon';
import styles from './About.module.css';

export const About: React.FC = () => {
  return (
    <section id="sobre" className={`section section--dark ${styles.aboutSection}`} aria-labelledby="about-heading">
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.textColumn}>
          <SectionHeader
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
            titleId="about-heading"
            theme="dark"
          />

          <blockquote className={styles.leadQuote}>{aboutContent.mainText}</blockquote>
          <p className={styles.bodyText}>{aboutContent.secondaryText}</p>

          <div className={styles.audienceBox}>
            <h3 className={styles.audienceTitle}>Imóveis atendidos na Zona Leste</h3>
            <ul className={styles.audienceTags}>
              {siteConfig.business.targetAudience.map((audience) => (
                <li key={audience} className={styles.audienceTag}>
                  <ServiceIcon name="check" size={14} />
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.ctaRow}>
            <WhatsAppButton
              label="Falar diretamente com Ademir"
              sectionOrigin="about"
              variant="primary"
              size="lg"
            />
          </div>
        </div>

        <div className={styles.pillarsColumn}>
          <div className={styles.pillarsGrid}>
            {aboutContent.pillars.map((pillar, index) => (
              <div key={pillar.title} className={styles.pillarCard}>
                <div className={styles.pillarTop}>
                  <span className={styles.pillarIndex}>0{index + 1}</span>
                </div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.commitmentBanner}>
            <div className={styles.commitmentIcon}>
              <ServiceIcon name="shield" size={24} />
            </div>
            <div>
              <strong>Compromisso e Transparência</strong>
              <p>
                Trabalho conduzido pessoalmente pelo responsável, sem intermediários e sem
                terceirizar a confiança que você deposita no seu imóvel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
