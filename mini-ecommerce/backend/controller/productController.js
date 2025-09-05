const productModel=require("../model/productModel.js")


//Get Product Id
exports.getProduct=async(req,res,next)=>{
   try{
        const product=await productModel.find({});
        res.json({
            success:true,
            product
        })
   }catch(error){
        res.json(
            {
                success:false,
                message:error.message
            }
        )
   }
}

exports.getProductId=async(req,res,next)=>{
    try{
        const product=await productModel.findById(req.params.id);
        res.json(
            {
                success:true,
                product
            }
        )
    }catch(error){
        res.status(404).json(
            {
                success:false,
                message:"unable to get the product with the id"
            }
        )
    }
}