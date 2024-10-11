const express = require('express');
const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} = require('./ProjectsController');
const authMiddleware = require('../Middelware/Middleware');

const router = express.Router();

// Create a new project
router.post('/projects', createProject);

// Get All project
router.get('/projects', getAllProjects);


// Get a project by ID
router.get('/projects/:id/:templateId', getProjectById);

// Update a project by ID
router.put('/projects/:id/:templateId', updateProject);

// Delete a project by ID
router.delete('/projects/:id/:templateId', deleteProject);

module.exports = router;