

const express=require('express');
const route=express.Router();

const blogMulter=require("../../multer/blogMulter");

const {addblogController,viewblogController,editblogController,updateblogController,deleteblogController,dashboardController,showaddblogController} = require("../../controllers/dashboardController");
const { LoginCheck } = require('../../middleware/auth');
route.get("/",LoginCheck,dashboardController);
route.post("/adds-blogs", LoginCheck,blogMulter.single('image') ,addblogController);
route.get("/views-blogs",LoginCheck,viewblogController);
route.get("/add-blog",LoginCheck,showaddblogController);
route.get("/edit-blog/:id",LoginCheck,editblogController)
route.post("/update-blog/:id",LoginCheck,blogMulter.single('image'),updateblogController);
route.get("/delete-blog/:id",LoginCheck,deleteblogController);




module.exports=route;