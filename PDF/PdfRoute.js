const express = require('express');

const multer = require('multer');
const { postPdf, getPdf, giveFeedback, getFeedback,getPdfByEmail } = require('./PdfControllers');
const { authMiddleware } = require('../Middleware/Middleware');
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
router.post('/upload', authMiddleware, upload.single('pdf'), postPdf);

// Get All Resume

router.get('/resumes', getPdf);

// Get PDFs associated with a specific user email
router.get('/resumes/:email', getPdfByEmail);


// PUT route for giving feedback on a PDF
router.put('/feedback/:id', giveFeedback);

// GET route for fetching feedback on a PDF
router.get('/feedback/:email', getFeedback);

module.exports = router;

