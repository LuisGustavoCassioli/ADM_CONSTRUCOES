/**
 * Configuração centralizada do site institucional da ADM Construções e Reformas em Geral.
 * Nenhuma informação comercial fictícia (telefone, endereço, CNPJ ou IDs de rastreamento) é inserida aqui.
 */

const rawWhatsApp = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '');
const rawDisplayPhone = (import.meta.env.VITE_DISPLAY_PHONE || '').trim();
const rawSiteUrl = (import.meta.env.VITE_SITE_URL || '').trim().replace(/\/$/, '');
const rawLogoPath = (import.meta.env.VITE_LOGO_PATH || '').trim();
const rawHeroImagePath = (import.meta.env.VITE_HERO_IMAGE_PATH || '').trim();

export const siteConfig = {
  business: {
    name: 'ADM Construções e Reformas em Geral',
    shortName: 'ADM',
    tagline: 'Construções e Reformas em Geral',
    owner: 'Ademir',
    role: 'Profissional autônomo',
    experienceYears: 10,
    city: 'São Paulo',
    state: 'SP',
    serviceArea: 'Toda a Zona Leste de São Paulo',
    serviceAreaShort: 'Zona Leste de São Paulo — SP',
    targetAudience: [
      'Proprietários de casas',
      'Proprietários de apartamentos',
      'Condomínios',
      'Lojas',
      'Escritórios',
      'Estabelecimentos comerciais',
    ],
    paymentMethods: ['Pix', 'Dinheiro'],
    billingModels: ['Serviço completo (projeto fechado)', 'Diária'],
  },
  contact: {
    /** Número limpo apenas com dígitos (DDI+DDD+Número). Vazio enquanto não configurado. */
    whatsappNumber: rawWhatsApp,
    /** Indica se o número oficial do WhatsApp já foi configurado no ambiente */
    isWhatsAppConfigured: rawWhatsApp.length >= 10,
    /** Telefone formatado para exibição caso configurado */
    displayPhone: rawDisplayPhone,
    /** Mensagem inicial padrão para solicitação de orçamento */
    defaultWhatsAppMessage:
      'Olá! Encontrei a ADM pelo site e gostaria de solicitar um orçamento gratuito. Poderia me ajudar?',
  },
  assets: {
    /** Caminho do arquivo original da logo disponibilizado pelo cliente */
    logoPath: rawLogoPath || '/assets/logo/logo-adm.jpg',
    /** Caminho da foto real de obra para o Hero quando disponibilizada */
    heroImagePath: rawHeroImagePath,
  },
  seo: {
    siteUrl: rawSiteUrl || 'https://admconstrucoesereformas.com.br',
    title:
      'ADM Construções e Reformas em Geral | Zona Leste de São Paulo',
    description:
      'Construção civil e reformas residenciais e comerciais na Zona Leste de SP. Atendimento direto com Ademir. Solicite seu orçamento gratuito pelo WhatsApp!',
    keywords: [
      'Construção e reformas na Zona Leste',
      'Pedreiro na Zona Leste de São Paulo',
      'Reformas residenciais em São Paulo',
      'Reformas comerciais na Zona Leste',
      'Serviços de construção civil',
      'Orçamento gratuito para reformas',
      'Construção e reforma em geral',
      'Reforma de banheiro Zona Leste',
      'Reforma de cozinha Zona Leste',
      'Pintura e pisos Zona Leste SP',
    ],
  },
  analytics: {
    gtmId: (import.meta.env.VITE_GTM_ID || '').trim(),
    ga4Id: (import.meta.env.VITE_GA4_ID || '').trim(),
    clarityId: (import.meta.env.VITE_CLARITY_ID || '').trim(),
    googleAdsId: (import.meta.env.VITE_GOOGLE_ADS_ID || '').trim(),
    gscVerification: (import.meta.env.VITE_GSC_VERIFICATION || '').trim(),
  },
} as const;

