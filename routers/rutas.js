const express = require('express');

const router = express.Router();

const Usuario = require('../rmodels/usuario');

router.get("/", (req, res) =>{

    try {

        require('../rmodels/conexionMongoose');

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