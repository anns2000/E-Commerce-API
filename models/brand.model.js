
const mongoose=require('mongoose')

const brndSchema=mongoose.Schema({

    name:String
})

module.exports=mongoose.model('brand',brndSchema)
