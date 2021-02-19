const User = require('../models/user.model.js');

// Create and Save a new List
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name || !req.body.email) {
        return res.status(400).send({
            message: "User Name or Email Couldn't be empty"
        });
    }
    const user = new User({
        name : req.body.name, 
        description : req.body.description, 
        email : req.body.email,
        btc_wallet_id : req.body.btc_wallet_id,
        btc_wallet_balance : req.body.btc_wallet_balance,  
        eth_wallet_id : req.body.eth_wallet_id,
        eth_wallet_balance : req.body.eth_wallet_balance,
        max_amount : req.body.max_amount,
    });

    // Save User in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the new User."
        });
    });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Users data."
        });
    });
};
