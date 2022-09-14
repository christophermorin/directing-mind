const mongoose = require('mongoose')

const GoalsSchema = new mongoose.Schema({
    goalTitle: {
        type: String,
        required: true
    },
    goalDescription: {
        type: String,
        required: false,
    },
    userId: {
        type: String,
        required: true,
    },
})


module.exports = mongoose.model('Goals', GoalsSchema)