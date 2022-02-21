const express = require('express');
const router = express.Router();

const UserController = require("../controllers/User.controllers");

router.get("/", (req, res) => {
    res.json({
        message : "ruta raiz de raiz xd"
    });
});

//ruta para registrar el usuario
router.get("/usuarios", UserController.userRegister);

//ruta para listar el usuarios
router.get("/usuarios/listar", UserController.userList);

module.exports = router;