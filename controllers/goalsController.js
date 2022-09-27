const Goals = require("../models/Goals")
const Tasks = require("../models/Tasks")
const Journals = require("../models/Journals")

module.exports = {
    getGoals: async (req,res)=>{
        console.log(req.user)
        try{
            const goals = await Goals.find( {userId: req.user.id} )
            const tasks = await Tasks.find( {userId: req.user.id} )
            
           
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
    deleteProject: async (req, res) => {
        try{
            await Tasks.deleteMany( {goalId: req.params.id} )
            await Journals.deleteMany( {goalId: req.params.id} )
            await Goals.deleteOne( {_id: req.params.id} )
            console.log('Project and all project tasks and journals deleted')
            res.redirect('/goals')

        }catch(err){
            console.log(err)
        }
    },
    completeProject: async (req, res) => {
        try{
            await Tasks.updateMany( {goalId: req.params.id}, 
                {
                isComplete: true
                })
            await Goals.findOneAndUpdate( {_id: req.params.id}, 
                {
                isComplete: true
                })
            console.log('Project and all project tasks marked complete')
            res.redirect('/goals')

        }catch(err){
            console.log(err)
        }
    }
}




