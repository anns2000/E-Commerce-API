
const { string } = require('joi')
const mongoose=require('mongoose')

const subCategorySchema=mongoose.Schema({

    name:String,
    category:{
    type:String,
    required:[true,"must take mother category of this subcategory"]
}
})

module.exports=mongoose.model('subcategory',subCategorySchema)
