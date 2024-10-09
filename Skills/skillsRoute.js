const express = require('express');
const {
  createSkills,
  getAllSkills,
  getSkillsById,
  updateSkills,
  deleteSkills,
} = require('./skillsController');
const authMiddleware = require('../Middelware/Middleware');

const router = express.Router();

// Create a new skills entry
router.post('/skills',createSkills);

// Get a specific skills entry by userId and templateId
router.get('/skills/:id/:templateId', getSkillsById);

// Update a skills entry by userId and templateId
router.put('/skills/:id/:templateId', updateSkills);

// Delete a skills entry by userId and templateId
router.delete('/skills/:id/:templateId', deleteSkills);

module.exports = router;