const ApplySchema = require("./ApplySchema");




// POST: Apply for a job
const applyForJob = async (req, res) => {
  try {
    // Extract data from the request body
    const { userId, name, email, phone, details, companyName, jobTitle } = req.body;

    // Basic validation (Ensure required fields are present)
    if (!name || !email || !phone || !details || !companyName || !jobTitle) {
      return res.status(400).json({ message: 'All required fields must be provided.' });
    }


    // Create a new application instance
    const newApplication = new ApplySchema({
      userId: userId,
      name: name,
      email: email,
      phone: phone,
      details: details,
      jobTitle: jobTitle,
      companyName: companyName,
      applicationDate: new Date(),
      status: 'pending'
    });

    await newApplication.save();
    console.log(newApplication);    // Send success response
    return res.status(201).json({ message: 'Application submitted successfully.', application: newApplication });

  } catch (error) {
    console.error('Error applying for job:', error);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

// Job Get 
const getJobApplied = async (req, res) => {
  try {
    // Fetching all jobs from the database
    const jobs = await ApplySchema.find();
    console.log(jobs);

    // Return the jobs with a 200 OK status
    return res.status(200).json(jobs);
  } catch (error) {
    console.error('Error retrieving jobs:', error);

    // Return a 500 status with an error message
    return res.status(500).json({ message: 'Failed to retrieve jobs. Please try again later.' });
  }
};

//  Job Application Put
const applicationPut = async (req, res) =>{

}

module.exports = { applyForJob, getJobApplied ,applicationPut };
