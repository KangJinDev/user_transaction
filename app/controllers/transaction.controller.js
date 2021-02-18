const User = require('../models/user.model.js');
const Transaction = require('../models/transaction.model.js');

// Create and Save a new List
exports.create = (req, res) => {

    // Create a Transaction
    const transaction = new Transaction({
        currency_amount : req.body.currency_amount,
        currency_type : req.body.currency_type,
        source_userid : req.body.source_userid,
        target_userid : req.body.target_userid,
        created_at : req.body.created_at,
        procced_at : req.body.procced_at,
        state : req.body.state
    });

    // Save Transaction in the database
    transaction.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the new Transaction."
        });
    });
};

// Retrieve and return all transactions from the database.
exports.findAll = (req, res) => {
    Transaction.find()
    .then(transactions => {
        res.send(transactions);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving transactions."
        });
    });
};

// Find a single list with a transaction_id
exports.findOne = (req, res) => {

};

// Update a list identified by the transaction_id in the request
exports.update = (req, res) => {
  
};

// Delete a list with the specified transaction_id in the request
exports.delete = (req, res) => {

};