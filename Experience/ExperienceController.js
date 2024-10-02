const ExperienceSchema=require('./ExperienceSchema')

// Create a new experience
exports.createExperience = async (req, res) => {
    try {
      const { userId, templateId, experience } = req.body;
        console.log(req.body);
      const newExperience = new ExperienceSchema({
        userId,
        templateId,
        experience
      });
  
       await newExperience.save();
      console.log(newExperience);
      res.status(201).json(newExperience);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

 // Get experience by userId and templateId
exports.getExperience = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from route parameters

    // Find all experience records matching the userId and templateId
    const experience = await ExperienceSchema.find({ userId: id, templateId });

    // Check if experience data exists
    if (!experience || experience.length === 0) {
      return res.status(404).json({ message: 'No experience records found for this user and template.' });
    }

    // Respond with the experience data
    res.status(200).json(experience);
  } catch (error) {
    // Handle any errors
    res.status(400).json({ error: error.message });
  }
};

// Update experience by userId and templateId
exports.updateExperienceById = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from route parameters
    const { experience } = req.body; // Get experience details from request body

    const updatedExperience = await ExperienceSchema.findOneAndUpdate(
      { userId: id, templateId }, // Find by userId and templateId
      { experience },
      { new: true, runValidators: true } // Return the updated document
    );

    if (!updatedExperience) {
      return res.status(404).json({ message: 'Experience not found for this user and template.' });
    }

    res.status(200).json(updatedExperience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete experience by userId and templateId
exports.deleteExperienceById = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from route parameters

    const deletedExperience = await ExperienceSchema.findOneAndDelete({ userId: id, templateId });

    if (!deletedExperience) {
      return res.status(404).json({ message: 'Experience not found for this user and template.' });
    }

    res.status(200).json({ message: 'Experience deleted successfully.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

  