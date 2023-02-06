const asyncHandler = require('express-async-handler');
const ApiError = require("../utils/api.error");
const ApiFeatures = require("../utils/apiFeatures.JS");

module.exports.deleteOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const { id } = req.query;
    console.log(id);
    const document = await Model.findByIdAndDelete(id);

    if (!document) {
      return next(new ApiError(`No document for this id ${id}`, 404));
    }
    else
    {
        res.json("deleted")

    }

});
module.exports.updateOne = (Model)=>asyncHandler(async(req,res)=>{
    const id=req.header('id')
    const doc=await Model.findById(id)
    if(doc)
    {
        await Model.findByIdAndUpdate(id,req.body,{new:true})
        res.json('done')

    }
    else
    {
        res.json(new ApiError('this document not found',404))

    }

})
module.exports.addOne = (Model)=>asyncHandler(async(req,res,next)=>{

    const document=await Model.findOne(req.body)
    if(document)
    {
        req.gerror=new ApiError('this document already exists',400);
        next()
    }
    else
    {
        await Model.insertMany(req.body)
        res.json('document done')
    }

})
module.exports.getALL = (Model)=>asyncHandler(async(req,res)=>{

    const api = new ApiFeatures(Model.find(), req.query).filter()
    .keyword()
    .paging()
    .sort()
    .fielding();

    const myProdect = await api.myQuery
    res.json(myProdect)
 })