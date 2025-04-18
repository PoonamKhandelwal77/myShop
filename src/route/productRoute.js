const express=require('express')
const {getAllProducts,gtProductById,createNewProduct,updateProduct,deleteProduct}=require("../controller/productController")
const router=new express.Router()

router.route('/').get(getAllProducts)
router.route('/:id').get(gtProductById)
router.route('/').post(createNewProduct)
router.route('/:id').patch(updateProduct)
router.route('/:id').delete(deleteProduct)

module.exports=router