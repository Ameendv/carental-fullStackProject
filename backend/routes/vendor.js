const express=require('express')
const app=express()
const vendorController=require('../controller/vendor/vendor')


app.post('/api/login',vendorController.vendorLogin)

app.get ('/api/logout',vendorController.vendorLogout)

module.exports = app;