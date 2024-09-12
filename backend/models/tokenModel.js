const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
   user_Id: {
      type: mongoose.Schema.Types.ObjectId,  // Correct casing
      required: true,
      ref: 'User'  // Ensure this matches the model name for the User schema
  },
 token:{
    type:String,
    required:true,
 },
 created_at:{
    type:Date,
    required:true,
 },
 expires_at:{
    type:Date,
    required:true,
 }
})


const Token = mongoose.model("token",tokenSchema)

module.exports =  Token