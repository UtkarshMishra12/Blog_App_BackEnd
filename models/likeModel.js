//import mongoose
const mongoose = require("mongoose");

//route handler
const liketSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //This is a refrence to the post model
    },
    user:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.model("Like", likeSchema);