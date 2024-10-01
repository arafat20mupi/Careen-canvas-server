const mongoose = require('mongoose');

const careerObjectiveSchema = new mongoose.Schema({
  careerObjective: {
    type: String,
    required: true,
  },
  templateId: {
    type: String,
  },
  title: {
    type: String
  }
}, { timestamps: true });

const CareerObjective = mongoose.model('CareerObjective', careerObjectiveSchema);

module.exports = CareerObjective;
