exports.getProduct=(req,res,next)=>{
    res.json({
        success:true,
        message:"Actually I get Product from the files"
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