const express=require('express');
const route=express.Router();
const { testController} = require("../controllers/authController");
const authRoute=require("./authroute/authroute");

route.get("/",testController);
route.use("/auth",authRoute);



module.exports=route;