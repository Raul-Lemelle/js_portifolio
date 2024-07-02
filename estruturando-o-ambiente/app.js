const express = require('express');

const path = require('path');

const routerPrincipal = require('./routes/principal');
const routerPerfil = require('./routes/perfil');
const { connect } = require('./models');

const app = express();
const porta = 3000;

app.use(express.static('public'));

// config ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routers
app.use('/perfil', routerPerfil);
app.use('/', routerPrincipal);

app.listen(porta, () => {
    connect();

    console.log(`Servidor ouvindo na porta ${porta}`);
});

