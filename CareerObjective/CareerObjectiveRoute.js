const express = require('express');
const { createCareerObjective, getAllCareerObjectives, getCareerObjectiveById, updateCareerObjective, deleteCareerObjective } = require('./CareerObjectiveController');
const router = express.Router();

// Create a career objective
router.post('/CareerObjective', createCareerObjective);

// Get all career objectives
router.get('/CareerObjective', getAllCareerObjectives);

// Get a career objective by ID
router.get('/CareerObjective/:id', getCareerObjectiveById);

// Update a career objective by ID
router.put('/CareerObjective/:id', updateCareerObjective);

// Delete a career objective by ID
router.delete('/CareerObjective/:id', deleteCareerObjective);

module.exports = router;
