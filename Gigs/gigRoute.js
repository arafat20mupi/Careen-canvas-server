// routes/gigs.js
const express = require('express');
const multer = require('multer');
const {
    createGig,
    updateByProjectId,
    deleteById,
    getGigByProjectID,
    getAllGigsByFilter,

    approveGig
} = require('./gigController');

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


// Approve a gig by project ID
router.patch('/:projectId/approve', approveGig); // Approve a gig
module.exports = router;
