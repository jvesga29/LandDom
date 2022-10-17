const mongoose = require('mongoose');
const url = 'mongodb://localhost/LandDom';

mongoose.connect(url);

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar a MongoDB'));
db.once('open', function callback(){
    console.log("Conexion exitosa a MongoDB")
});

module.exports = db;