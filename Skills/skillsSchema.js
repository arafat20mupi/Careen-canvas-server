const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  templateId: {
    type: String,
  },
  skills: [
    {
      type: String,
    },
  ],
}, { timestamps: true });

const Skills = mongoose.model('Skills', skillsSchema);

module.exports = Skills;
