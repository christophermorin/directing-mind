const Goals = require("../models/Goals")
const Journals = require("../models/Journals")




module.exports = {
    getAllJournals: async (req, res) => {
      try {
        const journals = await Journals.find( {userId: req.user.id} )
        console.log(journals)
        res.render("allJournals.ejs", { 
          user: req.user.userName, 
          journals: journals
        });
      } catch (err) {
        console.log(err);
      }
    },
    getJournal: async (req, res) => {
        try {
          const goal = await Goals.findById(req.params.id);
          const journals = await Journals.find( {goalId: req.params.id} )
          res.render("journal.ejs", { 
            goal: goal, 
            user: req.user.userName, 
            journals: journals
          });
        } catch (err) {
          console.log(err);
        }
    },
    getOneJournal: async (req, res) => {
      try {
        const entry = await Journals.findById(req.params.id)
        console.log(entry)
        res.render('journalEntry.ejs', {
          entry: entry
        })
      }catch(err){
        console.log(err)
      }
    },
    createJournal: async (req, res) => {
      try {
          await Journals.create({
            journalTitle: req.body.journalTitle.trim(),
            journalText: req.body.journalText.trim(),
            goalId: req.params.id,
            userId: req.user.id 

          })
          console.log('Journal Created')
          res.redirect(`../${req.params.id}`)
      }catch(err){
        console.log(err)
      }
    },
    deleteOneJournal: async (req, res) => {
      try {
          const entry = await Journals.findById(req.params.id)
          await Journals.deleteOne( {_id: req.params.id} )
          console.log('Journal entry deleted')
          res.redirect(`/journal/${entry.goalId}`)

      }catch(err){
        console.log(err)
      }
    },
}