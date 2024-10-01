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
router.patch("/updateLanguages/:id ", updateLanguages);
//  delete route
router.delete("/deleteLanguages/:id", deleteLanguages);

module.exports = router;
