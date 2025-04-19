require("../db/dbconn/connDb")
const loadModel = require("../db/dbModel/LoadByRoute")

const getAllLoads = async (req, res) => {
    try {
        const allLoads = await loadModel.find(req.query)
        res.status(200).send(allLoads)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}

const getAllLoadsById = async (req, res) => {
    try {
        const _id=req.params.id
        const loadById = await loadModel.findById(_id)
        res.status(200).send(loadById)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}

const updateLoad=async(req,res)=>{
    try {
        const _id=req.params.id
        const updatedLoad= await loadModel.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(201).send(updatedLoad)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}

const deleteLoad=async(req,res)=>{
    try {
        const _id=req.params.id
        const deletedLoad=await loadModel.fndByIdAndDelete(_id)
        res.status(201).send(deletedLoad)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}


const createNewLoad=async(req,res)=>{
    try {
        const newLoad=new loadModel.model(req.query)
        const newRegisteredLoad=await newLoad.save()
        res.status(201).send(newLoad)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}
module.exports={getAllLoads,getAllLoadsById,createNewLoad,updateLoad,deleteLoad}