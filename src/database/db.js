const {Sequelize} = require("Sequelize");
const {database, env} = require("../config");

const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password,{
        host : database.host,
        dialect : "mysql"
    }
);

module.exports = sequelize;