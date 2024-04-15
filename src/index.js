//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express";

dotenv.config({
    path: './env'
})

const app = express();


(async() =>{
   await connectDB();

app.on("error",(error) => {
    console.log("ERROR IS:",error)
})
app.listen(process.env.PORT,() => {
    console.log(`\n App is listing on Port ${process.env.PORT}`)
})
})()



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