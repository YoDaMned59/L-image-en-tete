import React from 'react';
import { services, siteInfo } from '../data/services';
import '../styles/Acceuil.scss';

const Acceuil = () => {
  return (
    <div className="acceuil">
      {/* En-tête */}
      <header className="header">
        <h1>{siteInfo.title}</h1>
        <h2>{siteInfo.subtitle1}</h2>
        <h2>{siteInfo.subtitle2}</h2>
      </header>

      {/* Dates */}
      <section className="dates">
        <h3>Dates :</h3>
        {siteInfo.dates.map((date, index) => (
          <p key={index}>{date}</p>
        ))}
      </section>

      {/* Services */}
      <section className="services">
        <h2>Nos Services</h2>
        <div className="services-grid">
          {Object.values(services).map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="price">{service.price}</div>
              <a href={`/${service.id}`} className="service-link">
                <button>Découvrir</button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2>Contact</h2>
        <p>{siteInfo.contact}</p>
      </section>
    </div>
  );
};

export default Acceuil;
