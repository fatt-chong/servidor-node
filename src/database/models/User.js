const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../db");

class User extends Model {}

User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,

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