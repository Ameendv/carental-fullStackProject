const express=require('express')
const app=express()

app.post('/api/login',(req,res)=>{
    console.log('hai',req.body)
})

module.exports = app;