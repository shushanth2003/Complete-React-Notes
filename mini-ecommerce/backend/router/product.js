const express=require("express");
const { getProduct, getProductId } = require("../controller/productController");
const router=express.Router();
router.route('/products').get(getProduct);
router.route('/products/:id').get(getProductId);
module.exports=router;
