const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
       
      },
    templateId: {
        type: String,
       
      },
  degree: {
    type: String,
  },
  year: {
    type: Number,
  },
});
module.exports = ("EducationSchema", EducationSchema);
