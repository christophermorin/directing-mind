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
    taskCount: {
        type: Number,
        default: 0,
    },
    isComplete: {
        type: Boolean,
        default: false
    },
    userId: {
        type: String,
        required: true,
    },
})


module.exports = mongoose.model('Goals', GoalsSchema)