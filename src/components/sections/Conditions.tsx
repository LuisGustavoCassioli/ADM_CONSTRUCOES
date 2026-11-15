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
  agendamento: 'calendar',
  garantia: 'shield',
};

export const Conditions: React.FC = () => {
  return (
    <section id="condicoes" className="section section--dark" aria-labelledby="conditions-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Clareza e Combinado Justo"
          title="Condições de Contratação e Atendimento"
          titleId="conditions-heading"
          subtitle="Para que sua obra ocorra com tranquilidade do começo ao fim, trabalhamos com regras claras e combinadas antes do início do serviço."
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
      </div>
    </section>
  );
};
