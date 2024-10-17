// controllers/formDataController.js
const FormData = require('./FormData');

// Create a new form data entry
exports.createFormData = async (req, res) => {
    const { userId, templateId, personalInfo, careerObjective, education, skills, projects, languages } = req.body;
    
    console.log(req.body);
  
    try {
      const newFormData = new FormData({
        userId,
        templateId: String(templateId), // Explicitly converting templateId to string
        personalInfo,
        careerObjective,
        education,
        skills,
        projects,
        languages,
      });
  
      await newFormData.save();
      res.status(201).json({ message: 'Form data created successfully', data: newFormData });
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
