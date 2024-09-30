const express = require('express');
const { createContact, getAllContacts, getContactById, updateContact, deleteContact } = require('./ContactController');
const router = express.Router();

// Create a contact
router.post('/contacts', createContact);

// Get all contacts
router.get('/contacts', getAllContacts );

// Get a contact by ID
router.get('/contacts/:id', getContactById);

// Update a contact by ID
router.put('/contacts/:id', updateContact);

// Delete a contact by ID
router.delete('/contacts/:id', deleteContact);

module.exports = router;
