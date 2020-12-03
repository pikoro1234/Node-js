//creamos una peticion http
const http = require('http');

const puerto = 3000;

//creamos un servidor
const server = http.createServer((req, res)=>{
    
    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/html');
    
    res.end('<h1>hola mundo con el servidor</h1>');

})

//asignamos por donde escucha el servidor
server.listen(puerto, ()=>{
    console.log(`servidor ejecutando por el puerto ${puerto}`);
});