const router= require('express').Router();
const USer=require('../models/userSchema');
const jwt = require('jsonwebtoken');
const {body , validationResult} =require('express-vallidator');
const bcrypt = require('bcrypt');
const secret="HelloUser";
router.post('/login',async (req,res)=>{
    try{
        const {username,password}=req.body;

    }catch(e){
        
    }
})