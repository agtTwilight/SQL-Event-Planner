// Setup router used to activate each route and run on our server:
const express = require('express')
const router = express.Router();

// Pull in functions established in user route. Call on desired server path:
const userRoutes = require('./userController');
router.use('/users', userRoutes);

module.exports = router;
