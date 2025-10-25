import React from 'react';
import { siteData } from '../data/data';
import '../styles/Home.scss';

const Home = () => {
  return (
    <div className="home">
      {/* Section Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>{siteData.siteName}</h1>
          <h2>{siteData.slogan}</h2>
          <p className="hero-description">
            Je vous accompagne avec bienveillance pour révéler votre potentiel d'apprentissage
          </p>
          <button className="cta-button">Découvrir mes services</button>
        </div>
      </section>

      {/* Section Présentation */}
      <section className="presentation-section">
        <div className="container">
          <h2>Mon approche</h2>
          <p>
            Je crois que chaque personne a un potentiel unique. Ma mission est de vous accompagner 
            dans la découverte de votre façon d'apprendre pour retrouver plaisir et autonomie dans vos études.
          </p>
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
                <img src="/src/assets/expliquer comment faire.webp" alt="Explication de la métacognition et des méthodes d'apprentissage" />
              </div>
              <div className="service-content">
                <h3>{siteData.services[0].titre.toUpperCase()}</h3>
                <p className="service-description">
                  {siteData.services[0].pourQui}
                </p>
                <div className="objectives">
                  <p>{siteData.services[0].objectifs.join(', ')}</p>
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
                    <span>{siteData.services[0].format}</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">€</span>
                    <span>{siteData.services[0].tarif}</span>
                  </div>
                </div>
                <div className="service-buttons">
                  <a href="/services/bilan" className="cta-button primary">Prendre rendez-vous</a>
                  <a href="/services/bilan" className="cta-button secondary">En savoir plus</a>
                </div>
              </div>
            </div>

            {/* Ateliers */}
            <div className="service-block atelier-block">
              <div className="service-image">
                <img src="/src/assets/Atelier remediation cognitive.webp" alt="Ateliers de remédiation cognitive" />
              </div>
              <div className="service-content">
                <h3>{siteData.services[1].titre.toUpperCase()}</h3>
                <p className="service-description">
                  {siteData.services[1].pourQui}
                </p>
                <div className="objectives">
                  <p>{siteData.services[1].objectifs.join(', ')}</p>
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
                    <span>{siteData.services[1].format}</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">€</span>
                    <span>{siteData.services[1].tarif}</span>
                  </div>
                </div>
                <div className="service-buttons">
                  <a href="/services/atelier" className="cta-button primary">Prendre rendez-vous</a>
                  <a href="/services/atelier" className="cta-button secondary">En savoir plus</a>
                </div>
              </div>
            </div>

            {/* Reiki */}
            <div className="service-block reiki-block">
              <div className="service-content">
                <h3>{siteData.services[2].titre.toUpperCase()}</h3>
                <p className="service-description">
                  {siteData.services[2].pourQui}
                </p>
                <div className="objectives">
                  <p>{siteData.services[2].objectifs.join(', ')}</p>
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
                    <span>{siteData.services[2].format}</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">€</span>
                    <span>{siteData.services[2].tarif}</span>
                  </div>
                </div>
                <div className="service-buttons">
                  <a href="/services/reiki" className="cta-button primary">Prendre rendez-vous</a>
                  <a href="/services/reiki" className="cta-button secondary">En savoir plus</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Prêt(e) à commencer votre parcours ?</h2>
          <p>Première rencontre gratuite sur demande</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Prendre rendez-vous</a>
            <a href="/about" className="cta-button secondary">En savoir plus</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
