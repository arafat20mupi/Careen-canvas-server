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

// Get all awards
router.get('/awards', getAllAwards); 

// Get an award by ID
router.get('/awards/:id', getAwardById); 

// Update an award by ID
router.put('/awards/:id', updateAward); 

// Delete an award by ID
router.delete('/awards/:id', deleteAward); 

module.exports = router;
