import { copyFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = join(__dirname, '..', 'dist');
const indexHtml = join(distPath, 'index.html');
const notFoundHtml = join(distPath, '404.html');

try {
  copyFileSync(indexHtml, notFoundHtml);
  console.log('✅ 404.html créé avec succès dans le dossier dist');
} catch (error) {
  console.error('❌ Erreur lors de la copie de index.html vers 404.html:', error);
  process.exit(1);
}

