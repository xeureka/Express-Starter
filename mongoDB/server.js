require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const app = express()
const PORT = 5000;

// Middleware
app.use(express.json())

// Latest Mongoose Connection Method

async function connectDB(){
    try {
        
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully")
    
    } catch (error) {
        console.log("Mongo DB connection Error",error)
        process.exit(1)        
        
    }
}

connectDB()
// sample Route

app.get('/',(req,res) =>{
    res.send("Hello MOngoDB is conneted sucessfully")
})

// Start server

app.listen(PORT,() =>{
    console.log('Server running on PORT ')
})