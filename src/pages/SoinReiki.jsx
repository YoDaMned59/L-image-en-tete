import React from 'react';
import { services } from '../data/services';
import '../styles/SoinReiki.scss';

const SoinReiki = () => {
  const service = services.reiki;

  return (
    <div className="soin-reiki">
      <button className="back-btn" onClick={() => window.history.back()}>
        ← Retour
      </button>
      
      <div className="service-header">
        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </div>

      <div className="service-content">
        <div className="info-box">
          <h3>Pour qui ?</h3>
          <p>{service.details.pourQui}</p>
        </div>

        <div className="info-box">
          <h3>Quoi ?</h3>
          <ul>
            {service.details.quoi.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-box">
          <h3>Comment ?</h3>
          <ul>
            {service.details.comment.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-box price-box">
          <h3>Prix</h3>
          <ul>
            {service.details.prix.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <button className="contact-btn">Réserver un soin</button>
      </div>
    </div>
  );
};

export default SoinReiki;
