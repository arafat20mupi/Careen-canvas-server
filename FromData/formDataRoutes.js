// routes/formData.js
const express = require('express');
const router = express.Router();
const formDataController = require('./formDataController');

// POST route to create new form data
router.post('/formdata', formDataController.createFormData);

// GET route to fetch data by userId
router.get('/formdata/:userId', formDataController.getFormDataByUserId);

module.exports = router;
