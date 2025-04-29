

require('dotenv').config()
const express = require('express')
const connectDB = require('./models/connection')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())


connectDB()

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})