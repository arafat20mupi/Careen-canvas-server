const Title = require("./TitleSchema");


// Create a new title entry
exports.createTitle = async (req, res) => {
  try {
    const { userId, templateId, title } = req.body;

    // Check if the templateId already exists
    const existingTitle = await Title.findOne({ templateId });
    if (existingTitle) {
      return res.status(400).json({ message: 'This templateId is already in use' });
    }

    // If the templateId is unique, create a new title entry
    const newTitle = new Title({ userId, templateId, title });
    await newTitle.save();

    res.status(201).json({ message: 'Title created successfully', title: newTitle });
  } catch (error) {
    res.status(500).json({ message: 'Error creating title', error: error.message });
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


// Get a title entry by userId and templateId
exports.getTitleById = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Extract id and templateId from request params

    // Fetch the title using both userId and templateId
    const title = await Title.findOne({ userId: id, templateId });

    if (!title) {
      return res.status(404).json({ success: false, message: 'Title not found' });
    }

    res.status(200).json({ success: true, data: title });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching title', error: error.message });
  }
};

// Update a title entry by userId and templateId
exports.updateTitle = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Extract userId and templateId from request params

    // Find the title using both userId and templateId
    const updatedTitle = await Title.findOneAndUpdate(
      { userId: id, templateId },
      req.body,
      { new: true } // Return the updated document
    );

    if (!updatedTitle) {
      return res.status(404).json({ message: 'Title not found' });
    }

    res.status(200).json({ message: 'Title updated successfully', title: updatedTitle });
  } catch (error) {
    res.status(500).json({ message: 'Error updating title', error: error.message });
  }
};

// Delete a title entry by userId and templateId
exports.deleteTitle = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Extract userId and templateId from request params

    // Find and delete the title using both userId and templateId
    const deletedTitle = await Title.findOneAndDelete({ userId: id, templateId });

    if (!deletedTitle) {
      return res.status(404).json({ message: 'Title not found' });
    }

    res.status(200).json({ message: 'Title deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting title', error: error.message });
  }
};
