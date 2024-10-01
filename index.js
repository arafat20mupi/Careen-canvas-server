const express = require("express");
const app = express();
const cors = require('cors');
const UserRoute=require('./User/UserRoute')
const educationRoute=require('./Education/EducationRoute')
const LanguageRoute=require("./Languages/LanguageRoute")
 const ExperienceRoute=require("./Experience/ExperienceRoute")
const connectDB=require("./Config/dbConfig")
 
require("dotenv").config();
connectDB()
// Middleware
app.use(cors());
app.use(express.json());
//  Home route
app.get("/", (req, res) => {
  res.send("hello Developer");
});

// user route
app.use("/api/users",UserRoute )
// education
app.use("/api/education",educationRoute )
// language
app.use("/api/language",LanguageRoute )
// experience
app.use("/api/Experience",ExperienceRoute )
// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});