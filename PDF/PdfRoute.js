const express = require('express');

const multer = require('multer');
const { postPdf, getPdfById, giveFeedback, getFeedback } = require('./PdfControllers');
const upload = multer({ dest: 'uploads/' }); // Adjust destination as needed
const router = express.Router();

// POST route for uploading a PDF
router.post('/upload', upload.single('pdf'), postPdf);

// GET route for fetching a PDF by ID
router.get('/:id', getPdfById);

// PUT route for giving feedback on a PDF
router.put('/feedback/:id', giveFeedback);

// GET route for fetching feedback on a PDF
router.get('/feedback/:id', getFeedback);

module.exports = router;

