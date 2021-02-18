var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/user.controller');

// POST request for creating user.
router.post('/user', user_controller.create);

// Get request for Retrieving user.
router.get('/user', user_controller.findAll);

// Get request for Retrieving a user.
router.get('/user/:user_id', user_controller.findOne);

// Put request for Updating a user with user_id.
router.put('/user/:user_id', user_controller.update);

// Delete request for creating user.
router.delete('/user/:user_id', user_controller.delete);

module.exports = router;