const express=require('express')
const app = express()
const vendor=require('../../models/vendorModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const {createError}=require('../../errorHandling/createError')


module.exports={
    vendorLogin:async(req,res,next)=>{
        try{
            const vendorExist =  await vendor.findOne({username:req.body.username})
            if(vendorExist){
                if(await bcrypt.compare(req.body.password,vendorExist.password)){
                    const vendorData={vendorName:vendorExist.username}
                const accessToken=generateAccessToken(vendorData)
                
                const refreshToken=jwt.sign(vendorData,process.env.REFRESH_TOKEN_SECRET)
                

                await vendor.updateOne({username:vendorData.vendorName},{$push:{refreshToken}}).then((data)=>{

                    res.cookie('refresh',refreshToken,{
                        httpOnly:true,
                        maxAge:60000
                    })
                    res.cookie('access',accessToken,{
                        httpOnly:true,
                        
                    })  
                    res.status(200)
                    res.json({accessToken})

                })


                }else{
                    next(createError(404,'Invalid password'))
                }
            }else{
                next(createError(404,'User not found'));
            }
        }catch(error){
            console.log(error)
        }
    },
    vendorLogout:(req,res)=>{
       console.log(req.cookies)
    }
}

function generateAccessToken(user) {
    
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {algorithm:'HS256', expiresIn: "10m" });
  }