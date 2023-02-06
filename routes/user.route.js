const { auth } = require('../middleware/auth')
const { uservalidation } = require('../middleware/user.validation')
const { sginup, sginin, updateUser } = require('../services/user.services')

const Route=require('express').Router()



Route.post('/sginup',uservalidation,sginup)
Route.post('/sginin',sginin)
Route.put('/updateUser',auth,updateUser)




module.exports=Route