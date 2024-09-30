const Name = require("./NameSchema");

// Create a new name entry
exports.createName = async (req, res) => {
  try {
    const { name, userId, templateId } = req.body;
    const newName = new Name({ name, userId, templateId });
    await newName.save();
    res.status(201).json({ message: 'Name created successfully', name: newName });
  } catch (error) {
    res.status(500).json({ message: 'Error creating name', error });
  }
};

// Get all names
exports.getAllNames = async (req, res) => {
  try {
    const names = await Name.find().populate('userId', 'name email'); // Populate with user details if needed
    res.status(200).json(names);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching names', error });
  }
};

// Get a specific name by ID
exports.getNameById = async (req, res) => {
  try {
    const { id } = req.params;
    const name = await Name.findById(id).populate('userId', 'name email');
    if (!name) {
      return res.status(404).json({ message: 'Name not found' });
    }
    res.status(200).json(name);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching name', error });
  }
};

// Update a name by ID
exports.updateName = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedName = await Name.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedName) {
      return res.status(404).json({ message: 'Name not found' });
    }
    res.status(200).json({ message: 'Name updated successfully', name: updatedName });
  } catch (error) {
    res.status(500).json({ message: 'Error updating name', error });
  }
};

// Delete a name by ID
exports.deleteName = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedName = await Name.findByIdAndDelete(id);
    if (!deletedName) {
      return res.status(404).json({ message: 'Name not found' });
    }
    res.status(200).json({ message: 'Name deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting name', error });
  }
};
