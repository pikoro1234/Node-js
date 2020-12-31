const mongoose = require('mongoose');

const usuario = "jorge123";

const password = "Fmd1uzBgFSLsQ6N0";

const dbName = "Registro";

require('dotenv').config();

const uri = `mongodb+srv://${usuario}:${password}@cluster0.3wyvv.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(()=> console.log('conectado a mongodb')) 
.catch(e => console.log('error de conexión', e))

module.exports = mongoose;