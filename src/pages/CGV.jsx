import React from 'react';
import '../styles/CGV.scss';

const CGV = () => {
  return (
    <div className="cgv-page">
      <div className="container">
        <h1>Conditions Générales de Vente</h1>
        
        <section className="cgv-section">
          <h2>1. Objet</h2>
          <p>
            Les présentes conditions générales de vente s'appliquent à tous les services de coaching scolaire 
            et d'accompagnement dans les apprentissages proposés par L'image en tête.
          </p>
        </section>

        <section className="cgv-section">
          <h2>2. Prestations</h2>
          <p>Les prestations proposées comprennent :</p>
          <ul>
            <li>Bilan et suivi individuel</li>
            <li>Ateliers collectifs</li>
            <li>Soins Reiki</li>
          </ul>
        </section>

        <section className="cgv-section">
          <h2>3. Tarifs et modalités de paiement</h2>
          <p>
            Les tarifs sont indiqués pour chaque prestation. Le paiement s'effectue à la fin de chaque séance 
            ou selon les modalités convenues lors de la prise de rendez-vous.
          </p>
          <p>
            Pour les séances à domicile, les frais de déplacement peuvent s'appliquer selon la distance.
          </p>
        </section>

        <section className="cgv-section">
          <h2>4. Annulation et report</h2>
          <p>
            Toute annulation doit être effectuée au moins 24h à l'avance. En cas d'annulation tardive, 
            la séance sera facturée à 50% de son montant.
          </p>
          <p>
            Les reports sont possibles sous réserve de disponibilité et doivent être effectués au moins 24h à l'avance.
          </p>
        </section>

        <section className="cgv-section">
          <h2>5. Confidentialité</h2>
          <p>
            Toutes les informations échangées lors des séances sont strictement confidentielles et ne seront 
            pas divulguées à des tiers sans l'accord explicite du client.
          </p>
        </section>

        <section className="cgv-section">
          <h2>6. Responsabilité</h2>
          <p>
            L'image en tête s'engage à fournir ses services avec professionnalisme et bienveillance. 
            La responsabilité de l'entreprise est limitée au montant des prestations effectuées.
          </p>
        </section>

        <section className="cgv-section">
          <h2>7. Droit applicable</h2>
          <p>
            Les présentes conditions générales de vente sont soumises au droit français. 
            En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>

        <div className="cgv-footer">
          <p><strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </div>
    </div>
  );
};

export default CGV;

