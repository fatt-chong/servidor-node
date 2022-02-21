const express = require('express');
const router = express.Router();
const User = require("../database/models/User");

router.get("/", (req, res) => {
    res.json({
        message : "ruta raiz de raiz xd"
    });
});

//ruta para registrar el usuario
router.get("/usuarios", (req, res) =>{

    User.create({
        firstName : "fatt guillermo",
        lastName : "chong"
    }).then(user=>{
        res.json(user);
    });
    
});

//ruta para listar el usuarios
router.get("/usuarios/listar", (req, res) => {
    User.findAll().then((users) => {

        if(users.length <= 0){
            res.status(400).json({
                "status" : 400,
                "type" : "error",
                "message" : "No hay registros de usuarios"
            });
        }else{
            res.status(200).json(users);
        }

    }).catch((err) => {

        res.status(500).json({
            "status" : 500,
            "type" : "error",
            "message" : "Error al listar usuario, error: " + err.message
        });

    });
});

module.exports = router;