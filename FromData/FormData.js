const mongoose = require('mongoose');

// Schema for education details
const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
});

// Schema for project details
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: false }, // Optional as not provided in the frontend data
});

// Main schema for form data
const formDataSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // User ID from AuthContext
  templateId: { type: String, required: true }, // Changed to Number as per frontend data
  personalInfo: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    website: { type: String, required: false }, // Optional
  },
  careerObjective: { type: String, required: true },
  education: [educationSchema], // Array of education objects
  skills: [{ type: String, required: true }], // Array of strings for skills
  projects: [projectSchema], // Array of project objects
  languages: [{ type: String, required: true }], // Assuming languages as a single string field
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the model
const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
