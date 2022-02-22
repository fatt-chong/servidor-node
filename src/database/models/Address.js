const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../db");

class Address extends Model {};

Address.init({
    street: {
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
            notNull: {
                msg: "debe ingresar una direccion"
            },
            len: {
                args: [3, 255],
                msg: "el nombre puede tener entre 3 y 255 caracteres"
            }
        }
    },
},{
    sequelize,
    modelName : "address"
});

module.exports = Address;