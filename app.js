const express = require("express");
const app = express();
const db = require('./db');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(express.static('public'));

const usuarios = require('./routes/usuario')
app.use(usuarios)

app.get('/',(req, res)=>{
    res.send("Hola Mundo!");
});

app.listen(3000, ()=>{
    console.log("server up! en http//localhost:3000/")
});