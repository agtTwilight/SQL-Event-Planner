const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Notification extends Model {};

Notification.init({
    event_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    text: {
        type: DataTypes.STRING,
        allowNull: null
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['Notification', 'Update']]
        }
    }
},{
    sequelize
});

module.exports = Notification;
