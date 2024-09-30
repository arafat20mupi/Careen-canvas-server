const CareerObjective = require("./careerObjectiveSchema");

// Create a new career objective
exports.createCareerObjective = async (req, res) => {
  try {
    const { careerObjective, templateId, title } = req.body;
    const newCareerObjective = new CareerObjective({ careerObjective, templateId, title });
    await newCareerObjective.save();
    res.status(201).json({ message: 'Career Objective created successfully', careerObjective: newCareerObjective });
  } catch (error) {
    res.status(500).json({ message: 'Error creating Career Objective', error });
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

// Get a specific career objective by ID
exports.getCareerObjectiveById = async (req, res) => {
  try {
    const { id } = req.params;
    const careerObjective = await CareerObjective.findById(id);
    if (!careerObjective) {
      return res.status(404).json({ message: 'Career Objective not found' });
    }
    res.status(200).json(careerObjective);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Career Objective', error });
  }
};

// Update a career objective by ID
exports.updateCareerObjective = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCareerObjective = await CareerObjective.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCareerObjective) {
      return res.status(404).json({ message: 'Career Objective not found' });
    }
    res.status(200).json({ message: 'Career Objective updated successfully', careerObjective: updatedCareerObjective });
  } catch (error) {
    res.status(500).json({ message: 'Error updating Career Objective', error });
  }
};

// Delete a career objective by ID
exports.deleteCareerObjective = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCareerObjective = await CareerObjective.findByIdAndDelete(id);
    if (!deletedCareerObjective) {
      return res.status(404).json({ message: 'Career Objective not found' });
    }
    res.status(200).json({ message: 'Career Objective deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Career Objective', error });
  }
};
