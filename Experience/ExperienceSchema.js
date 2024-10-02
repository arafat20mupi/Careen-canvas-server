const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
       
      },
    templateId: {
        type: String,
        required: true,
       
      },

      experience: [
        {
          jobTitle: { type: String },
          company: { type: String },
          duration: { type: String },
          responsibilities: [{ type: String }] 
        }
      ]
});
module.exports = mongoose.model("ExperienceSchema", ExperienceSchema);