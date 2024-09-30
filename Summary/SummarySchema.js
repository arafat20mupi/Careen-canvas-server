const mongoose = require('mongoose');

const summarySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  templateId: {
    type: String,
  },
  summary: {
    type: String,
  },
}, { timestamps: true });

const Summary = mongoose.model('summary', summarySchema);

module.exports = Summary;
