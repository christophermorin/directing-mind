const express = require('express')
const router = express.Router()
const historyController = require('../controllers/historyController') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')


router.get('/', ensureAuth, historyController.getHistory)


module.exports = router