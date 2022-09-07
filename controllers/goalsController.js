module.exports = {
    getGoals: async (req,res)=>{
        console.log(req.user)
        try{
            res.render('goals.ejs',)
        }catch(err){
            console.log(err)
        }
    },
}