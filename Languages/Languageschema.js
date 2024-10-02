
const mongoose = require("mongoose");

const LanguagesSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  templateId: {
    type: String,
    required: true,
  },
  languages: [{ type: String }],
});
module.exports = mongoose.model("LanguagesSchema", LanguagesSchema);