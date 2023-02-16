import mongoose from "mongoose"

export const connectDB= async()=>{
    try{
   const {connection}= await mongoose.connect(process.env.DB_URL)
   if(connection.readyState==1){
 console.log("db connected")}
   }
 catch(err){
 console.log("db connection failed")
}
    
 
}