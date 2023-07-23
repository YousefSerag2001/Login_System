const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:String,
    email:{type:String , unique:true},
    password:String,
    age:Number
})

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password , this.password)
}

module.exports = mongoose.model('Users' , userSchema)
