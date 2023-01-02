const express = require('express')
const router = express.Router()
const projectsController = require('../controllers/projectsController')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, projectsController.getProjects)
router.post('/createProject', projectsController.createProject)
router.delete('/deleteProject/:id', projectsController.deleteProject)
router.put('/completeProject/:id', projectsController.completeProject)

module.exports = router