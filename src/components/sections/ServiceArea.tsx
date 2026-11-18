import React from 'react';
import { siteConfig } from '../../config/siteConfig';
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
              <span>Área de Atendimento</span>
            </div>
            <h2 id="area-heading" className={styles.areaTitle}>
              Atendimento em <span className={styles.highlight}>toda a Zona Leste</span> de São Paulo
            </h2>
            <p className={styles.areaDescription}>
              A {siteConfig.business.name} atende residências, apartamentos, condomínios, lojas e
              escritórios na Zona Leste de SP, com avaliação prévia por fotos/vídeos ou visita
              técnica agendada.
            </p>
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
      </div>
    </section>
  );
};
