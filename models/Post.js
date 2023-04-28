const {Model, DataTypes} = require('sequelize');
const sequelize = '../config/connection.js';

class Post extends Model {};

Post.init({
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize
});

module.exports = Post;
