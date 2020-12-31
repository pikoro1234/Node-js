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


/* try {
        const mascotaDB = new Mascota(body)
        await mascotaDB.save()
        res.redirect('/mascotas')
    } catch (error) {
        console.log('error', error)
    } */

module.exports = router;