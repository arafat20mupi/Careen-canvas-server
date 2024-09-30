const mongoose = require('mongoose');

const AwardsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  templateId: {
    type: String,
  }
});

const Award = mongoose.model('Award', AwardsSchema);

module.exports = Award;
