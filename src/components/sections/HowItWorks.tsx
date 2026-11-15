import React from 'react';
import { howItWorksSteps } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import styles from './HowItWorks.module.css';

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="section section--white" aria-labelledby="how-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Passo a Passo"
          title="Como Funciona o Atendimento da ADM"
          titleId="how-heading"
          subtitle="Um processo simples, direto e organizado para você solicitar seu orçamento gratuito e acompanhar sua obra sem complicação."
          align="center"
        />

        <ol className={styles.stepsGrid}>
          {howItWorksSteps.map((step) => (
            <li key={step.stepNumber} className={styles.stepCard}>
              <div className={styles.stepTop}>
                <span className={styles.stepBadge}>Etapa {step.stepNumber}</span>
                <span className={styles.stepWatermark} aria-hidden="true">
                  {step.stepNumber}
                </span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </li>
          ))}
        </ol>

        <div className={styles.actionRow}>
          <WhatsAppButton
            label="Iniciar meu orçamento pelo WhatsApp"
            sectionOrigin="how_it_works"
            variant="primary"
            size="lg"
          />
        </div>
      </div>
    </section>
  );
};
