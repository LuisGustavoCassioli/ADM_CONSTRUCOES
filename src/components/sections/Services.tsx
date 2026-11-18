import React from 'react';
import { servicesData } from '../../data/services';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { trackEvent } from '../../utils/analytics';
import { siteConfig } from '../../config/siteConfig';
import { SectionHeader } from '../ui/SectionHeader';
import { ServiceIcon } from '../ui/ServiceIcon';
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
          title="Construção, Reformas e Manutenção"
          titleId="services-heading"
          subtitle="Atendimento residencial e comercial em toda a Zona Leste de São Paulo."
        />

        <div className={styles.grid}>
          {activeServices.map((service) => {
            const whatsappHref = getWhatsAppUrl({ serviceName: service.title });

            return (
              <article key={service.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.iconBox}>
                    <ServiceIcon name={service.icon} size={22} />
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>

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
                      <span>Orçar serviço</span>
                    </span>
                    <ServiceIcon name="arrow-right" size={16} className={styles.arrowIcon} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <p className={styles.servicesNote}>
          Orçamento gratuito mediante avaliação por fotos/vídeos no WhatsApp ou visita técnica.
        </p>
      </div>
    </section>
  );
};
