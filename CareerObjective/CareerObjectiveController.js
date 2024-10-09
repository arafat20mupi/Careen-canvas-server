const CareerObjective = require("./careerObjectiveSchema");

// Create a new career objective
exports.createCareerObjective = async (req, res) => {
  try {
    const { careerObjective, templateId, title, userId } = req.body;

    // Validate the input
    if (!careerObjective || !templateId || !userId) {
      return res.status(400).json({ message: 'careerObjective, templateId, and userId are required.' });
    }

    // Check if the templateId is already used in any career objective
    const existingCareerObjective = await CareerObjective.findOne({ templateId });
    if (existingCareerObjective) {
      return res.status(400).json({ message: 'This templateId is already in use' });
    }

    // Create the new career objective
    const newCareerObjective = new CareerObjective({ careerObjective, templateId, title, userId });
    await newCareerObjective.save();

    res.status(201).json({ message: 'Career Objective created successfully', careerObjective: newCareerObjective });
  } catch (error) {
    console.error('Error creating Career Objective:', error); // Log the error
    res.status(500).json({ message: 'Error creating Career Objective', error: error.message });
  }
};

// Get all career objectives
exports.getAllCareerObjectives = async (req, res) => {
  try {
    const careerObjectives = await CareerObjective.find();
    res.status(200).json(careerObjectives);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Career Objectives', error });
  }
};

// Get a specific career objective by userId and templateId
exports.getCareerObjectiveById = async (req, res) => {
  try {
    const { id, templateId } = req.params;

    const careerObjective = await CareerObjective.findOne({ userId: id, templateId });

    if (!careerObjective) {
      return res.status(404).json({ message: 'Career Objective not found' });
    }

    res.status(200).json(careerObjective);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Career Objective', error });
  }
};

// Update a career objective by userId and templateId
exports.updateCareerObjective = async (req, res) => {
  try {
    const { id, templateId } = req.params;

    const updatedCareerObjective = await CareerObjective.findOneAndUpdate(
      { userId: id, templateId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedCareerObjective) {
      return res.status(404).json({ message: 'Career Objective not found' });
    }

    res.status(200).json({ message: 'Career Objective updated successfully', careerObjective: updatedCareerObjective });
  } catch (error) {
    res.status(500).json({ message: 'Error updating Career Objective', error });
  }
};

// Delete a career objective by userId and templateId
exports.deleteCareerObjective = async (req, res) => {
  try {
    const { id, templateId } = req.params;

    const deletedCareerObjective = await CareerObjective.findOneAndDelete({ userId: id, templateId });

    if (!deletedCareerObjective) {
      return res.status(404).json({ message: 'Career Objective not found' });
    }

    res.status(200).json({ message: 'Career Objective deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Career Objective', error });
  }
};
