# Déploiement GitHub Pages

## Configuration automatique

Le site est configuré pour se déployer automatiquement sur GitHub Pages à chaque push sur la branche `main`.

### URL du site
Une fois déployé, le site sera accessible à l'adresse :
`https://[votre-username].github.io/L-image-en-tete/`

## Déploiement manuel

Si vous voulez déployer manuellement :

1. **Installer les dépendances** :
```bash
npm install
```

2. **Construire le projet** :
```bash
npm run build
```

3. **Déployer** :
```bash
npm run deploy
```

## Configuration GitHub Pages

1. Allez dans les **Settings** de votre repository GitHub
2. Dans la section **Pages**, configurez :
   - **Source** : GitHub Actions
   - **Branch** : gh-pages (sera créée automatiquement)

## Vérification

Après le déploiement, vérifiez que :
- Le site est accessible à l'URL GitHub Pages
- Toutes les pages fonctionnent correctement
- Les images et assets se chargent bien
- La navigation entre les pages fonctionne

## Dépannage

Si le site ne se charge pas :
1. Vérifiez que la base URL est correcte dans `vite.config.js`
2. Assurez-vous que tous les chemins d'assets sont relatifs
3. Vérifiez les logs GitHub Actions pour les erreurs de build
