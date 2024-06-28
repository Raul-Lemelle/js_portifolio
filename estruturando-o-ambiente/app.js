const express = require('express');

const path = require('path');

const routerPrincipal = require('./routes/principal')
const routerPerfil = require('./routes/perfil')

const app = express();
const porta = 3000;

// config ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routers
app.use('/perfil', routerPerfil)
app.use('/', routerPrincipal)

app.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`);
});

