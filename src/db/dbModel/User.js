const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    c_id:Number,
    c_name:String,
    c_address:String,
    c_contact:Number,
    c_balance:Number
})

const userModel=new mongoose.model("User",userSchema)

module.exports=userModel