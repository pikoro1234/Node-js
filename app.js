//debemos exporotar del modulo correspondiente
//exportamos dos valores del arcbhivo externo
const {frutas, precio} = require("./frutas");

frutas.forEach((elementos)=>{
    console.log(elementos);
})

precio.forEach((precio)=>{
    console.log(precio);
})