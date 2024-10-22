const mongoose = require('mongoose');

const gigSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  userImage: {
    type: Buffer, // Store the user's image as a buffer
    required: true,
  },
  projectImages: [{
    type: Buffer, // Store multiple project images as buffers
    required: true,
  }],
  userName: {
    type: String,
    required: true,
  },
  userId: {
    type: String, // Reference to the user
    ref: 'User', // Assuming you have a User model
    required: true,
  },
  projectDetail: {
    type: String,
    required: true,
  },
  skills: [{ type: String }],
  date: {
    type: Date,
    default: Date.now, // Automatically set the current date
  },
  isApproved: {
    type: Boolean,
    default: false, // Default is not approved
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0, 
  },
  reviews: [{
    userId: {
      type: String, 
      required: true,
    },
    comment: {
      type: String, 
    },
    date: {
      type: Date,
      default: Date.now,
    },
  }],
  contactInfo: {
    email: {
      type: String, // Email for potential clients to contact the user
      required: true,
    },
    phone: {
      type: String, // Phone number for potential clients to contact the user
    },
  },
  faq: [{
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  }],
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

const Gig = mongoose.model('Gig', gigSchema);

module.exports = Gig;
