const mongoose = require('mongoose')

const ProjectsSchema = new mongoose.Schema({
    projectTitle: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String,
        required: false,
    },
    taskCount: {
        type: Number,
        default: 0,
    },
    journalCount: {
        type: Number,
        default: 0
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

module.exports = mongoose.model('Projects', ProjectsSchema)