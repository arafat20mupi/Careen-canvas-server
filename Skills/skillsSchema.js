const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  templateId: {
    type: String,
    required: true,
  },
  skills: [
    {
      type: String,
    },
  ],
}, { timestamps: true });

const Skills = mongoose.model('Skills', skillsSchema);

module.exports = Skills;