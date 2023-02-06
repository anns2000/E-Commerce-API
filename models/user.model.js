
const mongoose=require('mongoose')

const userSchema=mongoose.Schema({

    name:String,
    age:Number,
    role:String,
    email:String,
    password:String
    
})

module.exports=mongoose.model('user',userSchema)
