const Title = require("./TitleSchema");

// Create a new title entry
exports.createTitle = async (req, res) => {
  try {
    const { userId, templateId, summary } = req.body;
    const newTitle = new Title({ userId, templateId, summary });
    await newTitle.save();
    res.status(201).json({ message: 'Title created successfully', title: newTitle });
  } catch (error) {
    res.status(500).json({ message: 'Error creating title', error });
  }
};

// Get all title entries
exports.getAllTitles = async (req, res) => {
  try {
    const titles = await Title.find();
    res.status(200).json(titles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching titles', error });
  }
};

// Get a specific title entry by ID
exports.getTitleById = async (req, res) => {
  try {
    const { id } = req.params;
    const title = await Title.findById(id);
    if (!title) {
      return res.status(404).json({ message: 'Title not found' });
    }
    res.status(200).json(title);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching title', error });
  }
};

// Update a title entry by ID
exports.updateTitle = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTitle = await Title.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedTitle) {
      return res.status(404).json({ message: 'Title not found' });
    }
    res.status(200).json({ message: 'Title updated successfully', title: updatedTitle });
  } catch (error) {
    res.status(500).json({ message: 'Error updating title', error });
  }
};

// Delete a title entry by ID
exports.deleteTitle = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTitle = await Title.findByIdAndDelete(id);
    if (!deletedTitle) {
      return res.status(404).json({ message: 'Title not found' });
    }
    res.status(200).json({ message: 'Title deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting title', error });
  }
};
