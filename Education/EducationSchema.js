const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
       
      },
    templateId: {
        type: String,
        required: true,
       
      },
      education: [
        {
          degree: { type:String},
          institution:{ type:String} ,
          duration: { type:String} 
        }
      ]
});
module.exports = mongoose.model ("EducationSchema", EducationSchema);