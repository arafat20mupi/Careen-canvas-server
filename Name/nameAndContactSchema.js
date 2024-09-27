const mongoose = require('mongoose');

const nameAndContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  linkedIn: {
    type: String,
    required: true,
  },
  gitHub: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const NameAndContact = mongoose.model('NameAndContact', nameAndContactSchema);

module.exports = NameAndContact;
