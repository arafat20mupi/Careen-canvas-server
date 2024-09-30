const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
       
      },
    templateId: {
        type: String,
       
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
