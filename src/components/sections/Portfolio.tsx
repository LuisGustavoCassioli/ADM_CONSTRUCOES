import React, { useState } from 'react';
import {
  portfolioCategories,
  portfolioItems,
  PortfolioCategory,
} from '../../data/portfolio';
import { trackEvent } from '../../utils/analytics';
import { SectionHeader } from '../ui/SectionHeader';
import { ServiceIcon } from '../ui/ServiceIcon';
import styles from './Portfolio.module.css';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('Todos');
  const hasAnyRealPhoto = portfolioItems.some((item) => Boolean(item.imageUrl?.trim()));

  const filteredItems =
    hasAnyRealPhoto && selectedCategory !== 'Todos'
      ? portfolioItems.filter((item) => item.category === selectedCategory)
      : portfolioItems;

  const handleCategoryChange = (category: PortfolioCategory) => {
    setSelectedCategory(category);
    trackEvent('portfolio_filter_click', { event_label: category });
  };

  return (
    <section id="portfolio" className="section section--white" aria-labelledby="portfolio-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Portfólio"
          title="Registros de Obras e Reformas"
          titleId="portfolio-heading"
          subtitle="Espaço reservado exclusivamente para fotografias reais de serviços executados por Ademir."
        />

        {hasAnyRealPhoto && (
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
        )}

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
                        <ServiceIcon name="camera" size={22} />
                      </div>
                      <span className={styles.placeholderBadge}>Foto real em breve</span>
                    </div>
                  )}
                </div>

                <div className={styles.cardBody}>
                  <span className={styles.locationText}>{item.location}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
