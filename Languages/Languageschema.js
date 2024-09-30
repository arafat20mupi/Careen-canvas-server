
const mongoose = require("mongoose");

const LanguagesSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  templateId: {
    type: String,
  },
  languages: [{ type: String }],
});
module.exports = mongoose.model("LanguagesSchema", LanguagesSchema);
