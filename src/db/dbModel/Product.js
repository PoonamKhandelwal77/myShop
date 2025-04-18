const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    p_id:String,
        p_category: String,
        p_company: String,
        p_name: String,
        p_mrp: Number,
        unit:String,
        wholeSaleRate: Number,
        retailRate: Number,
        alias1: String,
        alias2: String,
        barcode: Number,
        quantity: Number,
        batchNo: String,
        expiryDate: Date,
        purchaseDate: Date,
        GST: {
            SGST: Number,
            CGST: Number,
            CESS: Number
        }
       

})

const productModel=new mongoose.model("Product",productSchema)

module.exports=productModel