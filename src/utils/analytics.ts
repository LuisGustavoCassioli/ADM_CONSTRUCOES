import { siteConfig } from '../config/siteConfig';

export type AnalyticsEventName =
  | 'whatsapp_click'
  | 'quote_request_click'
  | 'service_category_interaction'
  | 'portfolio_filter_click'
  | 'navigation_click';

export interface AnalyticsEventPayload {
  event_category?: string;
  event_label?: string;
  service_name?: string;
  section?: string;
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

/**
 * Inicializa os scripts de Analytics (GTM, GA4, Microsoft Clarity) apenas quando
 * os respectivos IDs reais forem configurados nas variáveis de ambiente.
 * Não injeta nenhum ID fictício.
 */
export function initAnalytics(): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  const { gtmId, ga4Id, clarityId, gscVerification } = siteConfig.analytics;

  // Google Search Console meta tag (se configurada via env)
  if (gscVerification && !document.querySelector('meta[name="google-site-verification"]')) {
    const meta = document.createElement('meta');
    meta.name = 'google-site-verification';
    meta.content = gscVerification;
    document.head.appendChild(meta);
  }

  // Google Tag Manager
  if (gtmId) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    document.head.appendChild(script);
  }

  // Google Analytics 4 (direto caso não use GTM)
  if (ga4Id) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`;
    document.head.appendChild(script);

    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args as unknown as Record<string, unknown>);
    };
    window.gtag('js', new Date());
    window.gtag('config', ga4Id);
  }

  // Microsoft Clarity
  if (clarityId) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${encodeURIComponent(clarityId)}`;
    document.head.appendChild(script);
  }
}

/**
 * Registra eventos de conversão e interação (clique no WhatsApp, orçamento, categorias de serviço)
 * compatíveis com Google Tag Manager (dataLayer), GA4 (gtag) e Microsoft Clarity.
 */
export function trackEvent(
  eventName: AnalyticsEventName,
  payload: AnalyticsEventPayload = {}
): void {
  if (typeof window === 'undefined') return;

  const eventData = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...payload,
  };

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventData);
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
  }

  if (typeof window.clarity === 'function') {
    window.clarity('set', eventName, payload.event_label || payload.service_name || 'interaction');
  }
}

