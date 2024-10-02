const express = require('express');
const {
  createTitle,
  getAllTitles,
  getTitleById,
  updateTitle,
  deleteTitle
} = require('./TitleController'); 

const router = express.Router();

// Create a title entry
router.post('/title', createTitle);

// Get all titles
router.get('/title', getAllTitles);

// Get a title entry by ID
router.get('/title/:id', getTitleById);

// Update a title entry by ID
router.put('/title/:id', updateTitle);

// Delete a title entry by ID
router.delete('/title/:id', deleteTitle);

module.exports = router;