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
//     get route
router.get("/getLanguagesByUserId ", getLanguagesByUserId);
//  update route
router.patch("/updateLanguages ", updateLanguages);
//  delete route
router.delete("/deleteLanguages", deleteLanguages);

module.exports = router;
