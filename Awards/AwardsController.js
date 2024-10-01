const Award = require("./AwardsSchema");

// Create a new award
exports.createAward = async (req, res) => {
  try {
    const { awards, userId, templateId } = req.body; // Expecting awards as an array
    if (!awards || !Array.isArray(awards)) {
      return res.status(400).json({ message: 'Awards must be an array' });
    }
    const newAward = new Award({ awards, userId, templateId });
    await newAward.save();
    res.status(201).json({ message: 'Award created successfully', award: newAward });
  } catch (error) {
    res.status(500).json({ message: 'Error creating award', error });
  }
};

// Get all awards
exports.getAllAwards = async (req, res) => {
  try {
    const awards = await Award.find().populate('userId', 'name email'); // Populate with user details if needed
    res.status(200).json(awards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching awards', error });
  }
};

// Get a specific award by ID
exports.getAwardById = async (req, res) => {
  try {
    const { id } = req.params;
    const award = await Award.findById(id).populate('userId', 'name email');
    if (!award) {
      return res.status(404).json({ message: 'Award not found' });
    }
    res.status(200).json(award);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching award', error });
  }
};

// Update an award by ID
exports.updateAward = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAward = await Award.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedAward) {
      return res.status(404).json({ message: 'Award not found' });
    }
    res.status(200).json({ message: 'Award updated successfully', award: updatedAward });
  } catch (error) {
    res.status(500).json({ message: 'Error updating award', error });
  }
};

// Delete an award by ID
exports.deleteAward = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAward = await Award.findByIdAndDelete(id);
    if (!deletedAward) {
      return res.status(404).json({ message: 'Award not found' });
    }
    res.status(200).json({ message: 'Award deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting award', error });
  }
};
