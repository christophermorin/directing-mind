const express = require('express')
const router = express.Router()
const journalController = require('../controllers/journalController') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')


router.get('/:id', ensureAuth, journalController.getOneJournal)
router.delete('/deleteJournal/:id', journalController.deleteOneJournal)



module.exports = router