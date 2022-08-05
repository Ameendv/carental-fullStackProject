const mongoose = require('mongoose')

const user=new mongoose.Schema({
    name:{type:String,required:true},
   
    email:{type:String,required:true,unique:true},
    number:{type:Number,unique:true},
    password:{type:String},
    confirmPassword:{type:String},
    bookings:{type:Array},
    isBlocked:{type:Boolean,default:false},
    numberVerified:{type:Boolean,default:false},
    emailVerified:{type:Boolean,default:false},
    idVerified:{type:Boolean,default:false},
    refreshToken:{type:Array},
    profilePicture:{type:String}
 
},{collection:'user'})

const model=mongoose.model('UserData',user)

module.exports=model