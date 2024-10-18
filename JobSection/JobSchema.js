const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    employmentType: {
      type: String,
      required: true,
    },
    salaryRange: {
      type: Number,
      required: true,
    },
    remoteOption: {
      type: String,
      required: true,
    },
    experience: {
      type:Number,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    longDescription: {
      type: String,
      required: true,
    },
    responsibilities: [
      {
        type: String,
      },
    ],
    requirements: [
      {
        type: String,
      },
    ],
    userId: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    skills: [
      {
        type: String,
      },
    ],

    applySection: {
      callToAction: {
        type: String,
        required: true,
      },
      applyLinkText: {
        type: String,
      },
      applyLink: {
        type: String,
      },
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", jobSchema);
