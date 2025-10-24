import React from 'react';
import { siteData } from '../data/data';
import '../styles/ServicePage.scss';

const ServicePage = ({ serviceId }) => {
  const service = siteData.services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="service-page">
        <div className="container">
          <h1>Service non trouvé</h1>
          <p>Le service demandé n'existe pas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="service-page">
      <div className="container">
        {/* Section Hero */}
        <section className="service-hero">
          <h1>{service.titre}</h1>
          <p className="service-subtitle">{service.pourQui}</p>
        </section>

        {/* Section Objectifs */}
        <section className="objectives-section">
          <h2>Objectifs</h2>
          <ul className="objectives-list">
            {service.objectifs.map((objectif, index) => (
              <li key={index}>{objectif}</li>
            ))}
          </ul>
        </section>

        {/* Section Format et Tarifs */}
        <section className="details-section">
          <div className="details-grid">
            <div className="detail-card">
              <h3>Format</h3>
              <p>{service.format}</p>
            </div>
            <div className="detail-card">
              <h3>Tarif</h3>
              <p className="price">{service.tarif}</p>
            </div>
            <div className="detail-card">
              <h3>Approche</h3>
              <p>{service.ton}</p>
            </div>
          </div>
        </section>

        {/* Section spécifique selon le service */}
        {service.id === 'bilan' && (
          <section className="specific-content">
            <h2>Transformez les difficultés en réussites</h2>
            <div className="hero-description">
              <p>Votre enfant a du potentiel, mais les méthodes traditionnelles ne lui conviennent pas ? Je vous accompagne pour révéler ses talents cachés et lui redonner confiance en ses capacités.</p>
            </div>
            
            <div className="benefits-section">
              <h3>🎯 Ce que vous allez obtenir</h3>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">🧠</div>
                  <h4>Méthodes d'apprentissage sur mesure</h4>
                  <p>Chaque enfant apprend différemment. Je découvre SA façon d'apprendre et lui enseigne des techniques adaptées à son profil.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">⚡</div>
                  <h4>Résultats visibles dès les premières séances</h4>
                  <p>Votre enfant retrouve le plaisir d'apprendre et ses notes s'améliorent rapidement. Fini les crises de devoirs !</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🎓</div>
                  <h4>Autonomie et confiance en soi</h4>
                  <p>Il devient capable de s'organiser seul, de gérer son temps et de prendre confiance en ses capacités.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">💪</div>
                  <h4>Gestion du stress et des émotions</h4>
                  <p>Techniques pour gérer l'anxiété, la frustration et retrouver la sérénité face aux apprentissages.</p>
                </div>
              </div>
            </div>

            <div className="process-section">
              <h3>🔄 Mon approche en 3 étapes</h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h4>Bilan personnalisé</h4>
                  <p>Je découvre le profil d'apprentissage de votre enfant, ses forces et ses défis. Cette première rencontre est <strong>gratuite</strong> et sans engagement.</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h4>Plan d'action sur mesure</h4>
                  <p>Je crée un programme personnalisé avec des objectifs concrets et des méthodes adaptées à son profil unique.</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h4>Suivi et ajustements</h4>
                  <p>Accompagnement régulier avec ajustements selon les progrès. Vous recevez des bilans détaillés de l'évolution.</p>
                </div>
              </div>
            </div>

            <div className="testimonials-section">
              <h3>💬 Témoignages de parents</h3>
              <div className="testimonials">
                <div className="testimonial">
                  <p>"Grâce à l'accompagnement de [Nom], mon fils a retrouvé confiance en lui. Ses notes ont progressé de 3 points en moyenne et surtout, il aime maintenant faire ses devoirs !"</p>
                  <span className="author">- Marie, maman de Tom, 12 ans</span>
                </div>
                <div className="testimonial">
                  <p>"Ma fille était en échec scolaire. En 3 mois d'accompagnement, elle a non seulement rattrapé son retard mais excelle maintenant dans toutes les matières."</p>
                  <span className="author">- Sophie, maman de Léa, 15 ans</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {service.id === 'atelier' && (
          <section className="specific-content">
            <h2>Apprenez ensemble, progressez plus vite</h2>
            <div className="hero-description">
              <p>Découvrez la puissance de l'apprentissage en groupe ! Dans une ambiance conviviale et bienveillante, vous développerez des compétences essentielles tout en créant des liens avec d'autres apprenants.</p>
            </div>
            
            <div className="benefits-section">
              <h3>🌟 Pourquoi choisir les ateliers collectifs ?</h3>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">🤝</div>
                  <h4>Apprentissage collaboratif</h4>
                  <p>Échangez avec d'autres parents et enfants, partagez vos expériences et découvrez de nouvelles approches. L'apprentissage est plus riche en groupe !</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">💰</div>
                  <h4>Prix très accessible</h4>
                  <p>De 10€ à 20€ par atelier, c'est l'occasion parfaite de découvrir mes méthodes sans investissement important.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🎯</div>
                  <h4>Techniques pratiques</h4>
                  <p>Mind mapping, sketchnote, gestion du temps... Des outils concrets que vous pourrez utiliser immédiatement à la maison.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">👨‍👩‍👧‍👦</div>
                  <h4>Pour toute la famille</h4>
                  <p>Parents et enfants apprennent ensemble, créant une dynamique positive à la maison et renforçant les liens familiaux.</p>
                </div>
              </div>
            </div>

            <div className="themes-section">
              <h3>📚 Thématiques des ateliers</h3>
              <div className="themes-grid">
                <div className="theme-card">
                  <h4>🧠 Gestion du stress scolaire</h4>
                  <p>Techniques de relaxation, gestion des émotions, préparation aux examens. Pour retrouver la sérénité face aux apprentissages.</p>
                </div>
                <div className="theme-card">
                  <h4>📝 Méthodes de prise de notes</h4>
                  <p>Mind mapping, sketchnote, Cornell... Découvrez la méthode qui vous convient le mieux pour retenir efficacement.</p>
                </div>
                <div className="theme-card">
                  <h4>⏰ Organisation et gestion du temps</h4>
                  <p>Planning efficace, priorités, procrastination... Apprenez à gérer votre temps pour être plus productif et moins stressé.</p>
                </div>
                <div className="theme-card">
                  <h4>🎓 Préparation aux examens</h4>
                  <p>Stratégies de révision, gestion du trac, techniques de mémorisation... Préparez-vous sereinement aux évaluations.</p>
                </div>
              </div>
            </div>

            <div className="schedule-section">
              <h3>📅 Prochaines sessions</h3>
              <div className="schedule-info">
                <p><strong>Ateliers réguliers :</strong> Tous les samedis matin de 10h à 11h</p>
                <p><strong>Stages vacances :</strong> Pendant les vacances scolaires, sessions intensives de 2h</p>
                <p><strong>Thématiques variables :</strong> Chaque mois, un nouveau thème pour diversifier les apprentissages</p>
                <div className="cta-info">
                  <p>📞 <strong>Contactez-moi pour connaître les prochaines dates et réserver votre place !</strong></p>
                </div>
              </div>
            </div>
          </section>
        )}

        {service.id === 'reiki' && (
          <section className="specific-content">
            <h2>Retrouvez votre équilibre intérieur</h2>
            <div className="hero-description">
              <p>Le stress, l'anxiété, la fatigue vous épuisent ? Le Reiki vous offre un moment de détente profonde et de rééquilibrage énergétique pour retrouver sérénité et vitalité.</p>
            </div>
            
            <div className="benefits-section">
              <h3>✨ Les bienfaits du Reiki</h3>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">🧘</div>
                  <h4>Détente profonde</h4>
                  <p>Relâchement des tensions physiques et mentales, sensation de bien-être immédiate. Un moment de pure relaxation pour vous ressourcer.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">⚡</div>
                  <h4>Réduction du stress</h4>
                  <p>Le Reiki aide à évacuer le stress accumulé, à retrouver calme et sérénité. Parfait pour les périodes d'examens ou de surcharge mentale.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">💪</div>
                  <h4>Stimulation de l'auto-guérison</h4>
                  <p>Le Reiki active les processus naturels de guérison du corps, renforce le système immunitaire et accélère la récupération.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🌟</div>
                  <h4>Équilibre énergétique</h4>
                  <p>Harmonisation des chakras et rééquilibrage de l'énergie vitale pour retrouver vitalité, clarté mentale et bien-être général.</p>
                </div>
              </div>
            </div>

            <div className="process-section">
              <h3>🔄 Déroulement d'une séance</h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h4>Échange préliminaire</h4>
                  <p>Nous discutons de vos besoins, de vos attentes et de vos éventuelles préoccupations. Cette écoute bienveillante est essentielle.</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h4>Relaxation et soin</h4>
                  <p>Allongé(e) confortablement, vous recevez le soin Reiki. Pas de contact physique nécessaire, l'énergie circule naturellement.</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h4>Retour d'expérience</h4>
                  <p>Nous échangeons sur vos ressentis et je vous donne des conseils pour prolonger les bienfaits chez vous.</p>
                </div>
              </div>
            </div>

            <div className="modalities-section">
              <h3>📍 Modalités de soin</h3>
              <div className="modalities-grid">
                <div className="modality-card">
                  <h4>🏠 En cabinet</h4>
                  <p>Dans un cadre apaisant à Valenciennes, avec tout le confort nécessaire pour une détente optimale.</p>
                </div>
                <div className="modality-card">
                  <h4>🏡 À domicile</h4>
                  <p>Je me déplace chez vous pour plus de confort, dans votre environnement familier.</p>
                </div>
                <div className="modality-card">
                  <h4>📱 À distance</h4>
                  <p>Le Reiki fonctionne parfaitement à distance. Séance par visio ou téléphone, depuis votre domicile.</p>
                </div>
              </div>
            </div>

            <div className="testimonials-section">
              <h3>💬 Témoignages</h3>
              <div className="testimonials">
                <div className="testimonial">
                  <p>"Après ma première séance de Reiki, j'ai ressenti un bien-être que je n'avais pas connu depuis longtemps. Je dors mieux et je suis plus sereine face au stress du travail."</p>
                  <span className="author">- Sarah, 35 ans</span>
                </div>
                <div className="testimonial">
                  <p>"Le Reiki m'a aidé à gérer mon anxiété avant les examens. Je me sens plus centré et confiant. Je recommande vivement !"</p>
                  <span className="author">- Lucas, étudiant</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section CTA */}
        <section className="service-cta">
          <h2>Intéressé(e) par ce service ?</h2>
          <p>N'hésitez pas à me contacter pour plus d'informations ou pour prendre rendez-vous</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Prendre rendez-vous</a>
            <a href="/" className="cta-button secondary">Retour à l'accueil</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicePage;
