const User = require('../models/user.model.js');
const Transaction = require('../models/transaction.model.js');
const { validate } = require('../models/user.model.js');

// Create and Save a new List
exports.create = (req, res) => {
    // Validate request
    if(!req.body.source_userid || !req.body.target_userid) {
        return res.status(400).send({
            message: "Source_userid or Target_userid Couldn't be empty"
        });
    }
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
        console.log(data);
        res.send(data._id);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the new Transaction."
        });
    });
};

// Retrieve and return all transactions from the database.
exports.history = (req, res) => {
    // validate
    var query = {};
    if(req.params.userid) {
        query = {$or:[{source_userid:{$regex: req.params.userid, $options: 'i'}},{target_userid:{$regex: req.params.userid, $options: 'i'}}]}
    }
    Transaction.find(query)
    .then(transactions => {
        console.log(res);
        res.send(transactions);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving transactions."
        });
    });
};
