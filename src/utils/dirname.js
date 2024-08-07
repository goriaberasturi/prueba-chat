const { fileURLToPath } = require('url');
const { dirname, resolve } = require('path');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Adjust __dirname to point to the root directory (two levels up from utils)
const rootDir = resolve(__dirname, '..');

module.exports = {rootDir};