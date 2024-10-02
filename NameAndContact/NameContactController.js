//Done
const NameContact = require('./NameContactSchema');

// Create a new name contact entry
exports.createNameContact = async (req, res) => {
  try {
    const { name, contact, userId, templateId } = req.body;
  
  console.log(req.body)
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

// Get all name contact entries by userId and templateId
exports.getAllNameContacts = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from the request parameters

    // Find all name contacts matching the userId and templateId
    const nameContacts = await NameContact.find({ userId: id, templateId });

    if (!nameContacts || nameContacts.length === 0) {
      return res.status(404).json({ message: 'No name contacts found for this user and template' });
    }

    res.status(200).json(nameContacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching name contacts', error });
  }
};

// Get a specific name contact entry by userId and templateId
exports.getNameContactById = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get both userId and templateId from the request parameters

    // Use findOne to search by both userId and templateId
    const nameContact = await NameContact.findOne({ userId: id, templateId: templateId });

    if (!nameContact) {
      return res.status(404).json({ message: 'Name contact not found' });
    }

    res.status(200).json(nameContact);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching name contact', error });
  }
};


// Update a name contact entry by userId and templateId
exports.updateNameContact = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get the userId and templateId from request parameters

    // Use findOneAndUpdate to find the document by userId and templateId
    const updatedNameContact = await NameContact.findOneAndUpdate(
      { userId: id, templateId: templateId }, // Find by userId and templateId
      req.body, // Update with the request body
      { new: true, runValidators: true } // Options: return the updated document, run validators
    );

    if (!updatedNameContact) {
      return res.status(404).json({ message: 'Name contact not found' });
    }

    res.status(200).json({
      message: 'Name contact updated successfully',
      nameContact: updatedNameContact
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating name contact', error: error.message });
  }
};

// Delete a name contact entry by userId and templateId
exports.deleteNameContact = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from the request parameters

    // Find and delete the name contact based on userId and templateId
    const deletedNameContact = await NameContact.findOneAndDelete({ userId: id, templateId });

    if (!deletedNameContact) {
      return res.status(404).json({ message: 'Name contact not found' });
    }

    res.status(200).json({ message: 'Name contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting name contact', error });
  }
};