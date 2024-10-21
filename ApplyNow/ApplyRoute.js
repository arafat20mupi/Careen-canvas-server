// routes/formData.js
const express = require('express');
const router = express.Router();
const { applyForJob, getJobApplied } = require('./ApplyControllers')
// POST route to create new form data
router.post('/applyJob', applyForJob);

router.get('/job/appliedJob', getJobApplied);

router.get('/data'  ,async (req , res) =>{
    res.json({message: 'getJobApplied'})
} );

module.exports = router;
