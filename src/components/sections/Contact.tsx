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
              title="Solicite seu Orçamento Gratuito pelo WhatsApp"
              titleId="contact-heading"
              subtitle="Converse diretamente com Ademir. Explique o serviço que precisa realizar em seu imóvel residencial ou comercial na Zona Leste de São Paulo."
            />

            <div className={styles.tipsBox}>
              <h3 className={styles.tipsTitle}>
                <ServiceIcon name="camera" size={18} />
                <span>Como agilizar a avaliação do seu orçamento</span>
              </h3>
              <ul className={styles.tipsList}>
                <li>
                  <span className={styles.tipIcon}>
                    <ServiceIcon name="check" size={14} />
                  </span>
                  <span>Informe qual é o tipo de serviço (construção, reforma, piso, pintura, etc.);</span>
                </li>
                <li>
                  <span className={styles.tipIcon}>
                    <ServiceIcon name="check" size={14} />
                  </span>
                  <span>Envie fotos ou um vídeo curto mostrando o local do serviço;</span>
                </li>
                <li>
                  <span className={styles.tipIcon}>
                    <ServiceIcon name="check" size={14} />
                  </span>
                  <span>Informe o bairro onde fica o imóvel (Zona Leste de São Paulo).</span>
                </li>
              </ul>
            </div>

            <div className={styles.ctaArea}>
              <WhatsAppButton
                label="Chamar no WhatsApp para Orçamento"
                sectionOrigin="contact_section"
                variant="whatsapp"
                size="lg"
              />

              {!isWhatsAppConfigured && (
                <p className={styles.pendingPhoneNotice} role="status">
                  Nota: O número oficial de WhatsApp da ADM será ativado neste botão assim que
                  configurado no ambiente (<code>VITE_WHATSAPP_NUMBER</code>).
                </p>
              )}
            </div>
          </div>

          <aside className={styles.infoSidebar} aria-label="Informações de atendimento">
            <div className={styles.sidebarHeader}>
              <span className={styles.sidebarTag}>Resumo de Atendimento</span>
              <h3>Informações Diretas</h3>
            </div>

            <div className={styles.infoList}>
              <div className={styles.infoBlock}>
                <div className={styles.infoIcon}>
                  <ServiceIcon name="user" size={18} />
                </div>
                <div>
                  <span className={styles.infoLabel}>Responsável</span>
                  <strong className={styles.infoValue}>
                    {siteConfig.business.owner} ({siteConfig.business.role})
                  </strong>
                  <span className={styles.infoSub}>
                    Aproximadamente {siteConfig.business.experienceYears} anos de experiência
                  </span>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.infoIcon}>
                  <ServiceIcon name="location" size={18} />
                </div>
                <div>
                  <span className={styles.infoLabel}>Região de Atendimento</span>
                  <strong className={styles.infoValue}>{siteConfig.business.serviceArea}</strong>
                  <span className={styles.infoSub}>Atendimento presencial no local (SP)</span>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.infoIcon}>
                  <ServiceIcon name="calendar" size={18} />
                </div>
                <div>
                  <span className={styles.infoLabel}>Canal e Agendamento</span>
                  {displayPhone ? (
                    <strong className={styles.infoValue}>{displayPhone}</strong>
                  ) : (
                    <strong className={styles.infoValue}>Atendimento via WhatsApp</strong>
                  )}
                  <span className={styles.infoSub}>
                    Mediante agendamento prévio (sem plantão emergencial)
                  </span>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.infoIcon}>
                  <ServiceIcon name="wallet" size={18} />
                </div>
                <div>
                  <span className={styles.infoLabel}>Formas de Pagamento</span>
                  <strong className={styles.infoValue}>Pix e Dinheiro</strong>
                  <span className={styles.infoSub}>
                    Cobrança de mão de obra (materiais por conta do cliente)
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
