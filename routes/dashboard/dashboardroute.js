// const dashboardController=(req,res)=>{
//     let {user}=req.cookies;
//     if(!user){
//        return res.redirect("/auth/signin");
//     }
//     res.render("dashboard");
// }


// module.exports={dashboardController};

const express=require('express');
const route=express.Router();

const blogMulter=require("../../multer/blogMulter");

const {addblogController,viewblogController,editblogController,updateblogController,deleteblogController,dashboardController,showaddblogController} = require("../../controllers/dashboardController");
route.get("/",dashboardController);
route.post("/adds-blogs", blogMulter.single('image') ,addblogController);
route.get("/views-blogs",viewblogController);
route.get("/add-blog",showaddblogController);
route.get("/edit-blog/:id",editblogController)
route.post("/update-blog/:id",blogMulter.single('image'),updateblogController);
route.get("/delete-blog/:id",deleteblogController);




module.exports=route;