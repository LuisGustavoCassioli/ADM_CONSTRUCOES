import React from 'react';
import { conditionsData } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';
import { ServiceIcon, IconName } from '../ui/ServiceIcon';
import styles from './Conditions.module.css';

const conditionIcons: Record<string, IconName> = {
  orcamento: 'check',
  'mao-de-obra': 'layers',
  materiais: 'masonry',
  pagamento: 'wallet',
};

export const Conditions: React.FC = () => {
  return (
    <section id="condicoes" className="section section--dark" aria-labelledby="conditions-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Transparência"
          title="Condições de Atendimento"
          titleId="conditions-heading"
          subtitle="Regras claras e combinadas antes do início da obra."
          theme="dark"
        />

        <div className={styles.grid}>
          {conditionsData.map((condition) => {
            const iconName = conditionIcons[condition.id] || 'info';

            return (
              <article key={condition.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    <ServiceIcon name={iconName} size={20} />
                  </div>
                  <span className={styles.badge}>{condition.highlight}</span>
                </div>
                <h3 className={styles.title}>{condition.title}</h3>
                <p className={styles.description}>{condition.description}</p>
              </article>
            );
          })}
        </div>

        <p className={styles.conditionsNote}>
          Não realizamos atendimento emergencial. Prazos e condições específicas de garantia são
          combinados conforme cada serviço.
        </p>
      </div>
    </section>
  );
};
