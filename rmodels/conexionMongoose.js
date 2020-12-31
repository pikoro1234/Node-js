const mongoose = require('mongoose');

require('dotenv').config();

const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.3wyvv.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(()=> console.log('conectado a mongodb')) 
.catch(e => console.log('error de conexión', e))

module.exports = mongoose;