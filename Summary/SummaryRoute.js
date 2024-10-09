const express = require('express');
const {
  createSummary,
  getAllSummaries,
  getSummaryById,
  updateSummary,
  deleteSummary
} = require('./SummaryController');

const router = express.Router();

// Create a summary
router.post('/summaries', createSummary);

// Get all summaries
router.get('/summaries', getAllSummaries);

// Get a summary by ID
router.get('/summaries/:id/:templateId', getSummaryById); 

// Update a summary by ID
router.put('/summaries/:id/:templateId', updateSummary); 

// Delete a summary by ID
router.delete('/summaries/:id/:templateId', deleteSummary); 

module.exports = router;
