
const express = require("express");
const { CreateEducation, getEducations, updateEducation, deleteEducation } = require("./EducationController");
const router = express.Router();
//      post route
 router.post("/CreateEducation", CreateEducation)
//     get route
 router.get("getEducations", getEducations)
//  update route
router.patch("/updateEducation",updateEducation)
//  delete route
router. delete("/deleteEducation",deleteEducation)
