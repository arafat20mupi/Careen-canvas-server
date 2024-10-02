const mongoose = require('mongoose');

const AwardsSchema = new mongoose.Schema({
  awards: [
    {
      title: {
        type: String,
      },
      year: {
        type: Number,
      },
      organization: {
        type: String,
      },
    },
  ],
  userId: {
    type: String,
    required: true,
  },
  templateId: {
    type: String,
    required: true,
  }
}, { timestamps: true }); 

const Award = mongoose.model('Award', AwardsSchema);

module.exports = Award;