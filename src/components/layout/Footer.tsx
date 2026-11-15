import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { navigationLinks } from '../../data/content';
import { servicesData } from '../../data/services';
import { Logo } from '../ui/Logo';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const featuredServices = servicesData.filter((s) => s.enabled).slice(0, 6);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <Logo variant="dark" size="footer" />
          <p className={styles.brandDescription}>
            <strong>{siteConfig.business.name}</strong> — Serviços de construção, reformas
            residenciais e comerciais e manutenção em geral conduzidos pessoalmente por{' '}
            {siteConfig.business.owner}.
          </p>
          <p className={styles.regionHighlight}>
            Atendimento em toda a Zona Leste de São Paulo — SP.
          </p>
        </div>

        <div className={styles.linksCol}>
          <h3 className={styles.colTitle}>Navegação</h3>
          <ul className={styles.linkList}>
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.footerLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.servicesCol}>
          <h3 className={styles.colTitle}>Principais Serviços</h3>
          <ul className={styles.linkList}>
            {featuredServices.map((service) => (
              <li key={service.id}>
                <a href="#servicos" className={styles.footerLink}>
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.contactCol}>
          <h3 className={styles.colTitle}>Orçamento Gratuito</h3>
          <p className={styles.contactText}>
            Avaliação por envio de fotos e vídeos pelo WhatsApp ou visita presencial agendada na
            Zona Leste de SP.
          </p>
          <WhatsAppButton
            label="Solicitar Orçamento"
            sectionOrigin="footer"
            variant="primary"
            fullWidth
          />
          <span className={styles.paymentNote}>
            Pagamento da mão de obra: Pix ou dinheiro.
          </span>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p>
            © {currentYear} {siteConfig.business.name}. Todos os direitos reservados.
          </p>
          <p className={styles.localSeoNote}>
            Construção e Reformas na Zona Leste de São Paulo — SP
          </p>
        </div>
      </div>
    </footer>
  );
};

