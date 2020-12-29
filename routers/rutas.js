const express = require('express');

const router = express.Router();

router.get("/", (req, res) =>{
    res.render( "index", {titulo: "Home", listado: "listado usuarios"} );
})

router.get("/registrate", (req, res) =>{
    res.render("registrate", {titulo: "Registrate"})
})

module.exports = router;