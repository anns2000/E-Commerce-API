const { model, default: mongoose } = require("mongoose");
const prodectModel = require("../models/prodect.model");
const asyncHandler = require('express-async-handler');
const ApiError = require("../utils/api.error");
const ApiFeatures = require("../utils/apiFeatures.JS");
const myHandler=require('./handlers')

module.exports.addProdect = myHandler.addOne(prodectModel)
module.exports.updatePriceOrDiscond =myHandler.updateOne(prodectModel)

module.exports.deleteProdect = myHandler.deleteOne(prodectModel);
module.exports.getCatePodects = myHandler.getALL(prodectModel)
