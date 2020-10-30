var mongoose = require('mongoose');
var budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        uppercase: true
    },
    budget: {
        type: Number,
        required: true,
        unique: false
    },
    color: {
        type: String,
        required: true,
        unique: false
    }
}, {collection: 'budget'});

module.exports = mongoose.model('Budget', budgetSchema);    