// Enable use of dotenv vars:
require('dotenv').config();

// Connecting to a database:
// 1. Import sequelize
const Sequelize = require('sequelize');

/**
 * 2. Connect to the db:
 * a. For this project, JAWSDB will be used with Heroku during "production".
 * b. However, during development we need to setup an alterate route for establishing a db connection.
 *  Setup follows the Sequelize documentations 'Connecting to a database Option 3'.
 */
const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: '127.0.0.1',
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
        },
        port: 3306
    });

    module.exports = sequelize;
