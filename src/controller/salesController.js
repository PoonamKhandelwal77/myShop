require("../db/dbconn/connDb")
const salesModel=require("../db/dbModel/Sale")

const getAllSales=async(req,res)=>{
   
   
      
        
        try {
            const allSales=await salesModel.find(req.query)
            res.status(200).send(allSales)
        } catch (error) {
            console.log(error);
            
        }
    


}

const getSalesById=async(req,res)=>{
    try {
        const _id=req.params.id
        const SSale=await salesModel.findById(_id)
        res.status(200).send(SSale)
    } catch (error) {
        console.log(error);
    }
}

const createNewSale = async (req, res) => {
    try {
        const newSale = new salesModel(req.body)
        const newregisteredSale = await newSale.save()
        res.status(201).send(newSale)
    } catch (error) {
        console.log(e);
        res.status(400).send(error)
    }
}


const updateSale = async (req, res) => {
    try {
        const _id = req.params.id
        const updatedSale= await salesModel.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(201).send(updatedSale)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}
const deleteSale = async (req, res) => {
    try {
        const _id = req.params.id
        const deletedSale= await salesModel.findByIdAndDelete(_id)
        res.status(201).send(deletedSale)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}

const getSalesByEmpId=async(req,res)=>{
    try {
        const emp_id=req.query.emp_id
        console.log("emp id is:",emp_id);
        
        const saleByEmp= await salesModel.find({em_id:emp_id})
        res.status(201).send(saleByEmp)
        
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
        
    }
}


module.exports={getAllSales,getSalesById,createNewSale,updateSale,deleteSale,getSalesByEmpId}