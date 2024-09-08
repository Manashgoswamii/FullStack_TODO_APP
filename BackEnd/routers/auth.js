const router= require('express').Router();
const User = require("../models/user.js");
const bcrypt = require("bcryptjs");


//signup
router.post('/register',async(req,res)=>{
    
    try {

        const{ email,userName,password}= req.body;
        const hashpassword = bcrypt.hashSync(password);
        const user = new User({email,userName, password:hashpassword});
        await user.save().then(() =>
                res.status(200).json({message:"Signup successful!"})
          
         
         );

    } catch (error) {
        res.status(200).json({message:"User already exists"});
    }
})

//login
router.post('/signin',async(req,res)=>{
    
    try {
          const user= await User.findOne({email: req.body.email});
          if(!user) {
            res.status(404).json( {message: "Please SignUP first!"});
          }
          
          const isPasswordCorrect = bcrypt.compareSync(req.body.password,user.password);
          if(!isPasswordCorrect){
            res.status(400).json( {message: "Password is not correct!"});
          }
          const { password, ...others} = user._doc;
          res.status(200).json({ others});

    } catch (error) {
        res.status(400).json({message:"User already exists"});
    }
})


module.exports = router;