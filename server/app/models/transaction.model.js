const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
    currency_amount : String,
    currency_type : String,
    source_userid : String,
    target_userid : String,
    created_at : { type : Date, default: Date.now },
    procced_at : { type : Date, default: Date.now },
    state : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Transaction', TransactionSchema);