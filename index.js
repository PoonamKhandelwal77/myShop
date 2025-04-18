const express=require('express')
const app=express()
const cors=require('cors')
const PORT=8000
require('./src/db/dbconn/connDb')
const productRoute=require('./src/route/productRoute')
const userRoute=require('./src/route/userRoute')
const salesRoute=require('./src/route/salesRoute')


app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('helllooooo')
})

app.use('/product',productRoute)
app.use('/user',userRoute)
app.use('/sales',salesRoute)
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    
})

