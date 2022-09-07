module.exports = {
    getTasks: async (req,res)=>{
        console.log(req.user)
        try{
            res.render('tasks.ejs',)
        }catch(err){
            console.log(err)
        }
    },
}