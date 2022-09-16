const Goals = require("../models/Goals")
const Tasks = require("../models/Tasks")

module.exports = {
    getGoals: async (req,res)=>{
        console.log(req.user)
        try{
            const goals = await Goals.find( {userId: req.user.id} )
            const tasks = await Tasks.find( {userId: req.user.id} )
            console.log(tasks)
            console.log(goals)
            res.render('goals.ejs', {goals: goals, tasks: tasks})
        }catch(err){
            console.log(err)
        }
    },
    createGoal: async (req, res) => {
        try{
            await Goals.create({goalTitle: req.body.goalTitle, goalDescription: req.body.goalDescription, userId: req.user.id})
            console.log('Goal created.')
            res.redirect('/goals')
        }catch(err){
            console.log(err)
        }
    },
}




