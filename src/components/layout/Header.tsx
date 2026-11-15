import React, { useState, useEffect } from 'react';
import { navigationLinks } from '../../data/content';
import { Logo } from '../ui/Logo';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { trackEvent } from '../../utils/analytics';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Trava a rolagem do fundo quando o menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (label: string) => {
    setIsMobileMenuOpen(false);
    trackEvent('navigation_click', { event_label: label });
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerInner}`}>
        <Logo variant="dark" />

        {/* Navegação Desktop */}
        <nav className={styles.desktopNav} aria-label="Menu principal">
          <ul className={styles.navList}>
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.navLink}
                  onClick={() => handleNavClick(item.label)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.headerActions}>
          <div className={styles.desktopCta}>
            <WhatsAppButton
              label="Solicitar Orçamento"
              sectionOrigin="header"
              variant="primary"
              size="md"
            />
          </div>

          <button
            type="button"
            className={styles.mobileMenuBtn}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`} />
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`} />
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`} />
          </button>
        </div>
      </div>

      {/* Backdrop Mobile */}
      {isMobileMenuOpen && (
        <div
          className={styles.mobileBackdrop}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Menu Mobile */}
      <div
        id="mobile-navigation"
        className={`${styles.mobileNavWrapper} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="container" aria-label="Menu dispositivos móveis">
          <ul className={styles.mobileNavList}>
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => handleNavClick(item.label)}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileCtaWrapper}>
            <WhatsAppButton
              label="Solicitar orçamento gratuito"
              sectionOrigin="header_mobile"
              variant="primary"
              size="lg"
              fullWidth
            />
          </div>
        </nav>
      </div>
    </header>
  );
};
