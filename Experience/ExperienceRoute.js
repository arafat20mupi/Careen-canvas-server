const express = require("express");
const {
  createExperience,
  getExperience,
  updateExperienceById,
  deleteExperienceById,
} = require("./ExperienceController");

const router = express.Router();
// post route
router.post("/createExperience", createExperience);
// get route
router.get("/getExperience/:id/:templateId", getExperience);
// update route
router.patch("/updateExperienceById/:id/:templateId", updateExperienceById);
// delete route
router.delete("/deleteExperienceById/:id/:templateId", deleteExperienceById);

module.exports = router;