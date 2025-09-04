const express=require("express");
const { createProduct } = require("../controller/orderController");
const router=express.Router();
router.route('/order').post(createProduct);

module.exports=router;