//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express";

dotenv.config({
    path: './env'
})

const app = express()

connectDB()
.then(() => {
    app.on("error", (error) =>{
        console.log("ERRR: ",error);
        throw error
    })
    app.listen(process.env.PORT, () =>{
        console.log(`\n Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db Connect failed !!! ", err)
})





/*
import express from "express";
const app = express()

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) =>{
            console.log("Error: ", error)
        })

        app.liseten(process.env.PORT, () => {
            console.log(`App is listing on port ${process.env.PORT}`)
        })
    } catch {
        console.log("ERROR: ", error)
        throw error
    }
})()


*/