const { auth } = require('../middleware/auth')
const { addBrand, deleteBrand, updateBrand, gellAllBrands, brandProdects } = require('../services/brabd.services')

const Route=require('express').Router()

Route.post('/add',auth,addBrand)
Route.delete('/delete',auth,deleteBrand)
Route.put('/udate',auth,updateBrand)
Route.get('/getall',gellAllBrands)
Route.get('/Prodects',brandProdects)




module.exports=Route