const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/tasksController') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')


router.get('/', ensureAuth, tasksController.getTasks)


module.exports = router