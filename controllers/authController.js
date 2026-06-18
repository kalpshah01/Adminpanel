const testController=(req,res)=>{
    res.send("default");
}
const signupController=(req,res)=>{
    res.render('signup');
}
const signinController=(req,res)=>{
    res.render('signup');
}

module.exports={testController,signinController,signupController};