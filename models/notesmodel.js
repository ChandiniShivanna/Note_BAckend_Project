const mongoose = require("mongoose")
const {model, Schema} = mongoose;
const objectId = require("mongoose").ObjectId;

const postSchema = Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    userId : {type:objectId, ref:"users"}
}, {timestamps:true})

const postModels = model("notes", postSchema)

module.exports = postModels;