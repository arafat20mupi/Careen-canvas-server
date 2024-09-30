const express = require('express');
const { createAward, getAllAwards, getAwardById, updateAward, deleteAward } = require('./AwardsController');
const router = express.Router();

// Create an award
router.post('/award', createAward);

// Get all awards
router.get('/award', getAllAwards);

// Get an award by ID
router.get('/award/:id', getAwardById);

// Update an award by ID
router.put('/award/:id', updateAward);

// Delete an award by ID
router.delete('/award/:id', deleteAward);

module.exports = router;
