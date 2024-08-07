const express = require('express') ;
const usersRouter = require('./routes/users.router.js') ;
const productsRouter = require('./routes/products.router.js') ;
const pruebasRouter = require('./routes/pruebas.router.js') ;
const viewsRouter = require('./routes/views.router.js') ;
const logger = require('morgan') ;
const {uploader} = require('./utils/multer.js');
const {rootDir} = require('./utils/dirname.js');
const path = require('path');
const handlebars = require('express-handlebars');

const {Server} = require('socket.io');


const app = express();
const PORT = process.env.PORT || 8080;


// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Middleware to serve static files from the 'public' directory
app.use('/static', express.static(path.join(rootDir, 'public')));
app.use(logger('dev'));


// Configuracion del motor de plantillas
app.engine('handlebars', handlebars.engine());
// Configuracion de carpeta donde debe tomar las plantillas
app.set('views', path.join(rootDir, 'views'));
// Configurar la extension de las plantillas
app.set('view engine', 'handlebars');


// Custom middleware to log request time
app.use(function(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});


// Endpoint for file upload
app.post('/', uploader.single('myFile'), (req, res) => {
    res.send('Archivo subido');
});


// Routing for users and products
app.use('/', viewsRouter);
app.use('/pruebas', pruebasRouter);
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);


// Error handling middleware
app.use((error, req, res, next) => {
    console.log(error.stack);
    res.status(500).send('Error de server');
});


const httpServer = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const io = new Server(httpServer);

let messages = [];

io.on('connection', socket => {
    console.log('Nuevo cliente conectado');

    socket.on('message', data => {
        messages.push(data);
        io.emit('messageLogs', messages);
    });
});