const express = require('express');
const {
  createNameContact,
  getAllNameContacts,
  getNameContactById,
  updateNameContact,
  deleteNameContact,
} = require('./NameContactController');

const router = express.Router();

// Create a new name contact entry
router.post('/name-contact', createNameContact);

// Get all name contact entries
router.get('/name-contact', getAllNameContacts);

// Get a specific name contact entry by ID
router.get('/name-contact/:id', getNameContactById);

// Update a name contact entry by ID
router.put('/name-contact/:id', updateNameContact);

// Delete a name contact entry by ID
router.delete('/name-contact/:id', deleteNameContact);

module.exports = router;
