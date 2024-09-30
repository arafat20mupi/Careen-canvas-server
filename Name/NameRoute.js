const express = require('express');
const { 
  createName, 
  getAllNames, 
  getNameById, 
  updateName, 
  deleteName 
} = require('./NameController'); // Adjust the path as necessary

const router = express.Router();

// Create a name
router.post('/names', createName);

// Get all names
router.get('/names', getAllNames);

// Get a name by ID
router.get('/names/:id', getNameById);

// Update a name by ID
router.put('/names/:id', updateName);

// Delete a name by ID
router.delete('/names/:id', deleteName);

module.exports = router;
