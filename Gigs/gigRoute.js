const express = require('express');
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
const { authMiddleware, adminCheck } = require('../Middleware/Middleware');

const router = express.Router();

// Routes
router.get('/', getAllGigsByFilter);
router.get('/gig', getGigByProjectID);
router.post('/gigs', createGig); // Creating a gig
router.put('/:projectId', updateByProjectId); // Updating a gig
router.delete('/:projectId', deleteById); // Deleting a gig

// Review section
router.post('/gigs/:gigId/reviews', addReviewToGig); // Add a review
router.get('/gigs/:gigId/reviews', getAllReviewsForGig); // Get reviews

// Approve a gig by project ID (requires admin access)
router.patch('/:projectId/approve', authMiddleware, adminCheck, approveGig);

module.exports = router;
