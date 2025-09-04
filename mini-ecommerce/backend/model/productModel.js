const mongoose=require("mongoose");
const productSchema=new mongoose.Schema(
    {
        name:String,
        price:String,
        description:String,
        rating:String,
        images:[
            {
                image:{ type: String, required: true }

            }
        ],
        category:String,
        seller:String,
        stock:String,
        numofReview:String,
        createdAt:Date,
    }
);
const productModel=mongoose.model("Product",productSchema);
module.exports=productModel;