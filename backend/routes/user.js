const express = require('express')
let app = express.Router()
const bcrypt = require('bcrypt')
const user = require('../models/userModel')
const { OAuth2Client } = require('google-auth-library')
const userController=require('../controller/user/user')


const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID)

app.get('/',(req,res)=>{
   
})


app.post('/api/user-signup',userController.userSignup)



app.post('/api/user-google-signin', userController.googleSignin)


app.post('/api/user-login',userController.userSignin)

module.exports = app