import React from 'react';
import { siteData } from '../data/data';
import '../styles/About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        {/* Section Hero */}
        <section className="about-hero">
          <h1>{siteData.about.titre}</h1>
          <p className="hero-subtitle">Découvrez mon parcours et ma philosophie</p>
        </section>

        {/* Section Présentation */}
        <section className="presentation">
          <div className="presentation-content">
            <div className="text-content">
              <h2>Mon parcours</h2>
              <p>{siteData.about.contenu}</p>
              
              <h3>Ma philosophie</h3>
              <p>
                Je crois fermement que chaque apprenant possède un potentiel unique. Mon approche 
                bienveillante vise à valoriser les forces de chacun tout en accompagnant les défis 
                avec patience et expertise.
              </p>
              
              <h3>Mon engagement</h3>
              <ul className="engagement-list">
                <li>✅ J'adapte mon approche à chaque profil</li>
                <li>✅ Je valorise le potentiel de chaque apprenant</li>
                <li>✅ Je vous accompagne avec bienveillance et sans jugement</li>
                <li>✅ J'utilise des méthodes innovantes et ludiques</li>
                <li>✅ Je vous propose un suivi régulier et adaptatif</li>
              </ul>
            </div>
            
            <div className="image-content">
              <div className="profile-image">
                {/* Placeholder pour l'image de profil */}
                <div className="image-placeholder">
                  <span>Photo de profil</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Méthodes */}
        <section className="methods">
          <div className="methods-container">
            <h2>Les méthodes que j'utilise</h2>
            <div className="methods-grid">
            <div className="method-card">
              <div className="method-icon">🧠</div>
              <h3>Métacognition</h3>
              <p>Apprendre à apprendre en comprenant ses propres processus cognitifs</p>
            </div>
            <div className="method-card">
              <div className="method-icon">🎯</div>
              <h3>Fonctions exécutives</h3>
              <p>Développement de l'attention, la planification et l'organisation</p>
            </div>
            <div className="method-card">
              <div className="method-icon">🎨</div>
              <h3>Méthodologie visuelle</h3>
              <p>Mind mapping, sketchnote et techniques d'apprentissage créatives</p>
            </div>
            <div className="method-card">
              <div className="method-icon">🤝</div>
              <h3>Accompagnement bienveillant</h3>
              <p>Écoute active et soutien personnalisé pour chaque apprenant</p>
            </div>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="about-cta">
          <h2>Prêt(e) à commencer votre parcours ?</h2>
          <p>Je serais ravie de vous accompagner dans votre démarche</p>
          <a href="/contact" className="cta-button">Prendre contact</a>
        </section>
      </div>
    </div>
  );
};

export default About;
