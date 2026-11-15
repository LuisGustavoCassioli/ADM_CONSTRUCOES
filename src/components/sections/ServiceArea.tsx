import React from 'react';
import { differentialsData } from '../../data/content';
import { siteConfig } from '../../config/siteConfig';
import { SectionHeader } from '../ui/SectionHeader';
import { ServiceIcon } from '../ui/ServiceIcon';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import styles from './ServiceArea.module.css';

export const ServiceArea: React.FC = () => {
  return (
    <section id="atendimento" className="section section--light" aria-labelledby="area-heading">
      <div className="container">
        <div className={styles.areaBanner}>
          <div className={styles.areaGlow} aria-hidden="true" />

          <div className={styles.areaBannerContent}>
            <div className={styles.locationBadge}>
              <ServiceIcon name="location" size={16} />
              <span>Atendimento Regional</span>
            </div>
            <h2 id="area-heading" className={styles.areaTitle}>
              Presente em <span className={styles.highlight}>toda a Zona Leste</span> de São Paulo
            </h2>
            <p className={styles.areaDescription}>
              A {siteConfig.business.name} atua diretamente nos bairros da Zona Leste de São Paulo
              — SP, atendendo casas, apartamentos, condomínios, lojas e escritórios com avaliação
              prática e pontualidade na execução.
            </p>
            <div className={styles.evaluationModes}>
              <div className={styles.evalModeItem}>
                <div className={styles.evalIcon}>
                  <ServiceIcon name="camera" size={18} />
                </div>
                <div>
                  <strong>1. Avaliação por Fotos e Vídeos</strong>
                  <span>Envie imagens pelo WhatsApp para uma análise rápida da necessidade.</span>
                </div>
              </div>
              <div className={styles.evalModeItem}>
                <div className={styles.evalIcon}>
                  <ServiceIcon name="location" size={18} />
                </div>
                <div>
                  <strong>2. Visita Presencial Agendada</strong>
                  <span>Quando necessário, Ademir vai até o local na Zona Leste para avaliar.</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.areaSideCard}>
            <div className={styles.radarBadge} aria-hidden="true">
              <span className={styles.radarRingOuter} />
              <span className={styles.radarRingInner} />
              <span className={styles.radarCenter}>
                <ServiceIcon name="location" size={22} />
              </span>
            </div>

            <span className={styles.sideCardEyebrow}>Cobertura Local</span>
            <h3 className={styles.sideCardTitle}>Zona Leste — São Paulo / SP</h3>
            <p className={styles.sideCardText}>
              Atendimento mediante agendamento antecipado diretamente no local do serviço.
            </p>
            <WhatsAppButton
              label="Consultar meu bairro"
              sectionOrigin="service_area"
              variant="primary"
              fullWidth
            />
          </div>
        </div>

        <div className={styles.differentialsSection}>
          <SectionHeader
            eyebrow="Diferenciais Confirmados"
            title="Por que realizar seu serviço com a ADM?"
            subtitle="Compromisso real com quem busca um profissional sério, transparente e presente na obra do começo ao fim."
          />

          <div className={styles.diffGrid}>
            {differentialsData.map((item) => (
              <div key={item.id} className={styles.diffCard}>
                <div className={styles.diffCheck}>
                  <ServiceIcon name="check" size={16} />
                </div>
                <div>
                  <h3 className={styles.diffTitle}>{item.title}</h3>
                  <p className={styles.diffDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
