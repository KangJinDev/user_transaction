var express = require('express');
var router = express.Router();

var transaction_controller = require('../controllers/transaction.controller');

// POST request for creating Transaction.
router.post('/transaction', transaction_controller.create);

// Get request for Retrieving transaction.
router.get('/transaction', transaction_controller.findAll);

// Get request for Retrieving a transaction.
router.get('/transaction/:transaction_id', transaction_controller.findOne);

// Put request for Updating a transaction with transaction_id.
router.put('/transaction/:transaction_id', transaction_controller.update);

// Delete request for creating transaction.
router.delete('/transaction/:transaction_id', transaction_controller.delete);

module.exports = router;