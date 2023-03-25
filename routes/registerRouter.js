const router=require('express').Router();
const USer=require('../models/userSchema');
const jwt = require('jsonwebtoken');
const {body , validationResult} =require('express-vallidator');
const bcrypt = require('bcrypt');

router.post("/register",body("email").isEmail(), async(req,res)=>{
    try{
        let {email,password,confirmPassword} = req.body;
        if(password!==confirmPassword){
            return res.status(403).json({
                status:"Failed"
                ,message:"Password not matched"
            })
        }

        let response= await USer.find({email});
        if(!response){
            return res.status(403).json({
                status:"Failed",
                message:"User already Exists"
            })
        }else{
            bcrypt.hash(password,10,async(err,hash)=>{
                if(err){
                    return res.status(403).json({
                        status:"Failed",
                        message:"please signup again",
                        err
                    })
                }
            try{
                let response= await USer.create({email:email,password:hash})
                res.status(200).json({
                    status:"Success",
                    message:"User Created Successfully",
                    response
                })
            }catch(e){
                res.status(403).json({
                    status:"Failed",
                    message:e.message
                })
            }
            })
        }
    }catch(e){
        res.status(403).json({
            status:"Failed",
            message:e.message
        })
    }
});