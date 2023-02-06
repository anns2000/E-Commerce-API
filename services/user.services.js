

const userModel = require("../models/user.model");
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/api.error');
myHandler=require('./handlers')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports.sginup=asyncHandler(async(req,res)=>{
    const {name,email,age,role,password}=req.body
    console.log(req.body)
    const user=await userModel.findOne({email})
    if(user)
    {
        res.json(new ApiError('this user already exists',405))
    }
    else
    {
        bcrypt.hash(password, 4 ,async function(err, hash) {
           
            await userModel.insertMany({name,email,age,role,password:hash})
            res.json('user done')
        });  
    }
})
module.exports.sginin=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    const user=await userModel.findOne({email})
    if(!user)
    {
        res.json(new ApiError('this user not found',404))
    }
    else
    {
        bcrypt.compare(password, user.password, async function(err, result) {
          
            
            if(result)
            {
                var token = jwt.sign({ id:user._id,name:user.name,email:user.email,role:user.role }, 'anas');
                res.json(token);
            }
            else
            {
                res.json(new ApiError("wrong password pls try again",404))

            }
        });                
    }
})
module.exports.deleteUser=asyncHandler(async(req,res)=>{
    const {email}=req.body

    const user=await userModel.findOne({email})
    if(!user)
    {
        res.json(new ApiError('this user not found',404))
    }
    else
    {
          
    }
})
module.exports.updateUser=myHandler.updateOne(userModel)


