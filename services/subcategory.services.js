const subcategoryModel = require("../models/subcategory.model");
const asyncHandler = require('express-async-handler');
const ApiError = require("../utils/api.error");
const prodectModel = require("../models/prodect.model");
const ApiFeatures = require("../utils/apiFeatures.JS");
const myHandler=require('./handlers')
module.exports.addSubcategory=myHandler.addOne(subcategoryModel)
module.exports.updateSubCategory=myHandler.updateOne(subcategoryModel)
module.exports.deleteSubnCategory=myHandler.deleteOne(subcategoryModel)
module.exports.gellAllSubCategory=myHandler.getALL(subcategoryModel)
 // to get all subcategory
module.exports.subCategoryProdects=asyncHandler(async(req,res)=>{

    const{name}=req.body
    const subscate=await prodectModel.find({name});
    if(subscate)
    {
        res.json(subscate)
    }
    else
    {
        res.json(new ApiError('there is no prodect in this  subCategory',404))

    }
 })
 // to get all subcategory belongs to an category
 module.exports.getAllCategorysubs=asyncHandler(async(req,res)=>{
    const{name}=req.body

    const api = new ApiFeatures(subcategoryModel.find({category:name}), req.query).filter()
    .keyword()
    .paging()
    .sort()
    .fielding();

    const subscate = await api.myQuery
    res.json(subscate)
   
 })
