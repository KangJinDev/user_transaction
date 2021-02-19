const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name : String,
    description : String,
    email : String,
    btc_wallet_id : String,
    btc_wallet_balance : String,  
    eth_wallet_id : String,
    eth_wallet_balance : String,
    max_amount : String,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);