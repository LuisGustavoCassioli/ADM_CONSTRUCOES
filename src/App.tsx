import React, { useEffect } from 'react';
import { siteConfig } from './config/siteConfig';
import { initAnalytics } from './utils/analytics';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Portfolio } from './components/sections/Portfolio';
import { ServiceArea } from './components/sections/ServiceArea';
import { HowItWorks } from './components/sections/HowItWorks';
import { Conditions } from './components/sections/Conditions';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';

export const App: React.FC = () => {
  useEffect(() => {
    initAnalytics();

    // Configura tag canonical dinamicamente se VITE_SITE_URL estiver definida
    if (siteConfig.seo.siteUrl) {
      let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = siteConfig.seo.siteUrl;

      let ogUrlMeta = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
      if (!ogUrlMeta) {
        ogUrlMeta = document.createElement('meta');
        ogUrlMeta.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrlMeta);
      }
      ogUrlMeta.content = siteConfig.seo.siteUrl;
    }

    // Se o telefone oficial for configurado, inclui dinamicamente no Schema JSON-LD
    if (siteConfig.contact.displayPhone || siteConfig.contact.whatsappNumber) {
      const scriptTag = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
      if (scriptTag && scriptTag.textContent) {
        try {
          const schemaObj = JSON.parse(scriptTag.textContent);
          schemaObj.telephone =
            siteConfig.contact.displayPhone || `+${siteConfig.contact.whatsappNumber}`;
          scriptTag.textContent = JSON.stringify(schemaObj, null, 2);
        } catch {
          // ignora falha de parse
        }
      }
    }
  }, []);

  return (
    <>
      <a href="#conteudo-principal" className="skip-to-content">
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <ServiceArea />
        <HowItWorks />
        <Conditions />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default App;

