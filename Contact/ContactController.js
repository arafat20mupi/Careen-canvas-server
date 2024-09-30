const Contact = require("./ContactSchema");

// Create a new contact
exports.createContact = async (req, res) => {
  try {
    const { userId, templateId, phone, email, website } = req.body;
    const newContact = new Contact({ userId, templateId, phone, email, website });
    await newContact.save();
    res.status(201).json({ message: 'Contact created successfully', contact: newContact });
  } catch (error) {
    res.status(500).json({ message: 'Error creating contact', error });
  }
};

// Get all contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().populate('userId', 'name email'); // Populate with user details if needed
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contacts', error });
  }
};

// Get a specific contact by ID
exports.getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id).populate('userId', 'name email');
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contact', error });
  }
};

// Update a contact by ID
exports.updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact updated successfully', contact: updatedContact });
  } catch (error) {
    res.status(500).json({ message: 'Error updating contact', error });
  }
};

// Delete a contact by ID
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting contact', error });
  }
};
