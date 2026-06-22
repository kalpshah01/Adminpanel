const User = require("../model/userModel");

const testController = (req, res) => {
  res.send("default");
};
// const signupController = (req, res) => {
//     let {user}=req.cookies;
//     if(user){
//         res.redirect("/auth/signin");
//     }
//   res.render("signup");
// };
// const signinController = (req, res) => {
//     let {user}=req.cookies;
//     if(!user){
//         res.redirect("/auth/signup");
//     }
//   res.render("signin");
// };



const signupController = (req, res) => {
    const { user } = req.cookies;

    if (user) {
        return res.redirect("/dashboard");
    }

    return res.render("signup");
};

const signinController = (req, res) => {
    const { user } = req.cookies;

    if (user) {
        return res.redirect("/dashboard");
    }

    return res.render("signin");
};


const registerController = async (req, res) => {
  try {
    console.log("req body is", req.body);
    let { name, email, password } = req.body;
    let newUser = User({
      name,
      email,
      password,
    });

    await newUser.save();
    
    res.redirect("/auth/signin");
  } catch (err) {
    console.log("Error in Registeration", err);
    res.render("");
  }
};

const loginController=async(req,res)=>{
console.log("login data is",req.body);
let{email,password}=req.body;
let user=await User.findOne({email});
console.log(user);
if(user){
    if(user.password === password){
        res.cookie("user",user._id);
        res.redirect("/dashboard");
    }
    else{
        res.redirect("/auth/signin");
    }
}
else{
    res.redirect("/auth/signup");
}
//res.render('');
}
module.exports = {
  testController,
  signinController,
  signupController,
  registerController,
  loginController
};
