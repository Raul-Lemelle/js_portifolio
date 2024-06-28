const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.render('perfil/index', {
        nomeUser : "Raul Lemelle",
        idadeUser: 31
        
    });
});

module.exports = router;