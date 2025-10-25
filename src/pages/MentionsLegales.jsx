import React from 'react';
import '../styles/MentionsLegales.scss';

const MentionsLegales = () => {
  return (
    <div className="mentions-legales-page">
      <div className="container">
        <h1>Mentions légales</h1>
        
        <section className="mentions-section">
          <h2>1. Éditeur du site</h2>
          <p><strong>Raison sociale :</strong> L'image en tête</p>
          <p><strong>Activité :</strong> Coaching scolaire et accompagnement dans les apprentissages</p>
          <p><strong>Adresse :</strong> Richebourg, France</p>
          <p><strong>Téléphone :</strong> 06 46 25 50 65</p>
          <p><strong>Email :</strong> limageentete@gmail.com</p>
        </section>

        <section className="mentions-section">
          <h2>2. Hébergement</h2>
          <p>
            Ce site est hébergé par un prestataire professionnel. Les données sont stockées 
            de manière sécurisée conformément aux standards de l'industrie.
          </p>
        </section>

        <section className="mentions-section">
          <h2>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par 
            le droit d'auteur et appartient à L'image en tête ou à ses partenaires.
          </p>
          <p>
            Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
          </p>
        </section>

        <section className="mentions-section">
          <h2>4. Protection des données personnelles</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), 
            nous nous engageons à protéger vos données personnelles.
          </p>
          <p>
            Les données collectées lors de la prise de contact sont utilisées uniquement 
            pour répondre à vos demandes et ne sont pas transmises à des tiers.
          </p>
          <p>
            Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. 
            Pour exercer ce droit, contactez-nous à : limageentete@gmail.com
          </p>
        </section>

        <section className="mentions-section">
          <h2>5. Cookies</h2>
          <p>
            Ce site utilise des cookies techniques nécessaires au bon fonctionnement du site. 
            Aucun cookie de tracking n'est utilisé.
          </p>
        </section>

        <section className="mentions-section">
          <h2>6. Responsabilité</h2>
          <p>
            L'image en tête s'efforce de fournir des informations exactes et à jour sur ce site. 
            Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité 
            des informations mises à disposition.
          </p>
        </section>

        <section className="mentions-section">
          <h2>7. Droit applicable</h2>
          <p>
            Le présent site est soumis au droit français. En cas de litige, les tribunaux 
            français seront seuls compétents.
          </p>
        </section>

        <div className="mentions-footer">
          <p><strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;

