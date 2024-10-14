
const express = require( "express");
const { CreateEducation, getEducations, updateEducation, deleteEducation } = require("./EducationController");
const authMiddleware = require("../Middelware/Middleware");
const router = express.Router();
//      post route
 router.post("/CreateEducation", CreateEducation)

// Get route for fetching all educations of a specific user and template
router.get("/educations/:id/:templateId", getEducations);

// Update route for updating a specific education entry by userId and templateId
router.patch("/educations/:id/:templateId", updateEducation);

// Delete route for deleting an education entry by userId and templateId
router.delete("/educations/:id/:templateId",  deleteEducation);

 module.exports=router