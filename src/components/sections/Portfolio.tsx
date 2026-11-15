import React, { useState } from 'react';
import {
  portfolioCategories,
  portfolioItems,
  PortfolioCategory,
} from '../../data/portfolio';
import { trackEvent } from '../../utils/analytics';
import { SectionHeader } from '../ui/SectionHeader';
import { ServiceIcon } from '../ui/ServiceIcon';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import styles from './Portfolio.module.css';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('Todos');

  const filteredItems =
    selectedCategory === 'Todos'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const handleCategoryChange = (category: PortfolioCategory) => {
    setSelectedCategory(category);
    trackEvent('portfolio_filter_click', { event_label: category });
  };

  return (
    <section id="portfolio" className="section section--white" aria-labelledby="portfolio-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Portfólio de Serviços"
          title="Registros de Obras e Reformas"
          titleId="portfolio-heading"
          subtitle="Valorizamos a transparência: não utilizamos fotos genéricas da internet. Abaixo está a galeria preparada exclusivamente para receber as fotografias reais dos trabalhos executados por Ademir."
        />

        {/* Filtros por categoria */}
        <div className={styles.filterBar} role="tablist" aria-label="Filtrar portfólio por categoria">
          {portfolioCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className={styles.galleryGrid}>
          {filteredItems.map((item) => {
            const hasRealPhoto = Boolean(item.imageUrl && item.imageUrl.trim().length > 0);

            return (
              <article key={item.id} className={styles.portfolioCard}>
                <div className={styles.mediaArea}>
                  {hasRealPhoto ? (
                    <img
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      loading="lazy"
                      className={styles.realPhoto}
                    />
                  ) : (
                    <div className={styles.placeholderBox} aria-label={item.imageAlt}>
                      <div className={styles.viewfinderCornerTL} aria-hidden="true" />
                      <div className={styles.viewfinderCornerTR} aria-hidden="true" />
                      <div className={styles.viewfinderCornerBL} aria-hidden="true" />
                      <div className={styles.viewfinderCornerBR} aria-hidden="true" />

                      <div className={styles.placeholderIcon}>
                        <ServiceIcon name="camera" size={24} />
                      </div>
                      <span className={styles.placeholderBadge}>
                        Espaço reservado para foto real
                      </span>
                      <p className={styles.placeholderHint}>
                        Acervo fotográfico da ADM em atualização
                      </p>
                    </div>
                  )}
                  <span className={styles.categoryBadge}>{item.category}</span>
                </div>

                <div className={styles.cardBody}>
                  <span className={styles.locationText}>{item.location}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.portfolioCtaBox}>
          <div className={styles.portfolioCtaText}>
            <span className={styles.ctaEyebrow}>Atendimento Direto</span>
            <h3>Quer tirar dúvidas ou avaliar o seu serviço?</h3>
            <p>
              Envie fotos ou vídeos do seu imóvel pelo WhatsApp e converse diretamente com Ademir
              sobre a sua reforma ou construção.
            </p>
          </div>
          <div className={styles.portfolioCtaAction}>
            <WhatsAppButton
              label="Solicitar avaliação no WhatsApp"
              sectionOrigin="portfolio"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
