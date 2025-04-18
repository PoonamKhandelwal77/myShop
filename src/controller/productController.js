require("../db/dbconn/connDb")
const productModel=require("../db/dbModel/Product")

const getAllProducts=async(req,res)=>{
try {
    const products=await productModel.find()
    res.status(200).send(products)
} catch (error) {
    console.log(error);
}

}

const gtProductById=async(req,res)=>{
    try {
        const _id=req.params.id
        const product=await productModel.findById(_id)
        res.status(200).send(product)
    } catch (error) {
        console.log(error);
    }
}

const createNewProduct = async (req, res) => {
    try {
        const newItem = new productModel(req.body)
        const newregisteredItem = await newItem.save()
        res.status(201).send(newItem)
    } catch (error) {
        console.log(e);
        res.status(400).send(error)
    }
}


const updateProduct = async (req, res) => {
    try {
        const _id = req.params.id
        const updatedItem = await productModel.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(201).send(updatedItem)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}
const deleteProduct = async (req, res) => {
    try {
        const _id = req.params.id
        const deletedItem = await productModel.findByIdAndDelete(_id)
        res.status(201).send(deletedItem)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}



module.exports={getAllProducts,gtProductById,createNewProduct,updateProduct,deleteProduct}