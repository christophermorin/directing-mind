const Goals = require("../models/Goals")
const Journals = require("../models/Journals")




module.exports = {
    getJournal: async (req, res) => {
        try {
          const goal = await Goals.findById(req.params.id);
          const journals = await Journals.find( {goalId: req.params.id} )
          res.render("journal.ejs", { 
            goal: goal, 
            user: req.user, 
            journals: journals
          });
        } catch (err) {
          console.log(err);
        }
      },
    createJournal: async (req, res) => {
      try {
          await Journals.create({
            journalTitle: req.body.journalTitle.trim(),
            journalText: req.body.journalText.trim(),
            goalId: req.params.id, 

          })
          console.log('Journal Created')
          res.redirect(`../${req.params.id}`)
      }catch(err){
        console.log(err)
      }
    }
}







// module.exports = {
//     getJournal: async (req,res)=>{
//         console.log(req.user)
//         try{
//             res.render('journal.ejs',)
//         }catch(err){
//             console.log(err)
//         }
//     },
// }