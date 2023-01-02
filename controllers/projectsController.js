const Projects = require("../models/Projects")
const Tasks = require("../models/Tasks")
const Journals = require("../models/Journals")

module.exports = {
    getProjects: async (req, res) => {
        console.log(req.user)
        try {
            const projects = await Projects.find({ userId: req.user.id })
            const tasks = await Tasks.find({ userId: req.user.id })


            res.render('projects.ejs', { projects: projects, tasks: tasks })
        } catch (err) {
            console.log(err)
        }
    },
    createProject: async (req, res) => {
        try {
            await Projects.create({ projectTitle: req.body.projectTitle, projectDescription: req.body.projectDescription, userId: req.user.id })
            console.log('Project created.')
            res.redirect('/projects')
        } catch (err) {
            console.log(err)
        }
    },
    deleteProject: async (req, res) => {
        try {
            await Tasks.deleteMany({ projectId: req.params.id })
            await Journals.deleteMany({ projectId: req.params.id })
            await Projects.deleteOne({ _id: req.params.id })
            console.log('Project and all project tasks and journals deleted')
            res.redirect('/projects')

        } catch (err) {
            console.log(err)
        }
    },
    completeProject: async (req, res) => {
        try {
            await Tasks.updateMany({ projectId: req.params.id },
                {
                    isComplete: true
                })
            await Projects.findOneAndUpdate({ _id: req.params.id },
                {
                    isComplete: true
                })
            console.log('Project and all project tasks marked complete')
            res.redirect('/projects')
        } catch (err) {
            console.log(err)
        }
    }
}




