const express = require("express");
const {
  createExperience,
  getExperienceByUserId,
  updateExperienceByUserId,
  deleteExperienceByUserId,
} = require("./ExperienceController");

const router = express.Router();
//      post route
router.post("/createExperience", createExperience);
//     get route
router.get("/getExperienceByUserId ", getExperienceByUserId);
//  update route
router.patch("/updateExperienceByUserId/:id ", updateExperienceByUserId);
//  delete route
router.delete("/deleteExperienceByUserId/:id", deleteExperienceByUserId);

module.exports = router;
