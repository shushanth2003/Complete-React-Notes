const mongoose=require('mongoose');

const connectDB=()=>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log("mongoDB connected Successfully ",con.connection.host);
    })
}

module.exports=connectDB;