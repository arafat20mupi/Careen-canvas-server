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

  // Get experience by user ID
exports.getExperienceByUserId  = async (req, res) => {
    try {
      const { userId } = req.params;
      const experience = await Experience.findOne({ userId });
  
      if (!experience) {
        return res.status(404).json({ message: 'Experience not found for this user.' });
      }
  
      res.status(200).json(experience);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  // Update experience by user ID
exports.updateExperienceByUserId = async (req, res) => {
    try {
      const { userId } = req.params;
      const { experience, templateId } = req.body;
      console.log(req.body);
  
      const updatedExperience = await Experience.findOneAndUpdate(
        { userId },
        { experience, templateId },
        { new: true } 
      );
  
      if (!updatedExperience) {
        return res.status(404).json({ message: 'Experience not found for this user.' });
      }
  
      res.status(200).json(updatedExperience);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  // Delete experience by user ID
exports.deleteExperienceByUserId = async (req, res) => {
    try {
      const { userId } = req.params;
  
      const deletedExperience = await Experience.findOneAndDelete({ userId });
  
      if (!deletedExperience) {
        return res.status(404).json({ message: 'Experience not found for this user.' });
      }
  
      res.status(200).json({ message: 'Experience deleted successfully.' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  