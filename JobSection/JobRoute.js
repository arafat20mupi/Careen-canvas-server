const express = require('express');
const { getJobsByFlitterSearch, updateJobs, deleteJobs, createJobs , getJobs} = require('./JobControllers');



const router = express.Router();
// get All

router.get('/getJobs' , getJobs)

// get route
  router.get("/getJobsByFlitterSearch" ,getJobsByFlitterSearch)
//   post job
router.post('/createJobs',createJobs)
// update job
router.put("/updateJobs/:id", updateJobs)
//  delete job
 router.delete('/deleteJobs/:id',deleteJobs )
 module.exports=router
