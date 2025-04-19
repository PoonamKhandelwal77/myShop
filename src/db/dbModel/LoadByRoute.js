const mongoose=require("mongoose")

const loadSchema=new mongoose.Schema({
    
        
        load_id: String,
        emp_id: String,
        veh_id: String,
        godown_id: String,
        route_name: String,
        products: [
          {
            pro_id: String,
            pro_name: String,
            load_qty: Number
          }
        ]
      

})

const loadModel=new mongoose.model("LoadByRoute",loadSchema)

module.exports=loadModel