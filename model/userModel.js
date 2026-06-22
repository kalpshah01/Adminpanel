const mongoose=require('mongoose');

const schema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unqiue:true
    },
    password:{
        type:String,
        require:true
    }
})

const User=mongoose.model("User",schema);

module.exports=User;