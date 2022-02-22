const express = require('express');
const { use } = require('./router/raiz.router');
const app = express();
const cors = require("cors");
const rutaRaiz = require("./router/raiz.router");
const postRutas = require("./router/posts.router");
const morgan = require("morgan");
const addressRuta = require("./router/address.router");

//middlewares de servidor
app.use(morgan());
app.use(cors());
app.use(express.json());

//rutas
app.use("/", rutaRaiz);
app.use("/posts", postRutas);
app.use("/direccion", addressRuta);

module.exports = app;