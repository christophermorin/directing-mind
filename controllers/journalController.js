const Projects = require("../models/Projects")
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
          const project = await Projects.findById(req.params.id);
          const journals = await Journals.find( {projectId: req.params.id} )
          res.render("journal.ejs", { 
            project: project, 
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
          await Projects.updateOne({_id: req.params.id}, {$inc : {journalCount: 1}})
          await Journals.create({
            journalTitle: req.body.journalTitle.trim(),
            journalText: req.body.journalText.trim(),
            projectId: req.params.id,
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
          await Projects.updateOne({_id: entry.projectId}, {$inc : {journalCount: -1}})
          await Journals.deleteOne( {_id: req.params.id} )
          console.log('Journal entry deleted')
          res.redirect(`/journal/${entry.projectId}`)

      }catch(err){
        console.log(err)
      }
    },
}