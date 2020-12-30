const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: String,
    correo: String,
    password: String
});

// creamos el modelo
const Usuario = mongoose.model("Users", usuarioSchema);

module.exports = Usuario;