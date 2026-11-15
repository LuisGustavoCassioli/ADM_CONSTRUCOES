import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { trackEvent } from '../../utils/analytics';
import { ServiceIcon } from '../ui/ServiceIcon';
import styles from './FloatingWhatsApp.module.css';

export const FloatingWhatsApp: React.FC = () => {
  const href = getWhatsAppUrl();
  const isExternal = siteConfig.contact.isWhatsAppConfigured;

  const handleClick = () => {
    trackEvent('whatsapp_click', {
      section: 'floating_button',
      event_label: 'Botão Flutuante WhatsApp',
    });
  };

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={styles.floatingBtn}
      onClick={handleClick}
      aria-label="Solicitar orçamento gratuito pelo WhatsApp"
      title="Solicitar orçamento gratuito pelo WhatsApp"
    >
      <ServiceIcon name="whatsapp" size={28} />
      <span className={styles.floatingLabel}>Orçamento no WhatsApp</span>
    </a>
  );
};

