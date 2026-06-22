const express=require('express');
const route=express.Router();

const {signinController ,signupController,registerController,loginController} = require("../../controllers/authController");
route.get("/signup",signupController);
route.get("/signin",signinController);
route.post("/register",registerController);
route.post("/login",loginController);
module.exports=route;