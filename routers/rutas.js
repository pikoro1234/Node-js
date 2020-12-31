const express = require('express');

const router = express.Router();

const conexionDB = require('../rmodels/conexionMongoose');

const Usuario = require('../rmodels/usuario');

router.get("/usuarios", (req, res) =>{

    try {

        Usuario.find({}, function (err, docs) {

            res.render( "index", {titulo: "Home",ArrayUsuarios: docs});

        });        
        
    } catch (error) {

        console.log(error);
    }

})

router.get("/registrate", (req, res) =>{
    
    res.render("registrate", {titulo: "Registrate"})
})

router.get("/usuarios/:id", async (req, res) =>{

    const id = req.params.id;

    try {

        const usuarioDB = await Usuario.findOne({ _id: id })

        res.render("editar", {titulo: "Editar", usuario: usuarioDB})
        
    } catch (error) {
        
        console.log(error);
    }

   
})

//ruta para el envio del  formulario
router.post('/usuarios', async (req, res) =>{

    const body = req.body

    console.log(body);

    try {

        const usuarioDB = new Usuario(body)

        await usuarioDB.save();

        res.redirect('/usuarios')
        
    } catch (error) {
        
        console.log(error);
    }
})

module.exports = router;