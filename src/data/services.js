// Données des services - Facile à modifier par le client
export const services = {
  bilan: {
    id: 'bilan',
    title: 'Bilan + Suivis individuel',
    icon: '📚',
    description: 'Accompagnement personnalisé pour l\'apprentissage',
    price: '70€ puis 55€',
    color: '#2c5aa0',
    details: {
      pourQui: 'Enfants à partir de 3/4 ans, étudiants',
      quoi: [
        'Métacognition :',
        'Apprendre à apprendre',
        '(stimulation des fonctions exécutives)',
        'Méthodologie : prise de note, organisation, gestion du temps',
        '→ TDAH, DYS et aménagements'
      ],
      comment: [
        '1h à 1h30 par semaine',
        'Pack de 5 séances',
        '(suivi régulier important si stimulation FE)'
      ],
      prix: [
        '70€ puis 55€',
        'À domicile : CESU -50% du tarif par les impôts'
      ]
    }
  },
  
  atelier: {
    id: 'atelier',
    title: 'Atelier collectif',
    icon: '👥',
    description: 'Apprentissage en groupe par le jeu',
    price: '10€ à 20€',
    color: '#28a745',
    details: {
      pourQui: 'Enfants à partir de 3/4 ans, parents, étudiants, tout public',
      quoi: [
        'Remédiation cognitive :',
        'Stratégies d\'apprentissage par le jeu',
        'Méthodologie',
        'Prise de note visuelle (Sketchnote, Cornell, mindmap...)'
      ],
      comment: [
        '1h - groupes de 8 personnes max.',
        'Possibilité - de personnes selon atelier'
      ],
      prix: ['10€ à 20€']
    }
  },
  
  reiki: {
    id: 'reiki',
    title: 'Soin Reiki',
    icon: '🧘',
    description: 'Détente et bien-être énergétique',
    price: '60€',
    color: '#6f42c1',
    details: {
      pourQui: 'Tout public',
      quoi: [
        'Détente',
        'Aide prise de décision éclairée',
        'Burn out, anxiété...',
        '→ Stimule le potentiel d\'autoguérison de la personne'
      ],
      comment: [
        'Soin devant du corps',
        'Dos',
        'Devant et dos',
        'À distance'
      ],
      prix: ['60€']
    }
  }
};

// Informations générales
export const siteInfo = {
  title: 'L\'image en tête',
  subtitle1: 'Coaching scolaire',
  subtitle2: 'Accompagnement dans les apprentissages',
  dates: [
    'CLAP : 19 novembre',
    'Début entreprise : décembre / janvier'
  ],
  contact: 'Pour plus d\'informations ou pour prendre rendez-vous, n\'hésitez pas à nous contacter.'
};
