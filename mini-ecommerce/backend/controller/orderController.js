exports.createProduct=(req,res,next)=>{
    const cardItems=req.body;
    const amount=cardItems.reduce((acc,items)=>{acc+items.product.price*items.product.qty},0);
    console.log("Amount of Total Price : "+amount);
    res.json(
        {
            success:true,
            message:"I have create the Products"
        }
    )
}