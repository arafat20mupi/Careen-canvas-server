
// for  users  info
const mongoose= require("mongoose")
const UserSchemaMethod = require("./UserSchema Method")

 const UserSchema= new  mongoose.Schema({
     name:{
        type:String,
        required:true,

     },
     email:{
        type:String,
        required:true,
        unique:true

     },
     password:{
        type:String,
        required:true,

     },
     firebaseUid: {
      type: String,
      required: true,
      unique: true, 
    },
    role: {
      type: String,
      enum: ["user", "admin", ],
      default: "user", 
    },
   approvedProjects:{
      ids:[{type:String}]
   }
 },{
    timestamps:true
 })
 UserSchemaMethod(UserSchema)
  module.exports= mongoose.model('user',UserSchema)
