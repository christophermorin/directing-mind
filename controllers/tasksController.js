const Goals = require("../models/Goals")
const Tasks = require("../models/Tasks")



module.exports = {
    getTasks: async (req, res) => {
        try {
          const goal = await Goals.findById(req.params.id);
          const tasks = await Tasks.find({goalId: req.params.id})
          res.render("tasks.ejs", { 
            goal: goal, 
            tasks: tasks, 
            user: req.user, 
          });
        } catch (err) {
          console.log(err);
        }
      },
    createTask: async (req, res) => {
      try {
        await Goals.updateOne({_id: req.params.id}, {$inc : {taskCount: 1}})
        await Tasks.create( {
          taskTitle: req.body.taskTitle, 
          taskDescription: req.body.taskDescription, 
          goalId: req.params.id, 
          userId: req.user.id
        });
        console.log('New task created')
        res.redirect(`../${req.params.id}`)
      } catch (err){
        console.log(err)
      }
    },
    deleteTask: async (req, res) => {
      try {
        const task = await Tasks.findById( {_id: req.params.id} )
        await Goals.updateOne({_id: task.goalId}, {$inc : {taskCount: -1}})
        await Tasks.deleteOne( {_id: req.params.id})
        console.log('Task deleted')
        res.redirect(`../${task.goalId}`)
      }catch(err){
        console.log(err)
      }
    },
    completeTask: async (req, res) => {
      try {
        const post = await Tasks.findById( {_id: req.params.id} )
        await Tasks.findOneAndUpdate( {_id: req.params.id},
          {
          isComplete: !post.isComplete
          }
        )
        console.log('Task Complete')
        res.redirect(`../${post.goalId}`)
      }catch(err){
        console.log(err)
      }
    }
}