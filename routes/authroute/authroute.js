const express=require('express');
const route=express.Router();

const {signinController ,signupController} = require("../../controllers/authController");
route.get("/auth-signup",signupController);
route.get("/auth-signin",signinController);

module.exports=route;