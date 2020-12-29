const express = require("express");

const disparador = express();

const puerto = 3000;

//abrimos el puerto a la escucha de peticiones
disparador.listen(puerto, () =>{
    console.log("el servidor se ejecuta en el puerto "+puerto);
});

module.exports = {

    app: disparador

};
