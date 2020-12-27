const {express,app,port} = require("./conexion");

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) =>{

    res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(port, () =>{
    console.log("el servidor se ejecuta en el puerto "+port);
});