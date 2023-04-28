// Grab our database connection so we can define sequelize 'models' (=SQL tables) and their relationships to one another.
const sequelize = require("../config/connection.js");

// import our models to assign relationships in this file:
const User = require('./User.js');