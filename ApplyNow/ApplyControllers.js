const JobSchema = require("../JobSection/JobSchema");
const UserSchema = require("../User/UserSchema");
const ApplySchema = require("./ApplySchema");




// POST: Apply for a job
const applyForJob = async (req, res) => {
  try {
    // Extract data from the request body
    const { userId, jobId, name, email, } = req.body;

    // Basic validation (Ensure required fields are present)
    if (!name || !email || !phone || !jobId) {
      return res.status(400).json({ message: 'All required fields must be provided.' });
    }

    // Optional: Check if the job exists
    const job = await JobSchema.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found.' });
    }

    // Optional: Check if the user exists (if logged in user)
    const user = await UserSchema.findById(userId);
    if (userId && !user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Create a new application instance
    const newApplication = new ApplySchema({
      userId: userId || null, // If user is logged in, use their userId
      jobId: jobId,
      name: name,
      email: email,
      applicationDate: new Date(),
      status: 'pending' // Default status when application is submitted
    });

    // Save the application to the database
    await newApplication.save();

    // Optional: Send confirmation email (Nodemailer can be used here)
    // Example: await sendConfirmationEmail(email, job.title);

    // Send success response
    return res.status(201).json({ message: 'Application submitted successfully.', application: newApplication });

  } catch (error) {
    console.error('Error applying for job:', error);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

module.exports = { applyForJob };
