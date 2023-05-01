const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
// const bcrypt = require("bcrypt");

// Extending the sequelize model type to make columns in our sql db.
class User extends Model {};

User.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha:true
        }
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha:true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    sequelize,
    // Hashes password so user login can't be accessed through db queries.
    // hooks:{
    //     beforeCreate:userObj=>{
    //         userObj.password = bcrypt.hashSync(userObj.password,4);
    //         return userObj;
    //     }
    // }
})

module.exports = User;
