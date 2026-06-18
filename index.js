const express=require('express');
const bodyparser=require('body-parser');
const port=3000;
const Routes=require("./routes/indexroute");
const server=express();
const cookiesParser=require("cookie-parser");
// const cookieParser = require("cookie-parser");

server.use(cookiesParser());

server.set('view engine','ejs');
server.use(express.static("public"));

server.use("/",Routes);

// server.get("/sign-up",(req,res)=>{
//     res.cookie("user","1234566");
//     res.send("cookies sent");
// });
// server.get("/sign-in",(req,res)=>{
//     let ck=req.cookies;
//     console.log("cookies",ck);
//     res.send("cookies get");
// })
// server.get("/delete-cookie",(req,res)=>{
//   res.clearCookie('user');
//   res.send("cookie clear");
// })

server.listen(port,(err)=>{
    if(!err){
        console.log("server started at port",port);
    }
    else{
        console.log("already server running",err);
    }
})