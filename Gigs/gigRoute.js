// routes/gigs.js
const express = require('express');
const multer = require('multer');
const {
    createGig,
    updateByProjectId,
    deleteById,
    getGigByProjectID,
    getAllGigsByFilter,

    approveGig,
    addReviewToGig,
    getAllReviewsForGig
} = require('./gigController');
const { adminCheck, authMiddleware } = require('../Middelware/Middleware');


const router = express.Router();
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage });

// Routes
router.get('/', getAllGigsByFilter);
router.get('/:projectId', getGigByProjectID);
router.post('/', upload.array('projectImages'), createGig);
/**
 Multer Middleware: upload.array('projectImages') tells Multer to expect an array of files under the key projectImages in the incoming request.
 */
router.put('/:projectId', upload.array('projectImages'), updateByProjectId);
router.delete('/:projectId', deleteById);

//review section
router.post('/gigs/:gigId/reviews', addReviewToGig);
router.get('/gigs/:gigId/reviews', getAllReviewsForGig);

// Approve a gig by project ID
router.patch('/:projectId/approve',authMiddleware,adminCheck, approveGig); // Approve a gig
module.exports = router;
