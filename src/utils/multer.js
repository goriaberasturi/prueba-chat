import multer from 'multer';
import path from 'path';
import {rootDir} from './dirname.js';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(rootDir, 'public', 'img'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const uploader = multer({storage});

export {uploader};