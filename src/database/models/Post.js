const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../db");

class Posts extends Model {};

Post.init({
    title : DataTypes.String,
    body : DataType.Text,
},{
    sequelize,
    modelName : "post"
});

module.exports = Post;