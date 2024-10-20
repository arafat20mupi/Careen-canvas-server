const mongoose= require("mongoose")



const ApplySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User ID (reference)
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true }, // Job ID (reference)
    name: { type: String, required: true }, // Applicant's name
    email: { type: String, required: true }, // Applicant's email
    applicationDate: { type: Date, default: Date.now }, // Application date
    status: { type: String, default: 'pending' }, // Application status
   
  });
  module.exports= mongoose.model('Apply',ApplySchema)