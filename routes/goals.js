const express = require('express')
const router = express.Router()
const goalsController = require('../controllers/goalsController') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')


router.get('/', ensureAuth, goalsController.getGoals)


module.exports = router