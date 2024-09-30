const mongoose = require('mongoose');

const nameSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  templateId: {
    type: String,
  },
}, { timestamps: true });

const Name = mongoose.model('Name', nameSchema);

module.exports = Name;
