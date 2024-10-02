
const mongoose = require('mongoose');

const summarySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  templateId: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
  },
}, { timestamps: true });

const Summary = mongoose.model('summary', summarySchema);

module.exports = Summary;
