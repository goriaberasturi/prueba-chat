const { Router } = require("express");

const router = Router();

const users = [
    {id: '1', name: 'Gregorio Aberasturi', email: 'goricarhue2015@gmail.com'},
    {id: '2', name: 'Igancio Aberasturi', email: 'ignacarhue2015@gmail.com'},
    {id: '3', name: 'Andres Aberasturi', email: 'andrescarhue2015@gmail.com'},
]

router.get('/', (req, res) => {
    const userLogin = {
        name: 'Gorillax',
        role: 'admin'

    }

    res.render('index', {
        user: userLogin,
        isAdmin: userLogin.role === 'admin',
        users,
        title: 'Home'
    });
});

module.exports = router;