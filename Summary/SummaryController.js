const Summary = require("./SummarySchema");

// Create a new summary
exports.createSummary = async (req, res) => {
  try {
    const { userId, templateId, summary } = req.body;
    const newSummary = await Summary.create({ userId, templateId, summary });
    res.status(201).json({ message: 'Summary created successfully', data: newSummary });
  } catch (error) {
    res.status(500).json({ message: 'Error creating summary', error: error.message });
  }
};

// Get all summaries
exports.getAllSummaries = async (req, res) => {
  try {
    const summaries = await Summary.find();
    res.status(200).json(summaries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching summaries', error: error.message });
  }
};

// Get a summary by ID
exports.getSummaryById = async (req, res) => {
  try {
    const { id } = req.params;
    const summary = await Summary.findById(id);
    if (!summary) {
      return res.status(404).json({ message: 'Summary not found' });
    }
    res.status(200).json(summary);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching summary', error: error.message });
  }
};

// Update a summary by ID
exports.updateSummary = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSummary = await Summary.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedSummary) {
      return res.status(404).json({ message: 'Summary not found' });
    }
    res.status(200).json({ message: 'Summary updated successfully', data: updatedSummary });
  } catch (error) {
    res.status(500).json({ message: 'Error updating summary', error: error.message });
  }
};

// Delete a summary by ID
exports.deleteSummary = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSummary = await Summary.findByIdAndDelete(id);
    if (!deletedSummary) {
      return res.status(404).json({ message: 'Summary not found' });
    }
    res.status(200).json({ message: 'Summary deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting summary', error: error.message });
  }
};
