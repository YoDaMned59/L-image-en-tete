import React from 'react';
import { siteData } from '../data/data';
import { navigate } from '../utils/pathUtils';
import expliquerImage from '../assets/expliquer comment faire.webp';
import atelierImage from '../assets/Atelier remediation cognitive.webp';
import '../styles/Home.scss';

const Home = () => {
  const { home, services } = siteData;

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className="home">
      {/* Section Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>{siteData.siteName}</h1>
          <h2>{siteData.slogan}</h2>
          <p className="hero-description">
            {home.hero.description}
          </p>
          <button className="cta-button">{home.hero.bouton}</button>
        </div>
      </section>

      {/* Section Présentation */}
      <section className="presentation-section">
        <div className="container">
          <h2>{home.presentation.titre}</h2>
          <p>{home.presentation.texte}</p>
        </div>
      </section>

      {/* Section Mes Activités */}
      <section className="activities-section">
        <div className="container">
          <h2>Mes activités</h2>
          <div className="activities-grid">
            {/* Bilan & Suivi */}
            <div className="service-block bilan-block">
              <div className="service-image">
                <img src={expliquerImage} alt="Explication de la métacognition et des méthodes d'apprentissage" />
              </div>
              <div className="service-content">
                <h3>{services[0].titre.toUpperCase()}</h3>
                <p className="service-description">
                  {services[0].pourQui}
                </p>
                <div className="objectives">
                  <p>{services[0].objectifs.join(', ')}</p>
                </div>
                <div className="modalities">
                  <h4>Modalités :</h4>
                  <div className="modality-item">
                    <span className="icon">👤</span>
                    <span>Individuel</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">📍</span>
                    <span>À domicile</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">⏰</span>
                    <span>{services[0].format}</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">€</span>
                    <span>{services[0].tarif}</span>
                  </div>
                </div>
                <div className="service-buttons">
                  <a href="#" onClick={(e) => handleLinkClick(e, '/services/bilan')} className="cta-button primary">Prendre rendez-vous</a>
                  <a href="#" onClick={(e) => handleLinkClick(e, '/services/bilan')} className="cta-button secondary">En savoir plus</a>
                </div>
              </div>
            </div>

            {/* Ateliers */}
            <div className="service-block atelier-block">
              <div className="service-image">
                <img src={atelierImage} alt="Ateliers de remédiation cognitive" />
              </div>
              <div className="service-content">
                <h3>{services[1].titre.toUpperCase()}</h3>
                <p className="service-description">
                  {services[1].pourQui}
                </p>
                <div className="objectives">
                  <p>{services[1].objectifs.join(', ')}</p>
                </div>
                <div className="modalities">
                  <h4>Modalités :</h4>
                  <div className="modality-item">
                    <span className="icon">👥</span>
                    <span>Collectif</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">📍</span>
                    <span>À domicile</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">⏰</span>
                    <span>{services[1].format}</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">€</span>
                    <span>{services[1].tarif}</span>
                  </div>
                </div>
                <div className="service-buttons">
                  <a href="#" onClick={(e) => handleLinkClick(e, '/services/atelier')} className="cta-button primary">Prendre rendez-vous</a>
                  <a href="#" onClick={(e) => handleLinkClick(e, '/services/atelier')} className="cta-button secondary">En savoir plus</a>
                </div>
              </div>
            </div>

            {/* Reiki */}
            <div className="service-block reiki-block">
              <div className="service-image">
                <div className="reiki-placeholder">
                  <div className="reiki-icon">🧘</div>
                </div>
              </div>
              <div className="service-content">
                <h3>{services[2].titre.toUpperCase()}</h3>
                <p className="service-description">
                  {services[2].pourQui}
                </p>
                <div className="objectives">
                  <p>{services[2].objectifs.join(', ')}</p>
                </div>
                <div className="modalities">
                  <h4>Modalités :</h4>
                  <div className="modality-item">
                    <span className="icon">🧘</span>
                    <span>Tout public</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">📍</span>
                    <span>En cabinet (Richebourg) ou à distance</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">⏰</span>
                    <span>{services[2].format}</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">€</span>
                    <span>{services[2].tarif}</span>
                  </div>
                </div>
                <div className="service-buttons">
                  <a href="#" onClick={(e) => handleLinkClick(e, '/services/reiki')} className="cta-button primary">Prendre rendez-vous</a>
                  <a href="#" onClick={(e) => handleLinkClick(e, '/services/reiki')} className="cta-button secondary">En savoir plus</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>{home.cta.titre}</h2>
          <p>{home.cta.description}</p>
          <div className="cta-buttons">
            <a href="#" onClick={(e) => handleLinkClick(e, '/contact')} className="cta-button primary">{home.cta.boutonPrincipal}</a>
            <a href="#" onClick={(e) => handleLinkClick(e, '/about')} className="cta-button secondary">{home.cta.boutonSecondaire}</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
