const mongoose = require('mongoose');

const titleSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  templateId: {
    type: String,
  },
  title: {
    type: String,
  },
}, { timestamps: true });

const Title = mongoose.model('Title', titleSchema);

module.exports = Title;
