const express = require('express');

const router = express.Router();

const conexionDB = require('../rmodels/conexionMongoose');

const Usuario = require('../rmodels/usuario');

router.get("/", (req, res) =>{

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

module.exports = router;