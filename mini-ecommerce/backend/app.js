const express=require('express');
const app=express();
const dotenv=require('dotenv');
const path=require('path');
dotenv.config({path:path.join(__dirname,'config','config.env')})
const product=require("./router/product.js")
const order=require("./router/order.js");
const connectDB = require('./config/connectDB.js');
app.use("/api/v1/",product);
app.use("/api/v1/",order);
connectDB();
app.listen(process.env.PORT,()=>{
    console.log(`Server Listening in ${process.env.NODE_ENV} ${process.env.PORT}`);
});