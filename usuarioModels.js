const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const objEschema = mongoose.Schema

const eschemaUsuario = new objEschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})

const eschemaProducto = new objEschema({
    nombre: String,
    descripcion: String,
    stock: Number,
    precio: Number,
    idproducto: String
})

const ModeloUsuario = mongoose.model('usuarios',eschemaUsuario) // Reemplazar "users" por el nombre de la tabla de la DB 
const ModeloProducto = mongoose.model('products',eschemaProducto)
module.exports = router

//ruta de prueba
router.get('/login', (req,res)=>{
    res.end('Carga exitosa desde ruta ejemplo')
    
})

// Correr explorador con http://localhost:3500/api/usuarioModel/ejemplo

// API para agregar nuevos usuarios
router.post('/agregarusuario',(req, res) =>{
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario 
        })
    
    
    nuevousuario.save(function(err){
        if(!err){
            res.send('Usuario agregado Correctamente')
        }else{
            res.send(err)
        }
    })
})

//API para obtener los usuarios
router.get('/obtenerusuarios', (req, res) =>{
   ModeloUsuario.find({}, function(docs,err){
    if(!err){
        res.send(docs)
    }else{
        res.send(err)
    }
   })
})

//API para obtener el usuario a editar
router.post('/obtenerdatausuario', (req, res) =>{
    ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs,err){
     if(!err){
         res.send(docs)
     }else{
         res.send(err)
     }
    })
 })

 router.post('/obtenerdataproducto', (req, res) =>{
    ModeloProducto.find({idproducto:req.body.idproducto}, function(docs,err){
     if(!err){
         res.send(docs)
     }else{
         res.send(err)
     }
    })
 })

/////////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////ACTUALIZAR USUARIOS  ////////////////////////////////////////
 router.post('/actualizausuario',(req, res) =>{
   ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario},{
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono

   }, (err) =>{
        if(!err){
            res.send('Usuario Actualizado correctamente')
        }else{
            res.send(err)
        }
   })
})

router.post('/actualizarproducto',(req, res) =>{
    ModeloProducto.findOneAndUpdate({idproducto:req.body.idproducto},{
     nombre: req.body.nombre,
     descripcion: req.body.descripcion,
     stock: req.body.stock,
     precio: req.body.precio
    
    }, (err) =>{
         if(!err){
             res.send('Prodcuto Actualizado correctamente')

         }else{
             res.send(err)
         }
    })
 })

/////////////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////// BORRAR USUARIOS  ////////////////////////////////////////
router.post('/borrarusuario',(req, res) =>{
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario},(err) =>{
        if(!err){
            res.send('Usuario Eliminado correctamente')
        }else{
            res.send(err)
        }
    })
 })
/////////////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////// AGREGAR PRODUCTOS ////////////////////////////////////////
 router.post('/agregarproducto',(req, res) =>{
    const nuevoproducto = new ModeloProducto({
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        stock: req.body.stock,
        idproducto: req.body.idproducto 
    })
    nuevoproducto.save(function(err){
        if(!err){
            res.send('Producto agregado Correctamente')
        }else{
            res.send(err)
        }
    })
 })
 /////////////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////// BOTENER PRODUCTOS ////////////////////////////////////
 router.get('/obtenerproductos', (req, res) =>{
    ModeloProducto.find({}, function(docs,err){
     if(!err){
         res.send(docs)
     }else{
         res.send(err)
     }
    })
 })
 ///////////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////// BORRAR PRODUCTOS  ////////////////////////////////////////
 router.post('/borrarproducto',(req, res) =>{
    ModeloProducto.findOneAndDelete({idproducto:req.body.idproducto},(err) =>{
        if(!err){
            res.send('Producto Eliminado correctamente')
        }else{
            res.send(err)
        }
    })
 })