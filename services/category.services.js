const { model } = require("mongoose");
const categoryModel = require("../models/category.model");
const asyncHandler = require('express-async-handler');
const ApiError = require("../utils/api.error");
const myHandler=require('./handlers')

module.exports.addCategory=myHandler.addOne(categoryModel)
module.exports.updateCategory=myHandler.updateOne(categoryModel)
module.exports.deleteCategory=myHandler.deleteOne(categoryModel)
module.exports.getAll=myHandler.getALL(categoryModel)
 