const mongoose=require('mongoose')

const conn=mongoose.connect("mongodb://localhost:27017/MyStore").then(()=>{
    console.log("connected with database");
}).catch((e)=>{
    console.log(e);
})

module.exports=conn