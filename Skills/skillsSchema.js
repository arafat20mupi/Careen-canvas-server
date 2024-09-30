const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
  skills: {
    type: [String], 
  },
}, { timestamps: true });

const Skills = mongoose.model('Skills', skillsSchema);

module.exports = Skills;
