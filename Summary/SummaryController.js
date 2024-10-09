const Summary = require("./SummarySchema");

exports.createSummary = async (req, res) => {
  try {
    const { userId, templateId, summary } = req.body;

    // Check if the templateId already exists for the given user
    const existingSummary = await Summary.findOne({ userId, templateId });
    if (existingSummary) {
      return res.status(400).json({ success: false, message: 'This templateId is already in use' });
    }

    // Create a new summary
    const newSummary = await Summary.create({ userId, templateId, summary });
    res.status(201).json({ success: true, message: 'Summary created successfully', data: newSummary });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating summary', error: error.message });
  }
};


// Get all summaries
exports.getAllSummaries = async (req, res) => {
  try {
    const summaries = await Summary.find();
    res.status(200).json({ success: true, data: summaries });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching summaries', error: error.message });
  }
};


// Get a summary entry by userId and templateId
exports.getSummaryById = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Extract id and templateId from request params

    // Fetch the summary using both userId and templateId
    const summary = await Summary.findOne({ userId: id, templateId });

    if (!summary) {
      return res.status(404).json({ success: false, message: 'Summary not found' });
    }

    res.status(200).json({ success: true, data: summary });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching summary', error: error.message });
  }
};

exports.getSummaryById = async (req, res) => {
  try {
    const { id, templateId } = req.params;
    const summary = await Summary.findOne({ userId: id, templateId });

    if (!summary) {
      return res.status(404).json({ success: false, message: 'Summary not found' });
    }

    res.status(200).json({ success: true, data: summary });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching summary', error: error.message });
  }
};


// Update a summary by userId and templateId
exports.updateSummary = async (req, res) => {
  try {
    const { id, templateId } = req.params;
    const updatedSummary = await Summary.findOneAndUpdate(
      { userId: id, templateId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedSummary) {
      return res.status(404).json({ success: false, message: 'Summary not found' });
    }

    res.status(200).json({ success: true, message: 'Summary updated successfully', data: updatedSummary });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating summary', error: error.message });
  }
};

// Delete a summary by userId and templateId
exports.deleteSummary = async (req, res) => {
  try {
    const { id, templateId } = req.params;
    const deletedSummary = await Summary.findOneAndDelete({ userId: id, templateId });

    if (!deletedSummary) {
      return res.status(404).json({ success: false, message: 'Summary not found' });
    }

    res.status(200).json({ success: true, message: 'Summary deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting summary', error: error.message });
  }
};

