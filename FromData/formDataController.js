// controllers/formDataController.js
const FormData = require('./FormData');

// Create a new form data entry
exports.createFormData = async (req, res) => {
  const { userId, templateId, personalInfo, careerObjective, education, skills, projects, languages } = req.body;
  
  console.log("User sending data", req.body);
  
  try {
    const newFormData = new FormData({
      userId,
      templateId: String(templateId),  // Explicitly convert templateId to string if needed
      personalInfo,
      careerObjective,
      education,
      skills,
      projects,
      languages: Array.isArray(languages) ? languages : [languages], // Ensure languages is an array
    });
    
    console.log(newFormData);
    
    // Save the new form data
    const savedFormData = await newFormData.save();
    
    // Respond with success
    res.status(201).json({ message: 'Form data created successfully', data: savedFormData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Retrieve form data by userId
exports.getFormDataByUserId = async (req, res) => {
  try {
    const formData = await FormData.find({ userId: req.params.userId });
    if (!formData) return res.status(404).json({ message: 'No form data found for this user' });
    res.json(formData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
