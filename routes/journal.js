const express = require('express')
const router = express.Router()
const journalController = require('../controllers/journalController') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')


router.get('/', ensureAuth, journalController.getJournal)


module.exports = router