//creamos una peticion http
const http = require('http');

const puerto = 3000;


//creamos un servidor
const server = http.createServer((req, res)=>{
    
    res.statusCode = 404;

    res.setHeader('Content-Type', 'text/html');
    
    res.end('<h1>hola mundo con el servidor con nodemon</h1>');

})


//exportamos modulos puerto y server
module.exports = {
    port: puerto,
    serv: server,
};