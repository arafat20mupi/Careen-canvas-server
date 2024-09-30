const Skills = require("./skillsSchema");

// Create a new skills entry
exports.createSkills = async (req, res) => {
  try {
    const { skills } = req.body;
    const newSkills = new Skills({ skills });
    await newSkills.save();
    res.status(201).json({ message: 'Skills created successfully', skills: newSkills });
  } catch (error) {
    res.status(500).json({ message: 'Error creating skills', error });
  }
};

// Get all skills
exports.getAllSkills = async (req, res) => {
  try {
    const skillsList = await Skills.find();
    res.status(200).json(skillsList);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching skills', error });
  }
};

// Get a specific skills entry by ID
exports.getSkillsById = async (req, res) => {
  try {
    const { id } = req.params;
    const skills = await Skills.findById(id);
    if (!skills) {
      return res.status(404).json({ message: 'Skills not found' });
    }
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching skills', error });
  }
};

// Update a skills entry by ID
exports.updateSkills = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSkills = await Skills.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedSkills) {
      return res.status(404).json({ message: 'Skills not found' });
    }
    res.status(200).json({ message: 'Skills updated successfully', skills: updatedSkills });
  } catch (error) {
    res.status(500).json({ message: 'Error updating skills', error });
  }
};

// Delete a skills entry by ID
exports.deleteSkills = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSkills = await Skills.findByIdAndDelete(id);
    if (!deletedSkills) {
      return res.status(404).json({ message: 'Skills not found' });
    }
    res.status(200).json({ message: 'Skills deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting skills', error });
  }
};
