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
    projectId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    isComplete: {
        type: Boolean,
        required: true,
        default: false,
    }
})


module.exports = mongoose.model('Tasks', TasksSchema)