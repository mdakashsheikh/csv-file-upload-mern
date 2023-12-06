const mongoose = require('mongoose');

const dataSc = new mongoose.Schema({
    id: {
        type: Number,
    },
    Name: {
        type: String,
    },
    Salary: {
        type: Number,
    }
})

module.exports = mongoose.model('saraly_sc', dataSc);