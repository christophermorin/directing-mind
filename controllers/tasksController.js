const Goals = require("../models/Goals")
const Tasks = require("../models/Tasks")



module.exports = {
    getTasks: async (req, res) => {
        try {
          const goal = await Goals.findById(req.params.id);
          const tasks = await Tasks.find({goalId: req.params.id})
          res.render("tasks.ejs", { goal: goal, user: req.user, tasks: tasks });
        } catch (err) {
          console.log(err);
        }
      },
    createTask: async (req, res) => {
      try {
        await Tasks.create( {taskTitle: req.body.taskTitle, taskDescription: req.body.taskDescription, goalId: req.params.id, userId: req.user.id})
        console.log('New task created')
        res.redirect(`../${req.params.id}`)
      } catch (err){
        console.log(err)
      }
    }
}