const Skills = require('./skillsSchema');

// Create a new skills entry
exports.createSkills = async (req, res) => {
  try {
    const { userId, templateId, skills } = req.body;

    if (!skills || !Array.isArray(skills)) {
      return res.status(400).json({ message: 'Skills must be an array' });
    }

    const newSkills = new Skills({ userId, templateId, skills });
    await newSkills.save();

    res.status(201).json({ message: 'Skills created successfully', skills: newSkills });
  } catch (error) {
    res.status(500).json({ message: 'Error creating skills', error });
  }
};

// Get all skills entries by userId and templateId
exports.getAllSkills = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from the request parameters

    // Find all skills matching the userId and templateId
    const skills = await Skills.find({ userId: id, templateId });

    if (!skills || skills.length === 0) {
      return res.status(404).json({ message: 'No skills found for this user and template' });
    }

    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching skills', error });
  }
};

// Get a specific skills entry by userId and templateId
exports.getSkillsById = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from the request parameters
    const skills = await Skills.findOne({ userId: id, templateId });

    if (!skills) {
      return res.status(404).json({ message: 'Skills not found' });
    }

    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching skills', error: error.message });
  }
};

// Update a skills entry by userId and templateId
exports.updateSkills = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from the request parameters
    const updatedSkills = await Skills.findOneAndUpdate(
      { userId: id, templateId }, // Find the skills document by userId and templateId
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedSkills) {
      return res.status(404).json({ message: 'Skills not found' });
    }

    res.status(200).json({ message: 'Skills updated successfully', skills: updatedSkills });
  } catch (error) {
    res.status(500).json({ message: 'Error updating skills', error: error.message });
  }
};

// Delete a skills entry by userId and templateId
exports.deleteSkills = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from the request parameters
    const deletedSkills = await Skills.findOneAndDelete({ userId: id, templateId });

    if (!deletedSkills) {
      return res.status(404).json({ message: 'Skills not found' });
    }

    res.status(200).json({ message: 'Skills deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting skills', error });
  }
};