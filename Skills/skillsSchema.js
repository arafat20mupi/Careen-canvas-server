const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
  skills: {
    type: [String], 
    required: true,
  },
}, { timestamps: true });

const Skills = mongoose.model('Skills', skillsSchema);

module.exports = Skills;
