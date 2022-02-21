const express = require('express');
const router = express.Router();
const User = require("../database/models/User");

router.get("/", (req, res) => {
    res.json({
        message : "ruta raiz de raiz xd"
    });
});

router.get("/usuarios", (req, res) =>{
    User.create({
        firstName : "fatt",
        lastName : "chong"
    }).then(user=>{
        res.json(user);
    });
});

module.exports = router;