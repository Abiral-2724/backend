// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import { mongoose } from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express" ; 
import connectDB from "./db/index.js";

dotenv.config({
    path : './env'
})

connectDB() ; 

// ifelse statement of the data base connection 
// const app = express() ; 
// ;(async () => {
//    try{
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
//     app.on("error" , (error)=>{
//         console.log("ERROR" , error) ;
//         throw error ;
//     })
//     app.listen(process.env.PORT , ()=> {
//         console.log(`App is listening on the port ${process.env.PORT}`)
//     })
//    }
//    catch(e){
//     console.error(e) ; 
//     // throw e ;
//    }
// })()