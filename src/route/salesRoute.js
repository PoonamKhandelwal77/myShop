const express=require('express')
const {getAllSales,getSalesById,createNewSale,updateSale,deleteSale,getSalesByEmpId}=require("../controller/salesController")
const router=new express.Router()

router.route('/').get(getAllSales)
router.route('/:id').get(getSalesById)
router.route('/').post(createNewSale)
router.route('/:id').patch(updateSale)
router.route('/:id').delete(deleteSale)
// router.route('/salesByEmp').get(getSalesByEmpId)

module.exports=router