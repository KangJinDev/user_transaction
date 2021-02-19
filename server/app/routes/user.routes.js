var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/user.controller');

// POST request for creating user.
router.post('/', user_controller.create);
router.fetch('/', user_controller.findAll);


module.exports = router;