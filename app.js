const {app} = require("./conexion");

//matar procesos pkill nodejs o pkill node 

//motor de plantillas EJS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//rutas
app.get("/", (req, res) =>{
    res.render("index", {titulo: "Home"});
})