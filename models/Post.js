const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model {};

Post.init({
    text: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize
});

module.exports = Post;
