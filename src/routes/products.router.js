import {Router} from 'express';

const router = Router();

// Configuracion

router.get('/', (req, res) => {
    res.send('get productos');
});

export default router;