const express = require('express');
const { use } = require('./router/raiz.router');
const app = express();

const port = process.env.PORT || 3000;
const rutaRaiz = require("./router/raiz.router");

app.use("/", rutaRaiz);

app.listen(port, ()=>{
    console.log("servidor en el puerto: " + port);
});