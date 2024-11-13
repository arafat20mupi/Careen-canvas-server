const mongoose = require('mongoose');

const gigSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  userImage: {
    type: String, // Store URL from ImageBB
    required: true,
  },
  projectImages: [{
    type: String, // Store URLs from ImageBB
    required: true,
  }],
  userName: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    ref: 'User',
    required: true,
  },
  projectDetail: {
    type: String,
    required: true,
  },
  skills: [{ type: String }],
  date: {
    type: Date,
    default: Date.now,
  },
  isApproved: {
    type: Boolean,
    default: false,
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
      type: String,
      required: true,
    },
    phone: {
      type: String,
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
  timestamps: true,
});

const Gig = mongoose.model('Gig', gigSchema);

module.exports = Gig;
