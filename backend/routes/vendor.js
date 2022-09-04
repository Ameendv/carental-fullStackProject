const express=require('express')
const app=express()
const vendorController=require('../controller/vendor/vendor')


app.post('/api/login',vendorController.vendorLogin)

module.exports = app;