module.exports = {
    getHistory: async (req,res)=>{
        console.log(req.user)
        try{
            res.render('history.ejs',)
        }catch(err){
            console.log(err)
        }
    },
}