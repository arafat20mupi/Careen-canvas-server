

const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  pdf: {
    type: String,  
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

const PDF = mongoose.model('PDF', pdfSchema);

module.exports = PDF;