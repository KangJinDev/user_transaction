var express = require('express');
var router = express.Router();

var transaction_controller = require('../controllers/transaction.controller');

// POST request for creating Transaction.
router.post('/', transaction_controller.create);

// Get request for Retrieving transaction history for user
router.get('/:userid', transaction_controller.history);

module.exports = router;