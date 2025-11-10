// Configuration de la base URL pour GitHub Pages
const BASE_PATH = '/l-image-en-tete';

/**
 * Normalise un chemin en retirant la base URL si présente
 * @param {string} pathname - Le pathname complet (ex: '/l-image-en-tete/about')
 * @returns {string} - Le chemin normalisé (ex: '/about')
 */
export const normalizePath = (pathname) => {
  if (pathname.startsWith(BASE_PATH)) {
    return pathname.slice(BASE_PATH.length) || '/';
  }
  return pathname;
};

/**
 * Ajoute la base URL à un chemin
 * @param {string} path - Le chemin relatif (ex: '/about')
 * @returns {string} - Le chemin complet (ex: '/l-image-en-tete/about')
 */
export const addBasePath = (path) => {
  if (path === '/') {
    return BASE_PATH + '/';
  }
  return BASE_PATH + path;
};

/**
 * Navigue vers une page en utilisant l'API History
 * @param {string} path - Le chemin relatif (ex: '/about')
 */
export const navigate = (path) => {
  const fullPath = addBasePath(path);
  window.history.pushState({}, '', fullPath);
  // Scroll vers le haut de la page
  window.scrollTo(0, 0);
  // Déclencher un événement personnalisé pour notifier le changement
  window.dispatchEvent(new PopStateEvent('popstate'));
};

