const express = require('express')
const router = express.Router()
const journalController = require('../controllers/journalController') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')


router.get('/:id', ensureAuth, journalController.getJournal)
router.post('/createJournal/:id', journalController.createJournal)

module.exports = router