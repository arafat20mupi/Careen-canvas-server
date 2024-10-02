
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
router.get('/all-name-contact/:id/:templateId', getAllNameContacts);

// Get a specific name contact entry by ID
router.get('/name-contact/:id/:templateId', getNameContactById);

// Update a name contact entry by ID
router.put('/name-contact/:id/:templateId', updateNameContact);

// Delete a name contact entry by ID
router.delete('/name-contact/:id:templateId', deleteNameContact);

module.exports = router;
