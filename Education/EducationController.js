const EducationSchema = require("./EducationSchema");

// Create new education record

exports.CreateEducation = async (req, res) => {
  // console.log(req.body)
  try {
    const { userId, templateId, education } = req.body;
    console.log(req.body);
    const newEducation = new EducationSchema({
      userId,
      templateId,
      education,
    });
    console.log(newEducation);
    await newEducation.save();
    res.status(200).json(newEducation);
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

// Get all education records for a specific user and template
exports.getEducations = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from the route parameters
    const educations = await EducationSchema.find({ userId: id, templateId: templateId }); // Query based on both userId and templateId

    if (educations.length === 0) {
      return res.status(404).json({ message: 'No education records found for this user and template.' });
    }

    return res.status(200).json(educations);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update a specific education record by userId and templateId
exports.updateEducation = async (req, res) => {
  const { id, templateId } = req.params; // Get userId and templateId from the route parameters
  const { educationIndex, education } = req.body; // Get educationIndex and education details from the request body

  try {
    // Find the user's education record using userId and templateId
    const userEducation = await EducationSchema.findOne({ userId: id, templateId: templateId });

    if (!userEducation) {
      return res.status(404).json({ message: "Education record not found for this user and template" });
    }

    // Check if the index is valid
    if (educationIndex < 0 || educationIndex >= userEducation.education.length) {
      return res.status(400).json({ message: "Invalid education index" });
    }

    // Update the specific education entry
    userEducation.education[educationIndex] = { ...userEducation.education[educationIndex], ...education };

    // Save the updated record
    await userEducation.save();

    return res.status(200).json({ message: "Education record updated successfully", education: userEducation.education });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error updating education record", error: error.message });
  }
};

// Delete an education record by userId and templateId
exports.deleteEducation = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from the route parameters

    // Find the education record using userId and templateId
    const deletedEducation = await EducationSchema.findOneAndDelete({ userId: id, templateId: templateId });

    if (!deletedEducation) {
      return res.status(404).json({ message: "Education record not found" });
    }

    return res.status(200).json({ message: "Education record deleted" });
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};