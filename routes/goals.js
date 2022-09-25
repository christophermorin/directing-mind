const express = require('express')
const router = express.Router()
const goalsController = require('../controllers/goalsController') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')


router.get('/', ensureAuth, goalsController.getGoals)

router.post('/createGoal', goalsController.createGoal)

router.delete('/deleteProject/:id', goalsController.deleteProject)

router.put('/completeProject/:id', goalsController.completeProject)





module.exports = router