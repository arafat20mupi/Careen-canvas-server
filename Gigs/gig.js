const mongoose = require('mongoose');

const gigSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  userImage: {
    type: Buffer,  // Store the user image as buffers
    required: true
  },
  projectImages: [{
    type: Buffer,  // Store multiple images as buffers
    required: true
  }],
  userName: {
    type: String,
    required: true
  },
  userId: {
    type:String,  // Reference to the user
    ref: 'User',  // Assuming you have a User model
    required: true
  },
  isApproved: {
    type: Boolean,
    default: false  // Default is not approved
  },
  projectDetail: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now  // Automatically set the current date
  }
});

const Gig = mongoose.model('Gig', gigSchema);

module.exports = Gig;
