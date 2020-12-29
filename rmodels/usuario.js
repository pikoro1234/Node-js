const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: String,
    correo: String,
    password: String
});

// creamos el modelo
const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;

