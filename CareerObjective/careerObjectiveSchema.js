const mongoose = require('mongoose');

const careerObjectiveSchema = new mongoose.Schema({
  careerObjective: {
    type: String,
    required: true,
  },
  templateId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const CareerObjective = mongoose.model('CareerObjective', careerObjectiveSchema);

module.exports = CareerObjective;
