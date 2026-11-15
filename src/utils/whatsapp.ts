import { siteConfig } from '../config/siteConfig';

export interface WhatsAppLinkOptions {
  /** Nome do serviço ou categoria para personalizar a mensagem */
  serviceName?: string;
  /** Mensagem customizada opcional */
  customMessage?: string;
}

/**
 * Gera a mensagem pré-preenchida do WhatsApp de acordo com o contexto ou serviço selecionado.
 */
export function buildWhatsAppMessage(options?: WhatsAppLinkOptions): string {
  if (options?.customMessage) {
    return options.customMessage;
  }

  if (options?.serviceName) {
    return `Olá, Ademir! Encontrei a ADM pelo site e gostaria de solicitar um orçamento gratuito para o serviço de *${options.serviceName}* na Zona Leste de SP.`;
  }

  return siteConfig.contact.defaultWhatsAppMessage;
}

/**
 * Retorna a URL completa do WhatsApp (`https://wa.me/...`) quando o número oficial está configurado.
 * Caso o número ainda não tenha sido configurado no `.env`, retorna `#contato` para rolar até a seção
 * de contato sem expor números fictícios ou links quebrados.
 */
export function getWhatsAppUrl(options?: WhatsAppLinkOptions): string {
  const { whatsappNumber, isWhatsAppConfigured } = siteConfig.contact;
  const message = buildWhatsAppMessage(options);

  if (!isWhatsAppConfigured) {
    return '#contato';
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
}

