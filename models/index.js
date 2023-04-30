// Grab our database connection so we can define sequelize 'models' (=SQL tables) and their relationships to one another.
const sequelize = require("../config/connection.js");

// import our models to assign relationships in this file:
const Comment = require('./Comment.js');
const Event = require('./Event.js');
const Notification = require('./Notification.js');
const Post = require('./Post.js');
const User = require('./User.js');

module.exports = {
    Comment,
    Event,
    Notification,
    Post,
    User
};