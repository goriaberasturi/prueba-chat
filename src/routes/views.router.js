import { Router } from "express";

const router = Router();

router.use('/', (req, res) => {
    res.render('chat', {
        isMenu: true
    });
});

const users = [
    {id: '1', name: 'Gregorio Aberasturi', email: 'goricarhue2015@gmail.com'},
    {id: '2', name: 'Ignacio Aberasturi', email: 'ignacarhue2015@gmail.com'},
    {id: '3', name: 'Andres Aberasturi', email: 'andrescarhue2015@gmail.com'},
]

router.get('/users', (req, res) => {
    const userLogin = {
        name: 'Gorillax',
        role: 'admin'

    }

    res.render('index', {
        user: userLogin,
        isAdmin: userLogin.role === 'admin',
        users,
        title: 'Home',
        styles: 'index.css',
        isMenu: true
    });
});

export default router;