const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../db");

class Address extends Model {};

Address.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
},{
    sequelize,
    modelName : "Address"
});

module.exports = Address;