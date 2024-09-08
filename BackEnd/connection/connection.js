const mongoose = require('mongoose');

const connection = async(req,res) =>{
    try {
        await mongoose
    .connect("mongodb://localhost:27017/Todo")
    .then(console.log("MongoDB connected Successfully"));
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
   
}

connection();