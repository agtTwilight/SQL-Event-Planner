const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const {User} = require('../models');

// Select all users:
router.get('/', (req, res) => {
    User.findAll().then(users => {
        res.json(users);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({msg: "an error has occured", err});
    })
})

// Create a new user:
router.post('/', (req, res) => {
    console.log(req.body);
    User.create({
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        username: req.body.username,
    }).then(newUser => {
        // TODO consider what you'll actually want to setup a new session with.
        // req.session.user_id = newUser.id;
        // req.session.username = newUser.username;
        res.json({msg: "successfully created new user:", newUser});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({msg: "error creating new user", err});
    })
})

module.exports = router;
