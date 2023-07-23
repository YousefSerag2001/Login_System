const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRouter = require('./Routes/user.cjs')

const app = express()
app.use(bodyParser.json())

const url = "mongodb+srv://Sego:123sego123@sego.gihbdyr.mongodb.net/Sego?retryWrites=true&w=majority"

const connectDB = async() => {
    try {
        mongoose.set('strictQuery' , false)
        mongoose.connect(url)
        console.log("Connect To Mongo DB")
    } catch(err) {
        console.log("Error While Connect To Mongo" + err)
        process.exit()
    }
}

connectDB()

app.use('/' , userRouter)

app.listen(4000)