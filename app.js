const {app} = require("./conexion");

const express = require("express");

//para archivos estaticos
app.use(express.static(__dirname + "/public"));

//rutas de redireccionamiento
app.use('/', require('./routers/rutas'));

//renderisamos si hay algun error de pagina con un midelware
app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404"
    })
})

//motor de plantillas EJS
app.set("view engine", "ejs");

app.set("views", __dirname + "/views");

//matar procesos pkill nodejs o pkill node 