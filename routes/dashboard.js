const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboardController') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')


router.get('/', ensureAuth, dashboardController.getDashboard)


module.exports = router