

require('dotenv').config()
const mongoose = require('mongoose')




async function connectDB(){

    await mongoose.connect(process.env.MONGO_URI)
    console.log('Mongo DB connected successfully !')
}


module.exports = connectDB