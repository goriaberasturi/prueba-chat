const multer = require('multer');
const path = require('path');
const {rootDir} = require('./dirname.js');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(rootDir, 'public', 'img'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const uploader = multer({storage});

module.exports = {uploader};