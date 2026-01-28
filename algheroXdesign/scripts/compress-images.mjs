import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function compressImages() {
  // Cerca la directory di output (.output/public per Nuxt 3)
  const outputDir = join(__dirname, '..', '.output', 'public');
  const imgDir = join(outputDir, 'img');
  
  // Verifica che la directory esista
  if (!existsSync(imgDir)) {
    console.log('Directory .output/public/img non trovata, skip compressione');
    return;
  }

  console.log('Inizio compressione immagini in .output/public/img...');

  try {
    // Comprimi JPEG
    const jpegFiles = await imagemin([`${imgDir}/**/*.{jpg,jpeg}`], {
      destination: imgDir,
      plugins: [
        imageminMozjpeg({
          quality: 85,
          progressive: true
        })
      ]
    });
    if (jpegFiles.length > 0) {
      console.log(`✓ Compressi ${jpegFiles.length} file JPEG`);
    }

    // Comprimi PNG
    const pngFiles = await imagemin([`${imgDir}/**/*.png`], {
      destination: imgDir,
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8]
        })
      ]
    });
    if (pngFiles.length > 0) {
      console.log(`✓ Compressi ${pngFiles.length} file PNG`);
    }

    const totalFiles = jpegFiles.length + pngFiles.length;
    if (totalFiles > 0) {
      console.log(`✓ Compressione completata: ${totalFiles} immagini ottimizzate`);
    } else {
      console.log('Nessuna immagine trovata da comprimere');
    }
  } catch (error) {
    console.error('Errore durante la compressione:', error);
    process.exit(1);
  }
}

compressImages();
