const express = require('express');
const { createCareerObjective, getAllCareerObjectives, getCareerObjectiveById, updateCareerObjective, deleteCareerObjective } = require('./CareerObjectiveController');
const authMiddleware = require('../Middelware/Middleware');
const router = express.Router();

// Create a career objective
router.post('/CareerObjective',authMiddleware, createCareerObjective);

// Get a career objective by userId and templateId
router.get('/CareerObjective/:id/:templateId', getCareerObjectiveById);

// Update a career objective by userId and templateId
router.put('/CareerObjective/:id/:templateId',authMiddleware, updateCareerObjective);

// Delete a career objective by userId and templateId
router.delete('/CareerObjective/:id/:templateId',authMiddleware, deleteCareerObjective);

module.exports = router;