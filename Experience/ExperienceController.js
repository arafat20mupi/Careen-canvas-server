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
  exports.getExperience = async (req, res) => {
    try {
      // Retrieve all experience records
      const experience = await ExperienceSchema.find();
  
      // Check if experience data exists
      if (!experience || experience.length === 0) {
        return res.status(404).json({ message: 'No experience records found.' });
      }
  
      // Respond with the experience data
      res.status(200).json(experience);
    } catch (error) {
      // Handle any errors
      res.status(400).json({ error: error.message });
    }
  };
  
  // Update experience by user ID
exports.updateExperienceById = async (req, res) => {
    try {
      const { id } = req.params;
      const { experience, templateId } = req.body;
      console.log(req.body);
  
      const updatedExperience = await ExperienceSchema.findOneAndUpdate(
    { _id: id},
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
exports.deleteExperienceById = async (req, res) => {
    try {
      const { _id } = req.params;
  
      const deletedExperience = await ExperienceSchema.findOneAndDelete( _id);
  
      if (!deletedExperience) {
        return res.status(404).json({ message: 'Experience not found for this user.' });
      }
  
      res.status(200).json({ message: 'Experience deleted successfully.' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  