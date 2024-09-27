const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
       
      },
    templateId: {
        type: String,
       
      },

    JobTitle : {
    type: String,
  },
  companyName:{
    type: String,
  },
  duration: {
    type: Number,
  },
});
module.exports = ("EducationSchema", ExperienceSchema);