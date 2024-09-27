const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  features: {
    type: [String], 
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
    match: [/^https:\/\/github.com\/.+$/, 'Please enter a valid GitHub link'],
  },
  liveLink: {
    type: String,
    required: true,
    match: [/^https?:\/\/.+$/, 'Please enter a valid live link'],
  },
}, { timestamps: true });

const Projects = mongoose.model('Projects', projectSchema);

module.exports = Projects;
