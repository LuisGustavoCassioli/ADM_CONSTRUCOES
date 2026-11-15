import React from 'react';
import { servicesData } from '../../data/services';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { trackEvent } from '../../utils/analytics';
import { siteConfig } from '../../config/siteConfig';
import { SectionHeader } from '../ui/SectionHeader';
import { ServiceIcon } from '../ui/ServiceIcon';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import styles from './Services.module.css';

export const Services: React.FC = () => {
  const activeServices = servicesData.filter((service) => service.enabled);
  const isExternal = siteConfig.contact.isWhatsAppConfigured;

  const handleServiceCtaClick = (serviceTitle: string) => {
    trackEvent('service_category_interaction', {
      service_name: serviceTitle,
      section: 'services',
    });
    trackEvent('whatsapp_click', {
      service_name: serviceTitle,
      section: 'services_card',
    });
  };

  return (
    <section id="servicos" className="section section--light" aria-labelledby="services-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Nossos Serviços"
          title="Soluções em Construção, Reformas e Manutenção"
          titleId="services-heading"
          subtitle="Atendimento para residências, apartamentos, condomínios, lojas e escritórios em toda a Zona Leste de São Paulo. Solicite um orçamento gratuito para a sua necessidade."
        />

        <div className={styles.grid}>
          {activeServices.map((service, index) => {
            const whatsappHref = getWhatsAppUrl({ serviceName: service.title });
            const serviceNum = String(index + 1).padStart(2, '0');

            return (
              <article key={service.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.iconBox}>
                    <ServiceIcon name={service.icon} size={24} />
                  </div>
                  <span className={styles.cardIndex} aria-hidden="true">
                    {serviceNum}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>

                {service.scopeNote && (
                  <div className={styles.scopeNote}>
                    <ServiceIcon name="info" size={14} />
                    <span>{service.scopeNote}</span>
                  </div>
                )}

                <div className={styles.cardFooter}>
                  <a
                    href={whatsappHref}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className={styles.cardCta}
                    onClick={() => handleServiceCtaClick(service.title)}
                    aria-label={`Solicitar orçamento para ${service.title} pelo WhatsApp`}
                  >
                    <span className={styles.ctaLeft}>
                      <ServiceIcon name="whatsapp" size={17} />
                      <span>Orçar este serviço</span>
                    </span>
                    <ServiceIcon name="arrow-right" size={16} className={styles.arrowIcon} />
                  </a>
                </div>
              </article>
            );
          })}

          {/* Card de fechamento que equilibra a grade e reforça o WhatsApp */}
          <aside className={styles.summaryCtaCard}>
            <div className={styles.summaryCtaContent}>
              <span className={styles.summaryTag}>Avaliação Gratuita</span>
              <h3 className={styles.summaryTitle}>
                Precisa combinar serviços ou tem uma demanda específica?
              </h3>
              <p className={styles.summaryText}>
                Todos os serviços passam por avaliação prévia de Ademir — por fotos e vídeos no
                WhatsApp ou visita presencial agendada — para confirmar escopo, viabilidade e
                orçamento de mão de obra.
              </p>
            </div>
            <div className={styles.summaryAction}>
              <WhatsAppButton
                label="Conversar sobre minha obra"
                sectionOrigin="services_summary_card"
                variant="primary"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
