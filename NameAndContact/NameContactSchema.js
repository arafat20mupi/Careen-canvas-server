const { string } = require('joi');
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
    type: String,
    required: true,
    
  },
  templateId: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const NameContact = mongoose.model('NameContact', nameContactSchema);

module.exports = NameContact;