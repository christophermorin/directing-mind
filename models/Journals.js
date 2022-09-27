const mongoose = require('mongoose')


const JournalSchema = new mongoose.Schema({
    journalTitle: {
        type: String,
        default: new Date().toLocaleDateString()
    },
    journalText: {
        type: String,
        required: true
    },
    journalDate: {
        type: String,
        default: new Date().toLocaleDateString(),
        required: true,

    },
    goalId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
    },
})


module.exports = mongoose.model('Journals', JournalSchema)
