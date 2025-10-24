import React, { useState } from 'react';
import { siteData } from '../data/data';
import '../styles/Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Détecter la page courante
  React.useEffect(() => {
    const updateActivePage = () => {
      const path = window.location.pathname;
      switch (path) {
        case '/about':
          setActivePage('about');
          break;
        case '/contact':
          setActivePage('contact');
          break;
        case '/services/bilan':
          setActivePage('bilan');
          break;
        case '/services/atelier':
          setActivePage('atelier');
          break;
        case '/services/reiki':
          setActivePage('reiki');
          break;
        default:
          setActivePage('home');
      }
    };

    // Mettre à jour au chargement
    updateActivePage();

    // Écouter les changements d'URL
    window.addEventListener('popstate', updateActivePage);
    
    return () => {
      window.removeEventListener('popstate', updateActivePage);
    };
  }, []);

  const navigateToPage = (path) => {
    // Mettre à jour l'état actif immédiatement
    const pageName = path === '/' ? 'home' : path.substring(1);
    setActivePage(pageName);
    
    // Naviguer vers la page
    window.location.href = path;
    setIsMenuOpen(false);
  };

  const getNavLinkClass = (page) => {
    return activePage === page ? 'nav-link active' : 'nav-link';
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo">
            <div className="logo-icon">
              <div className="graduation-cap">🎓</div>
              <div className="paper-plane">✈️</div>
              <div className="arc-line"></div>
            </div>
            <div className="logo-text">
              <span className="logo-line1">L'image</span>
              <span className="logo-line2">en tête</span>
            </div>
          </div>
        </div>

        {/* Tagline Section */}
        <div className="tagline-section">
          <p className="tagline">{siteData.slogan}</p>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Navigation Section - Centered under tagline */}
      <nav className="navigation">
        <div className="nav-links">
          <button 
            className={getNavLinkClass('home')}
            onClick={() => navigateToPage('/')}
          >
            Accueil
          </button>
          <button 
            className={getNavLinkClass('about')}
            onClick={() => navigateToPage('/about')}
          >
            À propos
          </button>
          <button 
            className="nav-link dropdown"
            onMouseEnter={() => setActivePage('services')}
          >
            Services
            <div className="dropdown-content">
              <a href="/services/bilan">Mon bilan & suivi</a>
              <a href="/services/atelier">Mes ateliers</a>
              <a href="/services/reiki">Mon soin Reiki</a>
            </div>
          </button>
          <button 
            className={getNavLinkClass('contact')}
            onClick={() => navigateToPage('/contact')}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <button className="mobile-nav-link" onClick={() => navigateToPage('/')}>
            Accueil
          </button>
          <button className="mobile-nav-link" onClick={() => navigateToPage('/about')}>
            À propos
          </button>
          <button className="mobile-nav-link" onClick={() => navigateToPage('/services/bilan')}>
            Mon bilan & suivi
          </button>
          <button className="mobile-nav-link" onClick={() => navigateToPage('/services/atelier')}>
            Mes ateliers
          </button>
          <button className="mobile-nav-link" onClick={() => navigateToPage('/services/reiki')}>
            Mon soin Reiki
          </button>
          <button className="mobile-nav-link" onClick={() => navigateToPage('/contact')}>
            Contact
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
