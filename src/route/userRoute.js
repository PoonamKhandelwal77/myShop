const express=require('express')
const {getAllUsers,getUserById,createNewUser,updateUser,deleteUser}=require("../controller/userController")
const router=new express.Router()

router.route('/').get(getAllUsers)
router.route('/:id').get(getUserById)
router.route('/').post(createNewUser)
router.route('/:id').patch(updateUser)
router.route('/:id').delete(deleteUser)

module.exports=router