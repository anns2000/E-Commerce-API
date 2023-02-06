const { auth } = require('../middleware/auth')
const { addProdect, updatePriceOrDiscond, deleteProdect, getCatePodects } = require('../services/prodect.services')

const Route=require('express').Router()



Route.post('/addProdect',auth,addProdect)
Route.put('/updateProdect',auth,updatePriceOrDiscond)
Route.delete('/deleteProdect',auth,deleteProdect)
Route.get('/All',getCatePodects)





module.exports=Route