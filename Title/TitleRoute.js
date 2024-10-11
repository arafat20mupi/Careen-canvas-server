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

// Get a title entry by userId and templateId
router.get('/title/:id/:templateId', getTitleById);

// Update a title entry by userId and templateId
router.put('/title/:id/:templateId', updateTitle);

// Delete a title entry by userId and templateId
router.delete('/title/:id/:templateId', deleteTitle);

module.exports = router;
