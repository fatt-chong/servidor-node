const express = require('express');
const { use } = require('./router/raiz.router');
const app = express();
const cors = require("cors");

//middlewares de servidor
app.use(cors());
app.use(express.json());

//rutas
const rutaRaiz = require("./router/raiz.router");
app.use("/", rutaRaiz);

module.exports = app;