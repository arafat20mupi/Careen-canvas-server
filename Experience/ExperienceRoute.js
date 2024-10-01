const express = require("express");
const {
  createExperience,
  getExperience,
  updateExperienceById,
  deleteExperienceById,
} = require("./ExperienceController");

const router = express.Router();
//      post route
router.post("/createExperience", createExperience);
//     get route
router.get("/getExperience", getExperience);
//  update route
router.patch("/updateExperienceById/:id", updateExperienceById);
//  delete route
router.delete("/deleteExperienceById/:id", deleteExperienceById);

module.exports = router;
