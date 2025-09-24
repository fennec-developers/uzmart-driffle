import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Required for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'public/products');

const files = fs.readdirSync(dir);
const webpFiles = files.filter(file => file.endsWith('.webp'));

webpFiles.forEach((file, index) => {
  const newFileName = `${index + 1}.webp`;
  const oldPath = path.join(dir, file);
  const newPath = path.join(dir, newFileName);
  fs.renameSync(oldPath, newPath);
  console.log(`Renamed ${file} -> ${newFileName}`);
});

console.log('✅ All images renamed.');
