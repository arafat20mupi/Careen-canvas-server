const express = require('express');
const { 
  createCareerObjective, 
  getAllCareerObjectives, 
  getCareerObjectiveById, 
  updateCareerObjective, 
  deleteCareerObjective 
} = require('./CareerObjectiveController');

const router = express.Router();

// Create a career objective
router.post('/CareerObjective', createCareerObjective);

// Get a career objective by userId and templateId
router.get('/CareerObjective/:id/:templateId', getCareerObjectiveById);

// Update a career objective by userId and templateId
router.put('/CareerObjective/:id/:templateId', updateCareerObjective);

// Delete a career objective by userId and templateId
router.delete('/CareerObjective/:id/:templateId', deleteCareerObjective);

module.exports = router;
