const mongoose = require("mongoose")
const ApplySchema = new mongoose.Schema({
  userId: { type: String, required: true }, 
  name: { type: String, required: true }, // Applicant's name
  email: { type: String, required: true }, // Applicant's email
  phone: { type: Number, required: true },
  details: { type: String, required: true },
  applicationDate: { type: Date, default: Date.now }, // Application date
  status: { type: String, default: 'pending' , enum: ['pending' , 'approve' , 'reject'] }, // Application status
  jobTitle: { type: String, required: true },
  companyName: { type: String, required: true },
});
module.exports = mongoose.model('Apply', ApplySchema)