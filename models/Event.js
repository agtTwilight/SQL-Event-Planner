const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class Event extends Model {};

Event.init({
    coordinator: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true
        }
    }

}, {
    sequelize    
});

module.exports = Event;
