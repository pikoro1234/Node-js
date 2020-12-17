const express = require("express");

const disparador = express();

const puerto = 3000;

module.exports = {

    express: express,
    app: disparador,
    port: puerto,

};
