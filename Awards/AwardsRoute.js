const express = require('express');
const {
  createAward,
  getAllAwards,
  getAwardById,
  updateAward,
  deleteAward,
} = require('./AwardsController');

const router = express.Router();

// Create a new award
router.post('/awards', createAward); 

// Get an award by userId and templateId
router.get('/awards/:id/:templateId', getAwardById); 

// Update an award by userId and templateId
router.put('/awards/:id/:templateId', updateAward); 

// Delete an award by userId and templateId
router.delete('/awards/:id/:templateId', deleteAward); 

module.exports = router;