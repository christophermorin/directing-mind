module.exports = {
    getJournal: async (req,res)=>{
        console.log(req.user)
        try{
            res.render('journal.ejs',)
        }catch(err){
            console.log(err)
        }
    },
}