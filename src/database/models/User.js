const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../db");

class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
            notNull: {
                msg: "debe ingresar un nombre"
            },
            isAlpha : {
                args: true,
                msg : "el nombre solo puede contener letras"
            },
            len: {
                args: [3, 255],
                msg: "el nombre puede tener entre 3 y 255 caracteres"
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
            notNull: {
                msg: "debe ingresar un email"
            },
            isEmail : {
                args: true,
                msg : "Debe ingresar un email valido"
            }
        }
    },
    age: {
        type : DataTypes.INTEGER,
        
        validate : {
 
            isInt : {
                args: true,
                msg : "La edad debe ser numerica"
            },
            min: {
                args: 1,
                msg : "la edad tiene que ser mayor o igual a 1"
            },
            max : {
                args: 150,
                msg : "la edad debe ser real"
            }
        }
    },

    role: {
        type : DataTypes.INTEGER,
        defaultValue : 0
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

module.exports = User;