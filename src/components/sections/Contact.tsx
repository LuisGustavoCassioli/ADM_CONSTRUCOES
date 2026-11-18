import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { SectionHeader } from '../ui/SectionHeader';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { ServiceIcon } from '../ui/ServiceIcon';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
  const { isWhatsAppConfigured, displayPhone } = siteConfig.contact;

  return (
    <section id="contato" className="section section--light" aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.contactShell}>
          <div className={styles.mainCard}>
            <SectionHeader
              eyebrow="Fale com a ADM"
              title="Solicite seu Orçamento Gratuito"
              titleId="contact-heading"
              subtitle="Converse diretamente com Ademir pelo WhatsApp para avaliar seu serviço na Zona Leste de São Paulo."
            />

            <div className={styles.tipsBox}>
              <h3 className={styles.tipsTitle}>
                <ServiceIcon name="camera" size={18} />
                <span>Para agilizar seu orçamento, envie:</span>
              </h3>
              <ul className={styles.tipsList}>
                <li>
                  <span className={styles.tipIcon}>
                    <ServiceIcon name="check" size={14} />
                  </span>
                  <span>Tipo de serviço desejado;</span>
                </li>
                <li>
                  <span className={styles.tipIcon}>
                    <ServiceIcon name="check" size={14} />
                  </span>
                  <span>Fotos ou vídeo curto do local;</span>
                </li>
                <li>
                  <span className={styles.tipIcon}>
                    <ServiceIcon name="check" size={14} />
                  </span>
                  <span>Bairro na Zona Leste de SP.</span>
                </li>
              </ul>
            </div>

            <div className={styles.ctaArea}>
              <WhatsAppButton
                label="Chamar no WhatsApp"
                sectionOrigin="contact_section"
                variant="whatsapp"
                size="lg"
              />

              {!isWhatsAppConfigured && (
                <p className={styles.pendingPhoneNotice} role="status">
                  Nota: O número oficial de WhatsApp será ativado assim que configurado em{' '}
                  <code>VITE_WHATSAPP_NUMBER</code>.
                </p>
              )}
            </div>
          </div>

          <aside className={styles.infoSidebar} aria-label="Informações de atendimento">
            <div className={styles.sidebarHeader}>
              <span className={styles.sidebarTag}>Resumo</span>
              <h3>Atendimento</h3>
            </div>

            <div className={styles.infoList}>
              <div className={styles.infoBlock}>
                <div className={styles.infoIcon}>
                  <ServiceIcon name="user" size={18} />
                </div>
                <div>
                  <span className={styles.infoLabel}>Responsável</span>
                  <strong className={styles.infoValue}>
                    {siteConfig.business.owner} • ~{siteConfig.business.experienceYears} anos de
                    experiência
                  </strong>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.infoIcon}>
                  <ServiceIcon name="location" size={18} />
                </div>
                <div>
                  <span className={styles.infoLabel}>Região</span>
                  <strong className={styles.infoValue}>{siteConfig.business.serviceArea}</strong>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.infoIcon}>
                  <ServiceIcon name="calendar" size={18} />
                </div>
                <div>
                  <span className={styles.infoLabel}>WhatsApp / Agendamento</span>
                  <strong className={styles.infoValue}>
                    {displayPhone || 'Atendimento via WhatsApp'}
                  </strong>
                  <span className={styles.infoSub}>Com hora marcada (sem atendimento 24h)</span>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.infoIcon}>
                  <ServiceIcon name="wallet" size={18} />
                </div>
                <div>
                  <span className={styles.infoLabel}>Pagamento</span>
                  <strong className={styles.infoValue}>Pix e Dinheiro (sem cartão)</strong>
                  <span className={styles.infoSub}>Mão de obra • Materiais pelo cliente</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
