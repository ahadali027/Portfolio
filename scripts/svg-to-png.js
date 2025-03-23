import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '../public/images/3d');
const files = ['mongodb-logo.png', 'express-logo.png', 'react-logo.png', 'nodejs-logo.png'];

async function convertSvgToPng() {
  // Ensure the directory exists
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });
  }
  
  for (const file of files) {
    const svgPath = path.join(sourceDir, file);
    const pngPath = path.join(sourceDir, file);
    
    if (fs.existsSync(svgPath)) {
      try {
        const svgContent = fs.readFileSync(svgPath, 'utf8');
        
        // Create a PNG from the SVG content
        await sharp(Buffer.from(svgContent))
          .resize(200, 200)
          .toFormat('png')
          .toFile(pngPath.replace('.png', '-temp.png'));
        
        // Replace the original file with the PNG
        fs.unlinkSync(svgPath);
        fs.renameSync(pngPath.replace('.png', '-temp.png'), pngPath);
        
        console.log(`Converted ${file} to PNG format successfully.`);
      } catch (error) {
        console.error(`Error converting ${file}:`, error);
      }
    }
  }
}

convertSvgToPng().catch(console.error); 