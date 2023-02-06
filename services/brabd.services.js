const brandModel = require("../models/brand.model");
const asyncHandler = require('express-async-handler');
const ApiError = require("../utils/api.error");
const prodectModel = require("../models/prodect.model");
const myHandler=require('./handlers')

module.exports.addBrand=myHandler.addOne(brandModel)
module.exports.updateBrand=myHandler.updateOne(brandModel)
module.exports.deleteBrand=myHandler.deleteOne(brandModel)

module.exports.gellAllBrands=myHandler.getALL(brandModel)
module.exports.brandProdects=asyncHandler(async(req,res)=>{

    const{name}=req.body
    const cate=await prodectModel.find({brand:name})
    if(cate)
    {
        res.json(cate)
    }
    else
    {
        res.json(new ApiError('there is no prodect in this  brand',404))

    }
 })
 