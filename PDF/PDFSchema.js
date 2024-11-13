

const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  }
});

const pdfSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  userEmail:{
    type: String,
    required: true
  },
  pdf: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved'],
    default: 'pending'
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  },
  feedback: {
    type: feedbackSchema,  // Embedded feedback schema
    default: null  // Default is no feedback
  },
});

const PDF = mongoose.model('PDF', pdfSchema);

module.exports = PDF;