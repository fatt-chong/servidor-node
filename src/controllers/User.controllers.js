const User = require("../database/models/User");

//listar usuarios
exports.userList = (req, res) => {
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
};

//registrar usuarios
exports.userRegister = (req, res) => {

    User.create({
        name : req.body.name,
        age : req.body.age,
        email: req.body.email
    }).then(user=>{
        res.json(user);
    }).catch((err) => {
        res.status(500).json(err);
    });
    
};