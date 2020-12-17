//kmportamos en puerto y el servidor
const {serv,port} = require('./conexionold');


//asigmanos que el servidor este a la escucha por el puerto especificado
serv.listen(port, ()=>{
    console.log(`servidor ejecutando por el puerto ${port}`);
});