const express = require('express');
const {
  createSkills,
  getAllSkills,
  getSkillsById,
  updateSkills,
  deleteSkills,
} = require('./skillsController');

const router = express.Router();

// Create a new skills entry
router.post('/skills', createSkills);

// Get all skills
router.get('/skills', getAllSkills);

// Get a specific skills entry by ID
router.get('/skills/:id', getSkillsById);

// Update a skills entry by ID
router.put('/skills/:id', updateSkills);

// Delete a skills entry by ID
router.delete('/skills/:id', deleteSkills);

module.exports = router;
