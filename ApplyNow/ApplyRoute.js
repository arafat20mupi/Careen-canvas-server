// routes/formData.js
const express = require('express');
const router = express.Router();
const { applyForJob, getJobApplied , applicationPut} = require('./ApplyControllers')
// POST route to create new form data
router.post('/applyJob', applyForJob);

router.get('/appliedJob', getJobApplied);

router.put('/applicationPut/:id', applicationPut);

router.get('/data'  ,async (req , res) =>{
    res.json({message: 'getJobApplied'})
} );

module.exports = router;
