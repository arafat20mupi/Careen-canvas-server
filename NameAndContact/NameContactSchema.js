const mongoose = require('mongoose');

const nameContactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  contact: {
    phone: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    website: {
      type: String,
    },
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  templateId: {
    type: String,
  },
}, { timestamps: true });

const NameContact = mongoose.model('NameContact', nameContactSchema);

module.exports = NameContact;
