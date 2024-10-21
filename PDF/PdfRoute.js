const express = require('express');

const multer = require('multer');
const { postPdf,getPdf, getPdfById, giveFeedback, getFeedback } = require('./PdfControllers');
const { authMiddleware } = require('../Middelware/Middleware');
const router = express.Router();

// Set up multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Files will be saved in the 'uploads' directory
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Save files with a unique name (timestamp + original name)
    }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// POST route for uploading a PDF
router.post('/upload',authMiddleware, upload.single('pdf'), postPdf);

// Get All Resume

router.get('/resumes', getPdf);

// GET route for fetching a PDF by ID
router.get('/:id', getPdfById);

// PUT route for giving feedback on a PDF
router.put('/feedback/:id', giveFeedback);

// GET route for fetching feedback on a PDF
router.get('/feedback/:id', getFeedback);

module.exports = router;

