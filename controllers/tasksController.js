const Goals = require("../models/Goals")



module.exports = {
    getTasks: async (req,res)=>{
        console.log(req.user)
        try{
            res.render('tasks.ejs',)
        }catch(err){
            console.log(err)
        }
    },
    testOne: async (req, res) => {
        try {
          const goal = await Goals.findById(req.params.id);
          res.render("tasks.ejs", { goal: goal, user: req.user });
        } catch (err) {
          console.log(err);
        }
      },
}