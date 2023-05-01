// Enable use of dotenv vars:
require('dotenv').config();

// Import express for app/backend initialization
const express = require("express");

// Import express-session for session initialization
const session = require("express-session");

// Import routes for express to access
const routes = require("./controllers");

// Grab our db connection
const sequelize = require("./config/connection");
// Import connect-session-sequelize for session cookie storage
const SequelizeStore = require("connect-session-sequelize")(session.Store);


// Initialize our backend with a port and all routes.
const app = express();
const PORT = process.env.PORT || 3000;
app.use(routes);

// Necessary for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Established session cookies
app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000*60*60*2
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}));

// syncs our data base
sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
