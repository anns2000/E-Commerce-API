
const mongoose=require('mongoose')

const prodectSchema=mongoose.Schema({

    name:String,
    count:Number,
    price:Number,
    description:String,
    discount:Number,
    oldPrice:Number,
    nowPrice:Number,
    avrageRate:Number,
    image:String,
    subCategory:String,
    brand:String,
    category:String

})

module.exports=mongoose.model('prodect',prodectSchema)
