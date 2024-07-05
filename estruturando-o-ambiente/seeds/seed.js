const mongoose = require("mongoose")


const { Perfil } = require("../models")


mongoose.connect('mongodb://127.0.0.1:27017/pageprofile');


const seedPerfil = [
  {
    "nome": "Raul",
    "sobrenome": "Lemelle",
    "idade": 31,
  }
];


const seedDB = async () => {
  await Perfil.deleteMany({});
  await Perfil.insertMany(seedPerfil);
};


seedDB().then(() => {
  mongoose.connection.close();
});