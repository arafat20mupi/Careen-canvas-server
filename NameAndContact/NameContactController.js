const NameContact = require('./NameContactSchema');

// Create a new name contact entry
exports.createNameContact = async (req, res) => {
  try {
    const { name, contact, userId, templateId } = req.body;

    if (!contact || typeof contact !== 'object') {
      return res.status(400).json({ message: 'Contact information must be an object' });
    }

    const newNameContact = new NameContact({ name, contact, userId, templateId });
    await newNameContact.save();

    res.status(201).json({ message: 'Name contact created successfully', nameContact: newNameContact });
  } catch (error) {
    res.status(500).json({ message: 'Error creating name contact', error });
  }
};

// Get all name contact entries
exports.getAllNameContacts = async (req, res) => {
  try {
    const nameContacts = await NameContact.find().populate('userId', 'name email');
    res.status(200).json(nameContacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching name contacts', error });
  }
};

// Get a specific name contact entry by ID
exports.getNameContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const nameContact = await NameContact.findById(id).populate('userId', 'name email');
    if (!nameContact) {
      return res.status(404).json({ message: 'Name contact not found' });
    }
    res.status(200).json(nameContact);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching name contact', error });
  }
};

// Update a name contact entry by ID
exports.updateNameContact = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedNameContact = await NameContact.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedNameContact) {
      return res.status(404).json({ message: 'Name contact not found' });
    }
    res.status(200).json({ message: 'Name contact updated successfully', nameContact: updatedNameContact });
  } catch (error) {
    res.status(500).json({ message: 'Error updating name contact', error });
  }
};

// Delete a name contact entry by ID
exports.deleteNameContact = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNameContact = await NameContact.findByIdAndDelete(id);
    if (!deletedNameContact) {
      return res.status(404).json({ message: 'Name contact not found' });
    }
    res.status(200).json({ message: 'Name contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting name contact', error });
  }
};
