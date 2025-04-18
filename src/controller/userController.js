require("../db/dbconn/connDb")
const userModel=require("../db/dbModel/User")

const getAllUsers=async(req,res)=>{
try {
    const customers=await userModel.find()
    res.status(200).send(customers)
} catch (error) {
    console.log(error);
    
}

}

const getUserById=async(req,res)=>{
    try {
        const _id=req.params.id
        const user=await userModel.findById(_id)
        res.status(200).send(user)
    } catch (error) {
        console.log(error);
    }
}

const createNewUser = async (req, res) => {
    try {
        const newUser = new userModel(req.body)
        const newregisteredUser = await newUser.save()
        res.status(201).send(newUser)
    } catch (error) {
        console.log(e);
        res.status(400).send(error)
    }
}


const updateUser = async (req, res) => {
    try {
        const _id = req.params.id
        const updatedUser= await userModel.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(201).send(updatedUser)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}
const deleteUser = async (req, res) => {
    try {
        const _id = req.params.id
        const deletedUser= await userModel.findByIdAndDelete(_id)
        res.status(201).send(deletedUser)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}



module.exports={getAllUsers,getUserById,createNewUser,updateUser,deleteUser}