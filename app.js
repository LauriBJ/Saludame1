/*Nombre: Laura BJ
Misión: Crear una aplicación Web con Express con una única ruta GET / 
que reciba una propiedad en el query string llamada nombre y muestre 
un mensaje Hola seguido del valor de la propiedad y un !.
*/

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const nombre = req.query.nombre;
  res.end("<h1>Hola " + nombre + "!</h1>");
});

app.listen(3000, () => console.log("escuchando"));
