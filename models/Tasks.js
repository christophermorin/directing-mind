const mongoose = require('mongoose')

const TasksSchema = new mongoose.Schema({
    taskTitle: {
        type: String,
        required: true
    },
    taskDescription: {
        type: String,
        required: false,
    },
    goalId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
})


module.exports = mongoose.model('Tasks', TasksSchema)