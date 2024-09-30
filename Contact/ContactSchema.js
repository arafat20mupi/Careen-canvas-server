const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  templateId: {
    type: String,
  },
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
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
