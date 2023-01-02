const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/tasksController')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/:id', tasksController.getTasks)
router.post('/createTask/:id', tasksController.createTask)
router.delete('/deleteTask/:id', tasksController.deleteTask)
router.put('/completeTask/:id', tasksController.completeTask)

module.exports = router