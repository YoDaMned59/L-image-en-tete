# L'Image en Tête - Projet React + SCSS

Ce projet utilise la stack moderne suivante :

## 🚀 Technologies utilisées

- **React 19.1.1** - La dernière version de React
- **Vite 7.1.7** - Build tool ultra-rapide
- **SCSS** - Préprocesseur CSS avec variables, mixins et nesting
- **JavaScript ES6+** - Langage de programmation moderne

## 📦 Installation

```bash
npm install
```

## 🛠️ Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint

## 🎨 Fonctionnalités SCSS

Le projet inclut :
- Variables SCSS pour une gestion cohérente des couleurs
- Mixins pour la réutilisabilité du code
- Nesting pour une structure CSS plus lisible
- Composants stylés avec différentes variantes

## 📁 Structure du projet

```
src/
├── components/
│   ├── Button.jsx      # Composant bouton réutilisable
│   └── Button.scss     # Styles SCSS du bouton
├── App.jsx             # Composant principal
├── App.scss            # Styles SCSS principaux
└── main.jsx            # Point d'entrée de l'application
```

## 🚀 Démarrage rapide

1. Installez les dépendances : `npm install`
2. Démarrez le serveur de développement : `npm run dev`
3. Ouvrez votre navigateur sur `http://localhost:5173`

## 🎯 Exemple de composant avec SCSS

Le projet inclut un composant `Button` qui démontre l'utilisation de SCSS avec :
- Variables pour les couleurs et tailles
- Mixins pour les styles de base
- Nesting pour l'organisation du code
- Différentes variantes (primary, secondary, success, danger, warning)
- Différentes tailles (small, medium, large)

## 🔧 Configuration

Le projet est configuré avec :
- **Vite** pour le build et le développement
- **ESLint** pour la qualité du code
- **SCSS** pour le préprocessing CSS
- **Hot Module Replacement (HMR)** pour le développement rapide