const mongoose = require('mongoose');

const PerfilSchema = require('./perfil');

const Perfil = mongoose.model('Perfil', PerfilSchema);

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/pageprofile');    
};

module.exports = {
    connect,
    Perfil,
};