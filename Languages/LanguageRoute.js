const express = require("express");
const {
  createLanguage,
  getLanguagesByUserId,
  updateLanguages,
  deleteLanguages,
} = require("./LanguagesController");

const router = express.Router();
//      post route
router.post("/createLanguage", createLanguage);
// Get languages data by userId and templateId

router.get("/languages/:id/:templateId", getLanguagesByUserId);
// Update languages data for a user
router.patch("/languages/:id/:templateId", updateLanguages);

// Delete languages data for a user
router.delete("/languages/:id/:templateId", deleteLanguages);

module.exports = router;