import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { trackEvent } from '../../utils/analytics';
import { ServiceIcon } from './ServiceIcon';
import styles from './Button.module.css';

interface WhatsAppButtonProps {
  label?: string;
  serviceName?: string;
  customMessage?: string;
  variant?: 'primary' | 'whatsapp' | 'outline';
  size?: 'md' | 'lg';
  fullWidth?: boolean;
  sectionOrigin: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  label = 'Solicitar orçamento gratuito',
  serviceName,
  customMessage,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  sectionOrigin,
}) => {
  const href = getWhatsAppUrl({ serviceName, customMessage });
  const isExternal = siteConfig.contact.isWhatsAppConfigured;

  const handleClick = () => {
    trackEvent('whatsapp_click', {
      section: sectionOrigin,
      service_name: serviceName || 'geral',
      event_label: label,
    });
    trackEvent('quote_request_click', {
      section: sectionOrigin,
      service_name: serviceName || 'geral',
    });
  };

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={handleClick}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${
        fullWidth ? styles.fullWidth : ''
      }`}
    >
      <ServiceIcon name="whatsapp" size={size === 'lg' ? 22 : 18} />
      <span>{label}</span>
    </a>
  );
};

