const { auth } = require('../middleware/auth')
const { addSubcategory,  
gellAllSubCategory, subCategoryProdects, 
updateSubCategory,
deleteSubnCategory,
getAllCategorysubs, 
} = require('../services/subcategory.services')

const Route=require('express').Router()

Route.post('/add',auth,addSubcategory)
Route.delete('/delete',auth,deleteSubnCategory)
Route.put('/udate',auth,updateSubCategory)
Route.get('/getall',gellAllSubCategory)
Route.get('/Prodects',subCategoryProdects)
Route.get('/getAllCategorysubs',getAllCategorysubs)




module.exports=Route