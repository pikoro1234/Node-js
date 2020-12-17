const {express,app,port} = require("./conexion");

app.get("/",(req, res) =>{
    res.send("respondiendo con express");
});

app.listen(port, () =>{
    console.log("el servidor se ejecuta en el puerto "+port);
});