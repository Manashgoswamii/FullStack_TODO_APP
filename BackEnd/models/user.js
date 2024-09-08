const mongoose = require('mongoose');

const userSchema= mongoose.Schema({
    email:{
        type:String,
        Unique:true,
        required:true,
    },
    userName:{
        type:String,
        unique:true,
      
    },
    password:{
        type:String,
        required:true
    },
    list:[{
        type: mongoose.Types.ObjectId,
        ref:"List",
    },
],
});

module.exports=mongoose.model('User',userSchema);