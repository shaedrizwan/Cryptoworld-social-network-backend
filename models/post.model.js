const mongoose = require('mongoose')
const User = require('./user.model')
const Schema = mongoose.Schema

const postSchema = new Schema({
    post:String,
    user:{type:mongoose.Types.ObjectId,ref:User},
    likes:[{type:mongoose.Types.ObjectId,ref:User}]
})

module.exports = mongoose.model('Post',postSchema)