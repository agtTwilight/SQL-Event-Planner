// import our models to assign relationships in this file:
const Comment = require('./Comment.js');
const Event = require('./Event.js');
const Notification = require('./Notification.js');
const Post = require('./Post.js');
const User = require('./User.js');

// User based associations:
User.hasMany(Comment);
Comment.belongsTo(User, {onDelete: "CASCADE"});

User.hasMany(Post);
Post.belongsTo(User, {onDelete: "CASCADE"});

User.belongsToMany(Event, {through: 'User_Events'});
Event.belongsToMany(User, {through: 'User_Events'});

// Event based associations:
Event.hasMany(Notification);
Notification.belongsTo(Event, {onDelete: "CASCADE"});

Event.hasMany(Post);
Post.belongsTo(Event, {onDelete: "CASCADE"});

// Post based associations:
Post.hasMany(Comment);
Comment.belongsTo(Post, {onDelete: "CASCADE"});

// Exports
module.exports = {
    Comment,
    Event,
    Notification,
    Post,
    User
};