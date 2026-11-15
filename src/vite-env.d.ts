/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER?: string;
  readonly VITE_DISPLAY_PHONE?: string;
  readonly VITE_SITE_URL?: string;
  readonly VITE_LOGO_PATH?: string;
  readonly VITE_HERO_IMAGE_PATH?: string;
  readonly VITE_GTM_ID?: string;
  readonly VITE_GA4_ID?: string;
  readonly VITE_CLARITY_ID?: string;
  readonly VITE_GOOGLE_ADS_ID?: string;
  readonly VITE_GSC_VERIFICATION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

