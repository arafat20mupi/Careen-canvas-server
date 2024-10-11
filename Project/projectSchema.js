const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projects: [
    {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
    }
  ]
  ,
  userId: {
    type: String,
    required: true,
  },
  templateId: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Projects = mongoose.model('Projects', projectSchema);

module.exports = Projects;