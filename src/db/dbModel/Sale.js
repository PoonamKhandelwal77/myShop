const mongoose=require('mongoose')

const salesSchema=new mongoose.Schema({        
        sale_id: String,
        userid: String,
        s_date: Date,
        products: [
          {
            id: String,
            godown: String,
              pro_name: String,
              sold_qty: Number
          }
          
        ],
        totalBill: Number,
        paid: Number,
        due: Number,
        em_id:String,
        cash:Number,
        online:Number,
        bank_detail:String
       
}
)

const salesModel=new mongoose.model("Sale",salesSchema)

module.exports=salesModel