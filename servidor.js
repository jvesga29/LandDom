const express = require('express')
const app = express()
const port = 3500

//Importar Conexion MongoDB
const archivoDB = require('./conexion')

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(express.static('public'));

const rutausuario = require('./routes/Models/usuarioModel')
const rutaproducto = require('./routes/Models/productModel')

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/Models/usuarioModel', rutausuario)
app.use('/api/Models/productModel', rutaproducto)

app.get('/', (req, res)=>{
    res.end('Bienvenido al servidor Node.js')
})
//Cojnfiguracion del servidos de prueba
app.listen(port, function(){
    console.log('http://localhost:',port);
})


