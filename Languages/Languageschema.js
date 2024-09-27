


const mongoose = require("mongoose");

const LanguagesSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
       
      },
    templateId: {
        type: String,
       
      },
   title:{
    type:String
   }
});
module.exports = ("EducationSchema", LanguagesSchema);