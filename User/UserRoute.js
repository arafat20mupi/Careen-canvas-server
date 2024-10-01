

const express= require('express')
const { register, login } = require('./UserController')
const authMiddleware = require('../Middelware/Middleware')

const route= express.Router()
    //   register route
    route.post('/register',register),
    //  login
   route.post('/login',authMiddleware,login)



module.exports=route
