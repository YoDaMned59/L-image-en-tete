import React, { useState } from 'react';
import { siteData } from '../data/data';
import '../styles/Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Message envoyé ! Je vous répondrai dans les plus brefs délais.');
    setFormData({ nom: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="container">
        {/* Section Hero */}
        <section className="contact-hero">
          <h1>Contact</h1>
          <p className="hero-subtitle">N'hésitez pas à me contacter pour toute question</p>
        </section>

        <div className="contact-content">
          {/* Formulaire de contact */}
          <section className="contact-form-section">
            <h2>Envoyez-moi un message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nom">Nom *</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Envoyer le message
              </button>
            </form>
          </section>

          {/* Informations de contact */}
          <section className="contact-info-section">
            <h2>Coordonnées</h2>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h3>Adresse</h3>
                  <p>{siteData.contact.adresse}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>{siteData.contact.email}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <h3>Téléphone</h3>
                  <p>{siteData.contact.telephone}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div className="contact-text">
                  <h3>Horaires</h3>
                  <p>{siteData.contact.horaires}</p>
                </div>
              </div>
            </div>

            {/* Section réseaux sociaux */}
            <div className="social-section">
              <h3>Suivez-moi</h3>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>

            {/* Mention première rencontre gratuite */}
            <div className="free-consultation">
              <div className="highlight-box">
                <h3>🎁 Première rencontre gratuite</h3>
                <p>Sur demande, je propose une première rencontre gratuite pour faire connaissance et évaluer vos besoins.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
