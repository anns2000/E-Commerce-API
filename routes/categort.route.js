const { auth } = require('../middleware/auth')
const { addCategory, updateCategory, deleteCategory, getAll } = require('../services/category.services')

const Route=require('express').Router()

Route.post('/addCate',auth,addCategory)
Route.put('/update',auth,updateCategory)
Route.delete('/delete',auth,deleteCategory)
Route.get('/getCategoryProdect',getAll)



module.exports=Route