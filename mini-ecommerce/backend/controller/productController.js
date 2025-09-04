const productModel=require("../model/productModel.js")


//Get Product Id
exports.getProduct=async(req,res,next)=>{
   const product=await productModel.find({});
    res.json({
        success:true,
        product
    })
}

exports.getProductId=(req,res,next)=>{
    res.json(
        {
            success:true,
            message:"Actually Product Id from the files"
        }
    )
}