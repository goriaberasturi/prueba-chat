import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Adjust __dirname to point to the root directory (two levels up from utils)
export const rootDir = resolve(__dirname, '..');