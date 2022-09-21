const express=require('express')
const app=express()
const vendorController=require('../controller/vendor/vendor')
const upload=require('../middlewares/multer')



app.post('/api/login',vendorController.vendorLogin)

app.get ('/api/logout',vendorController.vendorLogout)

app.post('/api/add-car',upload.array('images'),vendorController.addCar)

module.exports = app;  