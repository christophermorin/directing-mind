const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/tasksController') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// I dont think I need this one anymore?
// router.get('/', ensureAuth, tasksController.getTasks)

// I think this should be on the goal router.
router.get('/:id', tasksController.getTasks)
router.post('/createTask/:id', tasksController.createTask)


module.exports = router