const dashboardController=(req,res)=>{
    let {user}=req.cookies;
    if(!user){
       return res.redirect("/auth/signin");
    }
    return res.send("Admin panel weclome");
}

module.exports={dashboardController};