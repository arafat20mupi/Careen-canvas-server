const express = require('express');
const { getJobsByFilterSearch, updateJobs, deleteJobs, createJobs, getJobs, saveJobs, getSaveJobsById } = require('./JobControllers');



const router = express.Router();
// get All

router.get('/getJobs', getJobs);

// get route
router.get("/getJobsByFlitterSearch", getJobsByFilterSearch)
//   post job
router.post('/createJobs', createJobs)
// update job
router.put("/updateJobs/:id", updateJobs)
//  delete job
router.delete('/deleteJobs/:id', deleteJobs)

// Save job
router.put("/saveJobs/:id", saveJobs)
// Get save jobs 
router.get('/getSavedJobs/:email', getSaveJobsById)

module.exports = router
