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
router.post('/titles', createTitle);

// Get all titles
router.get('/titles', getAllTitles);

// Get a title entry by ID
router.get('/titles/:id', getTitleById);

// Update a title entry by ID
router.put('/titles/:id', updateTitle);

// Delete a title entry by ID
router.delete('/titles/:id', deleteTitle);

module.exports = router;
